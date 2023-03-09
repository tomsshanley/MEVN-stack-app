<!-- ------------------------------------------------------------- -->
<template lang="">
    <div>
       <h1>Home</h1>
       
       <el-row class="card-layout">
        <el-col class="card-col"
        v-for="post in posts"
        :key="post._id"
        :span = "8"
        >
          <el-card >
            <template #header>
                <div class="card-header">
                    <span>{{post.title}}</span>
                    <!-- <router-link to="/">Expand</router-link> -->
                    <el-button class="button" text @click="navigatePost(post._id)">View</el-button>
                </div>
            </template>
            
            <div style="padding: 14px">
                
                <div class="bottom card-header">
                    <span>{{post.content}}</span>
                </div>
            </div>
            <el-button type="success" plain disabled>{{post.category}}</el-button>
        
        </el-card>
        </el-col>
       </el-row>

       
    </div>
</template>
<!-- ------------------------------------------------------------- -->
<!-- ------------------------------------------------------------- -->

<script >
    import API from '../api'
    
    export default {
        name: "Home",
        data() {
            return {
                posts: [],
            }
        },
        async created() {
            this.posts = await API.getAllPost();
        },
        
        methods: {
            navigatePost(id) {
                this.$router.push(`/posts/${id}`)
            }
        }
    }  
    
</script>

<!-- ------------------------------------------------------------- -->
<!-- ------------------------------------------------------------- -->
<style>
    .card-layout {
        padding: 10px;
        
    }
    .card-col {
    
        padding: 4px
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
<!-- ------------------------------------------------------------- -->
