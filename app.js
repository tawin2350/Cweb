// Data Storage
const lessons = [
  {
    id: 1,
    title: 'พื้นฐาน C: Hello World และโครงสร้างโปรแกรม',
    desc: 'เริ่มต้นเขียนโปรแกรม C ครั้งแรก เรียนรู้โครงสร้างพื้นฐาน',
    content: `<h2>โปรแกรม Hello World</h2>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>
<p><strong>อธิบาย:</strong></p>
<ul>
  <li><code>#include &lt;stdio.h&gt;</code> - เรียกใช้ไลบรารีสำหรับ input/output</li>
  <li><code>int main()</code> - ฟังก์ชันหลักที่โปรแกรมเริ่มทำงาน</li>
  <li><code>printf()</code> - แสดงข้อความออกหน้าจอ</li>
  <li><code>return 0;</code> - คืนค่า 0 แสดงว่าโปรแกรมทำงานสำเร็จ</li>
</ul>`,
    completed: false
  },
  {
    id: 2,
    title: 'ตัวแปรและชนิดข้อมูล',
    desc: 'เรียนรู้การประกาศตัวแปรและชนิดข้อมูลใน C',
    content: `<h2>ชนิดข้อมูลพื้นฐาน</h2>
<pre><code>int age = 25;          // จำนวนเต็ม
float price = 99.99;   // ทศนิยม
char grade = 'A';      // ตัวอักษร
double pi = 3.14159;   // ทศนิยมความแม่นยำสูง</code></pre>
<p><strong>การใช้งาน:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int score = 100;
    float average = 85.5;
    char initial = 'T';
    
    printf("คะแนน: %d\\n", score);
    printf("เฉลี่ย: %.1f\\n", average);
    printf("ชื่อย่อ: %c\\n", initial);
    return 0;
}</code></pre>`,
    completed: false
  },
  {
    id: 3,
    title: 'รับ Input จากผู้ใช้ด้วย scanf',
    desc: 'เรียนรู้วิธีรับข้อมูลจากผู้ใช้',
    content: `<h2>การใช้ scanf()</h2>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int age;
    float height;
    
    printf("ใส่อายุ: ");
    scanf("%d", &age);
    
    printf("ใส่ส่วนสูง (cm): ");
    scanf("%f", &height);
    
    printf("\\nอายุ: %d ปี\\n", age);
    printf("ส่วนสูง: %.1f cm\\n", height);
    
    return 0;
}</code></pre>
<p><strong>สำคัญ:</strong> ใช้ <code>&</code> หน้าตัวแปร เพื่อบอกตำแหน่งในหน่วยความจำ</p>`,
    completed: false
  },
  {
    id: 4,
    title: 'คำสั่ง if-else และการเปรียบเทียบ',
    desc: 'ควบคุมการทำงานตามเงื่อนไข',
    content: `<h2>การใช้ if-else</h2>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int score;
    printf("ใส่คะแนน: ");
    scanf("%d", &score);
    
    if (score >= 80) {
        printf("เกรด A\\n");
    } else if (score >= 70) {
        printf("เกรด B\\n");
    } else if (score >= 60) {
        printf("เกรด C\\n");
    } else {
        printf("สอบตก\\n");
    }
    
    return 0;
}</code></pre>
<p><strong>ตัวดำเนินการเปรียบเทียบ:</strong></p>
<ul>
  <li><code>==</code> เท่ากับ</li>
  <li><code>!=</code> ไม่เท่ากับ</li>
  <li><code>&gt;</code> มากกว่า</li>
  <li><code>&lt;</code> น้อยกว่า</li>
  <li><code>&gt;=</code> มากกว่าเท่ากับ</li>
  <li><code>&lt;=</code> น้อยกว่าเท่ากับ</li>
</ul>`,
    completed: false
  },
  {
    id: 5,
    title: 'Loop: for, while, do-while',
    desc: 'การทำซ้ำด้วย loop ต่าง ๆ',
    content: `<h2>Loop แบบต่าง ๆ</h2>
<h3>1. For Loop</h3>
<pre><code>for (int i = 1; i <= 5; i++) {
    printf("%d ", i);  // 1 2 3 4 5
}</code></pre>

<h3>2. While Loop</h3>
<pre><code>int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}</code></pre>

<h3>3. Do-While Loop</h3>
<pre><code>int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);</code></pre>

<p><strong>ตัวอย่างการใช้งาน:</strong></p>
<pre><code>// หาผลรวม 1+2+3+...+100
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
printf("ผลรวม = %d\\n", sum);</code></pre>`,
    completed: false
  },
  {
    id: 6,
    title: 'Array (อาร์เรย์)',
    desc: 'เก็บข้อมูลหลายค่าในตัวแปรเดียว',
    content: `<h2>การใช้ Array</h2>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int scores[5] = {90, 85, 78, 92, 88};
    
    // แสดงค่าทั้งหมด
    for (int i = 0; i < 5; i++) {
        printf("คะแนนคนที่ %d: %d\\n", i+1, scores[i]);
    }
    
    // หาค่าเฉลี่ย
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += scores[i];
    }
    printf("เฉลี่ย: %.2f\\n", (float)sum / 5);
    
    return 0;
}</code></pre>
<p><strong>สำคัญ:</strong> Index เริ่มที่ 0 (scores[0] คือค่าแรก)</p>`,
    completed: false
  },
  {
    id: 7,
    title: 'Functions (ฟังก์ชัน)',
    desc: 'สร้างฟังก์ชันเพื่อแบ่งโค้ดเป็นส่วน ๆ',
    content: `<h2>การสร้างและเรียกใช้ Function</h2>
<pre><code>#include &lt;stdio.h&gt;

// ประกาศฟังก์ชัน
int add(int a, int b) {
    return a + b;
}

float average(int a, int b) {
    return (a + b) / 2.0;
}

void greet(char name[]) {
    printf("สวัสดี %s!\\n", name);
}

int main() {
    int sum = add(10, 20);
    printf("ผลบวก: %d\\n", sum);
    
    float avg = average(80, 90);
    printf("ค่าเฉลี่ย: %.1f\\n", avg);
    
    greet("Tawin");
    
    return 0;
}</code></pre>
<p><strong>ประเภทของ Function:</strong></p>
<ul>
  <li>มี return value (int, float, etc.)</li>
  <li>ไม่มี return value (void)</li>
</ul>`,
    completed: false
  },
  {
    id: 8,
    title: 'Pointers (พอยน์เตอร์)',
    desc: 'ทำงานกับที่อยู่ในหน่วยความจำ',
    content: `<h2>Pointer พื้นฐาน</h2>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int age = 25;
    int *ptr = &age;  // ptr เก็บที่อยู่ของ age
    
    printf("ค่า age: %d\\n", age);
    printf("ที่อยู่ age: %p\\n", &age);
    printf("ค่าที่ ptr เก็บ: %p\\n", ptr);
    printf("ค่าที่ ptr ชี้ไป: %d\\n", *ptr);
    
    // เปลี่ยนค่าผ่าน pointer
    *ptr = 30;
    printf("age ใหม่: %d\\n", age);
    
    return 0;
}</code></pre>
<p><strong>สัญลักษณ์:</strong></p>
<ul>
  <li><code>&</code> = หาที่อยู่</li>
  <li><code>*</code> = เข้าถึงค่าที่ที่อยู่นั้น</li>
</ul>`,
    completed: false
  }
];

