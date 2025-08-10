
import type { PastPaper } from '../../types';

export const pastPapers: PastPaper[] = [
  {
    id: 'pp-cs-2016-1',
    year: 2016,
    subject: 'Computer Science',
    questions: [
      {
        id: 'pp-cs-2016-1-q2a',
        questionType: 'Other',
        questionText: 'Write a program to input choice from user for temperature conversion from Fahrenheit to Celsius or Celsius to Fahrenheit. After the choice, input temperature from user and display the converted answer.',
        idealAnswer: 'The program should present a menu with two choices. Based on user input, it should prompt for the temperature, perform the correct conversion (C = (F-32)*5/9 or F = C*9/5 + 32), and print the result. This involves basic input/output, conditional statements (if-else or switch), and floating-point arithmetic.'
      },
      {
        id: 'pp-cs-2016-1-q2b',
        questionType: 'Other',
        questionText: 'Which type of computer (supercomputers, mainframe computers, minicomputers, microcomputers) will suit an individual? Justify your answer.',
        idealAnswer: 'A microcomputer (like a desktop or laptop) is suitable for an individual. They are designed for personal use, are cost-effective, and provide sufficient processing power for everyday tasks like word processing, internet browsing, and entertainment, unlike the other types which are designed for large-scale, specialized, or multi-user applications.'
      },
      {
        id: 'pp-cs-2016-1-q2c',
        questionType: 'Other',
        questionText: 'Suppose you are trying to build a Student Registration System using object oriented approach. In C++ syntax define following classes with suitable attributes each having getdata( ) and showdata( ) member functions along with suitable constructor functions: Person, Teacher, Student, Course, Section, Allocation, Registration. You can add more classes which you think suitable for the system.',
        idealAnswer: 'The solution requires defining C++ classes. A `Person` base class with name, age, etc. `Teacher` and `Student` would inherit from `Person`. Other classes like `Course`, `Section`, `Allocation`, and `Registration` would be defined with relevant attributes (e.g., `Course` with course_code, `Registration` linking a student and a course). Each class should have a constructor, and member functions to set and display its data.'
      },
      {
        id: 'pp-cs-2016-1-q3a',
        questionType: 'Other',
        questionText: 'Define a function named monthly-profit which will calculate the monthly profit on the given investment amount. Function will take two float arguments, percent profit rate and investment amount and return the monthly profit (float). Write function prototype, function definition and a main program to demonstrate the functionality.',
        idealAnswer: 'The solution requires writing a C++ function `float monthly_profit(float rate, float investment)` that returns `(rate / 100) * investment`. A `main` function should be written to get the rate and investment from the user, call this function, and print the returned result.'
      },
      {
        id: 'pp-cs-2016-1-q3b',
        questionType: 'Other',
        questionText: 'Explain and differentiate between volatile and non-volatile memory, giving examples.',
        idealAnswer: 'Volatile memory requires power to maintain the stored information; its contents are lost when the power is turned off. Example: RAM (Random Access Memory). Non-volatile memory retains the stored information even when not powered. Example: ROM (Read-Only Memory), SSDs, and hard drives.'
      },
      {
        id: 'pp-cs-2016-1-q3c',
        questionType: 'Other',
        questionText: 'Suppose you are trying to build a Library Information System using object oriented approach... describe which class you will define, which data members you will add, which member functions you will include in those classes... in C++ syntax.',
        idealAnswer: 'The design should include classes like `Book` (title, author, ISBN), `Member` (inheriting from a `Person` class), and `Loan` (linking a `Book` and a `Member`, with due date). Member functions would include methods to issue a book, return a book, and calculate fines. This demonstrates an understanding of OOP design principles like abstraction and association.'
      },
      {
        id: 'pp-cs-2016-1-q4a',
        questionType: 'Other',
        questionText: 'Define a structure to store records of Persons. We want to store only Name, age and address of Person. Write main program to input record of one person and display ‘Young’ if its age is less than 20 or ‘Old’ if the age is greater than 50 and ‘Middle’ if the age of person is between 21 and 49.',
        idealAnswer: 'The solution involves defining a `struct Person { string name; int age; string address; }`. The `main` program would declare a variable of this struct type, take input for its members, and then use a series of if-else if statements to check the `age` member and print the corresponding category ("Young", "Old", or "Middle").'
      },
      {
        id: 'pp-cs-2016-1-q4b',
        questionType: 'Other',
        questionText: 'Convert given binary numbers to Decimal, Octal and Hexadecimal. (i) 100(2) (ii) 10100(2) (iii) 100101(2)',
        idealAnswer: '(i) 100₂ = 4₁₀, 4₈, 4₁₆. (ii) 10100₂ = 20₁₀, 24₈, 14₁₆. (iii) 100101₂ = 37₁₀, 45₈, 25₁₆. The process involves converting binary to decimal first, then from decimal to the other bases, or by grouping binary digits for direct conversion.'
      },
      {
        id: 'pp-cs-2016-1-q4c',
        questionType: 'Other',
        questionText: 'Suppose you are designing software for a Medical Store, using object oriented techniques. Decide and define classes (like ‘Person’, ‘Customer’, ‘Salesman’, ‘Purchase’ etc.) and their attributes in C++ or Java syntax. You are not required to write any member functions and main programme. You must use inheritance where suitable.',
        idealAnswer: 'A good design would include a `Medicine` class (name, batchNo, expiryDate), a `Person` base class, with `Customer` and `Employee` classes inheriting from it. A `Sale` class would associate a `Customer`, `Employee`, and a list of `Medicine` objects. This demonstrates understanding of inheritance and class relationships in OOP.'
      },
      {
        id: 'pp-cs-2016-1-q5a',
        questionType: 'Other',
        questionText: 'Describe the followings (no description with more than three lines); i. Sibling Nodes ... viii. Maximum number of nodes in a Binary Tree at level L.',
        idealAnswer: 'i. Sibling Nodes: Nodes that share the same parent. ii. Degree of a tree: The maximum degree of any node in the tree. iii. Leaf Node: A node with no children. iv. Height of a tree: The length of the longest path from the root to a leaf. v. Binary Tree: A tree where each node has at most two children. vi. Full Binary Tree: A binary tree where every node has either 0 or 2 children. vii. Complete Binary Tree: A binary tree that is completely filled, with the possible exception of the bottom level, which is filled from left to right. viii. Maximum nodes at level L: 2^L (assuming root is at level 0).'
      },
      {
        id: 'pp-cs-2016-1-q5b',
        questionType: 'Other',
        questionText: 'Find the time complexity of Binary search by resolving the recurrence T(n) = 4 + T(n/2) using iterative substitution method.',
        idealAnswer: 'By iterative substitution, T(n) = 4 + T(n/2) = 4 + (4 + T(n/4)) = 2*4 + T(n/2²). After k iterations, T(n) = k*4 + T(n/2^k). Let n=2^k, so k=log₂(n). T(n) = 4*log₂(n) + T(1) = 4*log₂(n) + 2. Therefore, the time complexity is O(log n).'
      },
      {
        id: 'pp-cs-2016-1-q5c',
        questionType: 'Other',
        questionText: 'Draw the given array in the form of binary tree. Then apply ‘Build-Heap’ Algorithm to convert the given tree in the form of Max-Heap... Finally show execution of ‘Heap-sort’ algorithm...',
        idealAnswer: 'This requires a multi-step visual and algorithmic explanation. First, draw the initial binary tree from the array. Second, apply the Build-Heap algorithm starting from the last non-leaf node to transform it into a Max-Heap. Third, demonstrate Heap-sort by repeatedly swapping the root with the last element, reducing the heap size, and calling heapify on the root.'
      },
      {
        id: 'pp-cs-2016-1-q6a',
        questionType: 'Other',
        questionText: 'Write Abstract Data Types (ADT) of Stack and Queue. Include the specifications of Add, Delete, IsEmpty, IsFull functions along with their respective functions.',
        idealAnswer: 'Stack ADT: A LIFO (Last-In, First-Out) structure. Functions: `push(item)` (Add), `pop()` (Delete), `isEmpty()`, `isFull()`, `peek()`. Queue ADT: A FIFO (First-In, First-Out) structure. Functions: `enqueue(item)` (Add), `dequeue()` (Delete), `isEmpty()`, `isFull()`, `front()`.'
      },
      {
        id: 'pp-cs-2016-1-q6b',
        questionType: 'Other',
        questionText: 'For step count expressions n² + 10 and 2ⁿ / 4 find breakeven point i.e. for which value of n (starting from 1,2…) second expression will become greater than value of first expression.',
        idealAnswer: 'This requires testing values of n. For n=1, 11 > 0.5. For n=2, 14 > 1. ... For n=7, 59 > 32. For n=8, 74 > 64. For n=9, 91 < 128. The breakeven point occurs at n=9, where the exponential function 2ⁿ/4 starts to grow faster than the quadratic function n²+10.'
      },
      {
        id: 'pp-cs-2016-1-q6c',
        questionType: 'Other',
        questionText: 'In AVL tree balance factor of every node is -1 or 0 or +1... Construct AVL tree from the given data; A = {8, 14, 2, 26, 10, 12, 16, 28, 20, 7}',
        idealAnswer: 'This involves inserting each element one by one into a binary search tree and performing rotations (LL, RR, LR, RL) whenever the balance factor of any node becomes -2 or +2 to maintain the AVL property. The final AVL tree would be a balanced binary search tree containing all the elements.'
      },
      {
        id: 'pp-cs-2016-1-q7a',
        questionType: 'Other',
        questionText: 'Draw a diagram that illustrates the process of translating a C++ source file into an executable file. Give example of each phase...',
        idealAnswer: 'Diagram: Source Code -> Preprocessor -> Preprocessed Code -> Compiler -> Assembly Code -> Assembler -> Object Code -> Linker (with Libraries) -> Executable File. An example would show a `#include` directive being handled by the preprocessor, a `for` loop being turned into assembly instructions by the compiler, and so on.'
      },
      {
        id: 'pp-cs-2016-1-q7b',
        questionType: 'Other',
        questionText: 'Compare and contrast among compiler, interpreter and assembler.',
        idealAnswer: 'Compiler: Translates the entire high-level program into machine code before execution (e.g., C++). Interpreter: Translates and executes the program line-by-line (e.g., Python). Assembler: Translates assembly language (low-level) into machine code. Compilers produce faster executables, while interpreters are more flexible.'
      },
      {
        id: 'pp-cs-2016-1-q7c',
        questionType: 'Other',
        questionText: 'Describe Software Development Life Cycle (SDLC). Explain your answer with the help of depicting and describing different phases of pure water fall software life cycle.',
        idealAnswer: 'SDLC is a framework for developing software. The Waterfall model is a sequential SDLC model with distinct phases: 1. Requirements, 2. Design, 3. Implementation, 4. Verification (Testing), 5. Maintenance. Each phase must be fully completed before the next phase begins.'
      },
      {
        id: 'pp-cs-2016-1-q7d',
        questionType: 'Other',
        questionText: 'What is the difference between SRS document and design document? What are the contents we should contain in the SRS document and design document.',
        idealAnswer: 'The SRS (Software Requirements Specification) document describes *what* the system should do (functional and non-functional requirements). The Design Document describes *how* the system will do it (architecture, modules, interfaces, data structures). SRS focuses on the problem, while the Design Document focuses on the solution.'
      },
      {
        id: 'pp-cs-2016-1-q8a',
        questionType: 'Other',
        questionText: 'What are the purposes of Data Flow diagrams, Entity-Relationship diagrams? Give an example diagram of each.',
        idealAnswer: 'Data Flow Diagrams (DFDs) show the flow of data through a system, detailing processes, data stores, and external entities. Entity-Relationship Diagrams (ERDs) model the data itself, showing entities (like Student, Course) and their relationships. An example DFD would show a process like "Register Student", while an ERD would show the relationship between the Student and Course entities.'
      },
      {
        id: 'pp-cs-2016-1-q8b',
        questionType: 'Other',
        questionText: 'Explain five properties of language using the example of English. Explain why a software language like MiniJava meets these properties as well.',
        idealAnswer: 'Properties could include: Syntax (grammar rules), Semantics (meaning), Generativity (ability to create new sentences), Displacement (ability to talk about things not present), and Arbitrariness (no inherent connection between a word and its meaning). A programming language also has syntax, semantics, and generativity.'
      },
      {
        id: 'pp-cs-2016-1-q8c',
        questionType: 'Other',
        questionText: 'Lexical analysis: Consider the following regular expression r1 = (A | …. | Z) * (0 | …. | 9)*... Describe the language defined by r1 in English...',
        idealAnswer: 'The language defined by r1 is the set of all strings that start with zero or more uppercase letters (A-Z) followed by zero or more digits (0-9). The solution would then involve drawing a Non-deterministic Finite Automaton (NFA) with epsilon moves that represents this RE, and then converting it to a Deterministic Finite Automaton (DFA).'
      },
      {
        id: 'pp-cs-2016-1-q8d',
        questionType: 'Other',
        questionText: 'What do you mean by Context Free Grammar (CFG)? Illustrate your answer with examples.',
        idealAnswer: 'A Context-Free Grammar is a formal grammar used to describe a context-free language. It consists of a set of production rules that specify how to generate strings in the language. For example, a simple CFG for balanced parentheses could be S -> (S) | SS | ε.'
      },
      {
        id: 'pp-cs-2016-2-q2a',
        questionType: 'Other',
        questionText: 'Suppose you add two new devices to an existing five-device network. If you have a fully connected mesh topology, how many new cable lines are needed? If, however, the devices are arranged in a ring, how many new cable lines are needed?',
        idealAnswer: 'Mesh: A 5-device mesh has 5*4/2 = 10 lines. A 7-device mesh has 7*6/2 = 21 lines. So, 11 new lines are needed. However, to connect the 2 new devices to the existing 5 and to each other: (2 * 5) + 1 = 11 new lines. Ring: In a ring, adding 2 devices means breaking one link and adding 3 new links, for a net increase of 2 new cable lines.'
      },
      {
        id: 'pp-cs-2016-2-q2b',
        questionType: 'Other',
        questionText: 'Transmission media are not perfect because of imperfections and impairments in the signal sent through the medium... Discuss in detail the impairments in the transmission medium.',
        idealAnswer: 'Impairments include: 1. Attenuation: Loss of signal strength over distance. 2. Distortion: Change in signal shape, often due to different frequencies traveling at different speeds. 3. Noise: Unwanted signals (thermal, crosstalk, impulse noise) that corrupt the original signal.'
      },
      {
        id: 'pp-cs-2016-2-q2c',
        questionType: 'Other',
        questionText: 'Whenever multiple devices are used in a network, the problem arises that how to connect them to make one-on-one communication possible... Explain briefly the methods of switching used by computer networks.',
        idealAnswer: 'The main methods are: 1. Circuit Switching: A dedicated physical path is established between two stations for the duration of the communication (e.g., traditional phone network). 2. Packet Switching: Data is broken into small packets, each routed independently through the network (e.g., the Internet).'
      },
      {
        id: 'pp-cs-2016-2-q3a',
        questionType: 'Other',
        questionText: 'RAID is a physical disk drives viewed by the operating system as a single logical drive... Explain different levels of RAID? Elaborate your answer with suitable diagrams.',
        idealAnswer: 'RAID (Redundant Array of Independent Disks) levels include: RAID 0 (Striping, no redundancy), RAID 1 (Mirroring, for redundancy), RAID 5 (Striping with distributed parity, for performance and redundancy), and RAID 6 (Striping with double parity). Diagrams would illustrate how data is distributed across the disks for each level.'
      },
      {
        id: 'pp-cs-2016-2-q3b',
        questionType: 'Other',
        questionText: 'The basic function performed by a computer is execution of a program... Elaborate basic instruction cycle used by modern computer systems. Also add diagrams for explanation.',
        idealAnswer: 'The basic instruction cycle consists of: 1. Fetch: Retrieve an instruction from memory. 2. Decode: Interpret the instruction. 3. Execute: Perform the action required by the instruction. A diagram would show the flow between the Program Counter, Memory Address Register, Memory Data Register, and the Control Unit during this cycle.'
      },
      {
        id: 'pp-cs-2016-2-q3c',
        questionType: 'Other',
        questionText: 'Differentiate between Reduced Instruction Set Computers (RISC) and Complex Instruction Set Computers (CISC) architectures.',
        idealAnswer: 'RISC emphasizes a smaller set of simple, fixed-length instructions that can be executed quickly, often in a single clock cycle. CISC uses a larger set of more complex, variable-length instructions that can perform multi-step operations. RISC relies more on the compiler, while CISC puts more complexity in the hardware.'
      },
      {
        id: 'pp-cs-2016-2-q4a',
        questionType: 'Other',
        questionText: 'Deadlock prevention algorithms prevents deadlock by restraining how requests can be made... Explain the Banker’s Algorithm for deadlock avoidance.',
        idealAnswer: 'The Banker\'s Algorithm is a deadlock avoidance algorithm. It requires processes to declare their maximum resource needs in advance. The system then checks if granting a resource request would lead to a "safe state" (a sequence where all processes can finish). If not, the request is denied until it becomes safe.'
      },
      {
        id: 'pp-cs-2016-2-q4b',
        questionType: 'Other',
        questionText: 'Central Processing Unit (CPU) scheduling deal with the problem of deciding which of the processes in the ready queue is to be allocated to the CPU. What are the pros and cons of Multilevel Queue Scheduling and Multilevel Feedback Queue Scheduling?',
        idealAnswer: 'Multilevel Queue Scheduling partitions the ready queue into several separate queues with different priorities, but lacks flexibility. Multilevel Feedback Queue Scheduling allows processes to move between queues based on their CPU usage, preventing starvation and providing more flexibility, but is more complex to implement.'
      },
      {
        id: 'pp-cs-2016-2-q4c',
        questionType: 'Other',
        questionText: 'What do you know about Process Control Block? Discuss its components in detail.',
        idealAnswer: 'A Process Control Block (PCB) is a data structure in the operating system kernel that contains all the information needed to manage a particular process. Its components include: Process State, Program Counter, CPU Registers, CPU Scheduling Information, Memory-Management Information, and I/O Status Information.'
      },
      {
        id: 'pp-cs-2016-2-q5a',
        questionType: 'Other',
        questionText: 'A complete SELECT statement embedded within another SELECT statement... Differentiate among following nested sub-queries operators “IN”, “ANY” and “ALL”.',
        idealAnswer: 'IN: Checks if a value matches any value in the subquery result set. ANY: Compares a value to each value returned by the subquery (e.g., >ANY means greater than the minimum). ALL: Compares a value to every value returned by the subquery (e.g., >ALL means greater than the maximum).'
      },
      {
        id: 'pp-cs-2016-2-q5b',
        questionType: 'Other',
        questionText: 'Explain how Pattern match search condition (LIKE/NOT LIKE) can be used in SELECT statement part of SQL in database management system.',
        idealAnswer: 'The LIKE operator is used in a WHERE clause to search for a specified pattern in a column. It uses wildcard characters: % (matches any sequence of characters) and _ (matches any single character). NOT LIKE finds rows that do not match the pattern.'
      },
      {
        id: 'pp-cs-2016-2-q5c',
        questionType: 'Other',
        questionText: 'Differentiate between Data Manipulation Language (DML) and Data Definition Language (DDL) of structured query language (SQL) in database management system (DBMS).',
        idealAnswer: 'DDL statements are used to define and manage the database structure (e.g., CREATE TABLE, ALTER TABLE, DROP TABLE). DML statements are used to manage the data within that structure (e.g., SELECT, INSERT, UPDATE, DELETE).'
      },
      {
        id: 'pp-cs-2016-2-q6a',
        questionType: 'Other',
        questionText: 'A transaction is a unit of program execution that accesses and possibly updates various data items. Explain the ACID property of transaction processing.',
        idealAnswer: 'ACID properties ensure transaction reliability: Atomicity (all or nothing), Consistency (brings database from one valid state to another), Isolation (concurrent transactions do not interfere with each other), and Durability (once a transaction is committed, it remains so).'
      },
      {
        id: 'pp-cs-2016-2-q6b',
        questionType: 'Other',
        questionText: 'Distinguish among functional dependency, Fully functional dependency and Transitive dependency.',
        idealAnswer: 'Functional Dependency (A->B): The value of B is determined by the value of A. Fully Functional Dependency: A non-key attribute is dependent on the entire primary key, not just a part of it. Transitive Dependency: An indirect relationship where A->B and B->C, which leads to A->C.'
      },
      {
        id: 'pp-cs-2016-2-q6c',
        questionType: 'Other',
        questionText: 'A trigger is a statement that the system executes automatically as a side effect of a modification to the database. What are the different forms of triggers and how they are defined?',
        idealAnswer: 'Triggers can be defined to execute BEFORE or AFTER an INSERT, UPDATE, or DELETE operation on a specific table. They can be row-level (fire for each affected row) or statement-level (fire once per statement). They are defined using a CREATE TRIGGER statement in SQL.'
      },
      {
        id: 'pp-cs-2016-2-q7a',
        questionType: 'Other',
        questionText: 'Write down a short note on Array versus Matrix Operations',
        idealAnswer: 'Array operations are typically element-wise (e.g., adding corresponding elements). Matrix operations follow specific rules of linear algebra, such as matrix multiplication, which involves dot products of rows and columns, and is not element-wise.'
      },
      {
        id: 'pp-cs-2016-2-q7b',
        questionType: 'Other',
        questionText: 'Differentiate between CMY and CMYK Colour Models used in digital image processing.',
        idealAnswer: 'CMY (Cyan, Magenta, Yellow) is a subtractive color model used in printing. CMYK adds a Key (black) channel because mixing C, M, and Y produces a muddy brown, not a true black. CMYK provides better contrast and saves ink.'
      },
      {
        id: 'pp-cs-2016-2-q7c',
        questionType: 'Other',
        questionText: 'Explain the Boundary Extraction Algorithm used for basic morphology.',
        idealAnswer: 'Boundary extraction is a morphological operation that finds the outline of an object in a binary image. The algorithm typically works by first eroding the original image and then subtracting the eroded image from the original image, leaving only the pixels on the boundary.'
      },
      {
        id: 'pp-cs-2016-2-q8a',
        questionType: 'Other',
        questionText: 'Explain the principals of requirement engineering of web applications.',
        idealAnswer: 'Principles include: understanding the problem, identifying stakeholders, defining the system\'s scope and boundaries, specifying functional and non-functional requirements, and managing changes to requirements throughout the development process.'
      },
      {
        id: 'pp-cs-2016-2-q8b',
        questionType: 'Other',
        questionText: 'Elaborate the term E-Commerce. Discuss in detail about the effects of E-Commerce in Islamic Banking in Pakistan.',
        idealAnswer: 'E-commerce is the buying and selling of goods and services over the internet. For Islamic Banking in Pakistan, it has enabled online banking services, digital payments, and the development of Sharia-compliant e-commerce platforms, increasing accessibility and efficiency while ensuring adherence to Islamic finance principles.'
      },
      {
        id: 'pp-cs-2016-2-q8c',
        questionType: 'Other',
        questionText: 'What are the components of Generic web application architecture?',
        idealAnswer: 'A generic web application architecture typically follows a multi-tier model, most commonly a three-tier architecture: 1. Presentation Tier (the user interface, or front-end). 2. Application/Logic Tier (the server-side logic, or back-end). 3. Data Tier (the database that stores the application data).'
      }
    ]
  },
  {
    id: 'pp-cs-2017-1',
    year: 2017,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2017-1-q2a',
            questionType: 'Other',
            questionText: 'The internet era has given rise to the problem of cybercrimes. Given the need to maintain privacy which is an ethical responsibility of the government, what technical means would you suggest to curb this problem?',
            idealAnswer: 'Technical means include promoting strong encryption for communications, implementing robust firewall and intrusion detection systems, using digital signatures and certificates to verify identities, and employing advanced data analytics and AI to detect and prevent malicious activities.'
        },
        {
            id: 'pp-cs-2017-1-q2b',
            questionType: 'Other',
            questionText: 'Describe the difference between Harvard and Von-Neumann architectures of computers. Also discuss their traits in the light of their capabilities.',
            idealAnswer: 'Von-Neumann architecture uses a single memory space for both instructions and data. Harvard architecture uses separate memories for instructions and data. Harvard allows simultaneous fetching of instructions and data, potentially leading to better performance, especially in specialized processors like DSPs.'
        },
        {
            id: 'pp-cs-2017-1-q2c',
            questionType: 'Other',
            questionText: 'Virtual memory is used by the computer to support the running of heavy applications. Describe the functioning of virtual memory in the computer. Also comment on the management of virtual and physical memory by an operating system.',
            idealAnswer: 'Virtual memory creates the illusion of a large main memory by using disk space as an extension of RAM. The OS manages this through paging, swapping less-used pages from RAM to disk. This allows for running applications larger than the physical RAM, but can lead to "thrashing" if not managed efficiently.'
        },
        {
            id: 'pp-cs-2017-1-q3a',
            questionType: 'Other',
            questionText: 'Three types of languages exist for use in programming of computers, Machine, Low Level and High Level languages. Elucidate on these three types, giving details of the conversion process between Low Level and High Level language into Machine language.',
            idealAnswer: 'Machine language is binary code directly executed by the CPU. Low-level (Assembly) language uses mnemonics and is translated by an Assembler. High-level languages (like C++, Python) are human-readable and are translated into machine code by a Compiler or executed by an Interpreter.'
        },
        {
            id: 'pp-cs-2017-1-q3b',
            questionType: 'Other',
            questionText: 'Write a function that calculates the quadratic equation in ax^2 + bx + c = 0. You may use the math library for this purpose. The program should ask the user to enter values of a, b and c and should print the result.',
            idealAnswer: 'The function should take a, b, and c as input. It should first calculate the discriminant (b² - 4ac). Based on the discriminant, it should then calculate and print the real or complex roots using the quadratic formula: x = (-b ± sqrt(b²-4ac)) / 2a.'
        },
        {
            id: 'pp-cs-2017-1-q3c',
            questionType: 'Other',
            questionText: 'Consider that you are required to create a program for a supermarket checkout machine...Make a program that requires the cashier (user) to enter the code or name of the product and the quantity that has been bought. It should allow for multiple entries to be made...prints the total amount...',
            idealAnswer: 'The solution would involve defining a `struct` or `class` for items (code, name, price). A database (e.g., an array of these structs) would be created. The program would use a loop to repeatedly ask for item code/name and quantity, look up the price, calculate the subtotal, and add it to a running total. The loop would terminate on a specific user input (e.g., \'N\').'
        },
        {
            id: 'pp-cs-2017-1-q4a',
            questionType: 'Other',
            questionText: 'What factors should be considered when choosing particularly between evolutionary and incremental models? Elucidate the characteristics of Rapid Application Development, Joint Application Development and Agile Software Engineering.',
            idealAnswer: 'Choose incremental models when requirements are well-understood. Choose evolutionary models (like spiral) when requirements are uncertain and risk is high. RAD focuses on rapid prototyping. JAD involves intensive workshops with users. Agile emphasizes iterative development, customer collaboration, and responding to change.'
        },
        {
            id: 'pp-cs-2017-1-q4b',
            questionType: 'Other',
            questionText: 'Differentiate between Software Validation and Verification. Discuss some of the techniques used for empirical software evaluation.',
            idealAnswer: 'Verification: "Are we building the product right?" (Does it meet specifications?). Validation: "Are we building the right product?" (Does it meet user needs?). Empirical evaluation techniques include controlled experiments, case studies, and surveys to gather data on software usability and effectiveness.'
        },
        {
            id: 'pp-cs-2017-1-q4c',
            questionType: 'Other',
            questionText: 'Discuss the importance of Requirements Engineering in the success of a software project. Explain in detail the process of ‘Requirements Sign-off’.',
            idealAnswer: 'Requirements Engineering is crucial because errors in requirements are the most expensive to fix later. ‘Requirements Sign-off’ is the formal process where the client and development team agree that the requirements document is complete and correct. It serves as a baseline for the project, though changes may still be managed through a formal change control process.'
        },
        {
            id: 'pp-cs-2017-1-q5a',
            questionType: 'Other',
            questionText: 'Draw and build a Red-black tree for the following keys (50, 60, 70, 80, 90) and (50, 40, 30, 20, 10). Would a binary tree be suitable for the insertion of these keys?',
            idealAnswer: 'Inserting these sorted keys into a standard binary search tree would result in a degenerate (linked-list like) tree with poor performance. A Red-Black tree, being a self-balancing binary search tree, would perform rotations and color-flips during insertion to maintain balance and ensure O(log n) performance.'
        },
        {
            id: 'pp-cs-2017-1-q5b',
            questionType: 'Other',
            questionText: 'Hash tables enable for fast insertion and searching within the database. Describe the process of hashing with a suitable example.',
            idealAnswer: 'Hashing involves using a hash function to map a key (e.g., a student ID) to an index in an array (the hash table). For example, `index = studentID % array_size`. This allows for O(1) average time complexity for search and insertion. Collisions (when two keys map to the same index) are handled by techniques like chaining or open addressing.'
        },
        {
            id: 'pp-cs-2017-1-q5c',
            questionType: 'Other',
            questionText: 'Describe the process of Bubble Sorting. Write down the output after each pass of the Bubble Sort algorithm for sorting the sequence (3, 8, 2, 6, 1, 10).',
            idealAnswer: 'Bubble sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. Passes continue until the list is sorted. The output for each pass would show the largest unsorted element "bubbling" to its correct position at the end of the list.'
        },
        {
            id: 'pp-cs-2017-1-q6a',
            questionType: 'Other',
            questionText: 'The design methodologies of programs can have multiple approaches including the Big Bang, Code and Fix, Water Fall and the Spiral Model. Consider a test application and describe the development of the application while following each of these four approaches.',
            idealAnswer: 'Big Bang: No planning, just coding. Code and Fix: Write some code, fix it, repeat. Waterfall: Sequential phases of requirements, design, code, test. Spiral: Iterative model focusing on risk analysis in each cycle. The description would apply these to a hypothetical application like a "student registration system".'
        },
        {
            id: 'pp-cs-2017-1-q6b',
            questionType: 'Other',
            questionText: 'Discuss the design issues of Task Partitioning and Task Allocation in Distributed Software Engineering tasks.',
            idealAnswer: 'Task Partitioning issues involve how to break down a problem into smaller sub-tasks to maximize parallelism and minimize communication overhead. Task Allocation issues involve how to assign these sub-tasks to different processors or nodes in the distributed system to balance the load and minimize communication costs.'
        },
        {
            id: 'pp-cs-2017-1-q6c',
            questionType: 'Other',
            questionText: 'Explain the importance of Design Patterns under the umbrella of Agile software design and programming. Explain Software Testing and different methodologies.',
            idealAnswer: 'Design Patterns (e.g., Singleton, Factory) are reusable solutions to common problems, important in Agile for promoting good design and faster development. Software testing verifies and validates the software. Methodologies include Unit Testing (testing individual components), Integration Testing (testing combined components), and System Testing (testing the complete system).'
        },
        {
            id: 'pp-cs-2017-1-q7a',
            questionType: 'Other',
            questionText: 'The handling of syntax errors involves the use of parser and the lexical analyzer. Comment on its functioning.',
            idealAnswer: 'The lexical analyzer (scanner) groups characters into tokens. The parser checks if these tokens form a valid sequence according to the language\'s grammar. If a syntax error is found, the parser must report the error and attempt to recover so it can continue parsing to find more errors.'
        },
        {
            id: 'pp-cs-2017-1-q7b',
            questionType: 'Other',
            questionText: 'Using a suitable example, compare the operation of a top-down and a bottom-up Parser based compiler.',
            idealAnswer: 'Top-down parsers (e.g., LL parsers) start from the grammar\'s start symbol and try to derive the input string. Bottom-up parsers (e.g., LR parsers) start with the input string and try to reduce it to the start symbol. Bottom-up parsers are generally more powerful and can handle a larger class of grammars.'
        },
        {
            id: 'pp-cs-2017-1-q7c',
            questionType: 'Other',
            questionText: 'Explain the two different methods of code optimization that is Loop optimization and Peephole optimization by giving a suitable example.',
            idealAnswer: 'Loop optimization involves techniques like code motion (moving loop-invariant code out of the loop) to make loops run faster. Peephole optimization examines a short sequence of instructions ("peephole") and replaces it with a faster sequence, for example, eliminating redundant load/store operations.'
        },
        {
            id: 'pp-cs-2017-1-q8',
            questionType: 'Other',
            questionText: 'Write short notes on any FOUR of the following: (a) Global, Local and shared variables ... (f) Searching Algorithms',
            idealAnswer: '(a) Global variables are accessible throughout a program; Local variables are only accessible within a specific function or block. (b) IP rights can be protected through copyright, patents, and digital rights management (DRM). (c) Pipelining is a technique where multiple instructions are overlapped in execution. (d) Resource allocation involves the OS managing CPU time, memory, and I/O devices for processes. (e) Intermediate code is a representation between source code and machine code used by a compiler. (f) Searching algorithms include Linear Search (O(n)) and Binary Search (O(log n)), which requires a sorted array.'
        },
        {
            id: 'pp-cs-2017-2-q2a',
            questionType: 'Other',
            questionText: 'Discuss the following methods of storage systems: (i) Direct Access (ii) Random Access',
            idealAnswer: '(i) Direct Access: Records can be accessed directly, but not randomly. The access time depends on the physical location. Example: Hard disk drives. (ii) Random Access: Any location in memory can be accessed in a constant amount of time, regardless of its physical location. Example: RAM.'
        },
        {
            id: 'pp-cs-2017-2-q2b',
            questionType: 'Other',
            questionText: 'If clock speed reaches its maximum then what are the two methods to increase the performance of a computer? Briefly explain.',
            idealAnswer: 'Two methods are: 1. Increasing the number of cores (multi-core processors) to perform more tasks in parallel. 2. Using architectural improvements like pipelining, superscalar execution, and larger caches to execute instructions more efficiently per clock cycle.'
        },
        {
            id: 'pp-cs-2017-2-q2c',
            questionType: 'Other',
            questionText: 'Draw and explain instruction execution state diagram with interrupt.',
            idealAnswer: 'The diagram shows the states of an instruction cycle: Fetch, Decode, Execute. An interrupt check is typically performed after the Execute phase. If an interrupt is detected, the current process state is saved, and the system jumps to an interrupt service routine before returning to the next instruction.'
        },
        {
            id: 'pp-cs-2017-2-q3a',
            questionType: 'Other',
            questionText: 'Explain the following network protocols: (i) HTTP and SIP (ii) TCP and UDP',
            idealAnswer: '(i) HTTP (Hypertext Transfer Protocol) is used for web browsing. SIP (Session Initiation Protocol) is used for initiating, maintaining, and terminating real-time sessions like VoIP calls. (ii) TCP (Transmission Control Protocol) is a connection-oriented, reliable protocol. UDP (User Datagram Protocol) is a connectionless, unreliable protocol used for applications like streaming where speed is more important than reliability.'
        },
        {
            id: 'pp-cs-2017-2-q3b',
            questionType: 'Other',
            questionText: 'What is the transmission time of a packet sent by a station if the length of the packet is 1 million bytes and the bandwidth of the channel is 200 Kbps?',
            idealAnswer: 'Packet size = 1,000,000 bytes = 8,000,000 bits. Bandwidth = 200 Kbps = 200,000 bits per second. Transmission Time = Packet Size / Bandwidth = 8,000,000 / 200,000 = 40 seconds.'
        },
        {
            id: 'pp-cs-2017-2-q3c',
            questionType: 'Other',
            questionText: 'Given the IP address 10.5.118.3 and the network mask 255.255.240.0, what are the assignable IP addresses and broadcast in this subnet?',
            idealAnswer: 'The mask /20 means the subnet ranges from 10.5.112.0 to 10.5.127.255. The network address is 10.5.112.0. The broadcast address is 10.5.127.255. Assignable IPs are from 10.5.112.1 to 10.5.127.254.'
        },
        {
            id: 'pp-cs-2017-2-q4a',
            questionType: 'Other',
            questionText: 'What are differences between Optimal & LRU (Least Recently Used) page Replacement Policies?',
            idealAnswer: 'Optimal page replacement replaces the page that will not be used for the longest period of time; it\'s theoretical and used for benchmarking. LRU replaces the page that has not been used for the longest period of time; it\'s a practical approximation of Optimal.'
        },
        {
            id: 'pp-cs-2017-2-q4b',
            questionType: 'Other',
            questionText: 'Discuss the four necessary conditions for deadlock to occur. How can we deny any two of these conditions?',
            idealAnswer: 'Conditions: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Deny Hold and Wait by making processes request all resources at once. Deny Circular Wait by imposing a total ordering on all resource types.'
        },
        {
            id: 'pp-cs-2017-2-q4c',
            questionType: 'Other',
            questionText: 'Consider three processes... Find average waiting time and average turnaround time when these processes are scheduled using Round-Robin scheduling using time quantum (TQ) = 4.',
            idealAnswer: 'This requires creating a Gantt chart showing the execution of processes in time slices of 4 units. Turnaround time for a process is completion time - arrival time. Waiting time is turnaround time - burst time. The average is then calculated for both metrics.'
        },
        {
            id: 'pp-cs-2017-2-q5a',
            questionType: 'Other',
            questionText: 'Explain the functionality and purposes of following registers with diagrams: (i) Memory Address Register (MAR) (ii) Memory Buffer Register (MBR) (iii) Instruction Register (IR)',
            idealAnswer: '(i) MAR: Holds the memory address of the data or instruction to be accessed. (ii) MBR (or MDR): Holds the data being transferred to or from memory. (iii) IR: Holds the current instruction being executed.'
        },
        {
            id: 'pp-cs-2017-2-q5b',
            questionType: 'Other',
            questionText: 'Discuss the functionality of Ethernet LAN and its types.',
            idealAnswer: 'Ethernet is a standard for local area networks (LANs). It uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) for access control. Types are defined by speed, such as Fast Ethernet (100 Mbps) and Gigabit Ethernet (1 Gbps).'
        },
        {
            id: 'pp-cs-2017-2-q5c',
            questionType: 'Other',
            questionText: 'What happens in the following cases? (i) If the job size is kept very low in time sharing systems. (ii) If the page size is kept very small in paged memory management.',
            idealAnswer: '(i) A very small time quantum (not job size) leads to high context switching overhead, reducing efficiency. (ii) A very small page size leads to a large page table, consuming more memory, but reduces internal fragmentation.'
        },
        {
            id: 'pp-cs-2017-2-q6a',
            questionType: 'Other',
            questionText: 'What is Normalization? Discuss 1NF, 2NF and 3NF with example(s).',
            idealAnswer: 'Normalization is the process of organizing columns and tables in a relational database to minimize data redundancy. 1NF: No repeating groups. 2NF: In 1NF and no partial dependencies. 3NF: In 2NF and no transitive dependencies.'
        },
        {
            id: 'pp-cs-2017-2-q6b',
            questionType: 'Other',
            questionText: 'Write short notes on the following: (i) Data (ii) Database (iii) Database Management System',
            idealAnswer: '(i) Data: Raw, unorganized facts. (ii) Database: An organized collection of data. (iii) DBMS: Software that allows users to create, maintain, and access databases.'
        },
        {
            id: 'pp-cs-2017-2-q6c',
            questionType: 'Other',
            questionText: 'Differentiate between Centralized Database and Distributed Database.',
            idealAnswer: 'A centralized database is stored at a single location. A distributed database consists of multiple, interconnected databases that are geographically dispersed but logically form a single database.'
        },
        {
            id: 'pp-cs-2017-2-q7a',
            questionType: 'Other',
            questionText: 'Define image histogram. What is meant by histogram equalization? Explain their applications in image processing.',
            idealAnswer: 'An image histogram is a graph showing the frequency distribution of pixel intensity values. Histogram equalization is a technique to improve contrast in an image by redistributing the intensity values. It\'s used in medical imaging and satellite imagery to enhance details.'
        },
        {
            id: 'pp-cs-2017-2-q7b',
            questionType: 'Other',
            questionText: 'Find the storage in bytes required to store a 256 x 200 colored image using RGB color model with 24 bit color depth.',
            idealAnswer: 'Total pixels = 256 * 200 = 51,200. Bits per pixel = 24. Total bits = 51,200 * 24 = 1,228,800 bits. Total bytes = 1,228,800 / 8 = 153,600 bytes.'
        },
        {
            id: 'pp-cs-2017-2-q7c',
            questionType: 'Other',
            questionText: 'Briefly explain Geometric Transformations.',
            idealAnswer: 'Geometric transformations are operations that alter the geometry of an image. They include scaling (resizing), rotation, translation (moving), and shearing (distorting).'
        },
        {
            id: 'pp-cs-2017-2-q8a',
            questionType: 'Other',
            questionText: 'Explain the following web concepts: (i) localStorage and sessionStorage objects (ii) Application cache in HTML5 (iii) Manifest file (iv) Web Worker',
            idealAnswer: '(i) localStorage stores data with no expiration date; sessionStorage stores data for one session. (ii) Application Cache allows a web application to be available offline. (iii) The manifest file specifies which files the browser should cache for offline access. (iv) A Web Worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page.'
        },
        {
            id: 'pp-cs-2017-2-q8b',
            questionType: 'Other',
            questionText: 'What is SVG? What are the advantages of SVG over JPEG or GIF?',
            idealAnswer: 'SVG (Scalable Vector Graphics) is an XML-based format for vector images. Advantages over raster formats like JPEG/GIF are that SVGs are scalable without loss of quality, have smaller file sizes for simple graphics, and the text within them is searchable and indexable.'
        },
        {
            id: 'pp-cs-2017-2-q8c',
            questionType: 'Other',
            questionText: 'Explain Non Breaking space in HTML with example.',
            idealAnswer: 'A non-breaking space, represented by the HTML entity `&nbsp;`, prevents a line break from occurring at its position. It is used to keep two words together, for example `Rs.&nbsp;100` to ensure the currency symbol and amount stay on the same line.'
        }
    ]
  },
  {
    id: 'pp-cs-2018-1',
    year: 2018,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2018-1-q2a',
            questionType: 'Other',
            questionText: 'How many layers are in the TCP/IP stack? What are the names?',
            idealAnswer: 'The TCP/IP model has four layers: 1. Link Layer (or Network Interface), 2. Internet Layer, 3. Transport Layer, and 4. Application Layer. A five-layer model is also commonly used which splits the Link layer into Physical and Data Link layers.'
        },
        {
            id: 'pp-cs-2018-1-q2b',
            questionType: 'Other',
            questionText: 'How digital evidences can be preserved from a crime scene. Write in details by taking examples of digital devices commonly used these days.',
            idealAnswer: 'Preservation involves: 1. Securing the scene to prevent tampering. 2. Creating a forensic image (a bit-for-bit copy) of the storage media (e.g., hard drive, phone memory) using a write-blocker to prevent altering the original. 3. Documenting a chain of custody. 4. Storing the original device and the forensic image in a secure location.'
        },
        {
            id: 'pp-cs-2018-1-q2c',
            questionType: 'Other',
            questionText: 'What are the responsibilities of Operating system kernel?',
            idealAnswer: 'The kernel is the core of the OS. Its responsibilities include process management, memory management, device management, and handling system calls. It acts as the bridge between applications and the hardware.'
        },
        {
            id: 'pp-cs-2018-1-q2d',
            questionType: 'Other',
            questionText: 'List down any four best practices for coding standards.',
            idealAnswer: 'Four best practices are: 1. Use meaningful names for variables and functions. 2. Write comments to explain complex code. 3. Follow consistent indentation and formatting style. 4. Avoid "magic numbers" by using named constants.'
        },
        {
            id: 'pp-cs-2018-1-q2e',
            questionType: 'Other',
            questionText: 'Why do modern processors use more power when their clock frequency is increased?',
            idealAnswer: 'Power consumption in a CMOS processor is proportional to the frequency and the square of the voltage (P ∝ fV²). Increasing clock frequency requires more switching of transistors per second, which directly increases dynamic power consumption.'
        },
        {
            id: 'pp-cs-2018-1-q2f',
            questionType: 'Other',
            questionText: 'Ali is telling Ahmad that he is representing a -ve number and its most significant bit is 1, Ahmad immediately shouted you are representing numbers using 2\'s compliment. True or False. And why?',
            idealAnswer: 'False. While 2\'s complement is a common method where the most significant bit (MSB) is 1 for negative numbers, other representations like sign-magnitude and 1\'s complement also use an MSB of 1 for negative numbers. Therefore, one cannot be certain it is 2\'s complement based on that information alone.'
        },
        {
            id: 'pp-cs-2018-1-q2g',
            questionType: 'Other',
            questionText: 'If time slice is of 50 milliseconds and context switch requires a microsecond, how many processes can the machine service in a second?',
            idealAnswer: 'Total time per process slice = 50ms + 1µs = 50.001ms. Number of processes serviced per second = 1000ms / 50.001ms ≈ 19.99, so approximately 19 to 20 processes can be serviced.'
        },
        {
            id: 'pp-cs-2018-1-q3a',
            questionType: 'Other',
            questionText: 'Write a program grade average calculator, User will input marks for five subjects and program will output the average of its marks. Print appropriate message on the base of its mark\'s average e.g.; Well done, Keep it up, Better luck next time etc.',
            idealAnswer: 'The program should use a loop to input marks for five subjects, summing them up. It then calculates the average by dividing the sum by 5. Finally, it uses a series of if-else if statements to check the average and print a message like "Well done" for high averages, "Keep it up" for medium, etc.'
        },
        {
            id: 'pp-cs-2018-1-q3b',
            questionType: 'Other',
            questionText: 'Given that i,j,k,n & m are integer variables. Write a condition such that: i- hello is only printed when, any of the following conditions are met: i is twice the value of j, j is smaller than k and less than n, or m is negative. ii. hello is only printed when i does not lies in the interval 6-9',
            idealAnswer: 'i. `if ( (i == 2*j) || (j < k && j < n) || (m < 0) )` \n ii. `if ( i < 6 || i > 9 )` or `if ( !(i >= 6 && i <= 9) )`'
        },
        {
            id: 'pp-cs-2018-1-q3c',
            questionType: 'Other',
            questionText: 'Write equivalent instruction to following instruction without the use of += operator: where w,z are integers. w+=2*z+4;',
            idealAnswer: '`w = w + 2*z + 4;`'
        },
        {
            id: 'pp-cs-2018-1-q3d',
            questionType: 'Other',
            questionText: 'Predict the values of variables a & b after every instruction\ninteger a=5 b=6\na=(b++) + 3;\nb=--a;',
            idealAnswer: 'Initial: a=5, b=6. After `a=(b++) + 3;`: `a` becomes 6+3=9, `b` becomes 7 (post-increment). After `b=--a;`: `a` becomes 8 (pre-decrement), then `b` becomes 8. Final values: a=8, b=8.'
        },
        {
            id: 'pp-cs-2018-1-q3e',
            questionType: 'Other',
            questionText: 'Complete the code such that it prompts the user for +ve number n. Then displays the output.',
            idealAnswer: 'This requires nested loops. The outer loop iterates from `n` down to 1. The inner loop iterates from 1 up to the value of the outer loop counter, printing the numbers. An outer `for (int i = n; i >= 1; i--)` and an inner `for (int j = 1; j <= i; j++)` would achieve this.'
        },
        {
            id: 'pp-cs-2018-1-q3f',
            questionType: 'Other',
            questionText: 'In following code replace the character at pos-th location in the string st with the ,character ch...',
            idealAnswer: 'After calculating the string length, the code should be: `if (pos >= 0 && pos < size) { st[pos] = ch; }`. This checks if the position is valid before attempting the replacement to avoid out-of-bounds errors.'
        },
        {
            id: 'pp-cs-2018-1-q4a',
            questionType: 'Other',
            questionText: 'In which class(es) would it make most sense to have protected members? Which class(es) would be able to access those protected members directly?',
            idealAnswer: 'Protected members make most sense in base classes (like A) that are intended to be inherited from. The protected members of A would be directly accessible by its derived classes (B and C) and their subsequent derived classes (D and E).'
        },
        {
            id: 'pp-cs-2018-1-q4b',
            questionType: 'Other',
            questionText: 'Which class(es) can access private members of class C directly?',
            idealAnswer: 'Only class C itself can access its own private members. Neither its base class (A) nor its derived class (E) can access them directly.'
        },
        {
            id: 'pp-cs-2018-1-q4c',
            questionType: 'Other',
            questionText: 'Suppose class C contains a pure virtual function. Suppose we wish to instantiate objects of this hierarchy. Which class(es) are or could be abstract and which are concrete?',
            idealAnswer: 'If C has a pure virtual function, it becomes an abstract class, and you cannot instantiate objects of class C. Its derived class, E, would also be abstract unless it provides an implementation for that pure virtual function. Classes A, B, and D could be concrete if they don\'t have pure virtual functions.'
        },
        {
            id: 'pp-cs-2018-1-q4d',
            questionType: 'Other',
            questionText: 'Consider the following list of classes: Car, SteeringWheel, Vehicle, Van, Minivan, AudioSystem, ParkingLot... describe all of the is-a and has-a relationships between these classes...',
            idealAnswer: '`is-a` (Inheritance): Car is-a Vehicle, Van is-a Vehicle, Minivan is-a Van. `has-a` (Composition/Aggregation): A Car has-a SteeringWheel. A Car has-a AudioSystem. A ParkingLot has-a Car (or many cars).'
        },
        {
            id: 'pp-cs-2018-1-q5a',
            questionType: 'Other',
            questionText: 'What is dangling pointer?',
            idealAnswer: 'A dangling pointer is a pointer that points to a memory location that has been deallocated or freed. Accessing the memory through a dangling pointer can lead to unpredictable behavior, crashes, or security vulnerabilities.'
        },
        {
            id: 'pp-cs-2018-1-q5b',
            questionType: 'Other',
            questionText: 'What data structure would employ to build a text editor and why?',
            idealAnswer: 'A Gap Buffer or a Rope data structure would be suitable. A gap buffer is an array with a gap in the middle, making insertions and deletions at the cursor position very efficient (O(1)). A Rope is a binary tree structure that is efficient for handling very large files.'
        },
        {
            id: 'pp-cs-2018-1-q5c',
            questionType: 'Other',
            questionText: 'Random insertion of nodes into a binary search tree would result in what types of tree shape. Elaborate.',
            idealAnswer: 'Random insertion into a binary search tree (BST) tends to result in a tree that is relatively balanced, with a height close to O(log n). It avoids the worst-case scenario of a degenerate tree (like a linked list) that occurs with sorted insertions, thus maintaining efficient search, insertion, and deletion operations on average.'
        },
        {
            id: 'pp-cs-2018-1-q5d',
            questionType: 'Other',
            questionText: 'How would you modify a link list based queue so that first and last node can be accessed in a constant time regardless of data nodes in the queue?',
            idealAnswer: 'To achieve constant time (O(1)) access to both the first and last nodes, you would maintain two pointers: a `front` pointer to the first node (for dequeue operations) and a `rear` pointer to the last node (for enqueue operations). This avoids traversing the list to find the end.'
        },
        {
            id: 'pp-cs-2018-1-q6a',
            questionType: 'Other',
            questionText: 'Define balanced tree both for AVL and Binary search tree.',
            idealAnswer: 'A balanced binary search tree is a BST where the heights of the two child subtrees of any node differ by at most one. An AVL tree is a specific type of self-balancing binary search tree that strictly adheres to this property by performing rotations after insertions or deletions.'
        },
        {
            id: 'pp-cs-2018-1-q6b',
            questionType: 'Other',
            questionText: 'What is informed or heuristic search what type of algorithm is used to do such a search?',
            idealAnswer: 'Informed search algorithms use problem-specific knowledge or a "heuristic" (an educated guess or rule of thumb) to find a solution more efficiently than uninformed searches. The A* search algorithm is a classic example, which uses a heuristic to estimate the cost to reach the goal from a given node.'
        },
        {
            id: 'pp-cs-2018-1-q6c',
            questionType: 'Other',
            questionText: 'Differentiate between graph and trees. Which is special case of the other?',
            idealAnswer: 'A graph is a set of vertices connected by edges. A tree is a special type of graph that is connected and has no cycles. Therefore, a tree is a special case of a graph.'
        },
        {
            id: 'pp-cs-2018-1-q6d',
            questionType: 'Other',
            questionText: 'Explain what type of problems can be solved by genetic algorithm.',
            idealAnswer: 'Genetic algorithms are well-suited for optimization and search problems where the search space is large and complex. They are used in areas like scheduling, financial modeling, and engineering design to find high-quality approximate solutions where finding the exact best solution is computationally infeasible.'
        },
        {
            id: 'pp-cs-2018-1-q7a',
            questionType: 'Other',
            questionText: 'Outline the difference between software verification and software validation.',
            idealAnswer: 'Verification asks "Are we building the product right?" and checks if the software meets its specified requirements. Validation asks "Are we building the right product?" and checks if the software meets the user\'s actual needs and expectations.'
        },
        {
            id: 'pp-cs-2018-1-q7b',
            questionType: 'Other',
            questionText: 'Give an outline of the unit testing process for verification.',
            idealAnswer: 'Unit testing involves testing individual components or functions of the software in isolation. The process typically involves writing a test case that provides specific inputs to a unit, executing the unit, and then asserting that the actual output matches the expected output.'
        },
        {
            id: 'pp-cs-2018-1-q7c',
            questionType: 'Other',
            questionText: 'Agile Development is a process that values responding to change over following a plan. Discuss three issues a Software Engineer should be mindful of when adopting this approach during software development.',
            idealAnswer: 'Three issues are: 1. Scope Creep: The flexibility can lead to the project expanding indefinitely without clear goals. 2. Lack of Documentation: The emphasis on working software over documentation can be a problem for long-term maintenance. 3. Architectual Issues: The iterative nature can sometimes lead to a less robust overall system architecture if not carefully managed.'
        },
        {
            id: 'pp-cs-2018-1-q7d',
            questionType: 'Other',
            questionText: 'What type of project is not suited to incremental methods?',
            idealAnswer: 'Projects with highly interdependent components or safety-critical systems where all requirements must be fully understood and specified upfront are not well-suited to incremental methods. For example, the software for an aircraft\'s flight control system.'
        },
        {
            id: 'pp-cs-2018-1-q7e',
            questionType: 'Other',
            questionText: 'Outline the difference between Black box and White box testing.',
            idealAnswer: 'Black-box testing involves testing the functionality of an application without knowledge of its internal structure or code. White-box testing involves testing the internal structure, design, and code of the software.'
        },
        {
            id: 'pp-cs-2018-1-q8a',
            questionType: 'Other',
            questionText: 'What is the difference between lexers and parsers?',
            idealAnswer: 'A lexer (or scanner) is the first phase of a compiler; it takes a stream of characters and groups them into meaningful sequences called tokens. A parser (or syntax analyzer) is the second phase; it takes the stream of tokens from the lexer and builds a parse tree to check for correct syntax according to the grammar of the language.'
        },
        {
            id: 'pp-cs-2018-1-q8b',
            questionType: 'Other',
            questionText: 'Write a grammar (BNF) for the language of palindromes.',
            idealAnswer: 'A simple BNF grammar for palindromes over the alphabet {a, b} could be: P -> aPa | bPb | a | b | ε (where ε is the empty string). This recursively builds palindromes from the inside out.'
        },
        {
            id: 'pp-cs-2018-1-q8c',
            questionType: 'Other',
            questionText: 'Here DFA is given for the language L find the DFA for L2',
            idealAnswer: 'Finding the DFA for L² (the concatenation of language L with itself) from the DFA for L is a complex process. It generally involves creating a new automaton whose states are pairs of states from the original DFA, and defining transitions based on the original DFA\'s behavior. The specific answer depends on the provided diagram, which is missing.'
        },
        {
            id: 'pp-cs-2018-1-q8d',
            questionType: 'Other',
            questionText: 'Convert the following DFA to a RE:',
            idealAnswer: 'Converting a DFA to a Regular Expression can be done using various methods, such as the state elimination method or by solving a system of linear equations. The specific RE depends on the provided DFA diagram, which is missing.'
        },
        {
            id: 'pp-cs-2018-2-q2a',
            questionType: 'Other',
            questionText: 'Briefly describe the functionality of the following CPU special-purpose registers: Instruction Register (IR), Memory Data Register (MDR) and Program Counter (PC).',
            idealAnswer: 'PC (Program Counter): Holds the memory address of the next instruction to be fetched. IR (Instruction Register): Holds the current instruction that is being decoded and executed. MDR (Memory Data Register), also known as MBR, holds the data that is being transferred to or from memory.'
        },
        {
            id: 'pp-cs-2018-2-q2b',
            questionType: 'Other',
            questionText: 'Differentiate between Address, Data and Control bus.',
            idealAnswer: 'Address Bus: Unidirectional bus that carries memory addresses from the CPU to other components. Data Bus: Bidirectional bus that carries the actual data between the CPU and other components. Control Bus: Carries command and control signals from the CPU to manage and coordinate all activities.'
        },
        {
            id: 'pp-cs-2018-2-q2c',
            questionType: 'Other',
            questionText: 'Discuss instruction pipelining in the context of fetch-decode-execute cycle.',
            idealAnswer: 'Instruction pipelining is a technique that allows multiple instructions to be overlapped in execution. While one instruction is in the Execute stage, the next instruction can be in the Decode stage, and the one after that can be in the Fetch stage. This increases the overall instruction throughput of the CPU.'
        },
        {
            id: 'pp-cs-2018-2-q3a',
            questionType: 'Other',
            questionText: 'Differentiate between hub, bridge, switch and router.',
            idealAnswer: 'Hub: A Layer 1 device that repeats signals to all connected devices. Bridge: A Layer 2 device that connects two LAN segments and filters traffic based on MAC addresses. Switch: An advanced Layer 2 device that connects multiple devices and forwards traffic only to the specific destination port. Router: A Layer 3 device that connects different networks and forwards packets based on IP addresses.'
        },
        {
            id: 'pp-cs-2018-2-q3b',
            questionType: 'Other',
            questionText: 'Discuss how Network Address Translation (NAT) works and why is it useful?',
            idealAnswer: 'NAT works by allowing a router to act as an agent between a private network and the public internet. It translates the private IP addresses of devices inside the network to a single public IP address. It is useful for conserving the limited supply of IPv4 addresses and for enhancing security by hiding internal network structures.'
        },
        {
            id: 'pp-cs-2018-2-q3c',
            questionType: 'Other',
            questionText: 'Elaborate the working of multiplexing/de-multiplexing at the transport layer.',
            idealAnswer: 'Multiplexing at the transport layer involves gathering data chunks from different application sockets, encapsulating them with port number information, and passing them to the network layer. De-multiplexing is the reverse process at the receiver, where the transport layer uses the port numbers to deliver the received segments to the correct application socket.'
        },
        {
            id: 'pp-cs-2018-2-q4a',
            questionType: 'Other',
            questionText: 'There are three processes PA, PB and PC and three resources RA, RB and RC... Represent the scenario with a resource allocation graph. Discuss whether there is a deadlock or not?',
            idealAnswer: 'A resource allocation graph would show PA requesting RA (held by PB), PB requesting RB (held by PC), and PC requesting RC. Since RC has two instances and only one is held by PA, PC can be allocated the second instance of RC. It can then finish and release RB for PB, who can finish and release RA for PA. Therefore, there is no deadlock.'
        },
        {
            id: 'pp-cs-2018-2-q4b',
            questionType: 'Other',
            questionText: 'In the context of Paging, consider the case where memory addresses are 32 bits i.e. 20 bits Virtual Page Numbers and 12 bits of offset... find the physical address.',
            idealAnswer: 'Number of virtual pages = 2^20. Page size = 2^12 bytes = 4KB. For virtual address 0x7589, the VPN is 0x7 and the offset is 0x589. If the page table entry is 0x900DF, the physical frame number is 0x900. The physical address is the frame number concatenated with the offset: 0x900589.'
        },
        {
            id: 'pp-cs-2018-2-q4c',
            questionType: 'Other',
            questionText: 'In the context of I/O management, differentiate between Pooling and Interrupts.',
            idealAnswer: 'Polling (or programmed I/O) involves the CPU repeatedly checking the status of an I/O device to see if it is ready for a data transfer. Interrupts are a hardware mechanism where the I/O device signals the CPU when it is ready. Interrupts are more efficient as they allow the CPU to perform other tasks instead of waiting in a busy loop.'
        },
        {
            id: 'pp-cs-2018-2-q5a',
            questionType: 'Other',
            questionText: 'Given two relations R and S, where R contains M tuples, S contains N tuples, and M >N > 0, give the minimum and maximum possible sizes (in tuples) for the resulting relation produced by each of the following relational algebra expressions.',
            idealAnswer: 'i. R-S: Min=M-N, Max=M. ii. R U S: Min=M, Max=M+N. iii. R ∩ S: Min=0, Max=N. iv. R x S (Cartesian Product): Min/Max = M*N.'
        },
        {
            id: 'pp-cs-2018-2-q5b',
            questionType: 'Other',
            questionText: 'Elaborate the concepts of super key, candidate key and foreign key with examples.',
            idealAnswer: 'Superkey: A set of attributes that uniquely identifies a tuple. Candidate Key: A minimal superkey. Foreign Key: An attribute in one table that refers to the primary key of another table, creating a link between them. Ex: In a `Students` table, `StudentID` is a primary key. In a `Courses` table, `StudentID` would be a foreign key.'
        },
        {
            id: 'pp-cs-2018-2-q5c',
            questionType: 'Other',
            questionText: 'Discuss the difference between physical data independence and logical data independence.',
            idealAnswer: 'Physical data independence: The ability to modify the physical schema (e.g., how data is stored on disk) without changing the logical schema. Logical data independence: The ability to modify the logical schema (e.g., adding a column to a table) without changing the external schema or application programs.'
        },
        {
            id: 'pp-cs-2018-2-q6a',
            questionType: 'Other',
            questionText: 'Differentiate between image sampling and quantization. Discuss how these concepts relate to spatial and intensity resolutions.',
            idealAnswer: 'Sampling is the process of digitizing the coordinate values, which relates to spatial resolution (the number of pixels). Quantization is the process of digitizing the amplitude (intensity) values, which relates to intensity resolution (the number of gray levels or colors).'
        },
        {
            id: 'pp-cs-2018-2-q6b',
            questionType: 'Other',
            questionText: 'In the context of image smoothing, discuss the differences between mean and median filters.',
            idealAnswer: 'A mean filter replaces each pixel value with the average of its neighbors, which can blur the image. A median filter replaces each pixel value with the median of its neighbors. The median filter is better at preserving edges and is more effective at removing "salt-and-pepper" noise.'
        },
        {
            id: 'pp-cs-2018-2-q6c',
            questionType: 'Other',
            questionText: 'For the image ‘X’ shown in Figure 1, show the result of applying the given morphological operators...',
            idealAnswer: 'The specific results depend on the missing Figure 1. However, Dilation generally expands the white regions of an image, while Erosion shrinks them. Applying these operations with different structuring elements would produce different shaped results.'
        },
        {
            id: 'pp-cs-2018-2-q7a',
            questionType: 'Other',
            questionText: 'Perform histogram equalization on the 8-bit image shown in Figure 2.',
            idealAnswer: 'Histogram equalization involves calculating the probability distribution function (PDF) and then the cumulative distribution function (CDF) of the image\'s pixel intensities. The CDF is then used as a mapping function to stretch the intensity range, improving the image contrast. The answer requires performing these calculations based on the missing Figure 2.'
        },
        {
            id: 'pp-cs-2018-2-q7b',
            questionType: 'Other',
            questionText: 'For the 3x3 image shown in the following, apply the horizontal and vertical Sobel operators and compute the magnitude of gradient at the central pixel with intensity value 50.',
            idealAnswer: 'The Sobel operators are used for edge detection. Applying the horizontal and vertical Sobel masks to the 3x3 neighborhood of the central pixel and convolving them will give the gradients Gx and Gy. The magnitude is then calculated as sqrt(Gx² + Gy²).'
        },
        {
            id: 'pp-cs-2018-2-q7c',
            questionType: 'Other',
            questionText: 'In the context of compression, differentiate between coding, spatial and temporal redundancies.',
            idealAnswer: 'Coding redundancy: Using more bits than necessary to represent information. Spatial redundancy: Correlation between neighboring pixels in an image. Temporal redundancy: Correlation between adjacent frames in a video. Compression techniques aim to remove these redundancies.'
        },
        {
            id: 'pp-cs-2018-2-q8a',
            questionType: 'Other',
            questionText: 'Elaborate the concept of three tier architecture with reference to presentation, business logic and data access layers.',
            idealAnswer: 'Three-tier architecture separates an application into: 1. Presentation Tier (the user interface). 2. Business Logic Tier (the application server that processes data). 3. Data Access Tier (the database that stores data). This separation makes the application more scalable, flexible, and easier to maintain.'
        },
        {
            id: 'pp-cs-2018-2-q8b',
            questionType: 'Other',
            questionText: 'Differentiate between XHTML and XML.',
            idealAnswer: 'XML (Extensible Markup Language) is a markup language for storing and transporting data, where tags are user-defined. XHTML (Extensible Hypertext Markup Language) is a stricter, XML-based version of HTML used for defining web pages. All XHTML documents are also well-formed XML documents.'
        },
        {
            id: 'pp-cs-2018-2-q8c',
            questionType: 'Other',
            questionText: 'Discuss Agile and Water Fall methodologies in the context of web application development.',
            idealAnswer: 'Waterfall is a linear, sequential approach suitable for projects with stable requirements. Agile is an iterative approach that embraces changing requirements, making it better suited for the fast-paced and evolving nature of web application development.'
        }
    ]
  },
  {
    id: 'pp-cs-2019-1',
    year: 2019,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2019-1-q2a',
            questionType: 'Other',
            questionText: 'Give a detailed note on a revised BSD 3-clause license. Also name 5 softwares using this license.',
            idealAnswer: 'The revised BSD 3-clause license is a permissive free software license that allows for redistribution and modification with minimal restrictions. The three clauses require retaining the copyright notice, list of conditions, and disclaimer. It prohibits using the names of contributors to endorse derived products. Examples: parts of macOS, Google\'s Bionic C library, FreeBSD, NetBSD, OpenBSD.'
        },
        {
            id: 'pp-cs-2019-1-q2b',
            questionType: 'Other',
            questionText: 'How do artificial intelligence may facilitate us in improving cyber security?',
            idealAnswer: 'AI can improve cybersecurity by: 1. Automating threat detection and response. 2. Analyzing vast amounts of data to identify patterns and anomalies indicative of an attack. 3. Enhancing malware detection through machine learning. 4. Improving biometric security systems.'
        },
        {
            id: 'pp-cs-2019-1-q2c',
            questionType: 'Other',
            questionText: 'What are the main parts and phases of a computer virus program?',
            idealAnswer: 'Main parts often include a propagation mechanism (to spread) and a payload (the malicious action). Phases typically include: 1. Dormant phase (waiting for a trigger). 2. Propagation phase (replicating itself). 3. Triggering phase (activated by a condition). 4. Execution phase (delivers the payload).'
        },
        {
            id: 'pp-cs-2019-1-q3a',
            questionType: 'Other',
            questionText: 'See the following C++ program to declare whether an input number is a prime number or not. Identify the logical errors in the given program (if any). Give your correct statement(s) exactly at the same line number.',
            idealAnswer: 'Errors: Line 2: `is Prime` should be initialized to `true`. Line 5: Loop should start from `i=2`. Line 7: Condition should be `n % i == 0`. Line 13: The condition should check if `isPrime` is still true.'
        },
        {
            id: 'pp-cs-2019-1-q3b',
            questionType: 'Other',
            questionText: 'What is the difference between call by value and call by reference?',
            idealAnswer: 'In call by value, a copy of the argument\'s value is passed to the function, so changes inside the function do not affect the original variable. In call by reference, the memory address of the argument is passed, so changes made inside the function affect the original variable.'
        },
        {
            id: 'pp-cs-2019-1-q3c',
            questionType: 'Other',
            questionText: 'What is the role of preprocessor directives? Give three examples in C++.',
            idealAnswer: 'Preprocessor directives are instructions processed by the preprocessor before the actual compilation. Their role is to handle tasks like including header files, macro expansion, and conditional compilation. Examples: `#include <iostream>`, `#define PI 3.14159`, `#ifdef DEBUG`.'
        },
        {
            id: 'pp-cs-2019-1-q4a',
            questionType: 'Other',
            questionText: 'How do the OOP paradigm can be associated with the real-world problems? Explain.',
            idealAnswer: 'OOP associates with real-world problems by modeling real-world entities as "objects." For example, in a banking system, a "Customer" can be an object with attributes (name, account number) and behaviors (deposit, withdraw). This makes the software design more intuitive and easier to manage.'
        },
        {
            id: 'pp-cs-2019-1-q4b',
            questionType: 'Other',
            questionText: 'Discuss critical reasons given by the professionals for not supporting the OOP paradigm.',
            idealAnswer: 'Critical reasons include: 1. Overhead: OOP can be less efficient in terms of memory and processing power than procedural code for some applications. 2. Steep learning curve: Concepts like inheritance and polymorphism can be complex. 3. Over-engineering: OOP can sometimes lead to overly complex designs for simple problems.'
        },
        {
            id: 'pp-cs-2019-1-q5a',
            questionType: 'Other',
            questionText: 'Discuss the security issues associated with the cloud computing.',
            idealAnswer: 'Security issues include: data breaches (as data from multiple clients is stored together), insecure APIs, data loss, account hijacking, and compliance challenges with data sovereignty laws. The shared responsibility model also creates complexity.'
        },
        {
            id: 'pp-cs-2019-1-q5b',
            questionType: 'Other',
            questionText: 'What is bit twiddling? Give brief description.',
            idealAnswer: 'Bit twiddling, or bit manipulation, is the act of algorithmically manipulating bits or other pieces of data shorter than a word. It is used for low-level performance optimization, cryptography, and writing device drivers.'
        },
        {
            id: 'pp-cs-2019-1-q5c',
            questionType: 'Other',
            questionText: 'An image is a representation of some information. Discuss how does a computer represents an image internally? Name different algorithms used to extract features from images.',
            idealAnswer: 'A computer represents a digital image as a grid of pixels. For grayscale images, each pixel has an intensity value. For color images, each pixel has values for different color channels (e.g., RGB). Feature extraction algorithms include SIFT, SURF, and edge detectors like the Sobel or Canny operators.'
        },
        {
            id: 'pp-cs-2019-1-q6a',
            questionType: 'Other',
            questionText: 'Discuss the limitations of genetic algorithms.',
            idealAnswer: 'Limitations include: 1. They do not guarantee finding the global optimum solution. 2. They can converge prematurely to a local optimum. 3. They can be computationally expensive. 4. Choosing the right parameters (population size, mutation rate) can be difficult.'
        },
        {
            id: 'pp-cs-2019-1-q6b',
            questionType: 'Other',
            questionText: 'What is AVL tree? Under what condition, a binary tree becomes AVL tree?',
            idealAnswer: 'An AVL tree is a self-balancing binary search tree. A binary search tree becomes an AVL tree if for every node, the heights of its two child subtrees differ by at most one. This property is maintained through rotations.'
        },
        {
            id: 'pp-cs-2019-1-q6c',
            questionType: 'Other',
            questionText: 'Consider the following graph. Find out the sequence of edges added to the minimum spanning tree using Kruskal’s algorithm.',
            idealAnswer: 'Kruskal\'s algorithm works by sorting all the edges by weight in ascending order and adding them to the spanning tree one by one, as long as adding an edge does not form a cycle. The specific sequence depends on the graph provided in the question paper, which is missing.'
        },
        {
            id: 'pp-cs-2019-1-q7a',
            questionType: 'Other',
            questionText: 'Discuss the architecture of aspect-oriented system.',
            idealAnswer: 'Aspect-Oriented Programming (AOP) complements OOP by allowing for the modularization of cross-cutting concerns (like logging or security). The architecture involves "aspects" which contain "advice" (code to be executed) at specified "join points" in the program, defined by "pointcuts".'
        },
        {
            id: 'pp-cs-2019-1-q7b',
            questionType: 'Other',
            questionText: 'Briefly discuss the motivation for aspect-oriented programming.',
            idealAnswer: 'The motivation is to separate cross-cutting concerns from the core business logic. This makes the code cleaner, more modular, and easier to maintain, as concerns like logging don\'t have to be scattered throughout the application code.'
        },
        {
            id: 'pp-cs-2019-1-q7c',
            questionType: 'Other',
            questionText: 'What is the significance of quantification and obliviousness?',
            idealAnswer: 'In AOP, quantification refers to the ability to affect multiple join points with a single pointcut expression. Obliviousness means the core application code is unaware that an aspect is being applied to it, which promotes loose coupling.'
        },
        {
            id: 'pp-cs-2019-1-q8a',
            questionType: 'Other',
            questionText: 'Write down the major steps involved in code generation.',
            idealAnswer: 'Major steps in the code generation phase of a compiler include: 1. Instruction selection (choosing appropriate machine instructions). 2. Register allocation (assigning variables to registers). 3. Instruction scheduling (ordering instructions for optimal performance).'
        },
        {
            id: 'pp-cs-2019-1-q8b',
            questionType: 'Other',
            questionText: 'How would you optimize a loop? Describe the techniques briefly.',
            idealAnswer: 'Techniques include: 1. Code Motion: Moving loop-invariant computations outside the loop. 2. Loop Unrolling: Replicating the loop body to reduce loop overhead. 3. Strength Reduction: Replacing expensive operations with cheaper ones (e.g., multiplication with addition).'
        },
        {
            id: 'pp-cs-2019-1-q8c',
            questionType: 'Other',
            questionText: 'Differentiate machine-dependent optimization and machine-independent optimization.',
            idealAnswer: 'Machine-independent optimization is performed on the intermediate code and is not tied to a specific target machine (e.g., eliminating common subexpressions). Machine-dependent optimization is performed on the target code and exploits features of the specific hardware architecture (e.g., instruction scheduling).'
        },
        {
            id: 'pp-cs-2019-2-q2a',
            questionType: 'Other',
            questionText: 'Compare the main features of CISC and RISC architectures. Which type of architecture is suitable for pipelining?',
            idealAnswer: 'CISC (Complex Instruction Set) has many complex instructions. RISC (Reduced Instruction Set) has a smaller set of simple, fixed-length instructions. RISC is more suitable for pipelining because the simple, uniform nature of its instructions makes the pipeline stages more balanced and easier to manage.'
        },
        {
            id: 'pp-cs-2019-2-q2b',
            questionType: 'Other',
            questionText: 'Demonstrate use of superscalar approach to achieve instruction level parallelism using a suitable example.',
            idealAnswer: 'A superscalar processor has multiple execution units, allowing it to execute more than one instruction per clock cycle. For example, it could execute an integer addition and a floating-point multiplication simultaneously in the same clock cycle, if there are no data dependencies between them.'
        },
        {
            id: 'pp-cs-2019-2-q2c',
            questionType: 'Other',
            questionText: 'List all basic functions of buses in the context of computer architecture.',
            idealAnswer: 'Buses are communication pathways. The Address Bus carries memory addresses. The Data Bus carries data between the CPU, memory, and I/O devices. The Control Bus carries command and timing signals to coordinate all the activities.'
        },
        {
            id: 'pp-cs-2019-2-q3a',
            questionType: 'Other',
            questionText: 'Show field by field comparison for IPv4 and IPv6 packets.',
            idealAnswer: 'Comparison: IPv4 has a 32-bit address, a smaller header, and uses fields like TTL and fragmentation fields. IPv6 has a 128-bit address, a larger but simplified header (no checksum), and uses fields like Flow Label and Next Header for better efficiency and functionality.'
        },
        {
            id: 'pp-cs-2019-2-q3b',
            questionType: 'Other',
            questionText: 'Explain the following routing techniques using suitable examples. (i) Link State Routing (ii) Distance Vector Routing',
            idealAnswer: '(i) Link State (e.g., OSPF): Each router builds a complete map of the network and then independently calculates the best path. (ii) Distance Vector (e.g., RIP): Each router only knows about its neighbors and the distance to them, and they periodically share this information to build their routing tables.'
        },
        {
            id: 'pp-cs-2019-2-q3c',
            questionType: 'Other',
            questionText: 'Show step by step procedure of error detection using cyclic redundancy check method for a 7 bit code block “1001001”. Assume appropriate generator polynomial.',
            idealAnswer: 'The procedure involves appending a number of zero bits to the data block, then performing binary division of this augmented block by a generator polynomial (e.g., x³+1 or 1001). The remainder from this division is the CRC checksum, which is appended to the original data block for transmission.'
        },
        {
            id: 'pp-cs-2019-2-q4a',
            questionType: 'Other',
            questionText: 'Demonstrate step by step procedure for process swapping between main memory and secondary memory.',
            idealAnswer: 'Process swapping involves moving a process from main memory (RAM) to a backing store (like a hard disk) to free up memory. The steps are: 1. Select a process to swap out. 2. Write its entire memory image to the backing store. 3. Free up the memory. 4. Later, the process can be swapped back into memory to continue execution.'
        },
        {
            id: 'pp-cs-2019-2-q4b',
            questionType: 'Other',
            questionText: 'Show flow chart of a process scheduling mechanism using various queues.',
            idealAnswer: 'A flowchart would show new processes entering a Job Queue. From there, they move to the Ready Queue. The CPU scheduler selects a process from the Ready Queue to run. A process might then move to an I/O Queue if it needs I/O, or be terminated, or return to the Ready Queue.'
        },
        {
            id: 'pp-cs-2019-2-q4c',
            questionType: 'Other',
            questionText: 'Explain the difference between Sequential Access and Indexed Sequential Access in the context of file access using a suitable example',
            idealAnswer: 'Sequential Access means reading a file record by record from the beginning (e.g., reading a text file line by line). Indexed Sequential Access Method (ISAM) uses an index to allow for both sequential access and direct access to specific records based on a key, which is much faster for finding individual records in large files.'
        },
        {
            id: 'pp-cs-2019-2-q5a',
            questionType: 'Other',
            questionText: 'Demonstrate various types of multiplexing techniques in the context of computer networks using suitable examples.',
            idealAnswer: 'Multiplexing combines multiple signals into one. Types include: 1. Frequency Division Multiplexing (FDM): Assigns different frequency bands to each signal (e.g., radio stations). 2. Time Division Multiplexing (TDM): Assigns different time slots to each signal (e.g., T1 telephone lines).'
        },
        {
            id: 'pp-cs-2019-2-q5b',
            questionType: 'Other',
            questionText: 'Show step by step procedure to find MAC address of a node in a network using Address Resolution Protocol.',
            idealAnswer: 'Procedure (ARP): 1. A host wants to send a packet to an IP address on the same network. 2. It checks its ARP cache for the corresponding MAC address. 3. If not found, it broadcasts an ARP request packet containing the target IP address. 4. The host with that IP address replies with an ARP response packet containing its MAC address.'
        },
        {
            id: 'pp-cs-2019-2-q5c',
            questionType: 'Other',
            questionText: 'For transmission of voice signal in real time over the network, select a suitable switching technique. Justify your answer using an example.',
            idealAnswer: 'Packet switching is used (specifically with protocols like RTP over UDP). Although circuit switching guarantees quality, it is inefficient for bursty data. Modern packet-switched networks use protocols like VoIP that are designed to handle real-time voice, offering efficiency and flexibility, even if some packets are lost.'
        },
        {
            id: 'pp-cs-2019-2-q6a',
            questionType: 'Other',
            questionText: 'Analyze the following noise models in the context of digital image processing. (i) Gaussian Noise Model (ii) Uniform Noise Model',
            idealAnswer: '(i) Gaussian noise is statistical noise with a probability density function equal to the normal distribution. It often appears as random variations in an image. (ii) Uniform noise has a probability density function that is constant over a range, meaning each noise value in the range is equally likely.'
        },
        {
            id: 'pp-cs-2019-2-q6b',
            questionType: 'Other',
            questionText: 'Compare RGB and HSI color models in the context of digital image processing.',
            idealAnswer: 'RGB (Red, Green, Blue) is an additive hardware-oriented model. HSI (Hue, Saturation, Intensity) is a perceptual model that decouples color (Hue) from brightness (Intensity). HSI is often better for image processing tasks like color manipulation because it aligns more closely with how humans perceive color.'
        },
        {
            id: 'pp-cs-2019-2-q6c',
            questionType: 'Other',
            questionText: 'Describe step by step process of application of compression based technique for image segmentation.',
            idealAnswer: 'Compression-based segmentation involves finding regions of an image that can be compressed efficiently. The process involves dividing the image into blocks, trying to compress each block, and then merging adjacent blocks that can be compressed well together, as this indicates they have similar texture or properties.'
        },
        {
            id: 'pp-cs-2019-2-q7a',
            questionType: 'Other',
            questionText: 'A Medium advertising company is reviewing its IT requirements and is considering using a Cloud solution for web applications as opposed to investing in existing infrastructure. Is this an appropriate strategy? Justify your answer using an example.',
            idealAnswer: 'Yes, it is often an appropriate strategy. Cloud solutions (like AWS or Azure) offer scalability, lower upfront capital expenditure, and reduced maintenance overhead. For an advertising company with fluctuating traffic (e.g., during campaigns), the ability to scale resources up and down on demand is a significant advantage over maintaining expensive, often underutilized, in-house infrastructure.'
        },
        {
            id: 'pp-cs-2019-2-q7b',
            questionType: 'Other',
            questionText: 'Describe briefly the role of validation in requirement engineering process.',
            idealAnswer: 'The role of validation in requirements engineering is to ensure that the specified requirements are the correct requirements; that is, they actually meet the stakeholders\' needs and will solve their problem. It answers the question, "Are we building the right system?"'
        },
        {
            id: 'pp-cs-2019-2-q7c',
            questionType: 'Other',
            questionText: 'Explain the difference between functional and non-functional requirement in the context of web engineering using a suitable example.',
            idealAnswer: 'Functional requirements define *what* a system should do (e.g., "A user must be able to log in with a username and password"). Non-functional requirements define *how* a system should do it, or its qualities (e.g., "The login page must load in under 2 seconds").'
        },
        {
            id: 'pp-cs-2019-2-q8a',
            questionType: 'Other',
            questionText: 'Demonstrate the use of ER Model in database designing process using an example.',
            idealAnswer: 'The ER (Entity-Relationship) model is used to design the logical structure of a database. For a university database, an ER model would show entities like `Student` and `Course`, their attributes (StudentID, CourseName), and their relationship (e.g., a many-to-many "Enrolls" relationship between Student and Course). This model is then used to create the actual database tables.'
        },
        {
            id: 'pp-cs-2019-2-q8b',
            questionType: 'Other',
            questionText: 'Describe an appropriate security scheme for a database maintained by a bank. Justify your answer using an example.',
            idealAnswer: 'A security scheme would include: 1. Access Control: Using roles and permissions to ensure employees can only access the data they need (e.g., a teller cannot see loan officer data). 2. Encryption: Encrypting sensitive data like account numbers both at rest (in the database) and in transit (over the network). 3. Auditing: Logging all access and changes to the database to detect unauthorized activity.'
        },
        {
            id: 'pp-cs-2019-2-q8c',
            questionType: 'Other',
            questionText: 'Explain the difference between top-down and bottom-up approaches in the context of distributed database design using a suitable example.',
            idealAnswer: 'Top-down design starts with a global schema for the entire database and then partitions and distributes it across different sites. Bottom-up design starts with existing databases at different sites and integrates them into a single, cohesive distributed database.'
        }
    ]
  },
  {
    id: 'pp-cs-2020-1',
    year: 2020,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2020-1-q2a',
            questionType: 'Other',
            questionText: 'Write a C/C++ program which implements binary logical ‘AND’, ‘OR’ and ‘NOT’ gates. The program takes binary numbers and desired logical gate as inputs and outputs the desired output of the gate.',
            idealAnswer: 'The program should take two binary digits as input for AND/OR and one for NOT. It should then use logical operators (`&&` for AND, `||` for OR, `!` for NOT) within conditional statements (if-else or switch) based on the user\'s choice of gate, and print the resulting binary digit.'
        },
        {
            id: 'pp-cs-2020-1-q2b',
            questionType: 'Other',
            questionText: 'Write a C/C++ program which inputs a number from a user and prints Fibonacci series up to the number.',
            idealAnswer: 'The program should initialize two variables (e.g., a=0, b=1). It would then use a loop that continues as long as the next number in the series is less than or equal to the user\'s input number. Inside the loop, it calculates the next number, prints it, and updates the variables for the next iteration.'
        },
        {
            id: 'pp-cs-2020-1-q2c',
            questionType: 'Other',
            questionText: 'Explain the concept of abstract class with an example',
            idealAnswer: 'An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. It typically contains one or more pure virtual functions (methods without an implementation). For example, a `Shape` abstract class could have a pure virtual `calculateArea()` function, forcing concrete subclasses like `Circle` and `Square` to implement it.'
        },
        {
            id: 'pp-cs-2020-1-q3a',
            questionType: 'Other',
            questionText: 'Write standard ports for following services HTTP, FTP, SMTP, HTTPS, DNS.',
            idealAnswer: 'HTTP: 80, FTP: 20 (data) & 21 (control), SMTP: 25, HTTPS: 443, DNS: 53.'
        },
        {
            id: 'pp-cs-2020-1-q3b',
            questionType: 'Other',
            questionText: 'Design an appropriate interface for citizen portal mobile application. The interface should contain different features which are part of the portal application. The Interface may contain different screens to support these features.',
            idealAnswer: 'A good design would feature a clean dashboard with icons for key features like "Lodge a Complaint," "Track Complaint Status," "My Profile," and "FAQs." A complaint lodging screen would have fields for category, description, and location. A tracking screen would show a timeline view of the complaint status.'
        },
        {
            id: 'pp-cs-2020-1-q3c',
            questionType: 'Other',
            questionText: 'If you are transferring a file over the Internet, would you prefer TCP or UDP as the underlying protocol. Explain',
            idealAnswer: 'TCP would be preferred. File transfer requires all data to arrive intact and in the correct order. TCP is a reliable, connection-oriented protocol that guarantees delivery of all packets through error checking and retransmission, making it ideal for file transfers.'
        },
        {
            id: 'pp-cs-2020-1-q3d',
            questionType: 'Other',
            questionText: 'If you are transferring live audio in real-time over the Internet, would you prefer TCP or UDP as the underlying protocol. Explain.',
            idealAnswer: 'UDP would be preferred. For live audio, speed is more important than perfect reliability. A delayed packet is useless. UDP is a connectionless, low-overhead protocol that prioritizes speed over guaranteed delivery, making it suitable for real-time streaming.'
        },
        {
            id: 'pp-cs-2020-1-q4a',
            questionType: 'Other',
            questionText: 'Write a program to perform mathematical operations of addition, subtraction and multiplication on complex numbers. Each operation should be supported by a separate method.',
            idealAnswer: 'A `Complex` class should be created with real and imaginary parts as data members. It would have methods like `add(Complex other)`, `subtract(Complex other)`, etc. The addition method, for example, would return a new `Complex` object where the real part is the sum of the real parts, and the imaginary part is the sum of the imaginary parts.'
        },
        {
            id: 'pp-cs-2020-1-q4b',
            questionType: 'Other',
            questionText: 'How object encapsulation is useful? Explain.',
            idealAnswer: 'Encapsulation is the bundling of data (attributes) and the methods that operate on that data into a single unit (a class). It is useful because it restricts direct access to some of an object\'s components, which is a means of preventing unintended interference and misuse of the data. This is also known as information hiding.'
        },
        {
            id: 'pp-cs-2020-1-q4c',
            questionType: 'Other',
            questionText: 'Write a program to convert numbers into words. For instance, if the user types 123, the program should give output one hundred and twenty three. The program should continue functioning until the user types quit.',
            idealAnswer: 'This program would require arrays of strings for single digits, teens, and tens. The logic would involve breaking the input number down into its hundreds, tens, and units places and then using the arrays to construct the word representation. A `do-while` or `while` loop would be used to continue processing until the user enters "quit".'
        },
        {
            id: 'pp-cs-2020-1-q5',
            questionType: 'Other',
            questionText: 'A university maintains records for students, Faculty, and academic record. Following three classes are part of the system... Draw a class diagram...Write C++ programs to compute following...',
            idealAnswer: 'The class diagram would show a `Student` class and a `Teachers` class. A `Courses` class would act as an association class, linking students and teachers, and containing attributes like grade. The C++ programs would involve implementing methods within these classes to perform file-based CRUD (Create, Read, Update, Delete) operations for each entity.'
        },
        {
            id: 'pp-cs-2020-1-q6a',
            questionType: 'Other',
            questionText: 'John rides a Van service... John always wanted to use the longest path... Write an algorithm to select the longest path using this approach.',
            idealAnswer: 'Finding the longest path in a general graph is an NP-hard problem. The brute-force approach described (evaluating all possible paths) would involve a depth-first search (DFS) from the source node S, exploring every possible path to the destination T, keeping track of the path with the maximum weight (distance) found so far.'
        },
        {
            id: 'pp-cs-2020-1-q6b',
            questionType: 'Other',
            questionText: 'Compute the complexity of this algorithm and determine that whether it is in P, NP, or NP-complete.',
            idealAnswer: 'The complexity of enumerating all paths can be exponential, O(n!). The longest path problem is NP-hard. Since a given path can be verified in polynomial time, it is also in NP. It is known to be NP-complete for general graphs.'
        },
        {
            id: 'pp-cs-2020-1-q6c',
            questionType: 'Other',
            questionText: 'Write an algorithm to find a minimum distance between ‘S’ and ‘T’.',
            idealAnswer: 'Dijkstra\'s algorithm is a standard algorithm for finding the shortest path between nodes in a weighted graph. It works by maintaining a set of visited nodes and iteratively selecting the unvisited node with the smallest known distance from the source.'
        },
        {
            id: 'pp-cs-2020-1-q6d',
            questionType: 'Other',
            questionText: 'Derive the complexity of this algorithm',
            idealAnswer: 'The time complexity of Dijkstra\'s algorithm is typically O(E log V) or O(V²) depending on the data structure used to store the vertices (E is the number of edges, V is the number of vertices). With a binary heap, it\'s O((E+V)logV).'
        },
        {
            id: 'pp-cs-2020-1-q7a',
            questionType: 'Other',
            questionText: 'How many tokens are there in in this C code : printf("k = %d, &k = %x", k, &k);',
            idealAnswer: 'The tokens are: 1. `printf` (identifier) 2. `(` (punctuator) 3. `"k = %d, &k = %x"` (string literal) 4. `,` (punctuator) 5. `k` (identifier) 6. `,` (punctuator) 7. `&` (operator) 8. `k` (identifier) 9. `)` (punctuator) 10. `;` (punctuator). There are 10 tokens.'
        },
        {
            id: 'pp-cs-2020-1-q7b',
            questionType: 'Other',
            questionText: 'Create State Transition Table from the following graph',
            idealAnswer: 'A state transition table shows for each state and each possible input character, which state the machine transitions to next. The answer would require creating a table with rows for states (A, B, C) and columns for inputs (0, 1) and filling in the destination state based on the arrows in the missing graph.'
        },
        {
            id: 'pp-cs-2020-1-q7c',
            questionType: 'Other',
            questionText: 'Draw Finite State Automata which accepts following input. i. JIM ii. JMI iii. JJIIM iv. JJMMII',
            idealAnswer: 'This is likely asking for a single FSA that accepts a language described by these examples. The language could be J* M* I* or J* I* M*. A possible FSA would have states to handle sequences of J\'s, then M\'s, then I\'s, with transitions between them.'
        },
        {
            id: 'pp-cs-2020-1-q7d',
            questionType: 'Other',
            questionText: 'Determine which of these inputs are valid for the FSM shown below:',
            idealAnswer: 'To determine validity, one must trace each input string through the given Finite State Machine (FSM diagram, which is missing). A string is valid if the trace ends in an accepting (final) state.'
        },
        {
            id: 'pp-cs-2020-1-q8a',
            questionType: 'Other',
            questionText: 'Is P = NP? Comment',
            idealAnswer: 'The P vs NP problem is a major unsolved problem in computer science. It asks whether every problem whose solution can be quickly verified (NP) can also be quickly solved (P). Most computer scientists believe P ≠ NP, but it has not been proven.'
        },
        {
            id: 'pp-cs-2020-1-q8b',
            questionType: 'Other',
            questionText: 'Suppose you are representing a social network (such as facebook) as a graph. Devise an algorithm through which you can determine friends of friends.',
            idealAnswer: 'The algorithm for a given person (node `u`): 1. Initialize an empty set for friends-of-friends. 2. Iterate through all of `u`\'s direct friends (`v`). 3. For each friend `v`, iterate through all of their friends (`w`). 4. If `w` is not `u` and not already a direct friend of `u`, add `w` to the friends-of-friends set.'
        },
        {
            id: 'pp-cs-2020-1-q8c',
            questionType: 'Other',
            questionText: 'Explain the complexity of this algorithm',
            idealAnswer: 'The complexity depends on the graph representation. With an adjacency list, iterating through a node\'s friends takes time proportional to its degree. The complexity would be roughly O(Σ(degree(v)²)) for all friends `v` of `u`, which can be approximated as O(d_avg² * N_friends), where d_avg is the average degree.'
        },
        {
            id: 'pp-cs-2020-1-q8d',
            questionType: 'Other',
            questionText: 'Optimal problems are generally NP hard problems. Is it appropriate to use heuristics based approaches?',
            idealAnswer: 'Yes, it is appropriate and often necessary. For NP-hard problems, finding the exact optimal solution is computationally infeasible for large inputs. Heuristic approaches (like greedy algorithms or genetic algorithms) are used to find a good, approximate solution in a reasonable amount of time.'
        },
        {
            id: 'pp-cs-2020-2-q2a',
            questionType: 'Other',
            questionText: 'Explain Moore’s law. List high computing requirements in contemporary computing.',
            idealAnswer: 'Moore\'s Law is the observation that the number of transistors on a microchip doubles approximately every two years. Contemporary high computing requirements are driven by areas like AI/machine learning, big data analytics, scientific simulation, and high-resolution graphics.'
        },
        {
            id: 'pp-cs-2020-2-q2b',
            questionType: 'Other',
            questionText: 'List and briefly define two approaches to dealing with multiple interrupts.',
            idealAnswer: 'Two approaches are: 1. Disabling interrupts while an interrupt is being processed to prevent nested interrupts. 2. Using an interrupt priority system, where a higher-priority interrupt can interrupt the handling of a lower-priority one.'
        },
        {
            id: 'pp-cs-2020-2-q2c',
            questionType: 'Other',
            questionText: 'What is instruction-level parallelism? What are some typical distinguishing characteristics of RISC organization?',
            idealAnswer: 'Instruction-level parallelism (ILP) is the potential overlap in the execution of instructions to improve performance. RISC organization facilitates ILP with features like a large number of general-purpose registers, simple instruction formats, and a load/store architecture.'
        },
        {
            id: 'pp-cs-2020-2-q3a',
            questionType: 'Other',
            questionText: 'What is the kernel of an operating system? Explain the difference between a monolithic and microkernel.',
            idealAnswer: 'The kernel is the central component of an OS that manages system resources. A monolithic kernel has all OS services running in a single address space (e.g., Linux), making it fast but less modular. A microkernel has only essential services in the kernel, with others running as user-space servers (e.g., QNX), making it more reliable but with higher communication overhead.'
        },
        {
            id: 'pp-cs-2020-2-q3b',
            questionType: 'Other',
            questionText: 'What is the difference between simple and virtual memory paging? Also explain the purpose of translation lookaside buffer.',
            idealAnswer: 'Simple paging divides a process\'s address space into fixed-size pages stored in memory frames. Virtual memory paging extends this by allowing pages to be stored on disk and loaded into memory on demand. The Translation Lookaside Buffer (TLB) is a hardware cache that stores recent virtual-to-physical address translations to speed up memory access.'
        },
        {
            id: 'pp-cs-2020-2-q3c',
            questionType: 'Other',
            questionText: 'Why do we have deadlock in the multiprocessing environment? Explain different techniques for dealing with deadlocks.',
            idealAnswer: 'Deadlock occurs when two or more processes are blocked forever, each waiting for a resource held by another. Techniques for dealing with it include: 1. Prevention (negating one of the four necessary conditions). 2. Avoidance (e.g., Banker\'s algorithm). 3. Detection and Recovery.'
        },
        {
            id: 'pp-cs-2020-2-q4a',
            questionType: 'Other',
            questionText: 'Compare IPv4 and IPv6 headers. Explain the use of NAT technology to overcome IPv4 scarcity.',
            idealAnswer: 'The IPv6 header is simpler and more efficient than the IPv4 header, despite having larger addresses. It removes the checksum and options fields. Network Address Translation (NAT) overcomes IPv4 scarcity by allowing multiple devices on a private network to share a single public IPv4 address.'
        },
        {
            id: 'pp-cs-2020-2-q4b',
            questionType: 'Other',
            questionText: 'Find the maximum number of valid subnets and usable hosts per subnet that you can get from the network 172.23.0.0/23.',
            idealAnswer: 'A /23 mask leaves 32-23=9 bits for hosts. Total addresses = 2^9 = 512. Usable hosts = 512 - 2 = 510. This question is slightly ambiguous about the original class; assuming it was a /16, then 23-16=7 bits are used for subnets, allowing for 2^7 = 128 subnets.'
        },
        {
            id: 'pp-cs-2020-2-q4c',
            questionType: 'Other',
            questionText: 'List and briefly define any THREE file organization techniques. Also explain basic Linux file system security.',
            idealAnswer: 'Techniques: 1. Sequential (records stored in order). 2. Indexed Sequential (sequential with an index for direct access). 3. Hashed (records stored based on a hash function). Linux security uses permissions (read, write, execute) for three user classes (owner, group, others).'
        },
        {
            id: 'pp-cs-2020-2-q5a',
            questionType: 'Other',
            questionText: 'What is signal encoding? Explain different encoding techniques used in data communication.',
            idealAnswer: 'Signal encoding is the process of converting data into a signal for transmission. Techniques include NRZ (Non-Return-to-Zero), Manchester encoding (which includes a clocking signal), and schemes like 4B/5B which add extra bits to ensure signal integrity and clock recovery.'
        },
        {
            id: 'pp-cs-2020-2-q5b',
            questionType: 'Other',
            questionText: 'Explain the functions and needs of ARP and RARP protocols in computer networks.',
            idealAnswer: 'ARP (Address Resolution Protocol) is needed to map a known IP address to an unknown MAC address on a local network. RARP (Reverse ARP), now largely obsolete, was used by a diskless station to discover its own IP address from its known MAC address.'
        },
        {
            id: 'pp-cs-2020-2-q5c',
            questionType: 'Other',
            questionText: 'Explain multiplexing and demultiplexing at the transport layer. Explain in the context of TCP/IP protocol.',
            idealAnswer: 'Multiplexing involves the sender\'s transport layer gathering data from multiple application sockets and passing them to the network layer. Demultiplexing at the receiver involves using port numbers in the TCP/UDP headers to deliver segments to the correct application socket.'
        },
        {
            id: 'pp-cs-2020-2-q6a',
            questionType: 'Other',
            questionText: 'What is the purpose of a join in SQL? Explain inner, left, right and full join with the help of examples.',
            idealAnswer: 'A join is used to combine rows from two or more tables based on a related column. Inner Join: returns matching rows from both tables. Left Join: returns all rows from the left table, and matched rows from the right. Right Join: returns all rows from the right table. Full Join: returns all rows when there is a match in either table.'
        },
        {
            id: 'pp-cs-2020-2-q6b',
            questionType: 'Other',
            questionText: 'Construct an E-R diagram for a hospital with a set of patients and a set of medical doctors. Associate with each patient a log of the various tests and examinations conducted.',
            idealAnswer: 'The E-R diagram would have entities for `Doctor`, `Patient`, and `Test`. A `Doctor` "treats" many `Patients`. A `Patient` "undergoes" many `Tests`. A weak entity, `TestLog`, could be linked to `Patient` to store the details of each test conducted.'
        },
        {
            id: 'pp-cs-2020-2-q6c',
            questionType: 'Other',
            questionText: 'Explain Two-phase locking (2PL) as a concurrency control mechanism in the database systems.',
            idealAnswer: '2PL is a protocol to ensure serializability. It has two phases: a "growing phase" where a transaction can acquire locks but not release any, and a "shrinking phase" where it can release locks but not acquire new ones. This prevents transactions from interfering with each other.'
        },
        {
            id: 'pp-cs-2020-2-q7a',
            questionType: 'Other',
            questionText: 'What is Histogram equalization? Explain the process and discuss its uses.',
            idealAnswer: 'Histogram equalization is a technique in image processing used to enhance contrast. The process involves redistributing the pixel intensity values so that they are as evenly distributed as possible. It is used in medical imaging and satellite photo enhancement.'
        },
        {
            id: 'pp-cs-2020-2-q7b',
            questionType: 'Other',
            questionText: 'Explain types of color models. Also discuss the most common hardware oriented color models in detail.',
            idealAnswer: 'Types include additive models (like RGB, for screens) and subtractive models (like CMYK, for printing). RGB (Red, Green, Blue) is the most common hardware model for displays, where colors are created by adding different intensities of red, green, and blue light.'
        },
        {
            id: 'pp-cs-2020-2-q7c',
            questionType: 'Other',
            questionText: 'What is translation and scaling? Find the number of bits required to store a 256x256 image with 32 gray levels.',
            idealAnswer: 'Translation is a geometric transformation that moves an object. Scaling changes its size. 32 gray levels requires 5 bits per pixel (2^5 = 32). Storage = 256 * 256 * 5 = 327,680 bits.'
        },
        {
            id: 'pp-cs-2020-2-q8a',
            questionType: 'Other',
            questionText: '"Web engineering is more challenging than traditional software engineering". Argue for or against.',
            idealAnswer: 'Argument For: Web engineering is more challenging due to the need to deal with diverse browsers, unpredictable network conditions, security threats, short development cycles, and the constant need to update for changing technologies and user expectations.'
        },
        {
            id: 'pp-cs-2020-2-q8b',
            questionType: 'Other',
            questionText: 'Briefly discuss the role of validation and verification in requirement engineering.',
            idealAnswer: 'In requirement engineering, verification ensures the requirements are well-formed, complete, and consistent. Validation ensures that the specified requirements actually meet the customer\'s needs and will solve their problem.'
        },
        {
            id: 'pp-cs-2020-2-q8c',
            questionType: 'Other',
            questionText: 'Explain functional and non-functional requirements in the context of a web application development.',
            idealAnswer: 'Functional requirements define specific behaviors of a system (e.g., "A user shall be able to add an item to the shopping cart"). Non-functional requirements define quality attributes (e.g., "The website must load in under 3 seconds" or "The system must be secure against SQL injection").'
        }
    ]
  },
  {
    id: 'pp-cs-2021-1',
    year: 2021,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2021-1-q2a',
            questionType: 'Other',
            questionText: 'What are office productivity tools? Explain uses of any two productivity tools in your home or workplace.',
            idealAnswer: 'Office productivity tools are software applications used to create, process, and present information. Two examples are: 1. Word Processors (like MS Word) for creating documents. 2. Spreadsheets (like MS Excel) for organizing, analyzing, and visualizing data.'
        },
        {
            id: 'pp-cs-2021-1-q2b',
            questionType: 'Other',
            questionText: 'Write a detailed note on computer crimes and ethical challenges.',
            idealAnswer: 'Computer crimes include hacking, phishing, identity theft, and spreading malware. Ethical challenges include issues of privacy (data collection by companies), intellectual property (piracy), and the impact of automation and AI on employment and societal bias.'
        },
        {
            id: 'pp-cs-2021-1-q2c',
            questionType: 'Other',
            questionText: 'What are the different types of computers? Explain the benefits of miniaturization.',
            idealAnswer: 'Types include supercomputers, mainframes, minicomputers, and microcomputers. Miniaturization, the process of making electronics smaller, has led to benefits like portability (laptops, smartphones), lower power consumption, and reduced cost, making computing accessible to the masses.'
        },
        {
            id: 'pp-cs-2021-1-q3a',
            questionType: 'Other',
            questionText: 'Describe any two of the following briefly: ISP, HTML, SSD, Cloud Computing.',
            idealAnswer: 'ISP (Internet Service Provider): A company that provides internet access. HTML (Hypertext Markup Language): The standard language for creating web pages. SSD (Solid-State Drive): A storage device that uses flash memory, much faster than traditional hard drives. Cloud Computing: Delivering computing services—including servers, storage, and software—over the Internet.'
        },
        {
            id: 'pp-cs-2021-1-q3b',
            questionType: 'Other',
            questionText: 'Write a program that should output the factors of the number passed as input – one factor on each line.',
            idealAnswer: 'The program would take an integer `n` as input. It would then use a `for` loop that iterates from 1 up to `n`. Inside the loop, it would check if `n % i == 0`. If the condition is true, `i` is a factor and should be printed.'
        },
        {
            id: 'pp-cs-2021-1-q3c',
            questionType: 'Other',
            questionText: 'What are IDEs? How do they help in software development? List the IDEs you have ever used.',
            idealAnswer: 'An IDE (Integrated Development Environment) is a software application that provides comprehensive facilities to programmers for software development. They help by combining a source code editor, build automation tools, and a debugger into a single application. Examples include Visual Studio, Eclipse, and IntelliJ IDEA.'
        },
        {
            id: 'pp-cs-2021-1-q3d',
            questionType: 'Other',
            questionText: 'Write a program in C/C++ to convert a decimal number to hexadecimal.',
            idealAnswer: 'The program can use a loop. Inside the loop, take the remainder of the decimal number when divided by 16. This remainder is a hexadecimal digit (0-9, A-F). Then, divide the decimal number by 16. Repeat until the number is 0. The hexadecimal digits are collected in reverse order.'
        },
        {
            id: 'pp-cs-2021-1-q4a',
            questionType: 'Other',
            questionText: 'Explain object oriented programming paradigm. Write a detailed note on any two of the principles of object oriented programming paradigm.',
            idealAnswer: 'OOP is a paradigm based on the concept of "objects," which can contain data and code. Two principles are: 1. Encapsulation: Bundling data and methods that operate on the data into a single unit, hiding the internal state. 2. Inheritance: A mechanism where a new class inherits properties and behaviors from an existing class.'
        },
        {
            id: 'pp-cs-2021-1-q4b',
            questionType: 'Other',
            questionText: 'Why do we need interfaces in OOP? How does it help in achieving abstraction?',
            idealAnswer: 'Interfaces define a contract of what a class can do, without specifying how it does it. They are needed to achieve polymorphism and loose coupling. They help in abstraction by hiding the implementation details and only exposing the necessary functionalities to the outside world.'
        },
        {
            id: 'pp-cs-2021-1-q4c',
            questionType: 'Other',
            questionText: 'What do you mean by runtime and compile time errors?',
            idealAnswer: 'Compile-time errors are detected by the compiler before the program is executed, such as syntax errors or type mismatches. Runtime errors occur while the program is running, such as division by zero or trying to access a null pointer. They are not caught by the compiler.'
        },
        {
            id: 'pp-cs-2021-1-q5a',
            questionType: 'Other',
            questionText: 'What is a tree in data structure? Describe its types with the help of examples.',
            idealAnswer: 'A tree is a hierarchical data structure consisting of nodes connected by edges. Types include: Binary Tree (each node has at most two children), Binary Search Tree (a binary tree with an ordering property), and balanced trees like AVL or Red-Black trees which maintain a logarithmic height.'
        },
        {
            id: 'pp-cs-2021-1-q5b',
            questionType: 'Other',
            questionText: 'What is pass by value and pass by reference? Can we pass an object as a parameter to call a method in java?',
            idealAnswer: 'Pass by value passes a copy of the variable\'s value. Pass by reference passes the memory address of the variable. Java is strictly pass-by-value. When an object is passed, a copy of the reference (the memory address) is passed by value. So, the method can modify the object\'s internal state, but cannot change the original reference to point to a new object.'
        },
        {
            id: 'pp-cs-2021-1-q5c',
            questionType: 'Other',
            questionText: 'Convert following infix notation to prefix (i) (30+23)*(43-21)/(84+7) (ii) 2*(1+(4*(2+1)+3))',
            idealAnswer: 'This requires converting the infix expression to postfix first, then reversing the postfix to get the prefix. (i) / * + 30 23 - 43 21 + 84 7. (ii) * 2 + 1 + * 4 + 2 1 3.'
        },
        {
            id: 'pp-cs-2021-1-q6a',
            questionType: 'Other',
            questionText: 'Convert following NFA to DFA:',
            idealAnswer: 'The conversion from a Non-deterministic Finite Automaton (NFA) to a Deterministic Finite Automaton (DFA) is done using the subset construction algorithm. Each state in the DFA corresponds to a set of states in the NFA. The specific resulting DFA depends on the NFA diagram provided in the question, which is missing.'
        },
        {
            id: 'pp-cs-2021-1-q6b',
            questionType: 'Other',
            questionText: 'Differentiate between overloading and overriding with the help of an example.',
            idealAnswer: 'Overloading is having multiple methods in the same class with the same name but different parameters (compile-time polymorphism). Overriding is a subclass providing a specific implementation of a method that is already defined in its superclass (runtime polymorphism).'
        },
        {
            id: 'pp-cs-2021-1-q6c',
            questionType: 'Other',
            questionText: 'What is recursion in data structures? Explain three conditions of a recursive function with the help of an example.',
            idealAnswer: 'Recursion is a technique where a function calls itself. Three conditions are: 1. A base case to stop the recursion. 2. A recursive step that moves towards the base case. 3. The function must call itself. Example: factorial function `fact(n) = n * fact(n-1)` with base case `fact(0) = 1`.'
        },
        {
            id: 'pp-cs-2021-1-q7a',
            questionType: 'Other',
            questionText: 'Write detailed notes on any TWO of the following: i. PERT chart ii. Unified Modeling Language iii. AVL Trees',
            idealAnswer: 'i. PERT chart: A project management tool used to schedule, organize, and coordinate tasks. ii. UML: A standardized modeling language used to visualize, specify, construct, and document the artifacts of a software system. iii. AVL Trees: A self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.'
        },
        {
            id: 'pp-cs-2021-1-q7b',
            questionType: 'Other',
            questionText: 'What is a Software Process Model? Explain the Spiral model in detail.',
            idealAnswer: 'A software process model is a structured representation of the process of software development. The Spiral model is an evolutionary model that combines features of prototyping and the waterfall model. It is risk-driven, with development proceeding in iterative spirals, each of which includes planning, risk analysis, engineering, and evaluation.'
        },
        {
            id: 'pp-cs-2021-1-q7c',
            questionType: 'Other',
            questionText: 'What do you mean by software quality? List at least five quality attributes.',
            idealAnswer: 'Software quality refers to the degree to which a software product meets specified requirements and user expectations. Five quality attributes are: Reliability, Usability, Efficiency, Maintainability, and Portability.'
        },
        {
            id: 'pp-cs-2021-1-q8a',
            questionType: 'Other',
            questionText: 'Consider the grammar S → cAd, A → a b | a. construct a top-down parse tree for the input string w = cad',
            idealAnswer: 'The parse tree would start with S at the root. S expands to cAd. Then, A expands to \'a\'. The leaves of the tree, read from left to right, would be c, a, d, which matches the input string.'
        },
        {
            id: 'pp-cs-2021-1-q8b',
            questionType: 'Other',
            questionText: 'Is the above given grammar ambiguous or unambiguous? Justify your answer.',
            idealAnswer: 'The grammar is unambiguous. For any given string in the language (like `cabd` or `cad`), there is only one possible parse tree. An ambiguous grammar would have at least one string with two or more distinct parse trees.'
        },
        {
            id: 'pp-cs-2021-1-q8c',
            questionType: 'Other',
            questionText: 'Write similarities and differences of CFG and regular expression.',
            idealAnswer: 'Similarity: Both are used to define formal languages. Difference: CFGs are more powerful than regular expressions. CFGs can describe languages with nested structures (like balanced parentheses), which regular expressions cannot.'
        },
        {
            id: 'pp-cs-2021-1-q8d',
            questionType: 'Other',
            questionText: 'Design grammar for the following language: “The set of all strings of 0s and 1s such that every 0 is immediately followed by at least one 1”.',
            idealAnswer: 'A possible Context-Free Grammar (CFG) would be: S -> 1S | 01S | ε. This grammar ensures that any 0 is always followed by a 1.'
        },
        {
            id: 'pp-cs-2021-1-q8e',
            questionType: 'Other',
            questionText: 'Write a note on Aspect Oriented Programming',
            idealAnswer: 'Aspect-Oriented Programming (AOP) is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns, such as logging, security, and transaction management. It does this by adding behavior (advice) to existing code without modifying the code itself.'
        },
        {
            id: 'pp-cs-2021-2-q2a',
            questionType: 'Other',
            questionText: 'The addressing in a typical instruction format are done by using different addressing modes. Examine any five addressing modes with an example...',
            idealAnswer: 'Five addressing modes: 1. Immediate (operand is in the instruction). 2. Direct (address of operand is in instruction). 3. Indirect (instruction contains address of a pointer to the operand). 4. Register (operand is in a register). 5. Register Indirect (instruction specifies a register containing the address of the operand).'
        },
        {
            id: 'pp-cs-2021-2-q2b',
            questionType: 'Other',
            questionText: 'The decimal value of address field in an instruction is 120... Calculate the address of corresponding operand.',
            idealAnswer: 'For Register Direct, the address field (120) would refer to register R120, and the operand is the content of R120. For Register Indirect, the operand is the content of the memory location whose address is stored in register R120.'
        },
        {
            id: 'pp-cs-2021-2-q2c',
            questionType: 'Other',
            questionText: 'Compare the set of addressing modes of RISC and CISC machines. Give one example of addressing modes used in RISC and CISC respectively.',
            idealAnswer: 'CISC machines typically have a rich set of complex addressing modes (e.g., memory indirect). RISC machines have a smaller, simpler set of addressing modes and follow a load/store architecture, with most operations happening on registers (e.g., register indirect is common).'
        },
        {
            id: 'pp-cs-2021-2-q3',
            questionType: 'Other',
            questionText: 'Memory managed by BITMAP is shown below... Insert a page H... Insert another page K...',
            idealAnswer: 'This problem requires manipulating a bitmap for memory management. The answers depend on the specific bitmap given, but it would involve finding the first sequence of 3 zeros for first-fit, and then finding the next sequence of 2 zeros from that point for next-fit. The corresponding bits would be set to 1. The linked list and hash table representations are alternative data structures for tracking free memory.'
        },
        {
            id: 'pp-cs-2021-2-q4a',
            questionType: 'Other',
            questionText: 'Calculate effective memory access time using following data...',
            idealAnswer: 'Effective Access Time = (Hit Ratio * Time_if_hit) + (Miss Ratio * Time_if_miss) = 0.85 * (20 + 115) + (0.15) * (20 + 115 + 115) = 114.75 + 37.5 = 152.25 nsec.'
        },
        {
            id: 'pp-cs-2021-2-q4b',
            questionType: 'Other',
            questionText: 'Consider a logical address and physical address of 31 and 22 bits respectively. What will be total logical and physical address space?',
            idealAnswer: 'Total logical address space = 2^31 bytes. Total physical address space = 2^22 bytes.'
        },
        {
            id: 'pp-cs-2021-2-q4c',
            questionType: 'Other',
            questionText: 'Does resource allocation graph shown below consist of a deadlock or not? Justify with reason.',
            idealAnswer: 'A deadlock exists if and only if there is a cycle in the resource allocation graph. The answer depends on the specific graph provided in the question paper (which is missing).'
        },
        {
            id: 'pp-cs-2021-2-q4d',
            questionType: 'Other',
            questionText: 'What is race condition? What are the different techniques to avoid race condition in the processes? Which one is optimal and why?',
            idealAnswer: 'A race condition occurs when the outcome of a computation depends on the unpredictable timing of concurrent processes accessing a shared resource. Techniques to avoid it include using mutexes, semaphores, and monitors. The "optimal" technique depends on the specific problem, but mutexes are a common and effective solution for ensuring mutual exclusion.'
        },
        {
            id: 'pp-cs-2021-2-q5a',
            questionType: 'Other',
            questionText: 'Compare Transmission Control Protocol and User Datagram Protocol. How they are used in wireless networks?',
            idealAnswer: 'TCP is reliable and connection-oriented; UDP is unreliable and connectionless. In wireless networks, which are inherently less reliable, TCP\'s error correction is valuable, but its overhead can be high. UDP is often used for real-time applications like VoIP over Wi-Fi where speed is critical.'
        },
        {
            id: 'pp-cs-2021-2-q5b',
            questionType: 'Other',
            questionText: 'What mechanism is used by TCP to protect itself from miss delivery?',
            idealAnswer: 'TCP uses sequence numbers and acknowledgements (ACKs) to protect against misdelivery and ensure reliable, in-order delivery. If an ACK is not received for a segment within a certain time, the segment is retransmitted.'
        },
        {
            id: 'pp-cs-2021-2-q5c',
            questionType: 'Other',
            questionText: 'Calculate the TCP window size to fully utilize the line on which WAN link is 2 Mbps and RTT between source and destination is 300 msec.',
            idealAnswer: 'The optimal window size is the Bandwidth-Delay Product. Bandwidth = 2 Mbps = 2,000,000 bps. RTT = 300 ms = 0.3 s. Window Size = 2,000,000 * 0.3 = 600,000 bits = 75,000 bytes.'
        },
        {
            id: 'pp-cs-2021-2-q6',
            questionType: 'Other',
            questionText: 'Consider the following database schema and write the relational algebra expression for the following queries.',
            idealAnswer: 'The solution requires writing expressions using relational algebra operators (Select, Project, Join). (i) Would involve a selection and projection. (ii) A left outer join between Instructor and Dept. (iii) A join between Students and Results with a selection condition. (iv) A join among Results, Instructor, and Dept with selection.'
        },
        {
            id: 'pp-cs-2021-2-q7a',
            questionType: 'Other',
            questionText: 'Write code/pseudo code to locate all of the large boxes in the image below using morphological image processing.',
            idealAnswer: 'The specific code depends on the image, but a general approach would be: 1. Use an erosion operation to eliminate all the small boxes. 2. Use a dilation operation with the same structuring element on the result to restore the large boxes to their original size.'
        },
        {
            id: 'pp-cs-2021-2-q7b',
            questionType: 'Other',
            questionText: 'Is there a need for more than 1 color model? Mention different colors models and there uses.',
            idealAnswer: 'Yes, different color models are needed for different purposes. RGB (Red, Green, Blue) is an additive model used for displays. CMYK (Cyan, Magenta, Yellow, Black) is a subtractive model used for printing. HSI (Hue, Saturation, Intensity) is a perceptual model used in image processing.'
        },
        {
            id: 'pp-cs-2021-2-q7c',
            questionType: 'Other',
            questionText: 'Explain CMY color model, its use and how is it different from CMYK?',
            idealAnswer: 'CMY is a subtractive color model used in printing where colors are created by subtracting brightness from white. It differs from CMYK because combining C, M, and Y in theory produces black, but in practice produces a muddy brown. CMYK adds a separate black (K) ink for true black and better contrast.'
        },
        {
            id: 'pp-cs-2021-2-q8',
            questionType: 'Other',
            questionText: 'Analyze the code and draw resulting table as drawing on the paper... What is the role of requirement engineering in web engineering?... What are different security mechanisms used for encrypting the contents of a website? Explain one in detail.',
            idealAnswer: 'The table question requires interpreting HTML `colspan` and `rowspan` attributes. Requirement engineering in web engineering is crucial for defining the scope, functionality, and constraints of a web application. Security mechanisms include SSL/TLS, which uses a combination of symmetric and asymmetric encryption to create a secure, encrypted channel between a client and a server.'
        }
    ]
  },
  {
    id: 'pp-cs-2022-1',
    year: 2022,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2022-1-q2a',
            questionType: 'Other',
            questionText: 'Using C++ write a function pattern (int n) that produces the following output. Pay special attention to the spaces and clearly state the return type of the function. Note that the following is just an example; your solution should work for any input “n”.',
            idealAnswer: 'The function would have a `void` return type. It requires nested loops. The outer loop iterates from 1 to `n`. The inner loops would handle printing the leading spaces, the numbers up to the current row number, and then the numbers back down to 1.'
        },
        {
            id: 'pp-cs-2022-1-q2b',
            questionType: 'Other',
            questionText: 'Write the differences between Computer Science, Software Engineering, Information Technology, Information Systems, Computer Engineering, and Bioinformatics.',
            idealAnswer: 'CS: Theory and fundamentals. SE: Engineering principles for software development. IT: Application and management of technology in organizations. IS: Bridge between IT and business. CE: Hardware and software interface. Bioinformatics: Using computation to analyze biological data.'
        },
        {
            id: 'pp-cs-2022-1-q2c',
            questionType: 'Other',
            questionText: 'Write output of the following C++ code assuming that there is no error in the code: ...',
            idealAnswer: '`p1` points to the last element of `ary`. `p1[-2]` accesses the element at index `3-2=1`, which is 2. `p2` then points to this element (`ary[1]`). `*p2 = 10` changes the value of `ary[1]` to 10. The output will be: 2, then 10.'
        },
        {
            id: 'pp-cs-2022-1-q3a',
            questionType: 'Other',
            questionText: 'Complete the C++ code below to find the number of distinct elements in an array in O(n) time (linear time complexity) where “n” is the number of elements in the array. For example, if the array is {3,1,3,8,2,1,8,2}, the number of distinct elements is 4 (to be returned from the function below) as the distinct elements are {1,2,3,8}. All the elements of the array are in the range [1,100]. Also, n >> 100 (n is significantly greater than 100).',
            idealAnswer: 'Since the range of elements is small and fixed [1,100], a boolean array (or a hash set) of size 101 can be used. Iterate through the input array. For each element `x`, if the boolean array at index `x` is false, set it to true and increment a counter. The final count is the number of distinct elements.'
        },
        {
            id: 'pp-cs-2022-1-q3b',
            questionType: 'Other',
            questionText: 'Write a detailed note on the principles of Information Security/ Privacy.',
            idealAnswer: 'Key principles include: Confidentiality (preventing unauthorized disclosure), Integrity (ensuring data is not altered), and Availability (ensuring data is accessible when needed) - the CIA triad. Other principles are Authenticity, Accountability, and Non-repudiation.'
        },
        {
            id: 'pp-cs-2022-1-q3c',
            questionType: 'Other',
            questionText: 'Write output of the following C++ code assuming that there is no error in the code: ...',
            idealAnswer: '`p1` points to `v1`. `p2` is made to point to the same location as `p1`. `*p1 = 20` changes the value at that location to 20. Since both pointers point to `v1`, dereferencing `p2` will print 20, and printing `v1` will also print 20.'
        },
        {
            id: 'pp-cs-2022-1-q4a',
            questionType: 'Other',
            questionText: 'Write a C++ program to check whether a string is palindrome or not... You are not allowed to use any string-related library function.',
            idealAnswer: 'The program should first find the length of the input string by iterating until the null terminator. Then, it should use two pointers, one at the beginning (`start`) and one at the end (`end`). It would loop while `start < end`, comparing `st[start]` and `st[end]` and moving the pointers inwards. If a mismatch is found, it\'s not a palindrome.'
        },
        {
            id: 'pp-cs-2022-1-q4b',
            questionType: 'Other',
            questionText: 'Write output of the following C++ code assuming that there is no error in the code: ...',
            idealAnswer: 'The code calculates the bitwise OR of a=12 (1100) and b=25 (11001). The result of 1100 | 11001 is 11101, which is 29 in decimal. The output will be: a = 12, b = 25, a | b = 29.'
        },
        {
            id: 'pp-cs-2022-1-q5a',
            questionType: 'Other',
            questionText: 'Define a class called Circle using C++... An object of the class Circle can be created using any of the following ways (implement all the ways): ...',
            idealAnswer: 'This requires creating a `Circle` class with attributes for radius and center coordinates. The solution involves implementing multiple overloaded constructors: a default constructor, a constructor that takes only the radius, one that takes only coordinates, one that takes all parameters, and a copy constructor.'
        },
        {
            id: 'pp-cs-2022-1-q5b',
            questionType: 'Other',
            questionText: 'What is a virtual function in C++? Using an example, explain how does a virtual function mechanism work.',
            idealAnswer: 'A virtual function is a member function in a base class that you expect to redefine in derived classes. When you refer to a derived class object using a pointer or a reference to the base class, you can call a virtual function for that object and execute the derived class\'s version of the function. This enables runtime polymorphism.'
        },
        {
            id: 'pp-cs-2022-1-q6a',
            questionType: 'Other',
            questionText: 'Complete the following recursive function using C++ to calculate k raised to the power n, i.e., kⁿ.',
            idealAnswer: 'The recursive function would be: `if (n == 0) return 1; else return k * power(k, n - 1);`. This defines the base case (n=0) and the recursive step.'
        },
        {
            id: 'pp-cs-2022-1-q6b',
            questionType: 'Other',
            questionText: 'Compare and contrast the DES, AES, and RSA encryption algorithms.',
            idealAnswer: 'DES and AES are symmetric-key algorithms (same key for encryption/decryption), while RSA is an asymmetric-key algorithm (public key for encryption, private key for decryption). AES is the modern standard, replacing the older and less secure DES. RSA is slower and used for key exchange and digital signatures.'
        },
        {
            id: 'pp-cs-2022-1-q6c',
            questionType: 'Other',
            questionText: 'Write the time complexity of the following C++ code in terms of Big-O notation.',
            idealAnswer: 'The loop runs from i=2 up to approximately sqrt(n). Therefore, the time complexity of this primality test function is O(sqrt(n)).'
        },
        {
            id: 'pp-cs-2022-1-q7a',
            questionType: 'Other',
            questionText: 'Draw control flow graph for the above function. Also find its cyclomatic complexity.',
            idealAnswer: 'The control flow graph would show nodes for each statement and edges for the flow of control, including branches for the `while` loop and `if-else if` statements. The cyclomatic complexity V(G) = E - N + 2P (where E=edges, N=nodes, P=connected components). For this structured code, it can be calculated as (number of decisions + 1).'
        },
        {
            id: 'pp-cs-2022-1-q7b',
            questionType: 'Other',
            questionText: 'What is the difference between white box (Glass Box) testing and black box testing? Which of these testing techniques helps in identifying more errors in a system under evaluation? Explain.',
            idealAnswer: 'Black-box testing focuses on the functionality without knowledge of the internal code. White-box testing examines the internal logic and structure of the code. White-box testing can typically find more errors because it can test specific code paths and boundary conditions that might be missed by black-box testing.'
        },
        {
            id: 'pp-cs-2022-1-q7c',
            questionType: 'Other',
            questionText: 'Write one user requirement and one system requirement for the following function: Automatically highlight incorrect spelling mistakes in an MS Word document.',
            idealAnswer: 'User Requirement: "The system shall identify and highlight misspelled words as I type." System Requirement: "The system shall compare each word typed against an internal dictionary file and apply a red wavy underline style to any word not found."'
        },
        {
            id: 'pp-cs-2022-1-q8a',
            questionType: 'Other',
            questionText: 'Draw a finite automaton over ∑ = {0, 1} that accepts all binary strings starting and ending with 0 (single-0 string counts).',
            idealAnswer: 'The DFA would have a start state, a state for seeing a single 0 (which is an accepting state), a state for seeing a 0 followed by other characters, and transitions that ensure any path ending in an accepting state must have ended with a 0.'
        },
        {
            id: 'pp-cs-2022-1-q8b',
            questionType: 'Other',
            questionText: 'Write a regular expression over ∑ = {0, 1} to represent a set of strings that begin with 101 and end with 110.',
            idealAnswer: 'The regular expression would be: `101(0|1)*110`.'
        },
        {
            id: 'pp-cs-2022-1-q8c',
            questionType: 'Other',
            questionText: 'Write a Context-Free Grammar (CFG) over ∑ = {0, 1} for the language of all binary strings of the form 0a1b0c where a+c=b.',
            idealAnswer: 'This language is context-sensitive, not context-free, and cannot be represented by a CFG. A CFG cannot enforce the count a+c=b. The question is likely flawed; a similar CFG could enforce a=b (S->0S1|T) or a=c (S->0S0|1), but not the sum.'
        },
        {
            id: 'pp-cs-2022-2-q2',
            questionType: 'Other',
            questionText: 'The following processes are being scheduled using a preemptive, round robin scheduling algorithm... Show the scheduling order... What is the turnaround time and waiting time for each process?',
            idealAnswer: 'This requires creating a Gantt chart that simulates the scheduling algorithm, accounting for priorities, preemption, and the round-robin time quantum. From the Gantt chart, the completion time, turnaround time (completion-arrival), and waiting time (turnaround-burst) can be calculated for each process.'
        },
        {
            id: 'pp-cs-2022-2-q3a',
            questionType: 'Other',
            questionText: 'Using banker’s algorithm, determine whether the state is safe or unsafe. If the state is safe, illustrate the order in which the processes may complete...',
            idealAnswer: 'The Banker\'s algorithm checks for a safe state by finding a sequence of processes that can complete. It simulates granting resources and checking if at least one process can finish and release its resources. The answer depends on the specific matrices of Allocation, Max, and Available provided in the question.'
        },
        {
            id: 'pp-cs-2022-2-q3b',
            questionType: 'Other',
            questionText: 'Give an account of different functions of Logical File System.',
            idealAnswer: 'The Logical File System, part of the OS, is responsible for managing file metadata. Its functions include maintaining the directory structure, mapping logical file names to file control blocks, and handling file protection and permissions.'
        },
        {
            id: 'pp-cs-2022-2-q3c',
            questionType: 'Other',
            questionText: 'What resources are used when a thread is created? How do they differ from those used when a process is created?',
            idealAnswer: 'Creating a thread is lightweight. It gets its own stack, program counter, and registers, but it shares the memory space, code, and other resources with its parent process. Creating a process is heavyweight; it requires creating a completely new address space and copying resources, which is much slower.'
        },
        {
            id: 'pp-cs-2022-2-q4a',
            questionType: 'Other',
            questionText: 'Assume a pipeline with four stages: fetch instruction (FI), decode instruction and calculate addresses (DA), fetch operand (FO), and execute (EX). Draw a diagram for a sequence of 7 instructions, in which the third instruction is a branch that is taken and in which there are no data dependencies.',
            idealAnswer: 'The diagram would be a space-time diagram showing time on the x-axis and instructions on the y-axis. It would show the first two instructions proceeding through the pipeline. When the third (branch) instruction is executed, the pipeline would be "flushed," and the instructions fetched after it (4 and 5) would be discarded. The pipeline would then restart fetching from the branch target (instruction 6).'
        },
        {
            id: 'pp-cs-2022-2-q4b',
            questionType: 'Other',
            questionText: 'A set associative cache consists of 64 lines, or slots, divided into 4-slot sets. Main memory contains 4K blocks of 128 words each. Show the format of main memory addresses.',
            idealAnswer: 'Main memory size = 4K blocks * 128 words = 2^12 * 2^7 = 2^19 words. Address is 19 bits. Cache sets = 64/4 = 16 sets, so 4 bits for set index. Offset within a block = 128 words = 2^7, so 7 bits for word offset. Tag bits = 19 - 4 - 7 = 8 bits. Address format: [8-bit Tag | 4-bit Set | 7-bit Word].'
        },
        {
            id: 'pp-cs-2022-2-q4c',
            questionType: 'Other',
            questionText: 'Why is DMA access to main memory given higher priority than CPU access to main memory?',
            idealAnswer: 'DMA (Direct Memory Access) is given higher priority because I/O devices often have limited buffering and can lose data if not serviced promptly. Giving DMA priority via "cycle stealing" ensures that data from high-speed peripherals is not lost, even if it momentarily slows down the CPU.'
        },
        {
            id: 'pp-cs-2022-2-q5a',
            questionType: 'Other',
            questionText: 'Describe any one of the routing algorithms in detail, which is used to resolve the conflict between path selections.',
            idealAnswer: 'Dijkstra\'s algorithm can be described. It is a link-state routing algorithm that finds the shortest path from a source node to all other nodes in a network. It works by iteratively building a set of nodes with the shortest known paths, always selecting the nearest unvisited node.'
        },
        {
            id: 'pp-cs-2022-2-q5b',
            questionType: 'Other',
            questionText: 'A company occupies four buildings on a campus... What will be the proposed design solution under the given condition?',
            idealAnswer: 'A hierarchical network design would be suitable. Each building would have its own LAN with switches. The four building LANs would be connected to a central "backbone" switch or router using high-speed fiber optic links to form a campus area network (CAN), providing the required 100 Mbps data transfer rate between buildings.'
        },
        {
            id: 'pp-cs-2022-2-q5c',
            questionType: 'Other',
            questionText: 'What is the main fault in TCP 3-way handshake which makes it a boon for attackers? Does this parameter solve the problem in TCP 3-way handshake?',
            idealAnswer: 'The fault is that the server allocates resources upon receiving a SYN packet. An attacker can exploit this in a SYN flood attack, sending many SYN packets from spoofed IPs. The server allocates resources for each, waiting for ACKs that never arrive, and eventually runs out of resources. The backlog parameter helps mitigate this by limiting the number of half-open connections, but it does not solve the fundamental problem.'
        },
        {
            id: 'pp-cs-2022-2-q6',
            questionType: 'Other',
            questionText: 'Find the reflection, , of each of the following Structuring Elements (SE)...The R, G, and B component images of an RGB image have the horizontal intensity profiles...How Digital Image Processing and Computer Vision are related? Discuss.',
            idealAnswer: 'The solution requires analyzing the missing diagrams for reflection and color interpretation. DIP is a field that involves processing digital images using algorithms, often as a low-level input for Computer Vision. CV is a broader field of AI that aims to make computers understand and interpret the content of images, using DIP techniques as a foundational step.'
        },
        {
            id: 'pp-cs-2022-2-q7a',
            questionType: 'Other',
            questionText: 'Explain 3-tier web application architecture.',
            idealAnswer: '3-tier architecture separates an application into: 1. Presentation Tier (Client/UI, e.g., web browser). 2. Application Tier (Server-side logic, e.g., an application server running Java or Python). 3. Data Tier (Database server, e.g., MySQL). This modular design improves scalability and maintainability.'
        },
        {
            id: 'pp-cs-2022-2-q7b',
            questionType: 'Other',
            questionText: 'Write the jQuery code to slide elements up and down. Also write the code to fade the elements in and out of visibility. Use HTML, CSS, and jQuery.',
            idealAnswer: 'Slide: `$(\'#element\').slideUp();` and `$(\'#element\').slideDown();` or `slideToggle()`. Fade: `$(\'#element\').fadeIn();` and `$(\'#element\').fadeOut();` or `fadeToggle()`.'
        },
        {
            id: 'pp-cs-2022-2-q7c',
            questionType: 'Other',
            questionText: 'What is web application promotion? Discuss some of the common webvertising methods.',
            idealAnswer: 'Web application promotion involves marketing a web app to attract users. Common webvertising (web advertising) methods include Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising on search engines, social media marketing, and content marketing.'
        },
        {
            id: 'pp-cs-2022-2-q8a',
            questionType: 'Other',
            questionText: 'Explain process of Web Application Testing.',
            idealAnswer: 'Web application testing involves several stages: 1. Functionality Testing (checking all features work). 2. Usability Testing. 3. Interface Testing. 4. Compatibility Testing (across different browsers). 5. Performance Testing (load and stress testing). 6. Security Testing.'
        },
        {
            id: 'pp-cs-2022-2-q8b',
            questionType: 'Other',
            questionText: 'Explain in detail the Document Object Model (DOM). Also discuss XML and RSS.',
            idealAnswer: 'The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. XML (Extensible Markup Language) is a markup language for encoding documents in a human-readable format. RSS (Really Simple Syndication) is an XML-based format used to publish frequently updated works such as blog entries or news headlines.'
        },
        {
            id: 'pp-cs-2022-2-q8c',
            questionType: 'Other',
            questionText: 'Explain how can you access a database from a JSP page? Give the database connectivity issues in details.',
            idealAnswer: 'You can access a database from a JSP page using JDBC (Java Database Connectivity). This involves loading the JDBC driver, establishing a connection, creating a statement, executing the query, and processing the result set. Issues include connection pooling problems, SQL injection vulnerabilities, and handling database exceptions properly.'
        }
    ]
  },
  {
    id: 'pp-cs-2023-1',
    year: 2023,
    subject: 'Computer Science',
    questions: [
        {
            id: 'pp-cs-2023-1-q2a',
            questionType: 'Other',
            questionText: 'Write a detailed note on any 03 Super Computing Technologies being used in the world. List key characteristics in each case.',
            idealAnswer: 'Technologies could include: 1. Massively Parallel Processing (MPP): Uses thousands of processors, each with its own memory, communicating over a high-speed interconnect. 2. Vector Processing: Uses specialized hardware to perform a single operation on a large set of data simultaneously. 3. Cluster Computing: Uses a large number of commodity computers connected by a network to work as a single system.'
        },
        {
            id: 'pp-cs-2023-1-q2b',
            questionType: 'Other',
            questionText: 'What performance metrics are used to analyze the capacity of Super Computers? Discuss.',
            idealAnswer: 'Key metrics are FLOPS (Floating-Point Operations Per Second), often measured in petaflops or exaflops. Other metrics include benchmark performance (like LINPACK, used for the TOP500 list), memory bandwidth, and interconnect speed.'
        },
        {
            id: 'pp-cs-2023-1-q2c',
            questionType: 'Other',
            questionText: 'Discuss the role of Web Crawling, Indexing & Searching operations for a Search Engine.',
            idealAnswer: '1. Crawling: Web crawlers (spiders) systematically browse the web to discover pages. 2. Indexing: The content of these pages is analyzed and stored in a massive database called an index. 3. Searching: When a user queries, the search engine scans its index to find the most relevant pages and ranks them.'
        },
        {
            id: 'pp-cs-2023-1-q3a',
            questionType: 'Other',
            questionText: 'How does dynamic memory allocation is managed programmatically in a C++ program? Clarify yours understanding through a viable program.',
            idealAnswer: 'Dynamic memory allocation is managed using the `new` operator to allocate memory on the heap and the `delete` operator to deallocate it. A viable program would show allocating an array with `new int[size]`, using it, and then freeing the memory with `delete[]` to prevent memory leaks.'
        },
        {
            id: 'pp-cs-2023-1-q3b',
            questionType: 'Other',
            questionText: 'Write a note on the use of overloaded operators. Discuss with examples.',
            idealAnswer: 'Operator overloading allows user-defined types (classes) to use standard operators like `+`, `-`, or `<<`. For example, you could overload the `+` operator for a `Complex` number class to perform complex addition, making the code more intuitive: `Complex c3 = c1 + c2;`.'
        },
        {
            id: 'pp-cs-2023-1-q3c',
            questionType: 'Other',
            questionText: 'What is bit twiddling? Give brief description.',
            idealAnswer: 'Bit twiddling, or bit manipulation, involves using bitwise operators (AND, OR, XOR, SHIFT) to manipulate individual bits within a data word. It\'s used for low-level tasks, performance optimization, and implementing algorithms in areas like cryptography and graphics.'
        },
        {
            id: 'pp-cs-2023-1-q4a',
            questionType: 'Other',
            questionText: 'What is Polymorphism? Explain Ad-Hoc Polymorphism, Parametric Polymorphism & Subtyping with suitable coding examples.',
            idealAnswer: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass. Ad-Hoc Polymorphism (Overloading): Same function name, different parameters. Parametric Polymorphism (Generics/Templates): Code that can work with any data type. Subtyping (Overriding): A subclass provides its own implementation of a method from its superclass.'
        },
        {
            id: 'pp-cs-2023-1-q4b',
            questionType: 'Other',
            questionText: 'Discuss Late Binding with a short program.',
            idealAnswer: 'Late binding (or dynamic binding) means the actual method to be called is determined at runtime, not compile time. This is achieved through virtual functions in C++. A program would show a base class pointer pointing to a derived class object and calling a virtual function, demonstrating that the derived class\'s version is executed.'
        },
        {
            id: 'pp-cs-2023-1-q4c',
            questionType: 'Other',
            questionText: 'Differentiate between Abstraction & Encapsulation.',
            idealAnswer: 'Abstraction is about hiding complexity and showing only essential features (e.g., a car\'s steering wheel). Encapsulation is about bundling data and methods together into a single unit and restricting access to the data (e.g., a class with private data members and public methods).'
        },
        {
            id: 'pp-cs-2023-1-q5a',
            questionType: 'Other',
            questionText: 'For analyzing an Algorithm theoretically & asymptotically, give a detailed note on Input size, unit of time & order of growth. Support your answer with appropriate mathematical equations.',
            idealAnswer: 'Input size (n) is a measure of the problem size. Unit of time is an abstract measure of a basic computer step. Order of growth describes how the running time scales as n increases, ignoring constants and lower-order terms (e.g., an algorithm with time 3n²+5n+2 has an order of growth of n²).'
        },
        {
            id: 'pp-cs-2023-1-q5b',
            questionType: 'Other',
            questionText: 'Briefly describe the four types of analysis we may perform to evaluate the asymptotic behavior of an algorithm.',
            idealAnswer: 'Four types are: 1. Worst-case analysis (Big-O): Provides an upper bound on running time. 2. Best-case analysis (Big-Omega): Provides a lower bound. 3. Average-case analysis (Big-Theta): Describes the typical behavior. 4. Amortized analysis: Averages the cost of operations over a sequence.'
        },
        {
            id: 'pp-cs-2023-1-q5c',
            questionType: 'Other',
            questionText: 'Evaluate order of growth of the functions given below. Compare & write down which one has higher, same or lower order of growth than the other one:',
            idealAnswer: 'I. Same (both are O(n²)). II. 0.01n³ has higher growth. III. Same (log base doesn\'t affect asymptotic growth). IV. Same (both are O(2ⁿ)). V. n! has higher growth.'
        },
        {
            id: 'pp-cs-2023-1-q6a',
            questionType: 'Other',
            questionText: 'Discuss the architecture of aspect-oriented system.',
            idealAnswer: 'Aspect-Oriented architecture separates cross-cutting concerns (like logging) into modules called "aspects." These aspects are then woven into the primary business logic at specific points ("join points") defined by "pointcuts," without modifying the original source code.'
        },
        {
            id: 'pp-cs-2023-1-q6b',
            questionType: 'Other',
            questionText: 'Briefly discuss the motivation for aspect-oriented programming.',
            idealAnswer: 'The motivation is to improve modularity by separating concerns that cut across multiple classes, such as logging, security, and transaction management. This leads to cleaner code that is easier to maintain.'
        },
        {
            id: 'pp-cs-2023-1-q6c',
            questionType: 'Other',
            questionText: 'Briefly describe 05 agile software development frameworks.',
            idealAnswer: 'Five frameworks are: 1. Scrum (iterative sprints with specific roles). 2. Kanban (visualizing workflow on a board). 3. Extreme Programming (XP) (emphasizes technical practices like TDD). 4. Lean (eliminating waste). 5. Crystal (focuses on people and interaction).'
        },
        {
            id: 'pp-cs-2023-1-q7a',
            questionType: 'Other',
            questionText: 'Design and draw a finite automaton to recognize the regular language of all strings that contain the string ‘001’ as a substring.',
            idealAnswer: 'The DFA would have four states: q0 (start), q1 (seen a 0), q2 (seen "00"), and q3 (seen "001", the accepting state). Transitions would be defined for each state on input 0 or 1 to correctly track the progress towards finding the substring "001".'
        },
        {
            id: 'pp-cs-2023-1-q7b',
            questionType: 'Other',
            questionText: 'Consider the following state diagram and extract the standard information, i.e., Q, Σ, q0, F and δ.',
            idealAnswer: 'The answer requires transcribing the information from the missing state diagram into the formal 5-tuple definition of a finite automaton: Q (set of states), Σ (alphabet), q0 (start state), F (set of final states), and δ (the transition function).'
        },
        {
            id: 'pp-cs-2023-1-q7c',
            questionType: 'Other',
            questionText: 'How would you optimize a loop? Describe the techniques briefly.',
            idealAnswer: 'Techniques include: Code Motion (moving loop-invariant code out), Strength Reduction (replacing expensive operations with cheaper ones), and Loop Unrolling (reducing loop overhead by duplicating the loop body).'
        },
        {
            id: 'pp-cs-2023-1-q8a',
            questionType: 'Other',
            questionText: 'Discuss the role of Syntax Tree in representing formal text structure. Develop a Syntax Tree structure for the following piece of code...',
            idealAnswer: 'A Syntax Tree (or Abstract Syntax Tree) represents the hierarchical syntactic structure of source code. For the given code, the root would be a `while` node, with children for the condition (`b != 0`) and the body (an `if-else` node), which would in turn have children for their conditions and statements.'
        },
        {
            id: 'pp-cs-2023-1-q8b',
            questionType: 'Other',
            questionText: 'Describe your understanding on Constant Folding using a brief pseudo code.',
            idealAnswer: 'Constant folding is a compiler optimization technique where expressions with constant operands are evaluated at compile time instead of runtime. For example, `x = 2 + 3 * 5;` would be optimized by the compiler to `x = 17;`.'
        },
        {
            id: 'pp-cs-2023-1-q8c',
            questionType: 'Other',
            questionText: 'What is an Optimization problem? What are its 02 general categories? Write down mathematical representation of a standard optimization problem.',
            idealAnswer: 'An optimization problem is the problem of finding the best solution from all feasible solutions. Two general categories are continuous optimization and combinatorial optimization. A standard representation is: `minimize f(x) subject to g(x) <= 0`, where `f(x)` is the objective function and `g(x)` are the constraints.'
        },
        {
            id: 'pp-cs-2023-2-q2a',
            questionType: 'Other',
            questionText: 'Suggest reasons why RAMs traditionally have been organized as only one bit per chip whereas ROMs are usually organized with multiple bits per chip.',
            idealAnswer: 'RAMs were organized as 1-bit-per-chip to allow for easier expansion of the word size of a memory system by adding more chips in parallel. ROMs, containing fixed programs, were organized with wider data buses (multiple bits per chip) for faster and more convenient access to entire bytes or words.'
        },
        {
            id: 'pp-cs-2023-2-q2b',
            questionType: 'Other',
            questionText: 'Consider a dynamic RAM that must be given a refresh cycle 64 times per ms... What percentage of the memory’s total operating time must be given to refreshes?',
            idealAnswer: 'Total time for refreshes per ms = 64 * 150 ns = 9600 ns = 9.6 µs. Total time in 1 ms = 1000 µs. Percentage = (9.6 / 1000) * 100 = 0.96%.'
        },
        {
            id: 'pp-cs-2023-2-q2c',
            questionType: 'Other',
            questionText: 'In the context of RAID, what is the distinction between parallel access and independent access?',
            idealAnswer: 'In parallel access RAID (like RAID 3), all disks participate in every I/O request, with data striped at the bit or byte level. In independent access RAID (like RAID 5), each disk can operate independently, allowing multiple I/O requests to be serviced in parallel.'
        },
        {
            id: 'pp-cs-2023-2-q3a',
            questionType: 'Other',
            questionText: 'The CPU in a router can process 2 million packets/sec. The load offered to it is 1.5 million packets/sec. If a route from source to destination contains 10 routers, how much time is spent being queued and serviced by the CPUs?',
            idealAnswer: 'Using queuing theory (M/M/1 queue), arrival rate λ=1.5M, service rate µ=2M. Time in one router = 1/(µ-λ) = 1/(2M-1.5M) = 2 microseconds. Total time for 10 routers = 10 * 2 µs = 20 microseconds.'
        },
        {
            id: 'pp-cs-2023-2-q3b',
            questionType: 'Other',
            questionText: 'An IP datagram using the strict source routing option has to be fragmented. Do you think the option is copied into each fragment, or is it sufficient to just put it in the first fragment? Explain your answer.',
            idealAnswer: 'The option must be copied into each fragment. This is because each fragment is routed independently through the network, and intermediate routers need the source routing information contained in the header option to correctly forward each fragment.'
        },
        {
            id: 'pp-cs-2023-2-q3c',
            questionType: 'Other',
            questionText: 'Give two examples of computer applications for which connection-oriented service is appropriate and also give two examples for which connection-less service is best.',
            idealAnswer: 'Connection-oriented (TCP) is appropriate for file transfer (FTP) and email (SMTP) where reliability is crucial. Connectionless (UDP) is best for real-time applications like video conferencing and online gaming where speed is more important than perfect reliability.'
        },
        {
            id: 'pp-cs-2023-2-q4a',
            questionType: 'Other',
            questionText: 'A 32-bit computer has two selector channels and one multiplexor channel... Estimate the maximum aggregate I/O transfer rate in this system.',
            idealAnswer: 'Selector channels can handle one high-speed device at a time. So, selector channel rate = max(disk, tape) = 800 KBps each. Multiplexer channel can handle multiple slow devices simultaneously. Max aggregate rate = (2 * 800) + (2*6.6 + 2*1.2 + 10*1) = 1600 + 25.6 = 1625.6 Kbytes/s.'
        },
        {
            id: 'pp-cs-2023-2-q4b',
            questionType: 'Other',
            questionText: 'Consider a program that access a single I/O device and compare un- buffered I/O to the use of a buffer. Show that the use of buffer can reduce the running time by at most a factor of two.',
            idealAnswer: 'With unbuffered I/O, computation and I/O are sequential. Time = T_compute + T_IO. With a buffer, computation and I/O can be overlapped. The total time is max(T_compute, T_IO). In the best case for buffering, T_compute = T_IO, so the total time becomes T_IO, which is half of the unbuffered time (2 * T_IO). This shows a speedup of at most a factor of two.'
        },
        {
            id: 'pp-cs-2023-2-q5a',
            questionType: 'Other',
            questionText: 'An I/O -bound program is one that...Explain why this algorithm favors I/O bound programs and yet does not permanently deny processor time to processor-bound programs?',
            idealAnswer: 'The algorithm favors I/O-bound programs because they use the CPU in short bursts and then wait for I/O, so they always have a low "recent CPU usage." This gives them high priority. It doesn\'t permanently deny time to CPU-bound programs because as they wait, their priority will eventually rise, or in a round-robin system, they will eventually get their turn.'
        },
        {
            id: 'pp-cs-2023-2-q5b',
            questionType: 'Other',
            questionText: 'Suppose that instead of using 16-bits for the network part of a class B address originally, 20 bits had been used. How many class B networks would there have been?',
            idealAnswer: 'A class B address starts with "10". If 20 bits were used for the network part, that would leave 18 bits for the network ID (20 total bits - 2 fixed bits). The number of networks would have been 2^18.'
        },
        {
            id: 'pp-cs-2023-2-q5c',
            questionType: 'Other',
            questionText: 'What is the distinction between instruction-level parallelism and machine parallelism?',
            idealAnswer: 'Instruction-level parallelism (ILP) refers to the potential overlap in the execution of instructions in a program. Machine parallelism refers to the ability of the processor hardware (e.g., multiple execution units in a superscalar processor) to exploit ILP and execute multiple instructions simultaneously.'
        },
        {
            id: 'pp-cs-2023-2-q6a',
            questionType: 'Other',
            questionText: 'Explain the following different SELECT statement search conditions with examples using any database schema of your choice:',
            idealAnswer: '1. Compound Comparison: `WHERE price > 100 AND category = \'Electronics\'`. 2. Range (BETWEEN): `WHERE price BETWEEN 100 AND 500`. 3. Set Membership (IN): `WHERE category IN (\'Electronics\', \'Books\')`. 4. Pattern Match (LIKE): `WHERE name LIKE \'A%\'`.'
        },
        {
            id: 'pp-cs-2023-2-q6b',
            questionType: 'Other',
            questionText: 'Explain ACID property of a transaction',
            idealAnswer: 'ACID ensures database reliability: Atomicity (all-or-nothing operations), Consistency (transactions bring the database from one valid state to another), Isolation (concurrent transactions don\'t affect each other), Durability (committed changes are permanent).'
        },
        {
            id: 'pp-cs-2023-2-q6c',
            questionType: 'Other',
            questionText: 'Explain Transitive dependency using any example.',
            idealAnswer: 'A transitive dependency exists when a non-key attribute depends on another non-key attribute. Example: In a table (StudentID, StudentName, DepartmentID, DepartmentName), DepartmentName depends on DepartmentID, which in turn depends on StudentID. This violates 3rd Normal Form.'
        },
        {
            id: 'pp-cs-2023-2-q7a',
            questionType: 'Other',
            questionText: 'A common measure of transmission for digital data is the baud rate... How many minutes would it take to transmit a 1024 ×1024 image with 256 intensity levels using a 56k baud modem?',
            idealAnswer: 'Image size = 1024*1024 pixels. 256 levels = 8 bits/pixel. Total bits = 1024*1024*8 = 8,388,608 bits. Transmission packet = 1 start + 8 data + 1 stop = 10 bits. Total bits to transmit = 8,388,608 * (10/8) = 10,485,760 bits. At 56k (56000 bps), time = 10,485,760 / 56000 ≈ 187.2 seconds ≈ 3.12 minutes. At 750k bps, time = 10,485,760 / 750000 ≈ 14 seconds.'
        },
        {
            id: 'pp-cs-2023-2-q7b',
            questionType: 'Other',
            questionText: 'What effect would setting to zero the lower-order bit planes have on the histogram of an image in general?',
            idealAnswer: 'Setting the lower-order bit planes to zero reduces the number of distinct intensity levels in the image. This would cause the histogram to become more "spiky," with fewer, taller bars, as multiple original intensity levels would be mapped to a single new level.'
        },
        {
            id: 'pp-cs-2023-2-q7c',
            questionType: 'Other',
            questionText: 'What would be the effect on the histogram if we set to zero the higher order bit planes instead?',
            idealAnswer: 'Setting the higher-order bit planes to zero would drastically reduce the overall brightness and contrast of the image, essentially removing the most significant information. The histogram would be compressed towards the lower (darker) intensity values.'
        },
        {
            id: 'pp-cs-2023-2-q8a',
            questionType: 'Other',
            questionText: 'How SEO improves your website traffic? Explain with proper reasons and coding examples.',
            idealAnswer: 'SEO (Search Engine Optimization) improves organic traffic by making a site more visible on search engines. Reasons: higher rankings lead to more clicks. Examples: Using relevant keywords in titles (`<title>Best CSS Prep</title>`), descriptive meta tags (`<meta name="description" ...>`), and semantic HTML (`<h1>`, `<p>`) helps search engines understand the content.'
        },
        {
            id: 'pp-cs-2023-2-q8b',
            questionType: 'Other',
            questionText: 'Suppose your web team is going to make a contract with the customer and you need to estimate the cost of application development. What pricing factors you consider to estimate the cost?',
            idealAnswer: 'Factors include: 1. Project Scope and Complexity (number of features). 2. Technology Stack (licensing costs). 3. Team Size and Expertise (developer salaries). 4. Timeline (rush jobs cost more). 5. Ongoing Maintenance and Support.'
        },
        {
            id: 'pp-cs-2023-2-q8c',
            questionType: 'Other',
            questionText: 'Write the jQuery code to slide elements up and down. Use HTML, CSS, and jQuery',
            idealAnswer: 'The jQuery code would be: `$("#myButton").click(function(){ $("#myDiv").slideToggle("slow"); });`. This would toggle the sliding visibility of the HTML element with the id `myDiv` when the button with id `myButton` is clicked.'
        }
    ]
  }
];
