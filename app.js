// START CONST
const CHAT = document.querySelector('.chat');
const SEND = document.querySelector('.field button');
const INPUT = document.querySelector('.field input');
const DATA = [{
        searchQ: `نبذة عن الكلية ما هي هذة`,
        questionQ: `ما هي هذة الكلية؟`,
        a: `<a href="https://m.youtube.com/watch?v=w1hPAu6Lvys&mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6IjdlNGYwYzY0YzY3YzQyMmMzNmJlMGE2YjQ3Y2M4NjhiIiwidHMiOjE2NDYwNzM3OTIsImV4cCI6MTY0ODQ5Mjk5Mn0.7z-mTNVMT3UEeUzkcE1zKLh4Fde2z384XcWwBfEPaLU" target="_blank" rel="noopener noreferrer">نبذة عن الكلية</a>`
    },
    {
        searchQ: `نظم إدارة التعلم`,
        questionQ: `ما هي نظم إدارة الكلية؟`,
        a: `<a href="https://asu2learn.asu.edu.eg/speducation/?mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6ImI3MjZmYmZiZjM4Y2YwMTkwMGIzMDQwYjEzMDYzY2Y3IiwidHMiOjE2NDYwNzM4MjAsImV4cCI6MTY0ODQ5MzAyMH0.Nvf29nJ6F8hDKegjJrLSdoMsRMTsoTi0gTPd_eUyRXQ" target="_blank" rel="noopener noreferrer">نظم إدارة التعلم</a>`
    },
    {
        searchQ: `عنوان الكلية`,
        questionQ: `ما هو عنوان الكلية؟`,
        a: `<a href="https://www.google.com/maps/place/%D9%83%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9+%D8%A7%D9%84%D9%86%D9%88%D8%B9%D9%8A%D8%A9+%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B9%D9%8A%D9%86+%D8%B4%D9%85%D8%B3%E2%80%AD/@30.0708293,31.2767704,15z/data=!4m5!3m4!1s0x0:0xc02108b0d965a80f!8m2!3d30.0708293!4d31.2767704?shorturl=1" target="_blank" rel="noopener noreferrer">عنوان الكلية</a>`
    },
    {
        searchQ: `نشاطات انشطة`,
        questionQ: `ما هي الانشطة المتوفرة بالكلية؟`,
        a: ``
    },
    {
        searchQ: `نشاط ICLUB نشاطات `,
        questionQ: `ما هو ICLUB`,
        a: `<a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fmy.manychat.com%2Fr%3Fact%3D8d06d15f3867a152589bbba98c758422%26u%3D4963653047025260%26p%3D434775%26h%3D93ce43132b&h=AT1aI-VGuIwmx-Q5f2YMYFnM3Rw2sSOy__nevieZW6gE76oKNvYJSpZfEUP0-cOJ7HpZrIPBIb87Kx0pUvcykzy3a125TKjaa8vFJ1T-ALpdTXhyZIPNax5EWJ0c6VozKShEc1ZrDuKAimJ2" target="_blank" rel="noopener noreferrer">نشاط ICLUB</a>`
    },
    {
        searchQ: `نشاط IHUB نشاطات `,
        questionQ: `ما هو نشاط IHUB ؟`,
        a: `<a href="https://m.facebook.com/ihubasuspedu?mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6ImRhYmY4Y2VjMTVkZTYyYjQwOTI5NzQ3MDI2MzE1MmEzIiwidHMiOjE2NDYwNzM5NTEsImV4cCI6MTY0ODQ5MzE1MX0.7vF_8GVnMdba5crK3nkAoDLJPhgRu8ujcbFMSfWeRjE" target="_blank" rel="noopener noreferrer">نشاط IHUB</a>`
    },
    {
        searchQ: `الجواله نشاطات  نشاط`,
        questionQ: `من هم الجوالة؟`,
        a: `<a href="https://m.facebook.com/%D8%B9%D8%B4%D9%8A%D8%B1%D8%A9-%D8%AC%D9%88%D8%A7%D9%84%D8%A9-%D9%83%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%86%D9%88%D8%B9%D9%8A%D8%A9-%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%B9%D9%8A%D9%86-%D8%B4%D9%85%D8%B3-123618959033450/?mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6IjUxNDk1N2Y5MjNjMWMzZWM4YTM4MjE2N2RkNWQzMzliIiwidHMiOjE2NDYwNzM5ODQsImV4cCI6MTY0ODQ5MzE4NH0.hrUnwTDSIjovuuIk3Q_Erzu0c6da09NkQsI8ZLxhfso" target="_blank" rel="noopener noreferrer">الجواله</a>`
    },
    {
        searchQ: `متطلبات مشروع التخرج`,
        questionQ: `ما هي متطلبات مشروع التخرج؟`,
        a: `<a href="https://mobt3ath.com/dets.php?page=152&title=%D9%85%D8%B4%D8%B1%D9%88%D8%B9_%D8%A7%D9%84%D8%AA%D8%AE%D8%B1%D8%AC%D8%8C_%D8%AA%D8%B9%D8%B1%D9%8A%D9%81%D9%87%D8%8C_%D9%83%D9%8A%D9%81%D9%8A%D8%A9_%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1_%D9%81%D9%83%D8%B1%D8%AA%D9%87%D8%8C_%D9%88%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%87%D8%A7&nbsp;&mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6IjgyODJjNTNkNGFlZWY4MGEwZjBmOGI3MWJlMTAxZGZhIiwidHMiOjE2NDYwNzQxMjIsImV4cCI6MTY0ODQ5MzMyMn0.5dxE658-0L6Lrv9oL6F0ZR02-6S75XPpw6E_-7a6jR0" target="_blank" rel="noopener noreferrer">مشروع التخرج</a>`
    },
    {
        searchQ: `محو الأمية متطلبات `,
        questionQ: `ماذا احتاج لمحو الاميه؟`,
        a: `<a href="https://www.asu.edu.eg/ar/ce/10/page?mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6ImJkNmZjMzQzZDBkNGQ0MDYzYmIzNWE2ZGVjOTBjOWVkIiwidHMiOjE2NDYwNzQxNDUsImV4cCI6MTY0ODQ5MzM0NX0.lneDux2FnP_fSiUm6onndkjt5uK7dbl5si-poEGdj1g" target="_blank" rel="noopener noreferrer">محو الأمية</a>`
    },
    {
        searchQ: `التربية العسكرية متطلبات `,
        questionQ: `ماذا احتاج ان اعرف عن التربية العسكرية؟`,
        a: `<a href="https://forms.office.com/Pages/ResponsePage.aspx?id=TuBZmc5rLk2FGNNr8QsSUsqTWhNHmXJOjEUQMZDmTr1UREhPRUNRNkFJMDdNTTFSNjlFQkdMUkM2My4u&mcp_token=eyJwaWQiOjQzNDc3NSwic2lkIjo0OTYzNjUzMDQ3MDI1MjYwLCJheCI6IjEwOTQwNDMyMTE2OTZiZTE5MzQwMjhmYTY4ZmQ0MTBkIiwidHMiOjE2NDYwNzQxODMsImV4cCI6MTY0ODQ5MzM4M30.WcANPvwrqlcoduSj9QanNuxY335QmBtyR21RT9_1LW0" target="_blank" rel="noopener noreferrer">التربية العسكرية</a>`
    },
    {
        searchQ: `الدعم الفني هاتف`,
        questionQ: `هاتف الكلية`,
        a: `010235774212`
    },
];
// END CONST
// START MAIN FUNCTIONS
function sendMessage() {
    let message = INPUT.value;
    INPUT.value = ``;
    addMessage(message);
    if (message.length && message.split(' ')[0] !== '') {
        let questions = matchMessageToQuestions(message);
        makeQuestions(questions);
    }
    CHAT.scrollTo({
        top: 1000000000,
        left: 0,
        behavior: 'smooth'
    });
};