const challenges = [
  {
    id: 1,
    title: 'หาผลรวมของเลข 2 จำนวน',
    desc: 'เขียนโปรแกรมรับเลข 2 ตัว แล้วแสดงผลรวม',
    difficulty: 'easy',
    hint: 'ใช้ scanf รับค่า 2 ตัว แล้วบวกกัน',
    solution: `#include <stdio.h>

int main() {
    int a, b;
    printf("ใส่เลข 2 ตัว: ");
    scanf("%d %d", &a, &b);
    printf("ผลรวม = %d\\n", a + b);
    return 0;
}`,
    solved: false
  },
  {
    id: 2,
    title: 'ตรวจสอบเลขคู่หรือคี่',
    desc: 'รับตัวเลขแล้วบอกว่าเป็นเลขคู่หรือคี่',
    difficulty: 'easy',
    hint: 'ใช้ % (modulo) หารด้วย 2 ถ้าเหลือ 0 คือคู่',
    solution: `#include <stdio.h>

int main() {
    int num;
    printf("ใส่ตัวเลข: ");
    scanf("%d", &num);
    
    if (num % 2 == 0) {
        printf("%d เป็นเลขคู่\\n", num);
    } else {
        printf("%d เป็นเลขคี่\\n", num);
    }
    return 0;
}`,
    solved: false
  },
  {
    id: 3,
    title: 'แสดงสูตรคูณ',
    desc: 'รับตัวเลข n แล้วแสดงสูตรคูณแม่ n (1-12)',
    difficulty: 'easy',
    hint: 'ใช้ for loop วนจาก 1 ถึง 12',
    solution: `#include <stdio.h>

int main() {
    int n;
    printf("สูตรคูณแม่เท่าไหร่: ");
    scanf("%d", &n);
    
    for (int i = 1; i <= 12; i++) {
        printf("%d x %d = %d\\n", n, i, n * i);
    }
    return 0;
}`,
    solved: false
  },
  {
    id: 4,
    title: 'หาค่ามากที่สุดในอาร์เรย์',
    desc: 'รับเลข 5 ตัว แล้วหาค่ามากที่สุด',
    difficulty: 'medium',
    hint: 'เก็บค่าไว้ใน array แล้ววนหาค่ามากสุด',
    solution: `#include <stdio.h>

int main() {
    int arr[5];
    printf("ใส่เลข 5 ตัว:\\n");
    
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    
    int max = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    printf("ค่ามากสุด: %d\\n", max);
    return 0;
}`,
    solved: false
  },
  {
    id: 5,
    title: 'แปลงอุณหภูมิ Celsius → Fahrenheit',
    desc: 'รับอุณหภูมิ Celsius แล้วแปลงเป็น Fahrenheit',
    difficulty: 'easy',
    hint: 'สูตร: F = (C × 9/5) + 32',
    solution: `#include <stdio.h>

int main() {
    float celsius, fahrenheit;
    printf("ใส่อุณหภูมิ Celsius: ");
    scanf("%f", &celsius);
    
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
    printf("%.1f°C = %.1f°F\\n", celsius, fahrenheit);
    
    return 0;
}`,
    solved: false
  },
  {
    id: 6,
    title: 'ตรวจสอบจำนวนเฉพาะ',
    desc: 'รับตัวเลขแล้วบอกว่าเป็นจำนวนเฉพาะหรือไม่',
    difficulty: 'medium',
    hint: 'วนหารตั้งแต่ 2 ถึง n-1 ถ้าหารลงตัวคือไม่เฉพาะ',
    solution: `#include <stdio.h>

int main() {
    int n, isPrime = 1;
    printf("ใส่ตัวเลข: ");
    scanf("%d", &n);
    
    if (n <= 1) {
        isPrime = 0;
    } else {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = 0;
                break;
            }
        }
    }
    
    if (isPrime) {
        printf("%d เป็นจำนวนเฉพาะ\\n", n);
    } else {
        printf("%d ไม่เป็นจำนวนเฉพาะ\\n", n);
    }
    
    return 0;
}`,
    solved: false
  },
  {
    id: 7,
    title: 'Fibonacci Sequence',
    desc: 'แสดง Fibonacci n ตัวแรก',
    difficulty: 'medium',
    hint: 'F(n) = F(n-1) + F(n-2), เริ่มต้น 0, 1',
    solution: `#include <stdio.h>

int main() {
    int n, a = 0, b = 1, next;
    printf("จำนวน Fibonacci ที่ต้องการ: ");
    scanf("%d", &n);
    
    printf("Fibonacci: ");
    for (int i = 0; i < n; i++) {
        if (i <= 1) {
            next = i;
        } else {
            next = a + b;
            a = b;
            b = next;
        }
        printf("%d ", next);
    }
    printf("\\n");
    
    return 0;
}`,
    solved: false
  },
  {
    id: 8,
    title: 'เรียงลำดับ Bubble Sort',
    desc: 'รับเลข 5 ตัว แล้วเรียงจากน้อยไปมาก',
    difficulty: 'hard',
    hint: 'ใช้ nested loop เปรียบเทียบและสลับค่า',
    solution: `#include <stdio.h>

int main() {
    int arr[5], temp;
    printf("ใส่เลข 5 ตัว:\\n");
    
    for (int i = 0; i < 5; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Bubble sort
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    printf("เรียงแล้ว: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
    solved: false
  }
];

const tips = [
  {
    id: 1,
    title: '💡 ใช้ const สำหรับค่าคงที่',
    content: 'ใช้ <code>const</code> กับค่าที่ไม่เปลี่ยนแปลง ช่วยป้องกันการแก้ไขโดยไม่ตั้งใจ',
    code: `const float PI = 3.14159;
const int MAX_SIZE = 100;

// PI = 3.14; // Error! ไม่สามารถเปลี่ยนได้`
  },
  {
    id: 2,
    title: '⚡ ใช้ ++i แทน i++ ใน loop',
    content: 'ใน for loop ควรใช้ <code>++i</code> จะเร็วกว่าเล็กน้อย (pre-increment vs post-increment)',
    code: `// ดีกว่า
for (int i = 0; i < n; ++i) {
    // ...
}

// ช้ากว่าเล็กน้อย
for (int i = 0; i < n; i++) {
    // ...
}`
  },
  {
    id: 3,
    title: '🔍 Debug ด้วย printf',
    content: 'ใช้ printf แสดงค่าตัวแปรเพื่อตรวจสอบการทำงาน',
    code: `int x = 10;
printf("Debug: x = %d\\n", x);

// แสดงหลายค่า
printf("x=%d, y=%d, sum=%d\\n", x, y, x+y);`
  },
  {
    id: 4,
    title: '🎯 ใช้ switch-case แทน if-else ยาว ๆ',
    content: 'เมื่อมีหลายเงื่อนไขที่เปรียบเทียบค่าเดียวกัน ใช้ switch อ่านง่ายกว่า',
    code: `int choice;
scanf("%d", &choice);

switch (choice) {
    case 1:
        printf("เมนู 1\\n");
        break;
    case 2:
        printf("เมนู 2\\n");
        break;
    default:
        printf("ไม่มีเมนูนี้\\n");
}`
  },
  {
    id: 5,
    title: '📦 ระวังการเข้าถึง Array นอกขอบเขต',
    content: 'การเข้าถึง index ที่เกินขนาด array จะทำให้โปรแกรม crash หรือผลลัพธ์ผิดพลาด',
    code: `int arr[5] = {1, 2, 3, 4, 5};

// ถูกต้อง
printf("%d", arr[4]); // index 0-4

// ผิด! อาจ crash
printf("%d", arr[5]); // index เกินขนาด`
  },
  {
    id: 6,
    title: '🧮 ระวังการหารจำนวนเต็ม',
    content: 'การหาร int ด้วย int จะได้ผลลัพธ์เป็น int (ไม่มีทศนิยม)',
    code: `// ผิด - ได้ 0
int avg = (5 + 6) / 2;  // 11/2 = 5

// ถูก - ได้ 5.5
float avg = (5 + 6) / 2.0;

// หรือ cast เป็น float
float avg = (float)(5 + 6) / 2;`
  },
  {
    id: 7,
    title: '🔐 ใช้ fgets แทน gets',
    content: '<code>gets()</code> ไม่ปลอดภัย ใช้ <code>fgets()</code> แทนเพื่อป้องกัน buffer overflow',
    code: `char name[50];

// อันตราย - อาจเกิด overflow
// gets(name);

// ปลอดภัย
fgets(name, sizeof(name), stdin);`
  },
  {
    id: 8,
    title: '♻️ ปล่อย memory ที่ malloc',
    content: 'เมื่อใช้ <code>malloc()</code> จอง memory ต้อง <code>free()</code> ทุกครั้งเพื่อไม่ให้เกิด memory leak',
    code: `#include <stdlib.h>

int *arr = (int*)malloc(5 * sizeof(int));

// ใช้งาน...

free(arr);  // สำคัญ! ปล่อย memory
arr = NULL; // ป้องกันการใช้ pointer ที่ปล่อยแล้ว`
  }
];

