# **K-Intership 2025**
## Test 4 - XSLT: Transform XML to HTML

Welcome to the XSLT Test! This test is designed to evaluate how you will handle an unseen (if it is the case) markup language with its transformation process  **XSLT (Extensible Stylesheet Language Transformations)** and your ability to transform XML data into a well-structured and styled HTML page.

- **Time Allotted:** 40 minutes
---

## **Test Overview**

### **Goal**
You will receive:
1. An **XML file (`books.xml`)** that contains a list of books categorized by genre (Fiction and Non-Fiction).
2. A **screenshot** of the expected final rendered HTML page.

Your task is to write the **XSLT file (`library.xsl`)** from scratch to transform the XML data into an HTML page that matches the provided screenshot.

### **Deliverables**
You must submit:
1. A completed **`library.xsl` file** that performs the transformation.
2. A brief description (optional) of any challenges you faced or additional comments about your solution.

---

## **Step-by-Step Instructions**

### **1. Study the Input File**
You are provided with the file **`books.xml`**, which contains the following XML structure:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="library.xsl"?>
<library>
    <category name="Fiction">
        <book>
            <title>The Great Gatsby</title>
            <author>F. Scott Fitzgerald</author>
            <year>1925</year>
            <rating>5</rating>
        </book>
        <book>
            <title>1984</title>
            <author>George Orwell</author>
            <year>1949</year>
            <rating>4</rating>
        </book>
    </category>
    <category name="Non-Fiction">
        <book>
            <title>Sapiens</title>
            <author>Yuval Noah Harari</author>
            <year>2011</year>
            <rating>5</rating>
        </book>
        <book>
            <title>Educated</title>
            <author>Tara Westover</author>
            <year>2018</year>
            <rating>4</rating>
        </book>
    </category>
</library>
```

### **2. Review the Expected Output**
You are provided with a **screenshot** of the final rendered page (see `expected_output_screenshot.png`). The page has the following structure:

#### **HTML Structure**
- A **title** (`Library Books`) and a main header (`<h1>`).
- Two sections (`<h2>`) for **Fiction** and **Non-Fiction** categories.
- Each section contains a **table** with the following columns:
  - Title
  - Author
  - Year
  - Rating
- The books in each category are sorted by **Year (ascending)**.

### **3. Write the XSLT File**
You must write the **XSLT file (`library.xsl`)** from scratch. The file should:
1. Generate the exact HTML structure described above.
2. Use proper sorting, styling, and iteration to dynamically generate the output.

#### **Helpful Hints**:
- Use `<xsl:for-each>` to loop over elements in the XML.
- Use `<xsl:value-of>` to extract values from XML elements or attributes.
- Use `<xsl:sort>` to sort the books by their publication year.
- Include an `<xsl:output>` declaration to specify the output format (HTML).

Refer to the XSLT documentation linked below for additional guidance.

---

## **Testing Your Work**

### **Using a Python Server**
Because modern browsers have restrictions when loading local files, you need to use a simple HTTP server to test your work. Here's how:

1. Open a terminal in the directory where your `books.xml` and `library.xsl` files are located.
2. Run the following command to start a Python server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and go to:
   ```
   https://<your-id>.sandsculptor.keiken-digital.io:8000/books.xml
   ```
4. The browser will apply your `library.xsl` transformation and display the rendered HTML.

---

### **Validation**
- Check the rendered output against the provided screenshot (`expected_output_screenshot.png`).
- Ensure the structure, styling, and sorting match the expected result.

---

## **Helpful Documentation**
You are allowed to reference only the official XSLT documentation during the test:
- [W3Schools XSLT Reference](https://www.w3schools.com/xml/xsl_intro.asp)

This documentation contains all the commands and elements you may need to complete the test, including:
- `<xsl:template>`
- `<xsl:for-each>`
- `<xsl:value-of>`
- `<xsl:sort>`
- `<xsl:output>`
- XPath expressions.

---

## **Submission Instructions**
1. Submit your completed `library.xsl` file.
2. Optionally, include a brief note describing your approach or any challenges faced during the test.

---

## **Good Luck!**
This test is designed to evaluate both your understanding of XSLT and your ability to think critically and solve problems. Good luck, and happy coding!

—  
**The Keiken Team**
