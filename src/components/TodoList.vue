<template>
    <div>
        <div
            style=" margin-bottom: 15px;"
            v-for="(task, index) in getTasks"
            :key="index"
            class="todo__wrapper"
        >
            <div class="todo__list">
                <div class="todo__title">
                    <h2>{{ task.name }}</h2>
                </div>
                <div class="edit__done__trash">
                    <div class="todo__edit">
                        <i class="far fa-edit" title="Editer"></i>
                    </div>
                    <div class="todo__done">
                        <i class="far fa-check-circle" title="Valider"></i>
                    </div>
                    <div class="todo__progress">
                        <i class="fas fa-spinner" title="En cours"></i>
                    </div>
                    <div class="todo__trash">
                        <i class="fas fa-trash-alt" title="Supprimer"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoList",
    components: {},
    computed: {
        getTasks() {
            return this.$store.state.tasks;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo__wrapper {
    display: flex;
    align-items: center;
    padding: 10px;
    height: 120px;
    width: 100%;
    cursor: pointer;
    justify-content: space-between;
    margin: 0 auto;
    box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.219);
}
.todo__wrapper:hover {
    transform: scale(1.03);
}
.todo__list {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    justify-content: space-between;
}
.todo__title {
    font-size: 10px;
}
.edit__done__trash {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
i {
    cursor: pointer;
}
.far,
.fas {
    margin-right: 15px;
}
.far:hover {
    transform: scale(1.03);
}
.fas:hover {
    transform: scale(1.03);
    color: red;
    font-size: 25px;
}
.fa-check-circle:hover {
    color: green;
    font-size: 25px;
}

.fa-edit:hover {
    color: blue;
    font-size: 25px;
}
.fa-spinner:hover {
    color: orange;
    font-size: 25px;
}

@media screen and (max-width: 700px) {
    .todo__list {
        margin: 10px 0;
    }
}
</style>