// State Management
let currentPage = 'home';
let stats = JSON.parse(localStorage.getItem('cLearningStats')) || {
  lessonsCompleted: 0,
  challengesSolved: 0,
  codeRuns: 0
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLessons();
  initChallenges();
  initPlayground();
  initTips();
  updateStats();
});

// Navigation
function initNavigation() {
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  document.querySelectorAll('[data-navigate]').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo(card.dataset.navigate);
    });
  });
}

function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
  
  currentPage = page;
}

// Lessons
function initLessons() {
  const container = document.getElementById('lessons-list');
  
  lessons.forEach((lesson, index) => {
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.innerHTML = `
      <div class="lesson-number">${String(index + 1).padStart(2, '0')}</div>
      <div class="lesson-content">
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-desc">${lesson.desc}</div>
      </div>
      <span class="lesson-status ${lesson.completed ? 'completed' : 'locked'}">
        ${lesson.completed ? '✓ จบแล้ว' : '🔒 เริ่มเรียน'}
      </span>
    `;
    
    card.addEventListener('click', () => showLessonModal(lesson));
    container.appendChild(card);
  });
}

function showLessonModal(lesson) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${lesson.title}</h2>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        ${lesson.content}
      </div>
      <div class="modal-footer">
        <button class="btn-primary" onclick="completeLesson(${lesson.id})">
          ✓ จบบทเรียนนี้แล้ว
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

