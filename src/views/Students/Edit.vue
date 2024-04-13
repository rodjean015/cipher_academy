<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Student</h4>
            </div>
            <div class="card-body">
                <ul class="alert alert-warning" v-if="Object.keys(errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in errorList" :key="index">
                        {{ error[0] }}
                    </li>
                </ul>
                <div class="mb-3">
                    <label for="">Firstname</label>
                    <input type="text" class="form-control" v-model="model.student.firstname" />
                </div>
                <div class="mb-3">
                    <label for="">Lastname</label>
                    <input type="text" class="form-control" v-model="model.student.lastname" />
                </div>
                <div class="mb-3">
                    <label for="">Course</label>
                    <input type="text" class="form-control" v-model="model.student.course" />
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" class="form-control" v-model="model.student.email" />
                </div>
                <div class="mb-3">
                    <label for="">Phone</label>
                    <input type="text" class="form-control" v-model="model.student.phone" />
                </div>
                <div class="mb-3 d-flex gap-2">
                    <button type="button" @click="updateStudent" class="btn btn-success btn-sm"><span class="material-symbols-outlined">save</span></button>
                    <router-link to="/students/view" class="btn btn-dark btn-sm">
                        <span class="material-symbols-outlined">list</span>
                    </router-link>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'StudentEdit',
    data() {
        return {
            studentID: '',
            errorList: {}, // Initialize errorList as an empty object
            model: {
                student: {
                    firstname: '',
                    lastname: '',
                    course: '',
                    email: '',
                    phone: '',
                }
            }
        };
    },
    mounted() {
        this.studentID = this.$route.params.id;
        this.getStudentData(this.studentID);
    },
    methods: {
        getStudentData(studentID) {
            axios.get(`http://127.0.0.1:8000/api/students/${studentID}/edit`)
                .then(res => {
                    this.model.student = res.data.student;
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (error.response && error.response.status == 404) {
                        alert(error.response.data.message);
                        this.$router.push('/students/view');
                    }
                });
        },
        updateStudent() {
            axios.put(`http://127.0.0.1:8000/api/students/${this.studentID}/edit`, this.model.student)
                .then(res => {
                    console.log(res.data);
                    alert(res.data.message);
                    this.errorList = {};
                })
                .catch(error => {
                    console.error('Error:', error);
                    if (error.response) {
                        if (error.response.status == 422) {
                            this.errorList = error.response.data.errors;
                        }
                        if (error.response.status == 404) {
                            alert(error.response.data.message);
                        }
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                });
        }
    }
};
</script>
