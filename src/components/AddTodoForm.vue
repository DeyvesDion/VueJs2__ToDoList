<template>
    <div class="todo__form">
        <form @submit.prevent="SendToDo()">
            <div todo__item>
                <!-- <label for="todo__item">Ajouter une activité</label> -->
                <input
                    v-model="AddToDo"
                    v-bind:placeholder="placeholder"
                    class="input__todo"
                    type="text"
                    name="todo__item"
                    autofocus
                />
                <button
                    :class="[AddToDo ? 'btn' : 'inactive']"
                    class="btn add__todo"
                    type=""
                    title="Définir une activité avant d'ajouter"
                >
                    Ajouter
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodoForm",
    data() {
        return {
            AddToDo: "",
        };
    },
    components: {},
    methods: {
        SendToDo() {
            if (this.AddToDo.length > 0) {
                console.log(this.AddToDo);
                this.$store.state.tasks.push({ name: this.AddToDo });
                this.AddToDo = "";

                // Toast Notification
                this.$toast.success("Nouvelle activité ajouté", {
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
            } else {
                this.$toast.info("Ajouter une activité", {
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
            }
        },
    },
    computed: {
        placeholder() {
            return "Ajouter une activité";
        },
    },
};
</script>

<style scoped>
.todo__form {
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 100%;
    cursor: pointer;
    justify-content: center;
    margin: 0 auto;
    /* border: 1px solid; */
    box-shadow: 1px 1px 1px 1px rgba(128, 128, 128, 0.219);
}
.todo__form:hover {
    transform: scale(1.03);
}
.todo__item {
    /* display: flex; */
    /* flex-direction: column; */
}
.input__todo {
    width: 70%;
    height: 70px;
    font-size: 23px;
    margin-right: 10px;
    border: 2px solid #7552eb;
}
.input__todo:focus {
    outline: none;
}
.btn {
    width: 25%;
    height: 70px;
    font-size: 15px;
    color: #7552eb;
    border: 2px solid #7552eb;
    cursor: pointer;
    font-size: 20px;
    background-color: transparent;
}
.inactive {
    cursor: not-allowed;
}
.btn:hover {
    background-color: #7552eb;
    color: #fff;
}
@media screen and (max-width: 700px) {
    .todo__form {
        margin: 20px 0;
    }
}
</style>
