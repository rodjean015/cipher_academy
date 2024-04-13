<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>
          Students
          <RouterLink to="/students/create" class="btn btn-primary float-end">
            Add Student
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Course</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.students.length > 0">
            <tr v-for="student in students" :key="index">
              <td>{{ student.id }}</td>
              <td>{{ student.firstname }}</td>
              <td>{{ student.lastname }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <!-- Add action buttons here -->
              <td class="d-flex gap-2">
                <RouterLink :to="{ path: '/students/'+student.id+'/edit'}" class="btn btn-outline-dark btn-sm"><span class="material-symbols-outlined">edit_square</span></RouterLink>
                <button @click="deleteStudent(student.id)" class="btn btn-outline-danger btn-sm"><span class="material-symbols-outlined">delete</span></button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">Loading.....</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'studentView',
  data(){
    return {
      students: []
    }
  },
  mounted(){
    this.getStudents(); 
  },
  methods: {
    getStudents(){
      axios.get('http://127.0.0.1:8000/api/students')
        .then(res => {
          this.students = res.data.students; // Assign response data to students array
        })
        .catch(error => {
          console.error('Error fetching students:', error);
        });
    },
    deleteStudent(studentID){

      if(confirm('Are you sure, you want to delete this student?'))
      { 
        axios.delete(`http://127.0.0.1:8000/api/students/${studentID}/delete`).
        then(res=> {

          alert(res.data.message);
          this.getStudents();
        })
        .catch(error => {
            console.error('Error:', error);
            if (error.response) {
                if (error.response.status == 404) {
                    
                    alert(error.response.data.message);
                    
                }
            }
        });
      }
    }
  }

}
</script>
