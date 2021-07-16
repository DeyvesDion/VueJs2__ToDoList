<template>
    <div class="todo__wrapper container">
        <AddTodoForm />
        <TodoList />
    </div>
</template>

<script>
// @ is an alias to /src
import AddTodoForm from "@/components/AddTodoForm.vue";
import TodoList from "@/components/TodoList.vue";

export default {
    name: "Home",
    components: {
        AddTodoForm,
        TodoList,
    },
};
</script>
<style>
.container {
    width: 90%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50% 50%;
    align-items: top;
    padding-top: 50px;
    margin: 0 auto;
    justify-content: center;
}

/* Media Query */
@media screen and (max-width: 700px) {
    .container {
        display: block;
    }
}
</style>
