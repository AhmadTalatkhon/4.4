const students = [
    { name: "Bekmurod", group: "NT-79", success: true },
    { name: "Asliddin", group: "NT-77", success: true },
    { name: "Ahmadxon", group: "NT-79", success: true },
    { name: "Ibrohim", group: "NT-77", success: false },
    { name: "Xojiakbarxon", group: "NT-79", success: true },
    { name: "Abbos", group: "NT-79", success: true },
    { name: "Iroda", group: "NT-77", success: true },
    { name: "Abduraxim", group: "NT-70", success: false },
    { name: "Komiljon", group: "NT-79", success: false },
    { name: "Javlonbek", group: "NT-70", success: true },
    { name: "Muhammadrizo", group: "NT-79", success: true },
    { name: "Azizbek", group: "NT-79", success: false },
    { name: "Jahongir", group: "NT-71", success: false },
    { name: "Alisher", group: "NT-79", success: true },
    { name: "Jake", group: "NT-77", success: true },
    { name: "Kate", group: "NT-65", success: false },
    { name: "Sam", group: "NT-77", success: false },
    { name: "Phil", group: "NT-34", success: true },
    { name: "Ed", group: "NT-45", success: true },
    { name: "Tami", group: "NT-34", success: true },
    { name: "Mary", group: "NT-45", success: false },
    { name: "Becky", group: "NT-67", success: false },
    { name: "Joey", group: "NT-45", success: true },
    { name: "Jeff", group: "NT-34", success: true },
    { name: "Zack", group: "NT-79", success: false },
    { name: "Zack", group: "NT-71", success: false },
];

const studentsTableBody = document.getElementById("student_table_body")

/*

<tr>
    <th scope="col">1</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
</tr>

*/

function renderStudents(s) {
    studentsTableBody.innerHTML = "";
    s.forEach(function (student, index) {
        const tr = document.createElement("tr");

        const orderTh = document.createElement("th");
        orderTh.setAttribute("scope", "row");
        orderTh.innerHTML = index;

        const nameTd = document.createElement("td");
        nameTd.innerHTML = student.name;

        const groupTd = document.createElement("td");
        groupTd.innerHTML = student.group;

        const resultTd = document.createElement("td");
        const resultInner = document.createElement("span");
        resultInner.classList.add("badge");

        if (student.success) {
            resultInner.classList.add("text-bg-success");
            resultInner.innerHTML = "Topshirgan"
        } else {
            resultInner.classList.add("text-bg-danger");
            resultInner.innerHTML = "Topshirolmagan"
        }
        resultTd.append(resultInner);

        tr.append(orderTh, nameTd, groupTd, resultTd);
        studentsTableBody.append(tr)
    })
}
renderStudents(students)

document.getElementById("input_filter").addEventListener('input', function (e) {
    const searchValue = e.target.value;

    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase( )));

    renderStudents(filteredStudents);
 
})

