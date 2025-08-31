async function fetchStudents() {
  try {
    const response = await fetch('https://studentapi-m7a7.onrender.com/student/all');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const students = data.students || data;

    const tableBody = document.getElementById("student-body"); // ✅ tbody not full table
    // tableBody.innerHTML = ""; // clear before re-render

    students.forEach((student, index) => {
  const row = document.createElement("tr");  
  row.innerHTML = `
    <td>${student.studentName}</td>
    <td>${student.college}</td>
    <td>${student.cgpa}</td>
    <td>${student.phone}</td>
    <td>${student.batch}</td>
    <td>${student.year}</td>
    <td>
      ${
        index < 20
          ? `
          <button class="edit-btn" data-id="${student._id}" disabled>Edit</button>
            <button class="delete-btn" data-id="${student._id}" disabled>Delete</button>
          `
          : `
            <button class="edit-btn" data-id="${student._id}">Edit</button>
            <button class="delete-btn" data-id="${student._id}">Delete</button>
          `
      }
    </td>
  `;
  tableBody.appendChild(row);
});

  } catch (error) {
    console.error("Error fetching student data", error);
  }
}

const searchBox = document.getElementById("search-box")
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase().trim()
  const rows = document.querySelectorAll("#student-body tr")

  rows.forEach(row => {
    const cells = row.querySelectorAll("td")
    let matchFound = false
    cells.forEach(cell => {
      if(cell.textContent.toLowerCase().includes(query)) {
        matchFound = true
      }
    })
    row.style.display = matchFound ? "" : "none"
  })
})

// Load students when page loads
fetchStudents();

// Add student feature 
const modal = document.getElementById("add-student-modal")
const addStudentBtn = document.querySelector(".add-student-btn")
const closeModalBtn = document.getElementById("close-modal")
const addStudentForm = document.getElementById("add-student-form")

addStudentBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
})

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden")
})

addStudentForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const studentData = {
    studentName: addStudentForm.studentName.value.trim(),
    college: addStudentForm.college.value.trim(),
    cgpa: addStudentForm.cgpa.value.trim(),
    phone: addStudentForm.phone.value.trim(),
    sapid: addStudentForm.sapid.value.trim(),
    batch: addStudentForm.batch.value.trim(),
    year: addStudentForm.year.value.trim(),
    address: addStudentForm.address.value.trim(),
  };
  for(const key in studentData) {
    if(!studentData[key]) {
      alert(`⚠️ Please fill in the ${key} field`)
      return;
    }
  }
  
  // To check if the sapid are unique 
  try {
    const res = await fetch("https://studentapi-m7a7.onrender.com/student/all")
    const data = await res.json()
    const students = data.students || []

    const existingSapids = new Set(students.map(s => {s.sapid}))
    if(existingSapids.has(studentData.sapid)) {
      alert("❌ A student with this SAP Id already exists. Please use unique SAP Id")
      return
    }
  } catch (error) {
    console.error("Error in checking SAP Id uniqueness", error)
  }

  try {
    const response = await fetch("https://studentapi-m7a7.onrender.com/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    if(!response.ok) {
      const errText = await response.text();
      throw new Error(errText || "Failed to add student")
    }
      
    alert("✅ Student added successfully!")
    modal.classList.add("hidden")
    addStudentForm.reset();

    fetchStudents();
  } catch (error) {
    console.log(error)
    alert("❌ Error: ", error.message)
  }
})

// Update details 

const editModal = document.getElementById("edit-student-modal")
const editStudentForm = document.getElementById("edit-student-form")
const closeEditModalBtn = document.getElementById("close-edit-modal")

document.addEventListener("click", (e) => {
  if(e.target.classList.contains("edit-btn")) {
    const studentId = e.target.dataset.id;

    const row = e.target.closest("tr")
    const cells = row.querySelectorAll("td")

    editStudentForm.studentName.value = cells[0].textContent
    editStudentForm.college.value = cells[1].textContent
    editStudentForm.cgpa.value = cells[2].textContent
    editStudentForm.phone.value = cells[3].textContent
    editStudentForm.batch.value = cells[4].textContent
    editStudentForm.year.value = cells[5].textContent
    editStudentForm.address.value = ""

    editStudentForm.dataset.id = studentId
    editModal.classList.remove("hidden")
  }
})

closeEditModalBtn.addEventListener("click", () => {
  editModal.classList.add("hidden")
})
editStudentForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const studentId = editStudentForm.dataset.id
  const updatedData = {
    studentName: editStudentForm.studentName.value.trim(),
    college: editStudentForm.college.value.trim(),
    cgpa: editStudentForm.cgpa.value.trim(),
    phone: editStudentForm.phone.value.trim(),
    batch: editStudentForm.batch.value.trim(),
    year: editStudentForm.year.value.trim(),
    address: editStudentForm.address.value.trim(),
  }

  try {
    const response = await fetch(`https://studentapi-m7a7.onrender.com/student/update/${studentId}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedData)
    })

    if(!response.ok) throw new Error("Failed to update student");

    alert("✅ Student updated successfully!")
    editModal.classList.add("hidden")
    fetchStudents();
  } catch (error) {
    console.log(error)
    alert("❌ Error updating student: ", error.message)
  }
})

// Delete student 

document.addEventListener("click", async (e) => {
  if(e.target.classList.contains("delete-btn")) {
    const studentId = e.target.dataset.id

    const row = e.target.closest("tr")
    const index = [...row.parentNode.children].indexOf(row)
    if(index < 20) {
      alert("❌ You cannot delete default students.")
      return
    }

    const confirmDelete = confirm("Are you sure you want to delete this student?")
    if(!confirmDelete) return;

    try {
      const response = await fetch(`https://studentapi-m7a7.onrender.com/student/delete/${studentId}`, {method: "DELETE"})

      if(!response.ok) throw new Error("Failed to delete student")

        alert("✅ Student deleted successfully!")
        row.remove()
    } catch (error) {
      console.error(error)
      alert("❌ Error deleting student: " + error.message)
    }
  }
})

// Sort according to the cgpa 
let sortAscending = true
document.querySelector("#student-table th:nth-child(3)").addEventListener("click", () => {
  const tbody = document.getElementById("student-body")
  const rows = Array.from(tbody.querySelectorAll("tr"))

  rows.sort((a, b) => {
    const cgpaA = parseFloat(a.querySelectorAll("td")[2].textContent) || 0;
    const cgpaB = parseFloat(b.querySelectorAll("td")[2].textContent) || 0;
    return sortAscending ? cgpaA - cgpaB : cgpaB - cgpaA
  })

  tbody.innerHTML = ""
  rows.forEach(row => tbody.appendChild(row))

  sortAscending = !sortAscending
})