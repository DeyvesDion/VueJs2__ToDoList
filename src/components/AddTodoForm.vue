<template>
    <div class="todo__form">
        <form @click="">
            <div todo__item>
                <!-- <label for="todo__item">Ajouter une activité</label> -->
                <input
                    class="input__todo"
                    type="text"
                    name="todo__item"
                    autofocus
                    placeholder="Ajouter une activité"
                />
                <button class="btn add__todo" type="">Ajouter</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodoForm",
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
