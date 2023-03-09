<template lang="">
    <div>
        <el-container>
            <el-row>
                <el-col>
                    <el-card>
                        <template #header>
                            <div class="card-header">
                                <span>{{post.title}}</span>
                                <el-button type="success" plain disabled>{{post.category}}</el-button>

                             </div>
                        </template>
                        <div class="bottom-card-header">
                            <span>{{post.content}}</span><br/>
                        </div>
                        <el-button-group class="button-group">
                            <el-button type="warning" @click="navigateEdit()">Edit</el-button>
                            <el-button type="danger" @click="deletePost(post._id)">Delete</el-button>
                        </el-button-group>
                        
                            
                        <el-alert title="Post Deleted" type="info" show-icon v-if="responseAlert != ''"/>
                    </el-card>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>
<script>
import API from '../api';

export default {
    data() {
        return {
            post: {},
            tempID: "63f6d6f5dba3846a20680c0e",
            responseAlert: ""
        }
    },
    async created() {
        const response = await API.getPostByID(this.$route.params.id)
        this.post = response
    },
    methods: {
        navigateEdit() {
            this.$router.push(`/edit-post/${this.$route.params.id}`) //${this.$route.params.id}
        },
        async deletePost(id) {
            const response = await API.deletePost(id)
            this.responseAlert = response.message;
        },
     
    },
}
</script>
<style>
    .button-group {
    margin: 10px;
    float: right;
    padding: 10px;
}
</style>