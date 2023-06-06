const { useState } = require("react")

const useModal = () => {
    const [isAddTodoModal, setIsAddTodoModal] = useState(false)

    const handChangeModal = () => {
        setIsAddTodoModal(prev => !prev)
    }

    return [isAddTodoModal, handChangeModal]
}


export default useModal