function matchMessageToQuestions(m) {
    let message = m.split(' ');
    let questions = [];
    for (let i = 0; i < DATA.length; i++) {
        const questionQ = DATA[i].questionQ;
        const searchQs = DATA[i].searchQ.split(' ');
        for (let k = 0; k < searchQs.length; k++) {
            const searchQ = searchQs[k];
            for (let j = 0; j < message.length; j++) {
                let [messageFixed, questionFixed] = fix(message[j], searchQ);
                if (messageFixed === questionFixed && messageFixed !== "" && messageFixed !== " ") {
                    questions.push([searchQs.join(" "), questionQ]);
                }
            }
        }
    }
    return questions;
}

function makeQuestions(questions) {
    for (let i = 0; i < questions.length; i++) {
        const el = document.createElement('div');
        el.classList = 'question';
        el.dataset.q = questions[i][0];
        el.textContent = questions[i][1];
        el.addEventListener('click', deleteAndAnswer)
        CHAT.appendChild(el);
    };
};

function deleteAndAnswer() {
    let searchQ = this.dataset.q;
    let oldQuestions = document.querySelectorAll('.question');
    for (let i = 0; i < oldQuestions.length; i++) {
        oldQuestions[i].remove();
    };
    answer(searchQ);
};
// END MAIN FUNCTIONS
// START MINI FUNCTIONS
function addMessage(message) {
    const newMCon = document.createElement('div');
    const newM = document.createElement('div');
    newMCon.classList = 'message-container';
    newM.classList = `message`;
    newM.innerText = message;
    newMCon.appendChild(newM);
    CHAT.appendChild(newMCon);
};

