const tutorialData = {
    home: {
        title: "Master C++ Programming",
        sections: [
            {
                id: "intro",
                title: "Welcome to C++ Programming",
                content: `
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h3 class="card-title"><i class="bi bi-star-fill text-warning"></i> Why Learn C++?</h3>
                                    <p class="card-text">C++ is one of the most powerful and widely used programming languages that combines high performance with low-level memory manipulation capabilities.</p>
                                    
                                    <div class="alert alert-primary">
                                        <strong>Did you know?</strong> C++ is used in:
                                        <ul class="mb-0">
                                            <li>Operating systems (Windows, Linux, macOS)</li>
                                            <li>Game engines (Unreal, Unity)</li>
                                            <li>Web browsers (Chrome, Firefox)</li>
                                            <li>Database systems (MySQL, MongoDB)</li>
                                            <li>And even in space exploration (Mars rovers)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card bg-light">
                                <div class="card-body">
                                    <h5 class="card-title">Quick Facts</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item bg-light">
                                            <strong>Created:</strong> 1985 (by Bjarne Stroustrup)
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <strong>Latest Standard:</strong> C++23 (2023)
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <strong>Paradigms:</strong> Multi-paradigm
                                        </li>
                                        <li class="list-group-item bg-light">
                                            <strong>Typing:</strong> Static, strong
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title"><i class="bi bi-lightbulb-fill text-info"></i> First C++ Program</h3>
                            <p>Let's look at the traditional "Hello World" program:</p>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <pre class="bg-dark text-light p-3 rounded"><code>#include &lt;iostream&gt;
    
    int main() {
        // Print to console
        std::cout << "Hello, World!" << std::endl;
        
        // Return success status
        return 0;
    }</code></pre>
                                </div>
                                <div class="col-md-6">
                                    <h5>Code Breakdown:</h5>
                                    <table class="table table-sm">
                                        <tbody>
                                            <tr>
                                                <td><code>#include &lt;iostream&gt;</code></td>
                                                <td>Includes standard I/O library</td>
                                            </tr>
                                            <tr>
                                                <td><code>int main()</code></td>
                                                <td>Program entry point function</td>
                                            </tr>
                                            <tr>
                                                <td><code>std::cout</code></td>
                                                <td>Standard output stream</td>
                                            </tr>
                                            <tr>
                                                <td><code>&lt;&lt;</code></td>
                                                <td>Insertion operator</td>
                                            </tr>
                                            <tr>
                                                <td><code>std::endl</code></td>
                                                <td>End line (newline + flush)</td>
                                            </tr>
                                            <tr>
                                                <td><code>return 0</code></td>
                                                <td>Indicates successful execution</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "features",
                title: "Key Features of C++",
                content: `
                    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4">
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5 class="mb-0"><i class="bi bi-speedometer2"></i> Performance</h5>
                                </div>
                                <div class="card-body">
                                    <p>C++ provides:</p>
                                    <ul>
                                        <li>Direct hardware access</li>
                                        <li>Zero-cost abstractions</li>
                                        <li>Minimal runtime overhead</li>
                                        <li>Compiles to native machine code</li>
                                    </ul>
                                    <p class="mb-0">Often used where performance is critical (game engines, HFT, embedded systems).</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-header bg-success text-white">
                                    <h5 class="mb-0"><i class="bi bi-layers"></i> Multi-Paradigm</h5>
                                </div>
                                <div class="card-body">
                                    <p>Supports multiple programming styles:</p>
                                    <ul>
                                        <li>Procedural programming</li>
                                        <li>Object-oriented programming (OOP)</li>
                                        <li>Generic programming (templates)</li>
                                        <li>Functional programming (C++11 and later)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h5 class="mb-0"><i class="bi bi-shield-lock"></i> Memory Control</h5>
                                </div>
                                <div class="card-body">
                                    <p>Fine-grained memory management:</p>
                                    <ul>
                                        <li>Manual memory management (new/delete)</li>
                                        <li>Smart pointers (C++11)</li>
                                        <li>Stack allocation</li>
                                        <li>Deterministic destruction (RAII)</li>
                                    </ul>
                                    <p class="mb-0">Gives developers precise control over resources.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-header bg-warning text-dark">
                                    <h5 class="mb-0"><i class="bi bi-puzzle"></i> Compatibility</h5>
                                </div>
                                <div class="card-body">
                                    <p>C++ offers:</p>
                                    <ul>
                                        <li>C compatibility (mostly)</li>
                                        <li>Cross-platform development</li>
                                        <li>Backward compatibility</li>
                                        <li>Interoperability with other languages</li>
                                    </ul>
                                    <p class="mb-0">Massive existing codebase and libraries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "getting-started",
                title: "Getting Started with C++",
                content: `
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-secondary text-white">
                                    <h5 class="mb-0"><i class="bi bi-tools"></i> Setup Guide</h5>
                                </div>
                                <div class="card-body">
                                    <h6>1. Install a Compiler:</h6>
                                    <ul>
                                        <li><strong>Windows:</strong> <a href="https://visualstudio.microsoft.com/" target="_blank">Visual Studio</a> (with C++ workload) or <a href="https://www.mingw-w64.org/" target="_blank">MinGW-w64</a></li>
                                        <li><strong>Mac:</strong> <code>brew install gcc</code> or Xcode Command Line Tools</li>
                                        <li><strong>Linux:</strong> <code>sudo apt install g++</code> (Debian/Ubuntu)</li>
                                    </ul>
                                    
                                    <h6 class="mt-3">2. Choose an IDE/Editor:</h6>
                                    <ul>
                                        <li>Visual Studio Code (with C++ extension)</li>
                                        <li>CLion (JetBrains)</li>
                                        <li>Eclipse CDT</li>
                                        <li>Sublime Text/Atom/Vim with plugins</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-dark text-white">
                                    <h5 class="mb-0"><i class="bi bi-code-square"></i> Compilation Process</h5>
                                </div>
                                <div class="card-body">
                                    <p>C++ programs go through several stages:</p>
                                    <ol>
                                        <li><strong>Preprocessing:</strong> Handles # directives</li>
                                        <li><strong>Compilation:</strong> Converts to assembly</li>
                                        <li><strong>Assembly:</strong> Converts to machine code</li>
                                        <li><strong>Linking:</strong> Combines object files</li>
                                    </ol>
                                    
                                    <h6 class="mt-3">Basic Compilation Command:</h6>
                                    <pre class="bg-dark text-light p-2 rounded"><code>g++ program.cpp -o program
    ./program</code></pre>
                                    
                                    <div class="alert alert-info mt-3">
                                        <i class="bi bi-info-circle"></i> Modern C++ uses features from C++11/14/17/20/23 standards - specify with <code>-std=c++20</code> flag
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card border-primary">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="bi bi-journal-bookmark"></i> Learning Path</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <h6 class="card-title text-primary">Beginner</h6>
                                            <ul class="small">
                                                <li>Basic syntax</li>
                                                <li>Variables & data types</li>
                                                <li>Operators</li>
                                                <li>Control flow</li>
                                                <li>Functions</li>
                                                <li>Arrays</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <h6 class="card-title text-success">Intermediate</h6>
                                            <ul class="small">
                                                <li>Pointers & references</li>
                                                <li>OOP concepts</li>
                                                <li>Templates</li>
                                                <li>STL containers</li>
                                                <li>File I/O</li>
                                                <li>Exception handling</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            <h6 class="card-title text-danger">Advanced</h6>
                                            <ul class="small">
                                                <li>Smart pointers</li>
                                                <li>Move semantics</li>
                                                <li>Multithreading</li>
                                                <li>Metaprogramming</li>
                                                <li>Custom allocators</li>
                                                <li>Low-level optimizations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-2">
                                <a href="#basics" class="btn btn-primary" onclick="showSection('basics')">
                                    Start Learning Basics <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    basics: {
        title: "C++ Basics",
        sections: [
            {
                id: "syntax",
                title: "Basic Syntax Structure",
                content: `
                    <p>Every C++ program has a specific structure:</p>
                    <pre><code>#include &lt;iostream&gt;  // Header file for I/O operations
    
    // Main function - program entry point
    int main() {
        // Program statements go here
        std::cout << "Hello World!";  // Print to console
        
        return 0;  // Exit status (0 means success)
    }</code></pre>
                    <h5 class="mt-3">Key Components:</h5>
                    <ul>
                        <li><strong>Preprocessor Directives</strong> (like #include) - processed before compilation</li>
                        <li><strong>main() function</strong> - mandatory entry point</li>
                        <li><strong>Statements</strong> - end with semicolons (;)</li>
                        <li><strong>Comments</strong> - // for single-line, /* */ for multi-line</li>
                        <li><strong>Namespaces</strong> - std::cout or using namespace std</li>
                    </ul>
                `
            },
            {
                id: "variables",
                title: "Variables and Data Types",
                content: `
                    <p>C++ is a strongly-typed language with several fundamental data types:</p>
                    
                    <table class="table table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>Type</th>
                                <th>Size</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>int</td>
                                <td>4 bytes</td>
                                <td>Integer numbers</td>
                                <td><code>int age = 25;</code></td>
                            </tr>
                            <tr>
                                <td>float</td>
                                <td>4 bytes</td>
                                <td>Single-precision floating point</td>
                                <td><code>float price = 9.99f;</code></td>
                            </tr>
                            <tr>
                                <td>double</td>
                                <td>8 bytes</td>
                                <td>Double-precision floating point</td>
                                <td><code>double pi = 3.1415926535;</code></td>
                            </tr>
                            <tr>
                                <td>char</td>
                                <td>1 byte</td>
                                <td>Single character</td>
                                <td><code>char grade = 'A';</code></td>
                            </tr>
                            <tr>
                                <td>bool</td>
                                <td>1 byte</td>
                                <td>Boolean (true/false)</td>
                                <td><code>bool isReady = true;</code></td>
                            </tr>
                            <tr>
                                <td>void</td>
                                <td>N/A</td>
                                <td>No type</td>
                                <td><code>void displayMessage();</code></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h5 class="mt-3">Variable Declaration and Initialization:</h5>
                    <pre><code>// Declaration
    int count;
    
    // Initialization
    double temperature = 36.6;
    
    // Multiple variables
    int x = 5, y = 10, z = 15;
    
    // Constants
    const float PI = 3.14159f;</code></pre>
                `
            },
            {
                id: "io",
                title: "Basic Input/Output",
                content: `
                    <p>C++ uses streams for input/output operations:</p>
                    
                    <h5>Output with cout:</h5>
                    <pre><code>#include &lt;iostream&gt;
    using namespace std;
    
    int main() {
        cout << "Hello ";  // No newline
        cout << "World!" << endl;  // endl adds newline
        
        int num = 42;
        cout << "The answer is: " << num << endl;
        
        return 0;
    }</code></pre>
                    
                    <h5 class="mt-3">Input with cin:</h5>
                    <pre><code>#include &lt;iostream&gt;
    using namespace std;
    
    int main() {
        int age;
        cout << "Enter your age: ";
        cin >> age;  // Get input
        
        cout << "You are " << age << " years old" << endl;
        
        return 0;
    }</code></pre>
                    
                    <div class="alert alert-info mt-3">
                        <strong>Note:</strong> &lt;&lt; is the insertion operator (to output), &gt;&gt; is the extraction operator (to input)
                    </div>
                `
            },
            {
                id: "operators",
                title: "Operators in C++",
                content: `
                    <p>C++ has rich set of operators:</p>
                    
                    <h5>1. Arithmetic Operators</h5>
                    <pre><code>int a = 10, b = 3;
    int sum = a + b;  // 13
    int diff = a - b; // 7
    int product = a * b; // 30
    int quotient = a / b; // 3 (integer division)
    int remainder = a % b; // 1</code></pre>
                    
                    <h5 class="mt-3">2. Relational Operators</h5>
                    <pre><code>bool isEqual = (a == b); // false
    bool isGreater = (a > b); // true
    bool isLessOrEqual = (a <= 10); // true</code></pre>
                    
                    <h5 class="mt-3">3. Logical Operators</h5>
                    <pre><code>bool result;
    result = (true && false); // AND → false
    result = (true || false); // OR → true
    result = !true; // NOT → false</code></pre>
                    
                    <h5 class="mt-3">4. Assignment Operators</h5>
                    <pre><code>int x = 5;
    x += 3; // x = x + 3 → 8
    x *= 2; // x = x * 2 → 16
    x++; // Post-increment → 17
    ++x; // Pre-increment → 18</code></pre>
                `
            },
            {
                id: "conditionals",
                title: "Conditional Statements",
                content: `
                    <h5>1. if-else Statement</h5>
                    <pre><code>int number;
    cout << "Enter a number: ";
    cin >> number;
    
    if (number > 0) {
        cout << "Positive number" << endl;
    } 
    else if (number < 0) {
        cout << "Negative number" << endl;
    } 
    else {
        cout << "Zero" << endl;
    }</code></pre>
                    
                    <h5 class="mt-3">2. switch Statement</h5>
                    <pre><code>char grade = 'B';
    
    switch (grade) {
        case 'A':
            cout << "Excellent!" << endl;
            break;
        case 'B':
            cout << "Good job!" << endl;
            break;
        case 'C':
            cout << "Fair" << endl;
            break;
        default:
            cout << "Invalid grade" << endl;
    }</code></pre>
                    
                    <div class="alert alert-warning mt-3">
                        <strong>Important:</strong> Don't forget <code>break</code> statements in switch to prevent fall-through!
                    </div>
                `
            },
            {
                id: "loops",
                title: "Loops in C++",
                content: `
                    <h5>1. while Loop</h5>
                    <pre><code>int i = 1;
    while (i <= 5) {
        cout << i << " ";
        i++;
    }
    // Output: 1 2 3 4 5</code></pre>
                    
                    <h5 class="mt-3">2. do-while Loop</h5>
                    <pre><code>int j = 1;
    do {
        cout << j << " ";
        j++;
    } while (j <= 5);
    // Output: 1 2 3 4 5</code></pre>
                    
                    <h5 class="mt-3">3. for Loop</h5>
                    <pre><code>for (int k = 1; k <= 5; k++) {
        cout << k << " ";
    }
    // Output: 1 2 3 4 5</code></pre>
                    
                    <h5 class="mt-3">4. Range-based for Loop (C++11)</h5>
                    <pre><code>int numbers[] = {1, 2, 3, 4, 5};
    for (int num : numbers) {
        cout << num << " ";
    }
    // Output: 1 2 3 4 5</code></pre>
                `
            },
            {
                id: "arrays",
                title: "Arrays",
                content: `
                    <p>Arrays store fixed-size sequential collections of elements:</p>
                    
                    <h5>1. Array Declaration and Initialization</h5>
                    <pre><code>// Declaration
    int numbers[5]; // Uninitialized array of 5 integers
    
    // Initialization
    double temperatures[3] = {36.5, 37.2, 38.1};
    
    // Omitting size
    char vowels[] = {'a', 'e', 'i', 'o', 'u'};</code></pre>
                    
                    <h5 class="mt-3">2. Accessing Array Elements</h5>
                    <pre><code>int primes[5] = {2, 3, 5, 7, 11};
    
    // Get first element
    cout << primes[0]; // 2
    
    // Modify third element
    primes[2] = 13;
    
    // Loop through array
    for (int i = 0; i < 5; i++) {
        cout << primes[i] << " ";
    }
    // Output: 2 3 13 7 11</code></pre>
                    
                    <div class="alert alert-danger mt-3">
                        <strong>Warning:</strong> C++ doesn't check array bounds. Accessing primes[5] would cause undefined behavior!
                    </div>
                `
            },
            {
                id: "variables",
                title: "Variables and Data Types",
                content: `
                    <p>Basic data types in C++:</p>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Example</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>int</td>
                                <td>int age = 25;</td>
                                <td>4 bytes</td>
                            </tr>
                            <tr>
                                <td>float</td>
                                <td>float price = 9.99;</td>
                                <td>4 bytes</td>
                            </tr>
                            <tr>
                                <td>double</td>
                                <td>double pi = 3.14159;</td>
                                <td>8 bytes</td>
                            </tr>
                            <tr>
                                <td>char</td>
                                <td>char grade = 'A';</td>
                                <td>1 byte</td>
                            </tr>
                            <tr>
                                <td>bool</td>
                                <td>bool isTrue = true;</td>
                                <td>1 byte</td>
                            </tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    oop: {
        title: "Object-Oriented Programming in C++",
        sections: [
            {
                id: "oop-concepts",
                title: "Core OOP Concepts",
                content: `
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-primary text-white">
                                    <h5><i class="bi bi-puzzle"></i> Four Pillars of OOP</h5>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead class="table-light">
                                                <tr>
                                                    <th>Pillar</th>
                                                    <th>Description</th>
                                                    <th>C++ Implementation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Encapsulation</strong></td>
                                                    <td>Bundling data with methods</td>
                                                    <td>Classes with access specifiers</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Abstraction</strong></td>
                                                    <td>Hiding complex details</td>
                                                    <td>Abstract classes, interfaces</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Inheritance</strong></td>
                                                    <td>Deriving new classes</td>
                                                    <td><code>class Derived : public Base</code></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Polymorphism</strong></td>
                                                    <td>Single interface, multiple forms</td>
                                                    <td>Virtual functions, overrides</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-lightbulb"></i> Why Use OOP?</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <strong>Modularity:</strong> Break problems into smaller parts
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Reusability:</strong> Inherit and extend existing code
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Maintainability:</strong> Easier to modify and debug
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Flexibility:</strong> Polymorphism enables adaptable code
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Data Protection:</strong> Encapsulation prevents misuse
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "classes-objects",
                title: "Classes and Objects",
                content: `
                    <div class="card mb-4">
                        <div class="card-header bg-info text-white">
                            <h5><i class="bi bi-box"></i> Class Definition</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>#include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    
    // Class declaration
    class Car {
    private:    // Access specifier (hidden from outside)
        string brand;   // Attribute
        int year;       // Attribute
        
    public:     // Access specifier (accessible)
        // Constructor
        Car(string b, int y) : brand(b), year(y) {}
        
        // Method
        void honk() {
            cout << "Beep beep!" << endl;
        }
        
        // Getter
        string getBrand() { return brand; }
        
        // Setter
        void setYear(int y) { 
            if (y > 1886) year = y; // Validation
        }
    };  // Semicolon required</code></pre>
                            
                            <h5 class="mt-4">Creating Objects:</h5>
                            <pre><code>int main() {
        // Create object (instance)
        Car myCar("Ford", 1969);
        
        // Call method
        myCar.honk();
        
        // Access via getter
        cout << "Brand: " << myCar.getBrand() << endl;
        
        // Modify via setter
        myCar.setYear(1970);
        
        return 0;
    }</code></pre>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-warning text-dark">
                                    <h5><i class="bi bi-key"></i> Access Specifiers</h5>
                                </div>
                                <div class="card-body">
                                    <table class="table table-sm">
                                        <tr>
                                            <td><code>public</code></td>
                                            <td>Accessible from anywhere</td>
                                        </tr>
                                        <tr>
                                            <td><code>private</code></td>
                                            <td>Only accessible within class</td>
                                        </tr>
                                        <tr>
                                            <td><code>protected</code></td>
                                            <td>Accessible within class and derived classes</td>
                                        </tr>
                                    </table>
                                    <div class="alert alert-info mt-2">
                                        <strong>Good Practice:</strong> Make member variables <code>private</code> and provide public getters/setters
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-secondary text-white">
                                    <h5><i class="bi bi-gear"></i> Special Member Functions</h5>
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <strong>Constructor:</strong> <code>ClassName(params)</code>
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Destructor:</strong> <code>~ClassName()</code>
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Copy Constructor:</strong> <code>ClassName(const ClassName&)</code>
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Copy Assignment:</strong> <code>operator=(const ClassName&)</code>
                                        </li>
                                        <li class="list-group-item">
                                            <strong>Move Operations:</strong> (C++11)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "inheritance",
                title: "Inheritance",
                content: `
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h5><i class="bi bi-diagram-3"></i> Inheritance Basics</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>#include &lt;iostream&gt;
    #include &lt;string&gt;
    using namespace std;
    
    // Base class
    class Animal {
    protected:
        string name;
        
    public:
        Animal(string n) : name(n) {}
        
        void eat() {
            cout << name << " is eating." << endl;
        }
    };
    
    // Derived class
    class Dog : public Animal {
    private:
        string breed;
        
    public:
        // Call base constructor
        Dog(string n, string b) : Animal(n), breed(b) {}
        
        void bark() {
            cout << name << " (" << breed << ") says: Woof!" << endl;
        }
    };
    
    int main() {
        Dog myDog("Buddy", "Golden Retriever");
        myDog.eat();  // Inherited method
        myDog.bark(); // Own method
        
        return 0;
    }</code></pre>
                            
                            <h5 class="mt-4">Inheritance Types:</h5>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Inheritance</th>
                                        <th>Base Access</th>
                                        <th>Derived Access</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>public</code></td>
                                        <td>Preserved</td>
                                        <td>public → public<br>protected → protected</td>
                                    </tr>
                                    <tr>
                                        <td><code>protected</code></td>
                                        <td>Demoted to protected</td>
                                        <td>public → protected<br>protected → protected</td>
                                    </tr>
                                    <tr>
                                        <td><code>private</code></td>
                                        <td>Demoted to private</td>
                                        <td>public → private<br>protected → private</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-layers"></i> Multiple Inheritance</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>class A { /*...*/ };
    class B { /*...*/ };
    
    class C : public A, public B {
        // Inherits from both A and B
    };</code></pre>
                                    <div class="alert alert-warning mt-2">
                                        <strong>Caution:</strong> Can lead to the "diamond problem" - use virtual inheritance when needed
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h5><i class="bi bi-file-earmark-code"></i> Overriding Methods</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>class Shape {
    public:
        virtual void draw() { // 'virtual' enables overriding
            cout << "Drawing shape" << endl;
        }
    };
    
    class Circle : public Shape {
    public:
        void draw() override { // 'override' ensures correct signature
            cout << "Drawing circle" << endl;
        }
    };</code></pre>
                                    <p class="mt-2"><code>override</code> keyword (C++11) helps catch errors at compile-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "polymorphism",
                title: "Polymorphism",
                content: `
                    <div class="card mb-4">
                        <div class="card-header bg-danger text-white">
                            <h5><i class="bi bi-shapes"></i> Runtime Polymorphism</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>#include &lt;iostream&gt;
    #include &lt;memory&gt; // For smart pointers
    #include &lt;vector&gt;
    using namespace std;
    
    class Animal {
    public:
        virtual void speak() = 0; // Pure virtual function
        virtual ~Animal() {} // Virtual destructor
    };
    
    class Dog : public Animal {
    public:
        void speak() override {
            cout << "Woof!" << endl;
        }
    };
    
    class Cat : public Animal {
    public:
        void speak() override {
            cout << "Meow!" << endl;
        }
    };
    
    int main() {
        vector&lt;unique_ptr&lt;Animal&gt;&gt; animals;
        animals.push_back(make_unique&lt;Dog&gt;());
        animals.push_back(make_unique&lt;Cat&gt;());
        
        for (auto& animal : animals) {
            animal->speak(); // Calls appropriate implementation
        }
        
        return 0;
    }</code></pre>
                            
                            <div class="row mt-4">
                                <div class="col-md-6">
                                    <div class="card h-100">
                                        <div class="card-header bg-dark text-white">
                                            <h5><i class="bi bi-cpu"></i> Virtual Functions</h5>
                                        </div>
                                        <div class="card-body">
                                            <ul>
                                                <li>Enable dynamic dispatch</li>
                                                <li>Require runtime overhead (vtable)</li>
                                                <li>Declare with <code>virtual</code></li>
                                                <li>Use <code>override</code> in derived classes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card h-100">
                                        <div class="card-header bg-warning text-dark">
                                            <h5><i class="bi bi-exclamation-triangle"></i> Important Rules</h5>
                                        </div>
                                        <div class="card-body">
                                            <ul>
                                                <li>Always make destructors virtual in base classes</li>
                                                <li>Abstract classes have ≥1 pure virtual function (<code>= 0</code>)</li>
                                                <li>Don't call virtual functions from constructors/destructors</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "modern-oop",
                title: "Modern C++ OOP Features",
                content: `
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4 h-100">
                                <div class="card-header bg-primary text-white">
                                    <h5><i class="bi bi-memory"></i> Smart Pointers (C++11)</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>#include &lt;memory&gt;
    
    class Resource { /*...*/ };
    
    void useResource() {
        // Automatic memory management
        auto ptr = make_unique&lt;Resource&gt;();
        
        // Shared ownership
        auto sharedPtr = make_shared&lt;Resource&gt;();
        
        // No need to call delete
    }</code></pre>
                                    <table class="table table-sm mt-3">
                                        <tr>
                                            <td><code>unique_ptr</code></td>
                                            <td>Exclusive ownership</td>
                                        </tr>
                                        <tr>
                                            <td><code>shared_ptr</code></td>
                                            <td>Shared ownership (reference counted)</td>
                                        </tr>
                                        <tr>
                                            <td><code>weak_ptr</code></td>
                                            <td>Non-owning observer</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4 h-100">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-arrow-left-right"></i> Move Semantics (C++11)</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>class Buffer {
        int* data;
        size_t size;
    public:
        // Move constructor
        Buffer(Buffer&& other) noexcept 
            : data(other.data), size(other.size) {
            other.data = nullptr; // Steal resources
        }
        
        // Move assignment
        Buffer& operator=(Buffer&& other) noexcept {
            if (this != &other) {
                delete[] data; // Release current
                data = other.data; // Steal
                size = other.size;
                other.data = nullptr;
            }
            return *this;
        }
    };</code></pre>
                                    <p class="mt-2">Enables efficient transfer of resources instead of copying</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-info text-white">
                                    <h5><i class="bi bi-code-square"></i> constexpr (C++11/14/17)</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>class Circle {
        constexpr static double PI = 3.14159;
        double radius;
    public:
        constexpr Circle(double r) : radius(r) {}
        
        constexpr double area() const {
            return PI * radius * radius;
        }
    };</code></pre>
                                    <p class="mt-2">Enables compile-time computation and object creation</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100">
                                <div class="card-header bg-warning text-dark">
                                    <h5><i class="bi bi-file-earmark-lock"></i> final (C++11)</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>class Base final { // Cannot be inherited
        virtual void method() final { // Cannot be overridden
            // Implementation
        }
    };</code></pre>
                                    <p class="mt-2">Prevents further inheritance or method overriding</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    advanced: {
        title: "Advanced C++ Programming",
        sections: [
            {
                id: "templates",
                title: "Templates and Generic Programming",
                content: `
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-primary text-white">
                                    <h5><i class="bi bi-file-earmark-binary"></i> Function Templates</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>template &lt;typename T&gt;
    T max(T a, T b) {
        return (a > b) ? a : b;
    }
    
    int main() {
        cout << max(3, 7) << endl;      // int
        cout << max(3.14, 2.71) << endl; // double
        cout << max('a', 'z') << endl;   // char
        return 0;
    }</code></pre>
                                    <div class="alert alert-info mt-3">
                                        <strong>Note:</strong> Templates are instantiated at compile-time for each used type.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-boxes"></i> Class Templates</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>template &lt;typename T, int size&gt;
    class Array {
        T arr[size];
    public:
        T& operator[](int index) {
            if (index < 0 || index >= size)
                throw out_of_range("Index out of bounds");
            return arr[index];
        }
    };
    
    int main() {
        Array&lt;double, 5&gt; doubles;
        Array&lt;string, 3&gt; strings;
        return 0;
    }</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="card mb-4">
                        <div class="card-header bg-info text-white">
                            <h5><i class="bi bi-magic"></i> Template Metaprogramming</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>template &lt;int N&gt;
    struct Factorial {
        static const int value = N * Factorial&lt;N-1&gt;::value;
    };
    
    template &lt;&gt;
    struct Factorial&lt;0&gt; {
        static const int value = 1;
    };
    
    int main() {
        cout << Factorial&lt;5&gt;::value; // 120 (computed at compile-time)
        return 0;
    }</code></pre>
                            <div class="alert alert-warning mt-3">
                                <strong>Modern Alternative:</strong> C++11's <code>constexpr</code> is often cleaner than TMP.
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "stl",
                title: "Standard Template Library (STL)",
                content: `
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h5><i class="bi bi-collection"></i> Key STL Components</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <h6>Containers</h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><code>vector</code></li>
                                        <li class="list-group-item"><code>list</code></li>
                                        <li class="list-group-item"><code>map</code></li>
                                        <li class="list-group-item"><code>unordered_map</code></li>
                                        <li class="list-group-item"><code>set</code></li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h6>Algorithms</h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><code>sort</code></li>
                                        <li class="list-group-item"><code>find</code></li>
                                        <li class="list-group-item"><code>transform</code></li>
                                        <li class="list-group-item"><code>accumulate</code></li>
                                        <li class="list-group-item"><code>copy_if</code></li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <h6>Utilities</h6>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><code>pair</code></li>
                                        <li class="list-group-item"><code>tuple</code></li>
                                        <li class="list-group-item"><code>function</code></li>
                                        <li class="list-group-item"><code>optional</code> (C++17)</li>
                                        <li class="list-group-item"><code>variant</code> (C++17)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-code-slash"></i> STL in Action</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>#include &lt;algorithm&gt;
    #include &lt;vector&gt;
    #include &lt;iostream&gt;
    
    int main() {
        std::vector&lt;int&gt; numbers = {5, 2, 8, 1, 9};
        
        // Sort the vector
        std::sort(numbers.begin(), numbers.end());
        
        // Find an element
        auto it = std::find(numbers.begin(), numbers.end(), 8);
        
        // Lambda function with capture
        int threshold = 5;
        auto count = std::count_if(numbers.begin(), numbers.end(),
            [threshold](int x) { return x > threshold; });
        
        std::cout << "Count above " << threshold << ": " << count;
        return 0;
    }</code></pre>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-warning text-dark">
                                    <h5><i class="bi bi-lightning"></i> Modern C++ Features</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>// Structured bindings (C++17)
    auto [min, max] = std::minmax({3, 9, 1, 7});
    
    // Range-based for with initializer (C++20)
    for (auto vec = std::vector{1, 2, 3}; auto& v : vec) {
        std::cout << v;
    }
    
    // Concepts (C++20)
    template &lt;typename T&gt;
    concept Numeric = std::integral&lt;T&gt; || std::floating_point&lt;T&gt;;
    
    template &lt;Numeric T&gt;
    T square(T x) { return x * x; }</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "concurrency",
                title: "Concurrency and Multithreading",
                content: `
                    <div class="card mb-4">
                        <div class="card-header bg-danger text-white">
                            <h5><i class="bi bi-cpu"></i> Thread Management</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>#include &lt;iostream&gt;
    #include &lt;thread&gt;
    #include &lt;vector&gt;
    
    void worker(int id) {
        std::cout << "Thread " << id << " working\n";
    }
    
    int main() {
        std::vector&lt;std::thread&gt; threads;
        
        // Launch 5 threads
        for (int i = 0; i < 5; ++i) {
            threads.emplace_back(worker, i);
        }
        
        // Join all threads
        for (auto& t : threads) {
            t.join();
        }
        
        return 0;
    }</code></pre>
                            <div class="alert alert-warning mt-3">
                                <strong>Caution:</strong> Always join or detach threads before they go out of scope.
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-info text-white">
                                    <h5><i class="bi bi-lock"></i> Mutex and Locks</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>#include &lt;mutex&gt;
    
    std::mutex mtx;
    int shared_data = 0;
    
    void safe_increment() {
        std::lock_guard&lt;std::mutex&gt; lock(mtx);
        shared_data++;
        
        // Automatically unlocks when lock_guard goes out of scope
    }
    
    // C++17 scoped_lock for multiple mutexes
    std::mutex mtx1, mtx2;
    void dual_lock() {
        std::scoped_lock lock(mtx1, mtx2);
        // Critical section
    }</code></pre>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-bell"></i> Condition Variables</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>std::mutex mtx;
    std::condition_variable cv;
    bool ready = false;
    
    void consumer() {
        std::unique_lock&lt;std::mutex&gt; lock(mtx);
        cv.wait(lock, []{ return ready; });
        // Process data
    }
    
    void producer() {
        {
            std::lock_guard&lt;std::mutex&gt; lock(mtx);
            ready = true;
        }
        cv.notify_one();
    }</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="card mb-4">
                        <div class="card-header bg-primary text-white">
                            <h5><i class="bi bi-lightning-charge"></i> Async and Futures</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>#include &lt;future&gt;
    #include &lt;chrono&gt;
    
    int compute() {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        return 42;
    }
    
    int main() {
        // Launch async task
        auto future = std::async(std::launch::async, compute);
        
        // Do other work...
        
        // Get result (blocks if not ready)
        int result = future.get();
        std::cout << "Result: " << result;
        return 0;
    }</code></pre>
                        </div>
                    </div>
                `
            },
            {
                id: "modern-features",
                title: "Modern C++ Features",
                content: `
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-warning text-dark">
                                    <h5><i class="bi bi-arrow-left-right"></i> Move Semantics</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>class Resource {
        int* data;
    public:
        // Move constructor
        Resource(Resource&& other) noexcept 
            : data(other.data) {
            other.data = nullptr;
        }
        
        // Move assignment
        Resource& operator=(Resource&& other) noexcept {
            if (this != &other) {
                delete[] data;
                data = other.data;
                other.data = nullptr;
            }
            return *this;
        }
        
        ~Resource() { delete[] data; }
    };
    
    Resource createResource() {
        Resource r;
        // ... initialize r
        return r; // Invokes move constructor
    }</code></pre>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-info text-white">
                                    <h5><i class="bi bi-lambda"></i> Lambda Expressions</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>// Basic lambda
    auto greet = []() { std::cout << "Hello"; };
    
    // With parameters and return type
    auto add = [](int a, int b) -> int { return a + b; };
    
    // With capture clause
    int x = 10;
    auto capture_example = [x](int y) { return x + y; };
    
    // Generic lambda (C++14)
    auto generic_add = [](auto a, auto b) { return a + b; };
    
    // Variadic generic lambda (C++20)
    auto print_all = [...args = std::forward&lt;Args&gt;(args)] {
        (std::cout << ... << args);
    };</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-success text-white">
                                    <h5><i class="bi bi-file-earmark-check"></i> constexpr</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>// C++11: Simple constexpr
    constexpr int factorial(int n) {
        return (n <= 1) ? 1 : n * factorial(n - 1);
    }
    
    // C++14: More flexible constexpr
    constexpr auto create_array(int size) {
        std::array&lt;int, 5&gt; arr{};
        for (int i = 0; i < size; ++i) {
            arr[i] = i * i;
        }
        return arr;
    }
    
    // C++20: constexpr algorithms
    constexpr bool has_three(const auto& range) {
        return std::find(range.begin(), range.end(), 3) != range.end();
    }</code></pre>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-primary text-white">
                                    <h5><i class="bi bi-shield-check"></i> Concepts (C++20)</h5>
                                </div>
                                <div class="card-body">
                                    <pre><code>// Define a concept
    template &lt;typename T&gt;
    concept Addable = requires(T a, T b) {
        { a + b } -> std::same_as&lt;T&gt;;
    };
    
    // Use the concept
    template &lt;Addable T&gt;
    T sum(T a, T b) { return a + b; }
    
    // Standard concepts
    template &lt;std::integral T&gt;
    T half(T x) { return x / 2; }
    
    // Compound concept
    template &lt;typename T&gt;
    concept PrintableAndAddable = Addable&lt;T&gt; && requires(std::ostream& os, T t) {
        { os << t } -> std::same_as&lt;std::ostream&>;
    };</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "best-practices",
                title: "Advanced Best Practices",
                content: `
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-danger text-white">
                                    <h5><i class="bi bi-exclamation-triangle"></i> Exception Safety</h5>
                                </div>
                                <div class="card-body">
                                    <h6>Exception Safety Guarantees:</h6>
                                    <ol>
                                        <li><strong>No-throw</strong>: Operation never throws</li>
                                        <li><strong>Strong</strong>: On failure, state is unchanged</li>
                                        <li><strong>Basic</strong>: On failure, state is valid but unspecified</li>
                                        <li><strong>No</strong>: No guarantees</li>
                                    </ol>
                                    <pre><code>class ResourceHolder {
        Resource* res;
    public:
        // Strong exception safety
        void safe_operation() {
            auto new_res = new Resource(); // Might throw
            delete res; // Only after new succeeds
            res = new_res;
        }
        
        ~ResourceHolder() { delete res; }
    };</code></pre>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-4">
                                <div class="card-header bg-info text-white">
                                    <h5><i class="bi bi-speedometer2"></i> Performance Optimization</h5>
                                </div>
                                <div class="card-body">
                                    <h6>Key Techniques:</h6>
                                    <ul>
                                        <li><strong>Move semantics</strong> over copying</li>
                                        <li><strong>Reserve capacity</strong> for containers</li>
                                        <li><strong>constexpr</strong> for compile-time computation</li>
                                        <li><strong>Inline small functions</strong></li>
                                        <li><strong>Profile-guided optimization</strong></li>
                                    </ul>
                                    <pre><code>// Optimized vector usage
    std::vector&lt;int&gt; v;
    v.reserve(1000); // Avoid reallocations
    
    for (int i = 0; i < 1000; ++i) {
        v.push_back(i); // No reallocation
    }
    
    // Use emplace_back for complex types
    std::vector&lt;std::string&gt; strings;
    strings.emplace_back("Hello"); // Constructs in-place</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="card mb-4">
                        <div class="card-header bg-success text-white">
                            <h5><i class="bi bi-shield-lock"></i> RAII (Resource Acquisition Is Initialization)</h5>
                        </div>
                        <div class="card-body">
                            <pre><code>class FileHandle {
        FILE* file;
    public:
        explicit FileHandle(const char* filename, const char* mode)
            : file(fopen(filename, mode)) {
            if (!file) throw std::runtime_error("File open failed");
        }
        
        ~FileHandle() { if (file) fclose(file); }
        
        // Prevent copying
        FileHandle(const FileHandle&) = delete;
        FileHandle& operator=(const FileHandle&) = delete;
        
        // Allow moving
        FileHandle(FileHandle&& other) noexcept : file(other.file) {
            other.file = nullptr;
        }
        
        void write(const std::string& data) {
            if (fwrite(data.data(), 1, data.size(), file) != data.size()) {
                throw std::runtime_error("Write failed");
            }
        }
    };
    
    void use_file() {
        FileHandle f("data.txt", "w");
        f.write("Hello RAII");
        // File automatically closed when f goes out of scope
    }</code></pre>
                            <div class="alert alert-info mt-3">
                                <strong>Modern C++:</strong> Use smart pointers (<code>unique_ptr</code>, <code>shared_ptr</code>) for memory RAII.
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Load default section (home)
    showSection('home');
    
    // Initialize sidebar navigation
    initSidebar();
});

// Show a specific section
function showSection(sectionId) {
    const section = tutorialData[sectionId];
    if (!section) return;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Build HTML content
    let html = `<h1 class="mb-4">${section.title}</h1>`;
    
    section.sections.forEach(sec => {
        html += `
            <section id="${sec.id}" class="mb-5">
                <h2 class="h4 mb-3">${sec.title}</h2>
                ${sec.content}
            </section>
            <hr>
        `;
    });
    
    document.getElementById('main-content').innerHTML = html;
    
    // Update sidebar active item
    updateSidebarActiveItem();
}

// Initialize sidebar navigation
function initSidebar() {
    const sidebarNav = document.getElementById('sidebar-nav');
    let sidebarHtml = '';
    
    // Add links for all sections
    Object.keys(tutorialData).forEach(sectionId => {
        const section = tutorialData[sectionId];
        sidebarHtml += `
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="showSection('${sectionId}')">
                    ${section.title}
                </a>
            </li>
        `;
    });
    
    sidebarNav.innerHTML = sidebarHtml;
}

// Update active item in sidebar
function updateSidebarActiveItem() {
    document.querySelectorAll('#sidebar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}