<template>
   <div>
   </div>
</template>
<script>
export default {
    name:'Profile',
    data() {
        return {
            list:[
                {
                name:123,
                age:18
            }
            ]
        }
    },
    created() {
        console.log(this.list);
        for( let item in this.list){
            console.log(item);
        }
    },
}
</script>
<style>

</style>