const students = [
    { id: 11, name: "Bekmurod", group: "NT-79", success: true },
    { id: 12, name: "Asliddin", group: "NT-77", success: true },
    { id: 13, name: "Ahmadxon", group: "NT-79", success: true },
    { id: 14, name: "Ibrohim", group: "NT-77", success: false },
    { id: 15, name: "Xojiakbarxon", group: "NT-79", success: true },
    { id: 16, name: "Abbos", group: "NT-79", success: true },
    { id: 17, name: "Iroda", group: "NT-77", success: true },
    { id: 18, name: "Abduraxim", group: "NT-70", success: false },
    { id: 19, name: "Komiljon", group: "NT-79", success: false },
    { id: 20, name: "Javlonbek", group: "NT-70", success: true },
    { id: 21, name: "Muhammadrizo", group: "NT-79", success: true },
    { id: 22, name: "Azizbek", group: "NT-79", success: false },
    { id: 23, name: "Jahongir", group: "NT-71", success: false },
    { id: 24, name: "Alisher", group: "NT-79", success: true },
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

        const delTd = document.createElement("td");
        const delButton = document.createElement("button");
        const editButton = document.createElement("button");
        delButton.innerHTML = "Delete";
        editButton.innerHTML = "Edit";
        editButton.classList.add("btn", "btn-warning", "mx-2")
        delButton.classList.add("btn", "btn-danger");
        delButton.addEventListener("click", function(e) {
            e.stopPropagation();
            console.log(student.id);
            students.splice(index, 1);

            renderStudents(students)
        })


        editButton.setAttribute("data-bs-toggle", "modal")
        editButton.setAttribute("data-bs-target", "#editModal")

        editButton.onclick = (e) => {
            e.stopPropagation();
            const nameInput = document.getElementById("student-name");

            nameInput.value = student.name
        }
        delTd.append(editButton, delButton);

        tr.dataset.identifierId =student.id
        tr.append(orderTh, nameTd, groupTd, resultTd, delTd);
        studentsTableBody.append(tr)
    })
}
renderStudents(students)

document.getElementById("input_filter").addEventListener('input', function (e) {
    const searchValue = e.target.value;

    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchValue.toLowerCase()));

    renderStudents(filteredStudents);

})

studentsTableBody.addEventListener("click", (e) => {
    const student = students.find(student => student.id === +e.target.parentNode.dataset.identifierId);

    alert(student.name + " " + student.group)
})

document.getElementById("input_group").addEventListener('input', function (e) {
    const searchGroupValue = e.target.value;

    const filteredGroupStudents = students.filter(student => student.group.toLowerCase().includes(searchGroupValue.toLowerCase()));

    renderStudents(filteredGroupStudents);

})