function completeLesson(id) {
  const lesson = lessons.find(l => l.id === id);
  if (lesson && !lesson.completed) {
    lesson.completed = true;
    stats.lessonsCompleted++;
    saveStats();
    updateStats();
    initLessons();
  }
  document.querySelector('.modal-overlay')?.remove();
}

// Challenges
function initChallenges() {
  const container = document.getElementById('challenges-list');
  const tabs = document.querySelectorAll('.tab-btn');
  
  let currentDifficulty = 'easy';
  
  function renderChallenges(difficulty) {
    container.innerHTML = '';
    const filtered = challenges.filter(c => c.difficulty === difficulty);
    
    filtered.forEach(challenge => {
      const card = document.createElement('div');
      card.className = 'challenge-card';
      card.innerHTML = `
        <div class="challenge-header">
          <div class="challenge-title">${challenge.title}</div>
          <span class="challenge-difficulty ${challenge.difficulty}">${
            challenge.difficulty === 'easy' ? 'ง่าย' :
            challenge.difficulty === 'medium' ? 'ปานกลาง' : 'ยาก'
          }</span>
        </div>
        <div class="challenge-desc">${challenge.desc}</div>
        <div class="challenge-meta">
          <span>💡 คำใบ้: ${challenge.hint}</span>
          ${challenge.solved ? '<span style="color: var(--success)">✓ ทำแล้ว</span>' : ''}
        </div>
      `;
      
      card.addEventListener('click', () => showChallengeModal(challenge));
      container.appendChild(card);
    });
  }
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDifficulty = tab.dataset.difficulty;
      renderChallenges(currentDifficulty);
    });
  });
  
  renderChallenges('easy');
}

