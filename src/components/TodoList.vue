<template>
    <div class="todo__list">
        <div class="todo__title">
            <h1>todo list</h1>
        </div>
        <div class="edit__done__trash">
            <div class="todo__edit"><i class="far fa-edit"></i></div>
            <div class="todo__done"><i class="far fa-check-circle"></i></div>
            <div class="todo__trash"><i class="fas fa-trash-alt"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo__list {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 120px;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
    box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.219);
}
.edit__done__trash {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
i {
    cursor: pointer;
}
.far {
    margin-right: 15px;
}
@media screen and (max-width: 700px) {
    .todo__list {
        margin: 10px 0;
    }
}
</style>
