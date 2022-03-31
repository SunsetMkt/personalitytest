function TestInstinctsq(num) {
    if (num > 29) {
        return '请选择以下最符合你的情况'
    }
    let q_list = ['请选择以下你最为渴求的事物','请选择以下你最为恐惧的事物','请选择以下最符合你的情况','我认为我已经将自身调整至最完美的，不需要为了适应其他人而改变自身，我对他人的不完美感到愤怒，纠正自身的缺陷','我认为我是社交圈子中的核心人物，我喜欢以大人物的形象呈现在大家面前','我渴望获得社会认可，所以我对不同的人经常会投其所好，采取不同的面目，以获得他们的认可','我总是自责，带着自我厌恶的倾向与别人比较，为自己不如别人而痛苦','我寻求超凡价值，追寻理想图腾吗，并因此间接的蔑视了凡人和普通生活','我内心有一条明确的界限来区分哪些人是好的，哪些人是坏的','我希望自己能作为一个乐善好施，扶危济贫的好人，然后得到大家的喝彩','我对【向不公发出怒吼】有强烈的共鸣，在我的世界里，根本没有权威或者尊敬这回事，只有蔑视，对社会、规范、文化和强权阶层的蔑视！','遗忘自我，忽视内心世界，随波逐流，把自己安顿在舒适的尘世中，为了满足集体的需要，投入大量的精力','我对各种丑恶的现象充满愤怒，这种愤怒成为一种精神力量驱使我摧毁他们','我内心里渴望获得别人，并且会在别人抛弃我之前抛弃对方以避免自己受到伤害','我总是为吸引和讨好某些生活中的亲密朋友或亲人而活着','我内心里总是有种情感，渴望着摧毁杀灭掉某些人，我条件反射的排斥当下，看不起像过着家畜一般日常生活的人，容易沉浸在脱离现实的幻想中','我生活在理性和客观性为王的内心世界中，我认为无条件的爱是一种美好愿景，但基本不可能在现实中寻觅到这种爱，所以倾向于把自己与他人隔离起来','我希望获得力量，强健体魄，喜欢表现强势的态度','我对世间之事毫无兴趣，渴望着一个更高级更先进的世界，追寻着心中的梦想','我喜欢追求紧张刺激，主动寻求冒险，挑战和危险，内心深处总想体会那种肾上腺素飙到峰值的感觉','我感觉自己很没有激情，在人群中很没有存在感，但我渴望着和他人融合(Union)','我感到自身有很多不完美之处，对此我甚至会感到愤怒，不过这种愤怒也会驱使我去纠正自己的缺陷达到完美','我希望我是最重要的！我不想当成年人！希望得到大家的呵护','我下决心做个普通的好人，不去沾染错误的想法，也不求闻达于诸侯','我的生活中有很多悲伤痛苦的事情，觉得自己有很多缺陷，但害怕因此一些人把我视为脆弱的，我不喜欢与其他人诉苦，如果他们因为我的痛苦来关心我，我会有些无所适从，所以我习惯表现出一副坚韧不屈的样子，一个人独自去战胜这些痛苦。','我倾向压低自己的欲望以获得更多个人独处的时间，因为欲望意味着需要去依赖他人，我倾向摆脱和他人的情感交流，退缩到自己头脑中的内心世界中最为舒适','我渴望得到我所认可亲近的人的保护，渴望一个小小的，温暖舒适的世界','我是一个机会主义者，总是寻找便利，赚取某些好处，谋求某些利益','我感觉人们善良和良好的意图根本不存在，我可以慷慨的为他人提供保护，以让他们对我形成依赖，进而控制他们，为了不被他们所伤害','我吃，故我在；我睡，故我在；我拥有，故我在；对我而言没有形而上的层次，只想现实安逸的度日']
    return q_list[num]
}

function TestInstinctsa(num) {
    var result = false
    if (num == 0) {
        result = [
            { text: "很多朋友，良好的声誉，广受尊敬的社会地位", type: [0, "So"], value: 16, color: "Instincts_answer", color: "Instincts_answer" },
            { text: "深入/剧烈的经历与体验，不顾艰难险阻的去实现我的理想伟业", type: [0, "Sx"], value: 16, color: "Instincts_answer", color: "Instincts_answer" },
            { text: "能让我躺平不去工作也不用担忧金钱匮乏，想要什么就有什么的自由快乐的生活", type: [0, "Sp"], value: 16, color: "Instincts_answer", color: "Instincts_answer" },
        ]
    }
    if (num == 1) {
        result = [
            { text: "一生平淡无奇，没有让我感受到热烈和深入，让我焕发生命的人和事。", type: [0, "Sx"], value: 8, color: "Instincts_answer" },
            { text: "失去赖以为生的收入来源，遭遇严重的生存危机", type: [0, "Sp"], value: 8, color: "Instincts_answer" },
            { text: "很多人都无法认同接受我，被所在的朋友圈排挤出去", type: [0, "So"], value: 8, color: "Instincts_answer" },
        ]
    }
    if (num == 2) {
        result = [
            { text: "一般情况下更多会考虑维护和实现自身利益，保护自身", type: [0, "Sp"], value: 10, color: "Instincts_answer" },
            { text: "一般情况下更多会考虑与他人的人际关系，社会评价", type: [0, "So"], value: 10, color: "Instincts_answer" },
            { text: "一般情况下更多会为能让我焕发激情和生命的人和事所考虑", type: [0, "Sx"], value: 10, color: "Instincts_answer" },
        ]
    }
    if (num > 2 && num < 12) {
        result = yesorno(num - 2, 'So')
    }
    if (num > 11 && num < 21) {
        result = yesorno(num - 11, 'Sx')
    }
    if (num > 20 && num < 30) {
        result = yesorno(num - 20, 'Sp')
    }
    return result
}


