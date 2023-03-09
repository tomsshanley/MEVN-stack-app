<template>
    
    <el-container class="container">
        
        <el-card class="add-post-form">
            <template #header>
                <div class="class-header">
                    <h1>Add Post</h1>
                </div>
            </template>
            <el-form :model="form" label-width="50px">
                <el-form-item label="Title">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="Category">
                    <el-input v-model="form.category" />
                </el-form-item>
                <el-form-item label="Content">
                    <el-input v-model="form.content" type="textarea" />
                </el-form-item> 
                <div class="bottom-buttons">

                    <el-button type="primary" @click="onSubmit">Submit</el-button>
                    <el-alert title="Post Added" type="success" show-icon v-if="responseAlert"/>
                </div>
            </el-form>
        </el-card>
    </el-container>
</template>

<script>
    import API from "../api"

    export default {
        data() {
            return {
                form: {
                    title: "",
                    category: "",
                    category: "",
                    
                },
                responseAlert: false
               
            };
        },
        methods: {

            async onSubmit() {
                // We need to append form data to the empty strings we created above
                const formData = new FormData();
                formData.append("title", this.form.title)
                formData.append("category", this.form.category)
                formData.append("content", this.form.content)
                
                const response = await API.addPost(formData)
                this.responseAlert = true
                console.log(response.message +" post added")

                
            },
        },
    }
</script>

<style>
    .bottom-buttons {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 10px;
    }
    .add-post-form {
        width: 80%;
        margin: auto;
        margin-top: 30px;
    }
    .el-alert {
        margin: 20px 0 0;
        height: 40px;
    }
    .el-alert:first-child {
        margin: 0;
    }

</style>