function answer(searchQ) {
    const elCon = document.createElement('div');
    const el = document.createElement('div');
    elCon.classList = 'bot-message-container'
    el.classList = 'bot-message';
    el.innerHTML = theAnswer(searchQ);
    elCon.appendChild(el);
    CHAT.appendChild(elCon);
};

function theAnswer(question) {
    for (let i = 0; i < DATA.length; i++) {
        if (question === DATA[i].searchQ) {
            return DATA[i].a;
        };
    };
};

function fix(input, question) {
    let checkM = [...input];
    let checkQ = [...question];
    for (let i = 0; i < checkM.length; i++) {
        if (checkM[i] === `ا` || checkM[i] === `أ` || checkM[i] === `إ` || checkM[i] === `آ`) {
            checkM[i] = `ا`;
        } else if (checkM[i] === `ه` || checkM[i] === `ة`) {
            checkM[i] = `ه`;
        } else if (checkM[i] === `ي` || checkM[i] === `ى`) {
            checkM[i] = `ي`;
        } else if (checkM[i] === `خ` || checkM[i] === `ح` || checkM === `ج`) {
            checkM[i] = `ج`;
        } else if (checkM[i] === `ض` || checkM[i] === `ص`) {
            checkM[i] = `ض`;
        } else if (checkM[i] === `ط` || checkM[i] === `ظ`) {
            checkM[i] = `ط`
        } else if (checkM[i] === `ع` || checkM[i] === `غ`) {
            checkM[i] = `ع`
        } else if (checkM[i] === `ق` || checkM[i] === `ف`) {
            checkM[i] = `ق`
        }
    }
    for (let i = 0; i < checkQ.length; i++) {
        if (checkQ[i] === `ا` || checkQ[i] === `أ` || checkQ[i] === `إ` || checkQ[i] === `آ`) {
            checkQ[i] = `ا`;
        } else if (checkQ[i] === `ه` || checkQ[i] === `ة`) {
            checkQ[i] = `ه`;
        } else if (checkQ[i] === `ي` || checkQ[i] === `ى`) {
            checkQ[i] = `ي`;
        } else if (checkQ[i] === `خ` || checkQ[i] === `ح` || checkQ === `ج`) {
            checkQ[i] = `ج`;
        } else if (checkQ[i] === `ض` || checkQ[i] === `ص`) {
            checkQ[i] = `ض`;
        } else if (checkQ[i] === `ط` || checkQ[i] === `ظ`) {
            checkQ[i] = `ط`
        } else if (checkQ[i] === `ع` || checkQ[i] === `غ`) {
            checkQ[i] = `ع`
        } else if (checkQ[i] === `ق` || checkQ[i] === `ف`) {
            checkQ[i] = `ق`
        }
    }
    checkM = checkM.join('');
    checkQ = checkQ.join('');
    return [checkM.toUpperCase(), checkQ.toUpperCase()];
}
// END MINI FUNCTIONS
// START EVENTS
SEND.addEventListener('click', sendMessage);
// END EVENTS