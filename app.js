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
    content: 'ใช้ <code>const</code> กับค่าที่ไม่ควรเปลี่ยนแปลง ช่วยป้องกันการแก้ไขโดยไม่ตั้งใจและทำให้โค้ดอ่านง่ายขึ้น',
    code: `const float PI = 3.14159;
const int MAX_SIZE = 100;

// PI = 3.14; // Error! ไม่สามารถแก้ไขค่าคงที่ได้`
  },
  {
    id: 2,
    title: '⚡ ใช้ ++i ใน Loop',
    content: 'ใช้ <code>++i</code> แทน <code>i++</code> ใน for loop จะมีประสิทธิภาพดีกว่าเล็กน้อย (pre-increment vs post-increment)',
    code: `// ดีกว่า - pre-increment
for (int i = 0; i < n; ++i) {
    // โค้ดของคุณ
}

// ใช้ได้แต่ช้ากว่า - post-increment
for (int i = 0; i < n; i++) {
    // โค้ดของคุณ
}`
  },
  {
    id: 3,
    title: '🔍 Debug ด้วย printf',
    content: 'การใช้ printf อย่างมีกลยุทธ์ช่วยติดตามการทำงานของโปรแกรมและค่าตัวแปรระหว่างการ debug',
    code: `int x = 10, y = 20;
printf("Debug: x = %d\\n", x);

// แสดงหลายค่าพร้อมกัน
printf("x=%d, y=%d, sum=%d\\n", x, y, x+y);

// ใช้ป้ายกำกับที่บอกความหมาย
printf("[DEBUG] ที่บรรทัด 45: count=%d\\n", count);`
  },
  {
    id: 4,
    title: '🎯 ใช้ switch-case แทน if-else หลายๆ อัน',
    content: 'เมื่อเปรียบเทียบตัวแปรเดียวกันกับหลายค่า ใช้ switch-case จะอ่านง่ายกว่า',
    code: `int choice;
scanf("%d", &choice);

switch (choice) {
    case 1:
        printf("เลือกเมนู 1\\n");
        break;
    case 2:
        printf("เลือกเมนู 2\\n");
        break;
    default:
        printf("ไม่มีตัวเลือกนี้\\n");
}`
  },
  {
    id: 5,
    title: '📦 ระวังการเข้าถึง Array นอกขอบเขต',
    content: 'ตรวจสอบ index ของ array เสมอเพื่อป้องกันโปรแกรม crash และพฤติกรรมที่ไม่คาดคิด',
    code: `int arr[5] = {1, 2, 3, 4, 5};

// ถูกต้อง - index ที่ใช้ได้คือ 0-4
printf("%d", arr[4]);

// ผิด! เกินขอบเขต - อาจทำให้ crash
printf("%d", arr[5]);

// การเข้าถึงที่ปลอดภัยด้วยการตรวจสอบ
int index = 5;
if (index < 5) {
    printf("%d", arr[index]);
}`
  },
  {
    id: 6,
    title: '🧮 ระวังการหารจำนวนเต็ม',
    content: 'การหารจำนวนเต็มด้วยกันจะได้ผลลัพธ์เป็นจำนวนเต็ม (ตัดทศนิยมทิ้ง) ใช้ float หากต้องการทศนิยม',
    code: `// ผิด - ผลลัพธ์เป็น 2
int avg = 5 / 2;  // 5/2 = 2 (ตัดทศนิยม)

// ถูก - ผลลัพธ์เป็น 2.5
float avg = 5 / 2.0;

// หรือใช้ cast เป็น float
float avg = (float)5 / 2;
float avg = 5 / (float)2;`
  },
  {
    id: 7,
    title: '🔐 ใช้ fgets แทน gets',
    content: '<code>gets()</code> ไม่ปลอดภัยและถูกยกเลิกแล้ว ใช้ <code>fgets()</code> เพื่อป้องกัน buffer overflow',
    code: `char name[50];

// อันตราย - เสี่ยงต่อ buffer overflow!
// gets(name);

// ปลอดภัย - จำกัดขนาด input
fgets(name, sizeof(name), stdin);

// ลบ newline ตัวท้ายถ้าต้องการ
name[strcspn(name, "\\n")] = '\\0';`
  },
  {
    id: 8,
    title: '♻️ ปล่อย Memory ที่จองไว้เสมอ',
    content: 'ทุกครั้งที่ใช้ <code>malloc()</code> ต้องมี <code>free()</code> คู่กันเพื่อป้องกัน memory leak',
    code: `#include <stdlib.h>

int *arr = (int*)malloc(5 * sizeof(int));

// ใช้งาน array...
arr[0] = 10;

// สำคัญ! ปล่อย memory เมื่อใช้เสร็จ
free(arr);
arr = NULL; // ป้องกัน dangling pointer`
  },
  {
    id: 9,
    title: '🎨 ใช้ typedef สำหรับ Type ที่ซับซ้อน',
    content: 'สร้างชื่อแทน type เพื่อให้อ่านง่ายและแก้ไขสะดวก',
    code: `// ก่อน
struct Point {
    int x, y;
};
struct Point p1;

// หลัง - สะอาดกว่า!
typedef struct {
    int x, y;
} Point;

Point p1, p2;`
  },
  {
    id: 10,
    title: '🚀 Inline Functions เพิ่มประสิทธิภาพ',
    content: 'ใช้ <code>inline</code> กับฟังก์ชันเล็กๆ ที่ถูกเรียกบ่อยเพื่อลด overhead ของการเรียกฟังก์ชัน',
    code: `// ฟังก์ชันปกติ - มี overhead ในการเรียก
int square(int x) {
    return x * x;
}

// Inline - โค้ดจะถูกแทรกตรงจุดที่เรียก
inline int square(int x) {
    return x * x;
}

// เหมาะกับฟังก์ชันเล็กๆ ง่ายๆ
inline int max(int a, int b) {
    return (a > b) ? a : b;
}`
  },
  {
    id: 11,
    title: '📝 ตั้งชื่อตัวแปรให้มีความหมาย',
    content: 'ใช้ชื่อที่บอกความหมายแทนตัวอักษรเดียว (ยกเว้นใน loop) เพราะโค้ดถูกอ่านบ่อยกว่าเขียน',
    code: `// แบบไม่ดี - ไม่ชัดเจน
int a = 5;
float b = 2.5;
int c = a * b;

// แบบดี - อธิบายตัวเอง
int itemCount = 5;
float pricePerItem = 2.5;
float totalPrice = itemCount * pricePerItem;`
  },
  {
    id: 12,
    title: '⚠️ ตรวจสอบค่าที่ Return',
    content: 'ตรวจสอบค่าที่ return จากฟังก์ชันที่อาจล้มเหลว เช่น malloc, scanf, การทำงานกับไฟล์',
    code: `// แบบไม่ดี - ไม่ตรวจสอบ error
int *arr = malloc(100 * sizeof(int));
arr[0] = 10; // อาจ crash ถ้า malloc ล้มเหลว!

// แบบดี - จัดการ error อย่างถูกต้อง
int *arr = malloc(100 * sizeof(int));
if (arr == NULL) {
    fprintf(stderr, "จองหน่วยความจำล้มเหลว\\n");
    return 1;
}
arr[0] = 10; // ปลอดภัยแล้ว`
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
  // Smooth page transition
  const currentActive = document.querySelector('.page.active');
  if (currentActive) {
    currentActive.style.opacity = '0';
    setTimeout(() => {
      currentActive.classList.remove('active');
      
      const newPage = document.getElementById(`page-${page}`);
      newPage.classList.add('active');
      setTimeout(() => {
        newPage.style.opacity = '1';
      }, 10);
    }, 200);
  } else {
    document.getElementById(`page-${page}`).classList.add('active');
  }
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
  
  currentPage = page;
  
  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
        ${lesson.completed ? '✓ เรียนจบแล้ว' : '→ เริ่มเรียน'}
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
          ✓ ทำเครื่องหมายว่าเรียนจบ
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
      updateStats();
      
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
    let inputIndex = 0;
    
    for (const line of lines) {
      // Check if this line is a prompt that we handled
      const isPrompt = prompts.some(p => line.includes(p.replace(': ', '')));
      
      if (isPrompt && inputIndex < userInputs.length) {
        // This was a prompt - show it with the user's input
        term.write(line);
        if (!line.endsWith(' ')) term.write(' ');
        term.writeln('\x1b[36m' + userInputs[inputIndex] + '\x1b[0m');
        inputIndex++;
      } else if (line.trim()) {
        // Regular output
        term.writeln(line);
      } else {
        term.writeln('');
      }
      
      // Small delay for visual effect
      await new Promise(resolve => setTimeout(resolve, 10));
    }
  }
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
  // Animate numbers
  animateNumber('lessons-completed', stats.lessonsCompleted);
  animateNumber('challenges-solved', stats.challengesSolved);
  animateNumber('code-runs', stats.codeRuns);
  
  const totalLessons = lessons.length;
  const totalChallenges = challenges.length;
  const progress = Math.round(
    ((stats.lessonsCompleted / totalLessons) * 50 + 
     (stats.challengesSolved / totalChallenges) * 50)
  );
  
  // Animate progress bar
  const progressBar = document.getElementById('progress-fill');
  const progressText = document.getElementById('overall-progress');
  
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
  progressText.textContent = progress + '%';
}

function animateNumber(elementId, targetValue) {
  const element = document.getElementById(elementId);
  const currentValue = parseInt(element.textContent) || 0;
  
  if (currentValue === targetValue) return;
  
  const duration = 500;
  const steps = 20;
  const stepValue = (targetValue - currentValue) / steps;
  const stepDuration = duration / steps;
  
  let current = currentValue;
  const timer = setInterval(() => {
    current += stepValue;
    if ((stepValue > 0 && current >= targetValue) || (stepValue < 0 && current <= targetValue)) {
      element.textContent = targetValue;
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
    }
  }, stepDuration);
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