function TestEnneagrama(Instincts, num) {
    var result = false
    if (Instincts == 'So') {
        if (num == 0) {
            result = [
                { text: "我更重视自身价值认同和社会认可，我认为我自己是很完美的，没必要改造自己的习惯做法适应他人，得到他人的尊重是理所当然的。", type: [1, ""], value: 16, color: "Instincts_answer" },
                { text: "我更重视自身价值认同和社会认可，我试图做到比其他人更为热情，希望以此别人也能回报我，以增进我的影响力和社会地位。", type: [2, ""], value: 16, color: "Instincts_answer" },
                { text: "我更重视自身价值认同和社会认可，我甚至可能用夸大的说辞来提高大家对我的评价，并尽可能隐瞒自己的缺点和失败的经历。", type: [3, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，我感到自己不如他人，所以有远离他人的倾向，并且容易一个人沉浸到痛苦和悲伤之中无法自拔。", type: [4, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，我喜欢去追逐如镜花水月般的理想，根本上我不喜欢与人交往，但需要人际关系来为理想的实现所服务。", type: [5, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，但又不信任自己的内心想法，习惯于遵循黑白分明的法律，道德或个人固有理念来判断事物。", type: [6, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，但这种欲望往往是为了博取良好的社会名誉去帮助他人，并且我时常感受到自己考虑的过少。", type: [7, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，但这种欲望往往是和我的朋友结成同盟，保护弱小的朋友，一起去挑战强大的敌人或者完成艰难的项目共赴胜利。", type: [8, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，但这种欲望往往是对我所在的社区，家庭或朋友圈去做出贡献，往往没意识到自身真正的需求去忘我的工作。", type: [9, ""], value: 16, color: "Instincts_answer" },
                { text: "我觉得以上描述都不符合。", type: [6, ""], value: 10, color: "Instincts_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [9, ""], value: 10, color: "Instincts_answer" },
            ]
        }
    }
    if (Instincts == 'Sx') {
        if (num == 0) {
            result = [
                { text: "我更重视自身价值认同和他人认可，但也重视实现自己的目的，我会以狂热的信仰和高尚的口号去驱动自己达成目标，就如同宗教热情驱动下殖民美洲的西班牙人那样。", type: [1, ""], value: 16, color: "Instincts_answer" },
                { text: "我更重视自身价值认同和他人认可，我希望能用我深厚的情感彻底去征服我所爱的人。", type: [2, ""], value: 16, color: "Instincts_answer" },
                { text: "我更重视自身价值认同和他人认可，我希望自己充满性吸引力来引诱别人认可接受我，并借此从他们那里得到好处。", type: [3, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中,蔑视常人的生活，因为那些活在虚假的和平中的人是多么的低劣，世人愚昧不堪无法相处", type: [4, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，世界上大多数人都是难以相处的，与其与人类交流不如自己去探索知识或宅在家玩，但我希望我能找到我所能与之交流的人。", type: [5, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，我必须克服内心的恐惧变得更强大，为了让内心的勇气战胜恐惧我甚至愿意去从事危险的事业去锻炼自身。", type: [6, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，这种欲望往往是追求一些梦幻般的理想，想都不想的去踏入未知领域。", type: [7, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，我非常叛逆，喜欢成为大家关注的焦点，如果有人令我不爽我就可能向其发起挑衅。", type: [8, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，但这种欲望往往是对我所爱的那个人全心全力的付出，以致于在这一过程中忘却了自身的欲望。", type: [9, ""], value: 16, color: "Instincts_answer" },
                { text: "我觉得以上描述都不符合。", type: [6, ""], value: 10, color: "Instincts_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [9, ""], value: 10, color: "Instincts_answer" },
            ]
        }
    }
    if (Instincts == 'Sp') {
        if (num == 0) {
            result = [
                { text: "我更重视自身价值认同和自我认可，我希望我能不断改善自身，达到完美的状态。", type: [1, ""], value: 16, color: "Instincts_answer" },
                { text: "我更重视自身价值认同和自我认可，我内心不想长大，希望像小孩子一样被大家怜爱。", type: [2, ""], value: 16, color: "Instincts_answer" },
                { text: "我更重视自身价值认同和自我认可，我只对实际的，最有用的东西感兴趣，渴望不断提升自己的效率。", type: [3, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，苦苦追逐遥不可及的理想，无论付出多少代价我都要实现他，那里仿佛有我内心缺失的东西", type: [4, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，在内心世界中我能用我的想象力构建出现实世界难以体验的内心世界，如果不影响我的物质生活，我希望能建立起厚厚的堡垒隔绝与他人的交流。", type: [5, ""], value: 16, color: "Instincts_answer" },
                { text: "我习惯于把精力投入到内心世界中，很没安全感，这个世界上有很多人都是不怀好意的，光靠我自己无法保护好自己，我是弱势群体，渴望能得到外界以及社会公义的保护。", type: [6, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，为此我可以不择手段，让自己学会越来越狡猾的生活，因为只有这样才能保护我以及我的家庭。", type: [7, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，我虽然有很强的反抗他人的欲望，但我学会了收敛这种欲望，为了不被他人控制，我总想着如何先下手为强把周围的人尽可能控制。", type: [8, ""], value: 16, color: "Instincts_answer" },
                { text: "我以实现自己的欲望优先，我希望我能躺平过着吃喝玩乐的安逸生活。", type: [9, ""], value: 16, color: "Instincts_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [9, ""], value: 10, color: "Instincts_answer" },
            ]
        }
    }
    if (num == 1) {
        if (Instincts == 'So') {
            result = [
                { text: "我希望赢的观众瞩目，成为大家所爱戴的卓越出众的人。", type: [2, ""], value: 10, color: "Ired_answer" },
                { text: "我很在乎他人对我的看法，渴望得到社会认可，希望所有人为我喝彩。", type: [3, ""], value: 10, color: "Ired_answer" },
                { text: "我希望他人能听我诉苦，也认为自己不如他人，与他人相处时总是喜欢把自己放在受害者的位置上。", type: [4, ""], value: 10, color: "Ired_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [3, ""], value: 6, color: "Ired_answer" },
            ]
        }
        if (Instincts == 'Sx') {
            result = [
                { text: "我希望得到他人的爱，所以会想办法诱惑他人。", type: [2, ""], value: 10, color: "Ired_answer" },
                { text: "我很在乎他人对我的看法，所以会尽可能掩饰自己的攻击性，但如果遭到他人拒绝，可能就无法容忍而爆发", type: [3, ""], value: 10, color: "Ired_answer" },
                { text: "我看不起日常的日子人，轻视日常生活，我很有对这类普通人表达内心的怒气的冲动，并且内心深处认为自己很特殊高于常人。", type: [4, ""], value: 10, color: "Ired_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [3, ""], value: 6, color: "Ired_answer" },
            ]
        }
        if (Instincts == 'Sp') {
            result = [
                { text: "我内心认为自己是最重要的，渴望得到大家的关爱。", type: [2, ""], value: 10, color: "Ired_answer" },
                { text: "我很在乎他人对我的看法，为此尽可能把自己做到最好，不会说出会让他人留下不好印象的话，更不会说出一些触犯禁忌的话。", type: [3, ""], value: 10, color: "Ired_answer" },
                { text: "我不怎么在乎他人的评价，我内心觉的自己不如他人，我更愿意尽可能一个人独自承受痛苦，羞于启齿寻求他人的关爱。", type: [4, ""], value: 10, color: "Ired_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [3, ""], value: 6, color: "Ired_answer" },
            ]
        }
    }
    if (num == 2) {
        if (Instincts == 'So') {
            result = [
                { text: "我担忧和一般人沟通会浪费我的时间，所以渴望只去结交最杰出最有声望的人来帮助我实现我思维世界中的终极理想。", type: [5, ""], value: 10, color: "Instincts_answer" },
                { text: "我恐惧模糊的原则造成的隐患，所以我喜欢黑白分明的思考，严格要求自己，绝不容许模棱两可的做法。", type: [6, ""], value: 10, color: "Instincts_answer" },
                { text: "我害怕自己的感官快乐和实现自己利益给我带来负面影响，所以希望像苦行僧一样尽可能的去帮助他人，虽然这实际上也有一部分让他人欠我人情的动机。", type: [7, ""], value: 10, color: "Instincts_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [6, ""], value: 6, color: "Instincts_answer" },
            ]
        }
        if (Instincts == 'Sx') {
            result = [
                { text: "我对他人不抱期待，倾向把自己和他人隔离开来，回到自己的内心思维中。", type: [5, ""], value: 10, color: "Instincts_answer" },
                { text: "我时常思考如何能获得力量，变得更为强大。", type: [6, ""], value: 10, color: "Instincts_answer" },
                { text: "我总是理想化的看待世界，习惯性的忽略了去思考一些问题，把生活想象的更为美好。", type: [7, ""], value: 10, color: "Instincts_answer" },
                { text: "我觉得以上描述都不完全符合，很难选择。", type: [6, ""], value: 6, color: "Instincts_answer" },
            ]
        }
        if (Instincts == 'Sp') {
            result = [
                { text: "我恐惧与他人沟通，害怕自己做出行动时能力和知识不足，所以尽可能在现实中避免与他人的交流沉浸在自己的思维世界之中。", type: [5, ""], value: 10, color: "Instincts_answer" },
                { text: "我很没有安全感，害怕自己被别人落下而得不到集体的保护，所以更会去接近他人，渴望得到家庭的温暖，希望在一个没有敌人的家庭环境中。", type: [6, ""], value: 10, color: "Instincts_answer" },
                { text: "我担忧无法保护我或我的家人朋友的安全和利益，所以会尽可能去抓住机会，与人达成协议，即使这可能是具有很大风险的交易。", type: [7, ""], value: 10, color: "Instincts_answer" },
                { text: "我觉得以上描述都不完全符合，很难选择。", type: [6, ""], value: 6, color: "Instincts_answer" },
            ]
        }
    }
    if (num == 3) {
        if (Instincts == 'So') {
            result = [
                { text: "我有很强烈的自身欲求，对世俗标准持反对态度，喜欢简单粗暴的做事。", type: [8, ""], value: 10, color: "Igreen_answer" },
                { text: "我非常善于满足他人的要求，为集体奉献，乃至于成为了忽视自己欲求的工作狂。", type: [9, ""], value: 10, color: "Igreen_answer" },
                { text: "我会压抑自己的欲求，表现出一种完美的无可挑剔的态度。", type: [1, ""], value: 10, color: "Igreen_answer" },
                { text: "我觉得以上描述都有部分符合，很难选择。", type: [9, ""], value: 6, color: "Igreen_answer" },
            ]
        }
        if (Instincts == 'Sx') {
            result = [
                { text: "我有很强烈的自身欲求，因此表现的个性浮夸，十分叛逆。", type: [8, ""], value: 10, color: "Igreen_answer" },
                { text: "我时常忽略自身的欲求，牺牲自己的生活来和我所爱的某个人或团体，甚至可能只是自己融为一体。", type: [9, ""], value: 10, color: "Igreen_answer" },
                { text: "我可能会狂热的信仰某些东西或教条规制自身的欲求，但也可能会以此为借口来满足自己的欲求。", type: [1, ""], value: 10, color: "Igreen_answer" },
                { text: "我觉得以上描述都不完全符合，很难选择。", type: [9, ""], value: 6, color: "Igreen_answer" },
            ]
        }
        if (Instincts == 'Sp') {
            result = [
                { text: "我有很强烈的欲求，我渴望得到一切，接受不了得不到想要的东西的挫败感，但为了我自己的安全我会尽可能收敛这一点。", type: [8, ""], value: 10, color: "Igreen_answer" },
                { text: "我自己的想法不多，只想吃饱喝足，平静安逸的过日子。", type: [9, ""], value: 10, color: "Igreen_answer" },
                { text: "我倾向压制自己的欲求，让自己尽可能的接近完美。", type: [1, ""], value: 10, color: "Igreen_answer" },
                { text: "我觉得以上描述都不完全符合，很难选择。", type: [9, ""], value: 6, color: "Igreen_answer" },
            ]
        }
    }
    return result
}

function SelectEnneagrama(selected, commondata) {
    var result = []
    var tvalue = 8 - selected.length
    console.log(selected, tvalue)
    if (commondata.startorder == false) {
        commondata.startorder = true
    }
    if (selected.indexOf(2) === -1) {
        result.push({ text: "我是一个热情、有爱心、热情好客的人，会关心他人的人，渴望从他人那里得到爱", type: [2, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(3) === -1) {
        result.push({ text: "我是一个有效率、有成效、有动力的人，需要设定并实现自己的目标，渴望竞争超越他人的人", type: [3, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(4) === -1) {
        result.push({ text: "我是一个情绪化，敏感，想法奇异，沉浸于痛苦中的人，需要发现美，探索我的内心世界，渴望自己有与众不同的特点，并倾向远离他人", type: [4, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(5) === -1) {
        result.push({ text: "我是一个容易沉浸于内心的想象世界，喜欢以奇特的角度思考提出奇异观点的人，需要时间远离他人独自处理事实和信息，提升自己的知识和技能应对焦虑", type: [5, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(6) === -1) {
        result.push({ text: "我是一个友好的，敏感的，正义的，正确的人，信奉公理，理性和普遍认可的逻辑，依靠调整自己的想法接近于大家所认同的观点来应对焦虑", type: [6, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(7) === -1) {
        result.push({ text: "我是一个即兴和乐观的人，需要新的想法，选择，可能性和令人兴奋的计划，喜欢现实物质享受，会习惯性的忽视了自己所焦虑的问题", type: [7, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(8) === -1) {
        result.push({ text: "我是一个自信、果断、愤世嫉俗的人，我不能容忍强者以强权压迫我或者欺凌其他弱者，如果现秩序与我的理想和欲求产生冲突，我就会竭尽全力将其摧毁殆尽！", type: [8, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(9) === -1) {
        result.push({ text: "我是一个善良，随和，老实的人，需要避免冲突，看到所有的观点，能为集体或朋友同事竭尽所能的做事，满足他们的要求", type: [9, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (selected.indexOf(1) === -1) {
        result.push({ text: "我是一个有责任心、恰当、勤奋的人，做正确的事情服从于秩序安排的人，我严于律己，克制自己的欲望，希望其他人也是如此，这个世界才会更好", type: [1, ""], value: tvalue, color: "Igreen_answer" })
    }
    if (result == []) {
        return false
    }
    return result
}

function CheckEnneagrama(Instincts, num) {
    if (num == 1) {
        if (Instincts == 'So' || Instincts == 'Sx') {
            return ['我喜欢在内心和某些人比较，会为感到不如对方而痛苦烦恼，因此尽力做的完美',[{ text: "符合", type: [4, 1], value: 16, color: "yes" },{ text: "不符合", type: [1, ""], value: 2, color: "no" }]]
        }
        if (Instincts == 'Sp') {
            return ['我喜欢在内心和某些人比较，会为感到不如对方而痛苦烦恼，但我更会尝试去克服忍受痛苦，以让自己更为完美',[{ text: "符合", type: [4, 1], value: 16, color: "yes" },{ text: "不符合", type: [1, ""], value: 2, color: "no" }]]
        }
    }
    if (num == 2) {
        return ['虽然我喜欢讨好他人，但这主要是为了提高他人对我的评价，而不是想要对方也来这样回报讨好我',[{ text: "符合", type: [3, 2], value: 24, color: "yes" },{ text: "不符合", type: [2, ''], value: 3, color: "no" }]]
    }
    if (num == 4) {
        return ['我对于和他人欢乐的情感互动(贴贴)不会感到厌恶，而且觉得和他人友好互动可以提高他人对我的评价',[{ text: "符合", type: [3, 4], value: 26, color: "yes" },{ text: "不符合", type: [4, ''], value: 3, color: "no" }]]
    }
    if (num == 5) {
        if (Instincts == 'So' || Instincts == 'Sx') {
            return ['我和他人情感互动(贴贴)不会有心理负担而能感到快乐，所以我喜欢接近他人',[{ text: "符合", type: [6, 5], value: 22, color: "yes" },{ text: "不符合", type: [5, ''], value: 3, color: "no" }]]
        }
        if (Instincts == 'Sp') {
            return ['我和他人情感互动(贴贴)不会有心理负担而能感到快乐，所以我喜欢接近他人',[{ text: "符合", type: [6, 5], value: 26, color: "yes" },{ text: "不符合", type: [5, ''], value: 4, color: "no" }]]
        }
    }
    if (num == 62) {
        return ['我接近他人更多是为了安全感而非情感需求',[{ text: "符合", type: [6, 2], value: 24, color: "yes" },{ text: "不符合", type: [2, ''], value: 4, color: "no" }]]
    }
    if (num == 26) {
        if (Instincts == 'So') {
            return ['以下哪种更符合你的情况？',[{ text: "我向大部分人表达情感很容易，没有障碍，我乐于帮助他们，也希望大家都对我更好", type: [2, 6], value: 24, color: "Ired_answer" },{ text: "我接近他人更多是为了安全感而非情感需求", type: [6, 2], value: 23, color: "Instincts_answer" }]]
        }
        if (Instincts == 'Sx') {
            return ['以下哪种更符合你的情况？',[{ text: "我向部分亲近的人表达情感很容易，没有障碍，我乐于吸引他们，让他们都对我更好", type: [2, 6], value: 24, color: "Ired_answer" },{ text: "我接近他人更多是为了安全感而非情感需求", type: [6, 2], value: 23, color: "Instincts_answer" }]]
        }
        if (Instincts == 'Sp') {
            return ['以下哪种更符合你的情况？',[{ text: "我向部分亲近的人表达情感很容易，没有障碍，我喜欢装可爱来让他们对我更好", type: [2, 6], value: 24, color: "Ired_answer" },{ text: "我接近他人更多是为了安全感而非情感需求", type: [6, 2], value: 24, color: "Instincts_answer" }]]
        }
    }
    if (num == 7) {
        return ['我很容易陷入沉浸式思考，察觉到别人察觉不到的方面',[{ text: "符合", type: [5, 7], value: 20, color: "yes" },{ text: "不符合", type: [7, ''], value: 3, color: "no" }]]
    }
    if (num == 14) {
        return ['为了能在和对方交流时让双方都愉快，我喜欢表现的乐观快乐',[{ text: "符合", type: [2, 7], value: 20, color: "yes" },{ text: "不符合", type: [7, ''], value: 3, color: "no" }]]
    }
    if (num == 8) {
        return ['我憎恨着这个世界，我想要摧毁的是一切现秩序，即使这也会毁灭我自己以及我的家人和朋友也在所不辞',[{ text: "符合", type: [4, 8], value: 26, color: "yes" },{ text: "不符合", type: [4, ''], value: 3, color: "no" }]]
    }
    if (num == 16) {
        return ['我感到这个世界充满荒谬，所以愤世嫉俗，但如果可能我不愿意用革命等反秩序的手段去纠正错误，而是在现秩序上进行改良',[{ text: "符合", type: [1, 8], value: 26, color: "yes" },{ text: "不符合", type: [1, ''], value: 3, color: "no" }]]
    }
    if (num == 9) {
        return ['虽然我很慵懒，但好奇心会驱使我深入的探索某些问题，对创新的渴求会驱使我废寝忘食的完成某些项目',[{ text: "符合", type: [5, 9], value: 20, color: "yes" },{ text: "不符合", type: [9, ''], value: 3, color: "no" }]]
    }
    if (num == 18) {
        return ['我内心有明确的边界去区分哪些人是好的或坏的，哪些人可能对我造成威胁所以先行防范',[{ text: "符合", type: [6, 9], value: 20, color: "yes" },{ text: "不符合", type: [6, ''], value: 3, color: "no" }]]
    }
    if (num == 10) {
        return ['我喜欢表现出自己是一个理性，客观的人，我会明确区分哪些是正确的正义的，哪些是错误的邪恶的，我会尽量避免用魔怔的说法反驳他人',[{ text: "符合", type: [6, 5], value: 30, color: "yes" },{ text: "不符合", type: [5, ''], value: 4, color: "no" }]]
    }
    if (num == 15) {
        return ['我不怎么喜欢考虑过于复杂概念性形而上的问题',[{ text: "符合", type: [7, 5], value: 20, color: "yes" },{ text: "不符合", type: [5, ''], value: 3, color: "no" }]]
    }
    return ['error',[{ text: "请点击", type: [0, 0], value: 0, color: "yes" },{ text: "error", type: [0, 0], value: 0, color: "no" }]]
}

function yesorno(num, Instinct) {
    etype = num
    result = [
        { text: "非常符合", type: [etype, Instinct], value: 3, color: "more_yes" },
        { text: "基本符合", type: [etype, Instinct], value: 2, color: "yes" },
        { text: "部分符合", type: [etype, Instinct], value: 1, color: "little_yes" },
        { text: "不确定。", type: [etype, Instinct], value: 0, color: "netural" },
        { text: "较不符合", type: [etype, Instinct], value: -1, color: "little_no" },
        { text: "基本不符合", type: [etype, Instinct], value: -2, color: "no" },
        { text: "完全不符合", type: [etype, Instinct], value: -3, color: "more_no" },
    ]
    return result
}

function getecharacter(type) {
    if (type == 'So1') {
        return [["吉尔加美什", "王来允许，王来承认，王来背负整个世界!", "<img src='./img/So/101.png' alt='01 pic'>"]]
    }
    if (type == 'Sx1') {
        return [["夜神月", "我将成为神，制裁这个世界，代表正义", "<img src='./img/Te-N/02.png' alt='02 pic'>"], ["谭雅", "对方是康米，是侵害个人自由的极权主义者，我无法和康米仰望同一片天空，即使为了在安全的后方，过着一帆风顺的人生，也得拿起枪，绝不容许共产主义者猖狂跋扈!", "<img src='./img/Te-S/03.png' alt='02 pic'>"]]
    }
    if (type == 'Sp1') {
        return [["夏娜", "我得变得更强，让我能应付任何情况", "<img src='./img/Ni-T/02.png' alt='02 pic'>"]]
    }
    if (type == 'So2') {
        return [["巴麻美", " ", "<img src='./img/Fe-N/02.png' alt='01 pic'>"]]
    }
    if (type == 'Sx2') {
        return [["乔纳森·乔斯达", " ", "<img src='./img/Fe-N/01.png' alt='02 pic'>"]]
    }
    if (type == 'Sp2') {
        return [["木之本樱", " ", "<img src='./img/Sp/201.png' alt='02 pic'>"]]
    }
    if (type == 'So3') {
        return [["莱因哈特", "我的征途是星辰大海", "<img src='./img/Te-N/03.png' alt='01 pic'>"]]
    }
    if (type == 'Sx3') {
        return [["罗兹瓦尔", " ", "<img src='./img/Sx/301.png' alt='01 pic'>"]]
    }
    if (type == 'Sp3') {
        return [["渡边早季", " ", "<img src='./img/Fe-S/03.png' alt='01 pic'>"]]
    }
    if (type == 'So4') {
        return [["樱滿集", "我的......我的......我的王之力啊啊啊啊啊啊！", "<img src='./img/So/401.png' alt='01 pic'>"]]
    }
    if (type == 'Sx4') {
        return [["水银灯", "我..垃圾...才不是什么垃圾呢！", "<img src='./img/Sx/401.png' alt='01 pic'>"], ["黑雪姬", "很遗憾的，我的对战虚拟角色可是很丑陋的，而且丑陋到了极点。虽然我并非因为它丑陋才予以封印……不过我的事不重要", "<img src='./img/Ni-F/01.png' alt='02 pic'>"]]
    }
    if (type == 'Sp4') {
        return [["黑", "总有一天我会撕去这虚假的星空", "<img src='./img/sp/402.png' alt='01 pic'>"], ["卫宫切嗣", "我试图采取正途，却总是不断犯错。虽然试图挽回，面临的仍是不断重蹈覆辙。然后碰到穷途末路的时候，又擅自希冀奇迹降临。这是追寻看不见的月亮，仿佛身处暗夜的旅途", "<img src='./img/sp/401.png' alt='02 pic'>"]]
    }
    if (type == 'So5') {
        return [["黎明卿", " ", "<img src='./img/So/501.png' alt='01 pic'>"], ["圣岛慎护", "我想看到人类灵魂的光辉，想确认它是真正高贵的东西。但不问自己的意思，纯粹按照巫女神谕活着的人们，究竟有什么价值？", "<img src='./img/Ne-T/02.png' alt='02 pic'>"]]
    }
    if (type == 'Sx5') {
        return [["C.C.", "知道雪为什么是白色吗，因为它忘记了自己曾经的颜色", "<img src='./img/Ti-N/01.png' alt='01 pic'>"], ["两仪式", "理所当然般地活着，理所当然般地死去。 啊，那真是多么地...孤独...", "<img src='./img/Ti-S/01.png' alt='02 pic'>"]]
    }
    if (type == 'Sp5') {
        return [["杨威利", "我并不是轻蔑权力或武力。不，其实我是在害怕。一旦权力或武力到了手，几乎会使所有的人都变得丑恶，这种例子我知道的太多了。而我也没有自信自己绝不会改变", "<img src='./img/Ti-N/02.png' alt='01 pic'>"], ["白織(蜘蛛子)", " ", "<img src='./img/Ti-N/03.png' alt='01 pic'>"]]
    }
    if (type == 'So6') {
        return [["枢木朱雀", "用错误的手段得来的结果是无意义的", "<img src='./img/So/601.png' alt='01 pic'>"]]
    }
    if (type == 'Sx6') {
        return [["佛洛克", " ", "<img src='./img/Sx/601.png' alt='01 pic'>"], ["碇真嗣", "不能逃避！不能逃避！不能逃避！", "<img src='./img/Fi-N/03.png' alt='03 pic'>"]]
    }
    if (type == 'Sp6') {
        return [["晓美焰", "比希望更炽热，比绝望更深邃的，是爱啊！", "<img src='./img/Fi-N/01.png' alt='01 pic'>"], ["栉名安娜", "好漂亮的红色……", "<img src='./img/Sp/601.png' alt='01 pic'>"]]
    }
    if (type == 'So7') {
        return [["漩涡鸣人", " ", "<img src='./img/Se-F/01.png' alt='01 pic'>"], ["麻仓叶", "船到桥头自然直", "<img src='./img/So/701.png' alt='01 pic'>"]]
    }
    if (type == 'Sx7') {
        return [["凉宫春日", "实现梦想的第一步是相信他，否则连原本能达成的愿望也实现不了", "<img src='./img/Sx/701.png' alt='01 pic'>"], ["伊蕾娜", " ", "<img src='./img/Ne-T/03.png' alt='03 pic'>"]]
    }
    if (type == 'Sp7') {
        return [["乔瑟夫·乔斯达", "你的下一句话是______", "<img src='./img/Sp/701.png' alt='01 pic'>"],["凯尼∙阿克曼", " ", "<img src='./img/Se-T/03.png' alt='01 pic'>"]]
    }
    if (type == 'So8') {
        return [["艾伦", "如果会被他人夺走自由，我就会先反过来夺走那个人的自由", "<img src='./img/Ne-F/01.png' alt='01 pic'>"]]
    }
    if (type == 'Sx8') {
        return [["梅利奥达斯", "人总有一天会死。但是，只要有人继续守护他的信念，那么这份信念就不会死去。既然决定要守护信念，那么即使流再多血，即使哭干眼泪，也应该去贯彻到底。这才是骑士。", "<img src='./img/Sx/801.png' alt='01 pic'>"]]
    }
    if (type == 'Sp8') {
        return [["鲁鲁修", "拥有力量的人们啊，恐惧我们吧！没有力量的人们啊，追随我们吧！", "<img src='./img/Ni-T/01.png' alt='01 pic'>"], ["阿谢拉特", " ", "<img src='./img/Sp/801.png' alt='02 pic'>"]]
    }
    if (type == 'So9') {
        return [["阿尔托莉雅", "我将会带领我的人民，战斗到最后一刻", "<img src='./img/Si-T/02.png' alt='01 pic'>"],["卫宫士郎", " ", "<img src='./img/So/901.png' alt='02 pic'>"]]
    }
    if (type == 'Sx9') {
        return [["休比", "这份思念，这颗心，从机械中孕育出来 得到了生命 这全部都赌在这251秒里！", "<img src='./img/Si-F/01.png' alt='01 pic'>"],["尤贝尔", " ", "<img src='./img/Sx/901.png.png' alt='01 pic'>"]]
    }
    if (type == 'Sp9') {
        return [["立华奏", "也请让我相信，你一直以来所相信的事吧——“活着是一件很美好的事”", "<img src='./img/Si-F/03.png' alt='01 pic'>"]]
    }
}

function getetext(type) {
    if (type == 'So1') {
        return ["关键词:不适感", "憤怒之罪", "1号的侧翼是9和1，所以可能会表现出9或1表面特征，如果表现出9的特征过于明显则称为1w9,同理，2的特征过于明显则称为1w2，1号的整合解离方向是7和4，所以1号可能表现出向4和7变化的特征。1号号作为围绕自身欲望和存在边界的腹区能量缺乏的类型，会为了服从自身所认同的规则或信条来压抑自身的欲望，纠正自身的错误，因此其有着一种愤怒作为内心的驱动力量来纠正其所认为错误的事情。So1即1号社群型认为自己已经达到完美状态，所以经常会采取一种完美无可挑剔的状态，并且认为【我是对的，你是错的】，不会愿意去适应对方的做法和腔调。"]
    }
    if (type == 'Sx1') {
        return ["关键词:热忱", "憤怒之罪", "1号的侧翼是9和1，所以可能会表现出9或1表面特征，如果表现出9的特征过于明显则称为1w9,同理，2的特征过于明显则称为1w2，1号的整合解离方向是7和4，所以1号可能表现出向4和7变化的特征。1号号作为围绕自身欲望和存在边界的腹区能量缺乏的类型，会为了服从自身所认同的规则或信条来压抑自身的欲望，纠正自身的错误，因此其有着一种愤怒作为内心的驱动力量来纠正其所认为错误的事情。1sx即愤怒与性本能结合的1号性本能型，我们可能会认为1号性本能型的特点是欲望特别强烈，并进而导致他们急迫、易恐。如果想了解为什么性领域的愤怒会引发热仇，那么可以说是因为欲望从锁怒中得到了侵略性、 攻击性，从而使自身得到加强。换句话说，馈怒赋予欲望一种特殊的力量或者说紧张感，使得人不仅感到自己被拉向满足欲望的方向，而且觉得理直气壮。结果便是造成有些人会具有强烈的精神意志力和征服欲。我用下面这个集体行为的例子来加以解释：当南非翡翠和钻石矿石的开采被欧洲人垄断时，许多人提出反对，认为这些财富属于非洲人。但是一些人反问道（他们对此深信不疑）：“放到他们手里有什么好处？他们又没有文化！”在他们看来，既然欧洲人是文明人，而非洲人则被认为是原始的野蛮人，钻石自然应该属于欧洲人。"]
    }
    if (type == 'Sp1') {
        return ["关键词:担忧", "憤怒之罪", "1号的侧翼是9和1，所以可能会表现出9或1表面特征，如果表现出9的特征过于明显则称为1w9,同理，2的特征过于明显则称为1w2，1号的整合解离方向是7和4，所以1号可能表现出向4和7变化的特征。1号号作为围绕自身欲望和存在边界的腹区能量缺乏的类型，会为了服从自身所认同的规则或信条来压抑自身的欲望，纠正自身的错误，因此其有着一种愤怒作为内心的驱动力量来纠正其所认为错误的事情。Sp代表着自保的本能，追求完美的愤怒的能量与审视自身的自保的本能结合后，当其在自己心目中的形象太不完美时，他的愤怒常常会转化成一种持续的自我改进的能量，就好像上了瘾一样。并且他的愤怒，会隐藏在与其愤怒和埋怨截然相反的彬彬有礼的善行和乐于助人的态度背后。换言之，他将愤怒转换成了善意。"]
    }
    if (type == 'So2') {
        return ["关键词:野心", "傲慢之罪", "2号的侧翼是1和3，所以可能会表现出1或3表面特征，如果表现出1的特征过于明显则称为2w1,同理，3的特征过于明显则称为2w3，2号的整合解离方向是8和4，所以2号可能表现出向4和8变化的特征。2号作为围绕价值评价的心区能量过剩的类型，内心非常自我中心给自己较高的评价，2号很愿意对他人释放善意，摆出友善关爱的态度，不过其核心动机是希望对方也能以同等的友好来回报他们，其心中认为自己做的很优秀，所有人都应该对其友好，因此2号被称为傲慢。在So2即2号社群型身上，傲慢最明显的表现就是通过赢得观众的瞩目所获得的满足感。或许并不是智力高的人才能激发出更强的野心，甚至表面聪明都不需要。但尽管如此，2号社群型绝不会满足于做一个花瓶。他们想要的是出人头地，而出人头地就需要动脑子。凡是为了满足自己的虚荣心而渴望变得举足轻重的人，必须要具备吸引公众目光的能力。要成为一个群体诱惑者，一个卓越出众的人不仅各方面必须优于常人，而且要具备成为领导者的天赋。伊查素曾说到过野心，但是我们这里所说的野心，明确来说指的是一股希望强过其他人的热情，一种对影响力和特权的渴望。这种类型的人总是让自己以某种了不起的大人物的形象呈现在世界面前"]
    }
    if (type == 'Sx2') {
        return ["关键词:征服", "傲慢之罪", "2号的侧翼是1和3，所以可能会表现出1或3表面特征，如果表现出1的特征过于明显则称为2w1,同理，3的特征过于明显则称为2w3，2号的整合解离方向是8和4，所以2号可能表现出向4和8变化的特征。2号作为围绕价值评价的心区能量过剩的类型，内心非常自我中心给自己较高的评价，2号很愿意对他人释放善意，摆出友善关爱的态度，不过其核心动机是希望对方也能以同等的友好来回报他们，其心中认为自己做的很优秀，所有人都应该对其友好，因此2号被称为傲慢。Sx2即2号性本能型，渴望着吸引他人，内心需要完全获得他人，不仅是性方面，其真实想法是最大限度激发对方的热情，为其带来生活的改善。"]
    }
    if (type == 'Sp2') {
        return ["关键词:特权", "傲慢之罪", "2号的侧翼是1和3，所以可能会表现出1或3表面特征，如果表现出1的特征过于明显则称为2w1,同理，3的特征过于明显则称为2w3，2号的整合解离方向是8和4，所以2号可能表现出向4和8变化的特征。2号作为围绕价值评价的心区能量过剩的类型，内心非常自我中心给自己较高的评价，2号很愿意对他人释放善意，摆出友善关爱的态度，不过其核心动机是希望对方也能以同等的友好来回报他们，其心中认为自己做的很优秀，所有人都应该对其友好，因此2号被称为傲慢。2号自保型是反2，自保型与心区能量的冲突，即自保本能与傲慢相冲突，导致Sp2喜欢放低自己把自己打扮成小孩子，虽然看上去是温柔稚气的，但实际上是一种幼稚的自我中心主义，其有着对爱的赤裸裸的渴望，渴望用表现的像幼稚的儿童那样吸引他人，尤其是带有母性气质的人。"]
    }
    if (type == 'So3') {
        return ["关键词:声誉", "虚荣之罪", "3号的侧翼是2和4，所以可能会表现出2或4的表面特征，如果表现出2的特征过于明显则称为3w2,同理，4的特征过于明显则称为3w4，2号的整合解离方向是9和6，所以3号可能表现出向9和6变化的特征。3号是与自身的围绕价值评价的心区隔离的类型，也就是不在乎自己内心对自己的评价，而极度迎合讨好他人的评价的类型，为此其在社会竞争中往往会不择手段的去竞争获得优胜，获取虚名，因此其被定义为七原罪之外的虚荣。So3即3号社群型，So3追求的不仅是特定人的赞赏，而是所有人的喝彩，为此So3是最变幻无常的，对不同的人换上不同面孔获取肯定，也是自负者中最自负的。"]
    }
    if (type == 'Sx3') {
        return ["关键词:吸引力", "虚荣之罪", "3号的侧翼是2和4，所以可能会表现出2或4的表面特征，如果表现出2的特征过于明显则称为3w2,同理，4的特征过于明显则称为3w4，2号的整合解离方向是9和6，所以3号可能表现出向9和6变化的特征。3号是与自身的围绕价值评价的心区隔离的类型，也就是不在乎自己内心对自己的评价，而极度迎合讨好他人的评价的类型，为此其在社会竞争中往往会不择手段的去竞争获得优胜，获取虚名，因此其被定义为七原罪之外的虚荣。Sx3即3号性本能型，是一种过度的讨好型人格，尤其是在父权制下，Sx3的女性可能变成过度讨好男性的，而失去为自己获得愉悦的能力，这类型的病态在于他们的行为并非出自本能而是把所有热情都投入到对爱的渴望以及诱惑他人的行径上。"]
    }
    if (type == 'Sp3') {
        return ["关键词:安全感", "虚荣之罪", "3号的侧翼是2和4，所以可能会表现出2或4的表面特征，如果表现出2的特征过于明显则称为3w2,同理，4的特征过于明显则称为3w4，2号的整合解离方向是9和6，所以3号可能表现出向9和6变化的特征。3号是与自身的围绕价值评价的心区隔离的类型，也就是不在乎自己内心对自己的评价，而极度迎合讨好他人的评价的类型，为此其在社会竞争中往往会不择手段的去竞争获得优胜，获取虚名，因此其被定义为七原罪之外的虚荣。sp的自保本能与3的虚荣相冲突的，所以Sp3是反虚荣的反3，虽然其内心渴望虚荣与名誉，但是其表面上非常拒绝虚荣低调行事，希望做一个大家认可的好人。"]
    }
    if (type == 'So4') {
        return ["关键词:羞耻", "嫉妒之罪", "4号的侧翼是3和4，所以可能会表现出3或5的表面特征，如果表现出3的特征过于明显则称为4w3,同理，5的特征过于明显则称为4w5，4号的整合解离方向是2和1，所以4号可能表现出向2和1变化的特征。4号作为围绕价值评价的心区能量缺乏的类型，其核心是认为自己不如他人，所以4号的嫉妒是与他人的对比中感受到自身价值的缺失，从而容易陷入痛苦之中，为保护自身的情感远离他人。4号社群型总是自怨自艾，泪眼婆娑，把自己放在一个受害者的位置上。"]
    }
    if (type == 'Sx4') {
        return ["关键词:仇恨", "嫉妒之罪", "4号的侧翼是3和4，所以可能会表现出3或5的表面特征，如果表现出3的特征过于明显则称为4w3,同理，5的特征过于明显则称为4w5，4号的整合解离方向是2和1，所以4号可能表现出向2和1变化的特征。44号作为围绕价值评价的心区能量缺乏的类型，其核心是认为自己不如他人，所以4号的嫉妒是与他人的对比中感受到自身价值的缺失，从而容易陷入痛苦之中，为保护自身的情感远离他人。不过由于4号偏向脑区，激情的Sx与脑区的理性相冲突，于是Sx4成了极度扭曲的拒绝嫉妒的反4，虽然他们深层意识里认为自己不如他人，但他们拒绝这一点，所以喜欢摆出远在他人之上的态度，并对某一类人充满仇恨,蔑视普通的日常生活。"]
    }
    if (type == 'Sp4') {
        return ["关键词:坚韧", "嫉妒之罪", "4号的侧翼是3和4，所以可能会表现出3或5的表面特征，如果表现出3的特征过于明显则称为4w3,同理，5的特征过于明显则称为4w5，4号的整合解离方向是2和1，所以4号可能表现出向2和1变化的特征。4号作为围绕价值评价的心区能量缺乏的类型，其核心是认为自己不如他人，所以4号的嫉妒是与他人的对比中感受到自身价值的缺失，从而容易陷入痛苦之中，为保护自身的情感远离他人。Sp的自保本能与心区冲突，虽然4号都是痛苦的，但是Sp4是抗拒痛苦最坚韧的4号，因为自保本能要求4号必须学会抗拒克服痛苦才能保护自己的生存，这甚至可能导致部分极端的Sp4享受痛苦带来的快感。"]
    }
    if (type == 'So5') {
        return ["关键词:图腾", "贪婪之罪", "5号的侧翼是4和6，所以可能会表现出4或6的表面特征，如果表现出4的特征过于明显则称为5w4,同理，6的特征过于明显则称为5w6，5号的整合解离方向是7和8，所以5号可能表现出向7和8变化的特征。5号作为围绕思维和安全需求的脑区能量过剩的类型，非常容易沉浸到思维世界之中，所以5号的贪婪指的是5号容易贪婪的汲取某一领域的事物提升自己的思维和能力以应对可能潜在的危险与安全焦虑，例如贪婪的汲取时间，知识，信息等，并且可能为此不惜牺牲其他方面的需求，节衣缩食过着低欲望的远离他人的简朴生活，不惜代价的追求某一件事物才是真正的贪婪。5号是实质上最为理性的类型，但5号的思考往往不会基于主流价值的独立思考，所以看起来往往是魔怔且容易被认为是非理性的。5号社群型追求镜花水月般的理想图腾，虽然这一点和Sx7相似，但其更为脱离现实，其追求的理想就如虚幻中的图腾，其渴望与最杰出最有声望的个体结交。"]
    }
    if (type == 'Sx5') {
        return ["关键词:秘密", "贪婪之罪", "5号的侧翼是4和6，所以可能会表现出4或6的表面特征，如果表现出4的特征过于明显则称为5w4,同理，6的特征过于明显则称为5w6，5号的整合解离方向是7和8，所以5号可能表现出向7和8变化的特征。5号作为围绕思维和安全需求的脑区能量过剩的类型，非常容易沉浸到思维世界之中，所以5号的贪婪指的是5号容易贪婪的汲取某一领域的事物提升自己的思维和能力以应对可能潜在的危险与安全焦虑，例如贪婪的汲取时间，知识，信息等，并且可能为此不惜牺牲其他方面的需求，节衣缩食过着低欲望的远离他人的简朴生活，不惜代价的追求某一件事物才是真正的贪婪。5号是实质上最为理性的类型，但5号的思考往往不会基于主流价值的独立思考，所以看起来往往是魔怔且容易被认为是非理性的。不过由于Sx与脑区冲突，所以Sx5是反5，其并非像一般的5号那样因为贪婪而退缩，Sx渴望着激烈深入的体验，尽管拒绝远离他人，但内心深处渴望着一个极度理想的伴侣"]
    }
    if (type == 'Sp5') {
        return ["关键词:避难所", "贪婪之罪", "5号的侧翼是4和6，所以可能会表现出4或6的表面特征，如果表现出4的特征过于明显则称为5w4,同理，6的特征过于明显则称为5w6，5号的整合解离方向是7和8，所以5号可能表现出向7和8变化的特征。5号作为围绕思维和安全需求的脑区能量过剩的类型，非常容易沉浸到思维世界之中，所以5号的贪婪指的是5号容易贪婪的汲取某一领域的事物提升自己的思维和能力以应对可能潜在的危险与安全焦虑，例如贪婪的汲取时间，知识，信息等，并且可能为此不惜牺牲其他方面的需求，节衣缩食过着低欲望的远离他人的简朴生活，不惜代价的追求某一件事物才是真正的贪婪。5号是实质上最为理性的类型，但5号的思考往往不会基于主流价值的独立思考，所以看起来往往是魔怔且容易被认为是非理性的。退缩的5号与退缩的自保型结合在一起就演变为最为退缩的类型，该类型会彻底退缩回自己的内心世界的避难所，构建起严实的堡垒隔绝与他人的交流，对他们而言可能会有一种【他人即地狱】的感觉，不过由于这种特性其内心世界是极其丰富的，其往往有着较强的想象力去构建出让自己沉浸式体验回避现实的内心世界。"]
    }
    if (type == 'So6') {
        return ["关键词:责任", "恐惧之罪", "6号的侧翼是5和7，所以可能会表现出5或7的表面特征，如果表现出5的特征过于明显则称为6w5,同理，7的特征过于明显则称为6w7，6号的整合解离方向是3和9，所以6号可能表现出向3和9变化的特征。6号作为围绕思维和安全需求的脑区隔离的类型，虽然有着丰富的思考，但与自己的脑区隔离，很难真正做到自己的思考，以基于某些前人或他人的理论或说法来进行思考，恐惧自身是错误的是邪恶的，希望确信自己是正义且正确的，往往他们会捍卫着主流的价值观或说法，因此容易被认为是非常理性的类型被误认为5号，他们内心有着捍卫他们所认可的价值观的激烈的情绪，又容易被误认为4号或8号，但548都是黑暗类型，而6号充满对光明与正义的追求，因为其恐惧黑暗，恐惧邪恶，恐惧错误，恐惧一切不正确的东西想通过依附于某一权威的羽翼之下得到保护放弃自身的思考来应对安全感的焦虑，所以其是七原罪之外衍生的恐惧。社群型6是最为黑白分明的，严于律己的普鲁士人格，这种人格多出现在纳粹军官上（不过希特勒本人应该是Sx4而非So6），他们心中有一条明确的界限来区分哪些人是好的，哪些人是同志，哪些人可以统战，哪些人应该被肃清，他们的思考就在于用外来的标准去清清楚楚的区分形形色色的人。"]
    }
    if (type == 'Sx6') {
        return ["关键词:力量", "恐惧之罪", "6号的侧翼是5和7，所以可能会表现出5或7的表面特征，如果表现出5的特征过于明显则称为6w5,同理，7的特征过于明显则称为6w7，6号的整合解离方向是3和9，所以6号可能表现出向3和9变化的特征。6号作为围绕思维和安全需求的脑区隔离的类型，虽然有着丰富的思考，但与自己的脑区隔离，很难真正做到自己的思考，以基于某些前人或他人的理论或说法来进行思考，恐惧自身是错误的是邪恶的，希望确信自己是正义且正确的，往往他们会捍卫着主流的价值观或说法，因此容易被认为是非常理性的类型被误认为5号，他们内心有着捍卫他们所认可的价值观的激烈的情绪，又容易被误认为4号或8号，但548都是黑暗类型，而6号充满对光明与正义的追求，因为其恐惧黑暗，恐惧邪恶，恐惧错误，恐惧一切不正确的东西，想通过依附于某一权威的羽翼之下得到保护放弃自身的思考来应对安全感的焦虑，所以其是七原罪之外衍生的恐惧。Sx与脑区能量相冲突，形成了作为反6反恐惧的Sx6，他们往往不愿意承认自己恐惧，为此故意去从事英雄般的事业，虽然这看上去可能像8，但8是拥有真正的勇敢的内心，而Sx6的内心仍然是非常恐惧的，所以其非常渴望力量来战胜恐惧。"]
    }
    if (type == 'Sp6') {
        return ["关键词:温暖", "恐惧之罪", "6号的侧翼是5和7，所以可能会表现出5或7的表面特征，如果表现出5的特征过于明显则称为6w5,同理，7的特征过于明显则称为6w7，6号的整合解离方向是3和9，所以6号可能表现出向3和9变化的特征。6号作为围绕思维和安全需求的脑区隔离的类型，虽然有着丰富的思考，但与自己的脑区隔离，很难真正做到自己的思考，以基于某些前人或他人的理论或说法来进行思考，恐惧自身是错误的是邪恶的，希望确信自己是正义且正确的，往往他们会捍卫着主流的价值观或说法，因此容易被认为是非常理性的类型被误认为5号，他们内心有着捍卫他们所认可的价值观的激烈的情绪，又容易被误认为4号或8号，但548都是黑暗类型，而6号充满对光明与正义的追求，因为其恐惧黑暗，恐惧邪恶，恐惧错误，恐惧一切不正确的东西，想通过依附于某一权威的羽翼之下得到保护放弃自身的思考来应对安全感的焦虑，所以其是七原罪之外衍生的恐惧。6号自保型与其他6号差异巨大，他们追求着温暖，希望得到大家的关爱和保护，渴望得到家人的拥抱，喜欢呆在舒适安逸的地方，渴望没有敌人的环境。"]
    }
    if (type == 'So7') {
        return ["关键词:牺牲", "暴食之罪", "7号的侧翼是6和8，所以可能会表现出6或8的表面特征，如果表现出6的特征过于明显则称为7w6,同理，8的特征过于明显则称为7w8，7号的整合解离方向是5和1，所以7号可能表现出向5和1变化的特征。7号作为围绕思维和安全需求的脑区能量缺乏的类型，总是容易忽略安全感上的焦虑，狼吞虎咽般的追求着获取自身独特的愉悦，因此被赋予了七原罪之中的暴食。由于7号表面上偏向腹区，So与腹区能量相冲突，产生表面上的反7，So7并不会追求自身的快乐，而是追求牺牲自己帮助他人为自己带来的快乐，助人为乐这一词很好的体现了社群型7号的特征。"]
    }
    if (type == 'Sx7') {
        return ["关键词:易受暗示", "暴食之罪", "7号的侧翼是6和8，所以可能会表现出6或8的表面特征，如果表现出6的特征过于明显则称为7w6,同理，8的特征过于明显则称为7w8，7号的整合解离方向是5和1，所以7号可能表现出向5和1变化的特征。7号作为围绕思维和安全需求的脑区能量缺乏的类型，总是容易忽略安全感上的焦虑，狼吞虎咽般的追求着获取自身独特的愉悦，因此被赋予了七原罪之中的暴食。由于Sx与脑区的冲突，Sx7在7号中是最为特别的，其他7号都追求现世的快乐与成就，但Sx7追逐非世俗的梦想来忘却痛苦，拒绝触碰庸俗的现实。由于Sx7可能表现出更为明显的特征，导致错误的形成了7号是理想型的认知，实质上除了Sx7以外7号是非常现实的人格。"]
    }
    if (type == 'Sp7') {
        return ["关键词:家庭", "暴食之罪", "7号的侧翼是6和8，所以可能会表现出6或8的表面特征，如果表现出6的特征过于明显则称为7w6,同理，8的特征过于明显则称为7w8，7号的整合解离方向是5和1，所以7号可能表现出向5和1变化的特征。7号作为围绕思维和安全需求的脑区能量缺乏的类型，总是容易忽略安全感上的焦虑，狼吞虎咽般的追求着获取自身独特的愉悦，因此被赋予了七原罪之中的暴食。sp的自保需求和7号的暴食需求结合后，形成了最为现实主义以及机会主义的自保型7号人格，这一人格不会放过任何赚取利益的机会，像个推销员一样敏锐的在与他人的交谈中捕捉着商机，寻找着对方的弱点，是世俗意义上最为聪明的类型，或者说最为滑头的类型。"]
    }
    if (type == 'So8') {
        return ["关键词:同盟", "纵欲之罪", "8号的侧翼是7和9，所以可能会表现出7或9的表面特征，如果表现出7的特征过于明显则称为8w7,同理，9的特征过于明显则称为8w9，8号的整合解离方向是5和2，所以8号可能表现出向5和1变化的特征。8号作为围绕自身欲望和存在边界的腹区能量过剩的类型，有着很强的欲望，这种欲望会促使他们去破坏和无视社会规则，其与1号的区别就在于1号是秩序的守护者或建立者，而其是秩序的破坏者，因此被赋予七原罪的纵欲。8号社群型是一种叛逆者，他们愤世嫉俗，简单粗暴，坚韧而又粗鲁，友谊和同盟是他们的核心议题，与朋友同生共死打倒强权共赴胜利是他们最为渴望的事情。"]
    }
    if (type == 'Sx8') {
        return ["关键词:占有欲", "纵欲之罪", "8号的侧翼是7和9，所以可能会表现出7或9的表面特征，如果表现出7的特征过于明显则称为8w7,同理，9的特征过于明显则称为8w9，8号的整合解离方向是5和2，所以8号可能表现出向5和1变化的特征。8号作为围绕自身欲望和存在边界的腹区能量过剩的类型，有着很强的欲望，这种欲望会促使他们去破坏和无视社会规则，其与1号的区别就在于1号是秩序的守护者或建立者，而其是秩序的破坏者，因此被赋予七原罪的纵欲。Sx8即8号性本能型是所有类型中最为叛逆的最为反社会的类型，他们有着极强的占有欲和吸引力，这种占有欲并非对某种物品，而是对他人的占有欲，对场面的占有欲，渴望把整个场面的注意力都吸引到自己身上来。"]
    }
    if (type == 'Sp8') {
        return ["关键词:满足感", "纵欲之罪", "8号的侧翼是7和9，所以可能会表现出7或9的表面特征，如果表现出7的特征过于明显则称为8w7,同理，9的特征过于明显则称为8w9，8号的整合解离方向是5和2，所以8号可能表现出向5和1变化的特征。8号作为围绕自身欲望和存在边界的腹区能量过剩的类型，有着很强的欲望，这种欲望会促使他们去破坏和无视社会规则，其与1号的区别就在于1号是秩序的守护者或建立者，而其是秩序的破坏者，因此被赋予七原罪的纵欲。Sp8即8号自保型，是所有8中最会隐藏自己散发出的反社会气息，他们是最能在历史剧变中生存下来的类型，他们很容易认同【善良和良好的意图根本不存在】，他们会像社会主义者一样向他人慷慨的提供保护，但真正目的是借此控制和奴役他人，使他人无法威胁到他们自身。"]
    }
    if (type == 'So9') {
        return ["关键词:参与/归属", "怠惰之罪", "9号的侧翼是8和1，所以可能会表现出8或1的表面特征，如果表现出8的特征过于明显则称为9w8,同理，1的特征过于明显则称为9w1，9号的整合解离方向是3和6，所以9号可能表现出向3和6变化的特征。9号作为围绕自身欲望和存在边界的腹区能量隔离的类型，可能会看似有着很强烈的理想的表现，实则只是从他人那里借来的理想，9号在灵性上是迟钝的，可能日复一日的做着相同的事不求改变，虽然他们可能会不求回报的服务于他人，但这根本上是一种灵性上的怠惰，因此被赋予了七原罪的怠惰之名。由于社群本能与腹区能量相冲突，形成作为反9的So9即社群9，与9号的怠惰原罪相反，So9是最为勤奋的类型，由于他们非常渴望融入群体，又因为灵性上的怠惰不容易感知到自身已经融入群体，所以他们经常会表现的积极奉献，勤奋工作，成为一个工作狂为争取集体的认可。"]
    }
    if (type == 'Sx9') {
        return ["关键词:共生", "怠惰之罪", "9号的侧翼是8和1，所以可能会表现出8或1的表面特征，如果表现出8的特征过于明显则称为9w8,同理，1的特征过于明显则称为9w1，9号的整合解离方向是3和6，所以9号可能表现出向3和6变化的特征。9号作为围绕自身欲望和存在边界的腹区能量隔离的类型，可能会看似有着很强烈的理想的表现，实则只是从他人那里借来的理想，9号在灵性上是迟钝的，可能日复一日的做着相同的事不求改变，虽然他们可能会不求回报的服务于他人，但这根本上是一种灵性上的怠惰，因此被赋予了七原罪的怠惰之名。Sx9即性本能9通过与他人融合共生体验存在感，他们可能极度的违背了自己的需求去满足自己的融合对象的需求，甚至自己已经饱受摧残仍然注意不到自身的需求。"]
    }
    if (type == 'Sp9') {
        return ["关键词:食欲", "怠惰之罪", "9号的侧翼是8和1，所以可能会表现出8或1的表面特征，如果表现出8的特征过于明显则称为9w8,同理，1的特征过于明显则称为9w1，9号的整合解离方向是3和6，所以9号可能表现出向3和6变化的特征。9号作为围绕自身欲望和存在边界的腹区能量隔离的类型，可能会看似有着很强烈的理想的表现，实则只是从他人那里借来的理想，9号在灵性上是迟钝的，可能日复一日的做着相同的事不求改变，虽然他们可能会不求回报的服务于他人，但这根本上是一种灵性上的怠惰，因此被赋予了七原罪的怠惰之名。Sp9即自保型9，是最为接近9号的怠惰的字面意义的9，【我吃，故我在】这句话很好的表现了Sp9的特点，他们可以日复一日的沉浸在一成不变的吃喝拉撒睡中不去谋求改变，就像一个躺在沙发上毫无兴致的看着索然无味的电视节目而不会想着切换频道。"]
    }
    return [" ", " ", " "]
}