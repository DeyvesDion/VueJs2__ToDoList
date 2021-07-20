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
                    <h2
                        :class="[
                            { done: task.done },
                            { progress: task.status },
                        ]"
                    >
                        {{ firstCharUpper(task.name) }}
                        <span :class="{ inProgress: task.inProgress }"
                            ><i
                                class="fas fa-hourglass-half"
                                title="En cours"
                            ></i
                        ></span>
                    </h2>
                </div>
                <div class="edit__done__trash">
                    <div @click="EditeToDo(index)" class="todo__edit">
                        <i class="far fa-edit" title="Editer"></i>
                    </div>
                    <div
                        :class="{ desactiv: task.inProgress === false }"
                        @click="AddClassDone(task)"
                        class="todo__done"
                    >
                        <i class="far fa-check-circle" title="Valider"></i>
                    </div>
                    <div
                        :class="{ desactiv: task.done === true }"
                        @click="ChangeStatus(task)"
                        class="todo__progress"
                    >
                        <i class="fas fa-spinner" title="En cours"></i>
                    </div>
                    <div @click="Delate(index)" class="todo__trash">
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
    data() {
        return {
            // inProgress: false,
            getCompletet: [],
            currentItem: null,
        };
    },
    components: {},
    computed: {
        getTasks() {
            return this.$store.state.tasks;
        },
        // getCompletet() {
        //     return this.$store.state.completed;
        // },
    },
    methods: {
        firstCharUpper(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        EditeToDo(index) {
            alert("Modification");
        },
        AddClassDone(task) {
            task.done = !task.done;
            // task.status = true;
        },
        ChangeStatus(task) {
            task.status = !task.status;
            task.inProgress = !task.inProgress;
        },
        Delate(index) {
            this.$store.state.tasks.splice(index, 1);
            this.$toast.error("Activité supprimée", {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false,
            });
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
/* .check__item {
    margin-right: 15px;
    cursor: pointer;
    transform: scale(1.3);
}
.check__item:hover {
    border-color: green;
    transform: scale(1.8);
} */
.fa-spinner:hover {
    color: orangered;
    font-size: 25px;
}
.done {
    text-decoration: line-through;
    color: green;
    font-style: italic;
}
.progress {
    color: orangered;
}
.inProgress {
    color: orangered;
    display: none;
}
.desactiv {
    pointer-events: none;
}

@media screen and (max-width: 700px) {
    .todo__list {
        margin: 10px 0;
    }
}
</style>