function showChallengeModal(challenge) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 800px;">
      <div class="modal-header">
        <h2>${challenge.title}</h2>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <p><strong>โจทย์:</strong> ${challenge.desc}</p>
        <p><strong>คำใบ้:</strong> ${challenge.hint}</p>
        <div style="margin-top: 1rem;">
          <button class="btn-primary" onclick="toggleSolution(${challenge.id})">
            👁️ ดูเฉลย
          </button>
        </div>
        <div id="solution-${challenge.id}" style="display: none; margin-top: 1rem;">
          <h3>เฉลย:</h3>
          <pre style="background: #0a0e14; padding: 1rem; border-radius: 6px; overflow-x: auto;"><code>${challenge.solution}</code></pre>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-primary" onclick="solveChallenge(${challenge.id})">
          ✓ ทำสำเร็จแล้ว
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.remove();
  });
}

function toggleSolution(id) {
  const solution = document.getElementById(`solution-${id}`);
  solution.style.display = solution.style.display === 'none' ? 'block' : 'none';
}

function solveChallenge(id) {
  const challenge = challenges.find(c => c.id === id);
  if (challenge && !challenge.solved) {
    challenge.solved = true;
    stats.challengesSolved++;
    saveStats();
    updateStats();
    initChallenges();
  }
  document.querySelector('.modal-overlay')?.remove();
}

