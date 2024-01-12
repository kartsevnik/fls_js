// ====================================================================================================================== //
// Задача.Користувач задає
// місяць навчання учня(перевіряти чи є числом, чи від 1 до 12, чи не канікули) та
// оцінку(перевіряти чи є числом, чи від 1 до 100).
// Вивести чи зможе він виправити оцінку(якщо оцінка погана і це не останній місяць у семестрі).
// Обробку усіх помилок зробити з використанням відповідних класів.

// ====================================================================================================================== //

class verifyEvaluation {
    constructor() {
        this.minMonth = 1
        this.maxMonth = 12
        this.holiday1 = 6
        this.holiday2 = 7
        this.holiday3 = 8

        this.minMark = 1
        this.maxMark = 100
        this.message = document.createElement('p')
    }

    verifyMark(value) {
        if (isNaN(value) || value < 1 || value > 100) {
            this.message.innerText = "Недійсна оцінка."
            this.container.appendChild(this.message);
            return false
        } return true
    }

    verifyMonth(value) {
        if (isNaN(value) || value < 1 || value > 12) {
            this.message.innerText = "Недійсний місяць навчання."
            this.container.appendChild(this.message);
            return false
        } else if (value == this.holiday1 || value == this.holiday2 || value == this.holiday3) {
            this.message.innerText = "Вы на каникулах"
            this.container.appendChild(this.message);
            return false
        } else if (value == 12) {
            this.message.innerText = "К сожалению вы не сможете исправить оценку"
            this.container.appendChild(this.message);
            return false
        }
        else if (value >= this.minMonth && value <= (this.maxMonth - 1))
            this.message.innerText = "Еще есть шанс исправить оценку"
        this.container.appendChild(this.message);
        return true
    }



    verifyResult() {
        this.message.innerText = ""
        const month = this.inputMonth.value
        const mark = this.inputMark.value
        let resultMark = this.verifyMark(mark)

        if (resultMark) {
            this.verifyMonth(month)
        }

    }




    createContainer(containerID) {
        const selectorContent = document.querySelector(containerID);
        this.container = document.createElement('div')
        this.container.classList.add('task22-2');
        // =======================================================
        const labelMonth = document.createElement('label');
        labelMonth.textContent = "Місяць навчання (1-12): ";

        this.inputMonth = document.createElement('input')
        this.inputMonth.type = 'number';

        labelMonth.appendChild(this.inputMonth);
        this.container.appendChild(labelMonth);
        // =======================================================
        const labelMark = document.createElement('label');
        labelMark.textContent = "Оцінка (1-100): ";

        this.inputMark = document.createElement('input')
        this.inputMark.type = 'number';

        labelMark.appendChild(this.inputMark);
        this.container.appendChild(labelMark);
        // =======================================================
        const btn = document.createElement('button')
        btn.textContent = "Verify";
        btn.onclick = this.verifyResult.bind(this)
        this.container.append(btn)
        selectorContent.appendChild(this.container);
    }

    render(containerID) {
        this.createContainer(containerID)
    }
}

let init = new verifyEvaluation();
init.render('.resolve22')
// ====================================================================================================================== //


