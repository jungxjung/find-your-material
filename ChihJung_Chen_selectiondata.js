var selections = {
    "choices" : [
        // First level start here. Select a textbook.
        {
            "key" : "Main",
            "option_1" : "Basic Written Chinese",
            "option_2" : "Integrated Chinese Level 1 Part 1",
            "prompt" : "Select a textbook.",
            "depth" : 'a'
        },
        // Second level for Basic Written Chinese start here. Select a Unit.
        {
            "key" : "Basic Written Chinese",
            "option_1" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "option_2" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "prompt" : "Select a Unit.",
            "depth" : 'b'
        },
        // Second Level for Integrated Chinese Level 1 Part 1. Select a lesson.
        {
            "key" : "Integrated Chinese Level 1 Part 1",
            "option_1" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "option_2" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "prompt" : "Select a lesson",
            "depth" : 'b'
        },
        // Third level for BWC Unit A Part 1. 
        {
            "key" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "option_1" : "Sentence structure",
            "option_2" : "Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        },
        // Third level for BWC Unit A Part 2.
        {
            "key" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "option_1" : "Sentence structure",
            "option_2" : "Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        },
        // Third level for IC Lesson 1 Dialogue 1.
        {
            "key" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "option_1" : "Traditionl Characters",
            "option_2" : "Simplified Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        },
        // Third level for IC Lesson 1 Dialogue 2.
        {
            "key" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "option_1" : "Traditionl Characters",
            "option_2" : "Simplified Characters",
            "prompt" : "What are you looking for?",
            "depth" : 'c'
        }
    ]
}

var resultt = {
    "results" : [
        {
            "key" : 'a',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "levelC" : "Sentence structure",
            "material" : "請你翻譯(请你翻译)",
            "image" : "assets/image/translate.svg",
            "caption" : "翻譯; to translate"
        },
        {
            "key" : 'b',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 1 : Numbers from 1 to 5 and the surname Wang",
            "levelC" : "Characters",
            "material" : "一, 二, 三, 四, 五, 王",
            "image" : "assets/image/king.png",
            "caption" : "王; king"

        },
        {
            "key" : 'c',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "levelC" : "Sentence structure",
            "material" : "這個字怎麼寫?(这个字怎么写?)",
            "image" : "assets/image/write.jpeg",
            "caption" : "寫; to write"
        },
        {
            "key" : 'd',
            "levelA" : "Basic Written Chinese",
            "levelB" : "Unit A Part 2 : Numbers from 6 to 10 and the surname Lin",
            "levelC" : "Characters",
            "material" : "六, 七, 八, 九, 十, 林",
            "image" : "assets/image/forest.jpeg",
            "caption" : "林; small forest"
        },
        {
            "key" : 'e',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "levelC" : "Traditionl Characters",
            "material" : "你, 好, 請, 問, 貴, 姓, 我, 呢, 小, 姐, 叫, 什, 麼, 名, 字, 先, 生, 李, 友, 王, 朋",
            "image" : "assets/image/mister.jpeg",
            "caption" : "先生; mister"
        },
        {
            "key" : 'f',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 1 : Exchanging Greetings",
            "levelC" : "Simplified Characters",
            "material" : "你, 好, 请, 问, 贵, 姓, 我, 呢, 小, 姐, 叫, 什, 么, 名, 字, 先, 生, 李, 友, 王, 朋",
            "image" : "assets/image/mister.jpeg",
            "caption" : "先生; mister"
            
        },
        {
            "key" : 'g',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "levelC" : "Traditionl Characters",
            "material" : "是, 老, 師, 嗎, 不, 學, 生, 也, 人, 中, 國, 北, 京, 紐, 約, 美, 國",
            "image" : "assets/image/newyork.jpeg",
            "caption" : "紐約; New York"
        },
        {
            "key" : 'h',
            "levelA" : "Integrated Chinese Level 1 Part 1",
            "levelB" : "Lesson 1 Dialogue 2 : Asking About Someone's Nationality",
            "levelC" : "Simplified Characters",
            "material" : "是, 老, 师, 吗, 不, 学, 生, 也, 人, 中, 国, 北, 京, 纽, 约, 美, 国",
            "image" : "assets/image/newyork.jpeg",
            "caption" : "紐約; New York"
        }

    ]
}