// Playground
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
  
  document.getElementById('run-code').addEventListener('click', () => {
    const code = editor.getValue();
    const output = document.getElementById('code-output');
    
    // Simulate compilation and output (จริง ๆ ต้องใช้ WebAssembly compiler)
    output.textContent = '🚧 กำลังพัฒนาฟีเจอร์คอมไพล์และรันโค้ด...\n\n';
    output.textContent += '💡 ในเวอร์ชันสมบูรณ์จะใช้ WebAssembly (emscripten) เพื่อคอมไพล์และรัน C ในเบราว์เซอร์\n\n';
    output.textContent += 'โค้ดที่คุณเขียน:\n' + code;
    
    stats.codeRuns++;
    saveStats();
    updateStats();
  });
}

// Tips
function initTips() {
  const container = document.getElementById('tips-list');
  
  tips.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.innerHTML = `
      <div class="tip-title">${tip.title}</div>
      <div class="tip-content">
        ${tip.content}
        ${tip.code ? `<div class="tip-code"><code>${tip.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></div>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

// Stats
function updateStats() {
  document.getElementById('lessons-completed').textContent = stats.lessonsCompleted;
  document.getElementById('challenges-solved').textContent = stats.challengesSolved;
  document.getElementById('code-runs').textContent = stats.codeRuns;
  
  const totalLessons = lessons.length;
  const totalChallenges = challenges.length;
  const progress = Math.round(
    ((stats.lessonsCompleted / totalLessons) * 50 + 
     (stats.challengesSolved / totalChallenges) * 50)
  );
  
  document.getElementById('overall-progress').textContent = progress + '%';
}

function saveStats() {
  localStorage.setItem('cLearningStats', JSON.stringify(stats));
}

// Add modal styles
const style = document.createElement('style');
style.textContent = `
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: var(--bg-light);
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--border);
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
  color: var(--text);
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
}

.modal-close:hover {
  color: var(--text);
}

.modal-body {
  padding: 1.5rem;
  color: var(--text);
}

.modal-body h2, .modal-body h3 {
  color: var(--text);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.modal-body ul {
  margin-left: 1.5rem;
  line-height: 1.8;
}

.modal-body pre {
  background: #0a0e14;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1rem 0;
}

.modal-body code {
  font-family: 'Courier New', monospace;
  color: #c5d4e8;
  font-size: 0.9rem;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
`;
document.head.appendChild(style);
