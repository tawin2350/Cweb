// State Management
let stats = JSON.parse(localStorage.getItem('cLearningStats')) || {
  codeRuns: 0
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initPlayground();
});

// Playground with Interactive Terminal
function initPlayground() {
  const editor = ace.edit('code-editor');
  editor.setTheme('ace/theme/tomorrow_night');
  editor.session.setMode('ace/mode/c_cpp');
  editor.setOptions({
    fontSize: '14px',
    showPrintMargin: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
  });
  
  // Set default code
  const defaultCode = `#include <stdio.h>

int main() {
    char name[50];
    int age;
    
    printf("What's your name? ");
    scanf("%s", name);
    
    printf("How old are you? ");
    scanf("%d", &age);
    
    printf("\\nHello %s! You are %d years old.\\n", name, age);
    
    return 0;
}`;
  
  editor.setValue(defaultCode, -1);
  
  // Initialize xterm.js terminal
  const term = new Terminal({
    cursorBlink: true,
    fontSize: 14,
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    theme: {
      background: '#000000',
      foreground: '#ffffff',
      cursor: '#ffffff',
      selection: '#555555'
    },
    cols: 80,
    rows: 24
  });
  
  term.open(document.getElementById('terminal'));
  term.writeln('กดรันโค้ดเพื่อเริ่มต้นใช้งานเทอร์มินัลจำลองสำหรับ C');
  term.writeln('');
  
  let currentInput = '';
  let inputCallback = null;
  
  // Handle terminal input
  term.onData(data => {
    if (!inputCallback) return;
    
    if (data === '\r') { // Enter key
      term.writeln('');
      const input = currentInput;
      currentInput = '';
      if (inputCallback) {
        inputCallback(input);
        inputCallback = null;
      }
    } else if (data === '\u007F') { // Backspace
      if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        term.write('\b \b');
      }
    } else if (data >= ' ') { // Printable characters
      currentInput += data;
      term.write(data);
    }
  });
  
  // Run button handler - Interactive Terminal Simulation
  document.getElementById('run-code').addEventListener('click', async () => {
    const code = editor.getValue();
    const runBtn = document.getElementById('run-code');
    
    runBtn.disabled = true;
    runBtn.textContent = '⏳ Compiling...';
    
    term.clear();
    term.writeln('🔨 Compiling C code...');
    
    try {
      // Check if code uses scanf
      const hasScanf = code.includes('scanf');
      const scanfCount = (code.match(/scanf/g) || []).length;
      
      if (hasScanf) {
        // Interactive mode - run with real-time I/O simulation
        await runInteractiveMode(code, scanfCount, term, runBtn);
      } else {
        // Non-interactive mode - simple run
        await runSimpleMode(code, term, runBtn);
      }
      
      stats.codeRuns++;
      saveStats();
      
    } catch (error) {
      term.writeln('\x1b[31m❌ Error: ' + error.message + '\x1b[0m');
      term.writeln('Please check your internet connection and try again.');
      runBtn.disabled = false;
      runBtn.textContent = '▶ Run';
    }
  });
  
  // Interactive mode - simulate real terminal behavior
  async function runInteractiveMode(code, scanfCount, term, runBtn) {
    term.writeln('\x1b[32m✓ Compilation successful!\x1b[0m');
    term.writeln('--- Running Program ---');
    term.writeln('');
    
    // Parse printf/scanf from code to extract prompts
    const prompts = extractPrompts(code);
    const userInputs = [];
    
    // Collect inputs interactively
    for (let i = 0; i < scanfCount; i++) {
      const prompt = prompts[i] || `Input ${i + 1}: `;
      term.write(prompt);
      
      const input = await new Promise(resolve => {
        let lineInput = '';
        
        const onDataHandler = term.onData(data => {
          if (data === '\r') {
            term.writeln('');
            onDataHandler.dispose();
            resolve(lineInput);
          } else if (data === '\u007F') {
            if (lineInput.length > 0) {
              lineInput = lineInput.slice(0, -1);
              term.write('\b \b');
            }
          } else if (data >= ' ') {
            lineInput += data;
            term.write(data);
          }
        });
      });
      
      userInputs.push(input);
    }
    
    // Now run with collected inputs
    term.writeln('');
    term.writeln('\x1b[90m[Processing...]\x1b[0m');
    term.writeln('');
    
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: 'c',
        version: '10.2.0',
        files: [{ name: 'main.c', content: code }],
        stdin: userInputs.join('\n')
      })
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const result = await response.json();
    
    if (result.compile && result.compile.output) {
      term.writeln('\x1b[31m=== Compilation Error ===\x1b[0m');
      term.writeln(result.compile.output);
    } else if (result.run) {
      // Display output with simulation
      await displayOutputInteractive(result.run.output, prompts, userInputs, term);
      
      if (result.run.stderr) {
        term.writeln('\x1b[31m' + result.run.stderr + '\x1b[0m');
      }
    }
    
    runBtn.disabled = false;
    runBtn.textContent = '▶ Run';
  }
  
  // Simple mode - no input required
  async function runSimpleMode(code, term, runBtn) {
    term.writeln('\x1b[32m✓ Compilation successful!\x1b[0m');
    term.writeln('--- Running Program ---');
    term.writeln('');
    
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        language: 'c',
        version: '10.2.0',
        files: [{ name: 'main.c', content: code }],
        stdin: ''
      })
    });
    
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const result = await response.json();
    
    if (result.compile && result.compile.output) {
      term.writeln('\x1b[31m=== Compilation Error ===\x1b[0m');
      term.writeln(result.compile.output);
    } else if (result.run) {
      if (result.run.output) {
        term.writeln(result.run.output);
      }
      if (result.run.stderr) {
        term.writeln('\x1b[31m' + result.run.stderr + '\x1b[0m');
      }
      if (!result.run.output && !result.run.stderr) {
        term.writeln('\x1b[90m(No output)\x1b[0m');
      }
    }
    
    runBtn.disabled = false;
    runBtn.textContent = '▶ Run';
  }
  
  // Extract printf prompts from code
  function extractPrompts(code) {
    const prompts = [];
    const printfRegex = /printf\s*\(\s*"([^"]+)"/g;
    let match;
    
    while ((match = printfRegex.exec(code)) !== null) {
      const text = match[1];
      // Check if this printf comes before scanf (is a prompt)
      const beforeScanf = code.indexOf('scanf', match.index) > match.index;
      if (beforeScanf && !text.includes('\\n') && text.trim()) {
        // Clean up the prompt text
        prompts.push(text.replace(/\\n/g, '').replace(/:/g, ': '));
      }
    }
    
    return prompts;
  }
  
  // Display output with interactive simulation
  async function displayOutputInteractive(output, prompts, userInputs, term) {
    if (!output) {
      term.writeln('\x1b[90m(No output)\x1b[0m');
      return;
    }
    
    const lines = output.split('\n');
    
    for (const line of lines) {
      // Check if this line is a prompt that we already handled
      const isPrompt = prompts.some(p => line.includes(p.replace(': ', '')));
      
      if (!isPrompt && line.trim()) {
        // Only show non-prompt output (actual results)
        term.writeln(line);
      } else if (!isPrompt && !line.trim()) {
        // Keep empty lines that aren't prompts
        term.writeln('');
      }
      // Skip prompts since we already showed them during input
      
      // Small delay for visual effect
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }
}

function saveStats() {
  localStorage.setItem('cLearningStats', JSON.stringify(stats));
}
