const specialChance = 0.01
const results = [
  {
    msg: '真正的精英是努力與底層對話，而假精英才反復證明自己是仙人。',
    link: 'https://www.plurk.com/p/ovxg9k',
  },
  {
    msg: '許多事情是我們無能為力的。',
    link: 'https://www.plurk.com/p/ovvfz5',
  },
  {
    msg: '這都是虛妄！那都只是你的認知在作祟！你以為很不吉利那都只是你自己的執念！',
    link: 'https://www.plurk.com/p/ovsrps',
  },
  {
    msg: '這個圈子需要的不是大家在那邊長舌八卦，而是需要大家拿出作品來證明自己在這圈子內。',
    link: 'https://www.plurk.com/p/ovr7q6',
  },
  {
    msg: '這件事情真的就是你有努力就會有進步。',
    link: 'https://www.plurk.com/p/ovpkxx',
  },
  {
    msg: '隨便他們吧，畢竟我把生活過好，我不要看他們我就會過得很好。',
    link: 'https://www.plurk.com/p/ovn8n4',
  },
  {
    msg: '救自己比較快。先救自己離開這種自怨自艾的環境吧。',
    link: 'https://www.plurk.com/p/ovn8n4',
  },
  {
    msg: '每個人的口味跟品味都不同，不要妄想要去教育誰。',
    link: 'https://www.plurk.com/p/ovkm6e',
  },
  {
    msg: '大家應該都要知道自己到底要什麼、自己的短期中期長期目標到底是什麼，清楚定位自己，才不會永遠都在認知與現實的巨大落差中受傷。',
    link: 'https://www.plurk.com/p/ovkm6e',
  },
  {
    msg: '我要心平氣和<br>1 + 1 = 5<br>1 + 1 = 5<br>1 + 1 = 5',
    link: 'https://www.plurk.com/p/ovit4k',
  },
  {
    msg: '生活就是不停的損壞，而且只有損壞。',
    link: 'https://www.plurk.com/p/p272vr',
  },
  {
    msg: '我只是想說有些地方存在就是地獄，你什麼都不用做他就是地獄。',
    link: 'https://www.plurk.com/p/oyufgn',
  },
  {
    msg: '有些事其實也不是什麼公無渡河，公竟渡河的問題，而是這條河到底在哪，我們要渡過的是什麼河。',
    link: 'https://www.plurk.com/p/oxml13',
  },
  {
    msg: '在很多狀況下，大家所喜歡的跟我想做到的是兩回事，我寫過也會寫大家所喜愛的那種樣子，但我不想要，因為我知道我不在那個盡頭，我沒有那個餘裕也沒有那個志向。多少人和我說過要我不要這樣寫下去，他們可能是善意，但所有善意都鋪往地獄，而這個地獄是只屬於我一個人的煉獄。',
    link: 'https://www.plurk.com/p/ox5v3q',
  },
  {
    msg: '何況有些垃圾說出來的話，本就是垃圾話，根本不值得聽的，不要把所有評價都認真背在自己身上，因為有些人給評價的時候，不知道你經歷過什麼、不知道你想做什麼，也不認識你。',
    link: 'https://www.plurk.com/p/ox5v3q',
  },
  {
    msg: '每個人都在沒有蜜的地方尋求蜜液，怪其他人搶光了蜜、怪其他人誤導此處有蜜、怪罪其他人是輕鬆的，從來不認為自己是不是需要前進。',
    link: 'https://www.plurk.com/p/ox5v3q',
  },
  {
    msg: '因為就我看來，只要確定了自己的路，悶著頭往前走就對了，也許會自我質疑、也許會痛苦，但至少所有後果都是自己選擇的。寫作也是一樣，沒有人能讓你放棄寫作，要不要寫是自己選擇的，寫很好，不寫也不會怎麼樣，但不要因為他人對你的評價而停止前進，因為其他人永遠不會為你的人生負責。',
    link: 'https://www.plurk.com/p/ox5v3q',
  },
  {
    msg: '雖然你不看總體比例跟結構問題，但你一定是對的，因為除了你之外的人都是社會的毒瘤人類的瘡疤，你一定要加油，到有其他人懂你的那天，我想到那天我埋下的廚餘就能變成石油了，等到那天我也能成為石油王的。',
    link: 'https://www.plurk.com/p/ox3lr4',
  },
  {
    msg: '其實人生也不用那麼乾淨啦，有時候得過且過就算了......',
    link: 'https://www.plurk.com/p/owzvm4',
  },
  {
    msg: '其實我們人的一生也不需要這麼輕啦。',
    link: 'https://www.plurk.com/p/owyv6q',
  },
  {
    msg: '我每次看到有些人什麼都批什麼都評，也不看看自己什麼樣子有沒有那個水準，每次都很想問你是認真的嗎。<br>真的是小ㄐㄐ還每天都想買特大號保險套，以為自己能裝屌結果裝的都是屁。',
    link: 'https://www.plurk.com/p/owwezs',
  },
  {
    msg: '我是成熟的社會人了<br>我不會因為這種小事生氣的<br>默念十次',
    link: 'https://www.plurk.com/p/owvdxa',
  },
  {
    msg: '大家活在這個世界上都在追求一種認同感，但許多時候追求認同感的過程跟方法會讓人覺得很不認同。',
    link: 'https://www.plurk.com/p/owuq7y',
  },
  {
    msg: '看他的作品需要對莫可奈何的悲劇這件事情有一點共感跟體悟，就，至少你是個需要有同情心的人，讀者必須了解他裡面很多故事都只是某一個地方的小齒輪嘎錯了地方，所以導致一連串的失控，他的作品也不是說什麼邪惡最後終將會被消滅，而是很多時候有些地方是曖昧不清的，是一個介於，他不是不好，但就是偏執讓他們走上了這樣的道路。',
    link: 'https://www.plurk.com/p/owts9a',
  },
  {
    msg: '有些東西就是沒有看到的時候你跟他說他們也看不出來，有些東西吃不出差別的話你怎麼跟他說他也覺得這哪有差。<br>很多東西勉強不來我也沒有要勉強的意思，就，大家加油喔。',
    link: 'https://www.plurk.com/p/owt8r7',
  },
  {
    msg: '許多事情我覺得是要不在意之後才能夠客觀的看清自己。例如我們就是缺愛，才會在尋找愛的路上跌跌撞撞，屢屢受挫。你如果只把對方當獵物，對方當然會選擇逃跑，沒有人想成為獵物。對方不是獵物，也少把自己當成獵手。<br>愛情有時候像陷阱，但彼此之間不是獵手與獵物的關係，走到最後誰不是互相共存互利共生？',
    link: 'https://www.plurk.com/p/owi203',
  },
  {
    msg: '健康的關係真的不是互相依存，而是就算有了伴侶，彼此也能有自己的世界，自己的社交自己的空間。',
    link: 'https://www.plurk.com/p/owh1jk',
  },
  {
    msg: '你的求生意志呢',
    link: 'https://www.plurk.com/p/owewqu',
  },
  {
    msg: '語言文字是有意義的',
    link: 'https://www.plurk.com/p/owdvh3',
  },
  {
    msg: '有人問我喜歡卡娜赫拉不會覺得害羞嗎<br>我的回答是，我又不偷不搶不拐不騙，有什麼好害羞的。我花錢買自己喜歡的東西，我又不是花錢去嫖去賭，我有什麼不好意思的。',
    link: '',
  },
  {
    msg: '沒有雷霆手段，你怎麼好意思有什麼菩薩心腸？<br>你的菩薩心腸要是真的幫助了誰那當然皆大歡喜，但最有可能的結果是你做了個菩薩，對方只把你當個破木頭東砍一刀西砍一刀最後拿去當柴燒。<br>你怎麼會認為真誠與正直會幫助你渡過所有難關，最有可能的是你身邊所有的人都被拖下水，你想滿足自己的真誠心，但所有人都被你的真誠拖進地獄裡。',
    link: 'https://www.plurk.com/p/ow3a08',
  },
  {
    msg: '考驗演技的時刻到了<br>只要有心，隨時隨地都是你的舞台',
    link: 'https://www.plurk.com/p/ow32co',
  },
  {
    msg: '為你哭得最大聲的不一定是跟你有莫逆的交情，他可能是你的冤親債主。他不一定知道自己是，他可能認為自己只是抒發情緒，但是他為你哭得越慘，你掉地獄的速度就越快。',
    link: 'https://www.plurk.com/p/ovxyuz',
  },
  {
    msg: '錯在只有想給他幫助的心，但沒有辦法做出正確的行為，因為我們都同樣軟弱同樣脆弱，而且面對許多事情其實是無能為力的<br>你看未來的你像是能做出正確選擇的樣子嗎',
    link: 'https://www.plurk.com/p/ovvfz5',
  },
  {
    msg: '我一直很想給自己一個修復期，例如七天十天，那七天十天內我就認真的悲傷，過後仔細地將這些情緒整理好，將那些悲傷通通整理堆疊到一起，接著繼續生活，像是這些沒有發生過一樣地生活。',
    link: 'https://www.plurk.com/p/ozzs9v',
  },
  {
    msg: '也許有些事情就是要像這樣言語說不出的時候，才能突然明白。',
    link: 'https://www.plurk.com/p/ozzs9v',
  },
  {
    msg: '我如果重複某些題目，可能是因為我被某些過去的東西困住了，而我還需要那些「東西」，陪我一起走出那個淵藪',
    link: 'https://www.plurk.com/p/ozzs9v',
  },
  {
    msg: '「這些選擇每一個都不是你選的，你不用承擔後果。」<br>每個人有不同的地獄，我在我的地獄裡面拚死掙扎，最後出來了，你們看到了這個我，卻沒有看過苦苦掙扎時候的我。',
    link: 'https://www.plurk.com/p/ozzs9v',
  },
  {
    msg: '──有些人將自己的人生交給神明後一團亂，他還是希望其他人也將自己的人生交給神明。我不相信那些東西。我也不相信自己。',
    link: 'https://www.plurk.com/p/ot43ok',
  },
  {
    msg: '嘻嘻哈哈久了，有時候也覺得自己是瘋癲的。',
    link: 'https://www.plurk.com/p/ot43ok',
  },
  {
    msg: '為了證明我可以，我寫了一大堆我自己不想寫的東西。為了證明我可以，我居然就這樣煎熬到了現在。我的人生都在為了證明給別人看，但其實別人怎麼樣根本與我無關。我本來就不用證明給任何人看。',
    link: 'https://www.plurk.com/p/ot43ok',
  },
  {
    msg: '你特別要證明這件事情給他們看的時候，就代表你很在意他們，你根本不用證明給他們看。他們對我們來說就不重要，那些人有一個算一個就算全都在我面前出事，我眉頭也不會皺一下。他們不會為了我的人生糾結，我也沒有必要一直糾結在他們身上。我們不用做任何事情就為了證明給他們看，你想做什麼證明給他們看，就代表你還在意。',
    link: 'https://www.plurk.com/p/ot43ok',
  },
  {
    msg: '我不信神佛，因為我看到太多愚昧的人，認為神佛可以幫他們解決一切，事情做成了是神佛的功勞，事情失敗了是自己的業障。許多人認為自己所遭遇到的一切是上天給予的考驗，所以將一切都扔給神佛，希冀神佛可以保佑他們，彷彿祈禱就是線上遊戲的每日簽到累積點數一樣，積滿多少句佛號或者多少禱告的功德就可以解除多少此生的業障，但現實並不是這個樣子的。',
    link: 'https://www.plurk.com/p/ov2btj',
  },
  {
    msg: '現實生活並不是你唸多少佛號，累積多少個小花印章就能快樂渡過的，我們有災有厄，生活有快樂有痛苦。快樂的時候沒有多少人會珍惜快樂的生活，但痛苦的時候時間彷彿像是被按了緩速一樣，每過一點都刻骨銘心。',
    link: 'https://www.plurk.com/p/ov2btj',
  },
  {
    msg: '在我人生中最脆弱的時候我也有求神拜佛過，想當然沒有任何回應，所以我成長的過程中便了解到求神拜佛，不如自助天助。我也不信天助，我知道自己最痛苦的時候是如何一步一步慢慢走出來的，所以即使有天助，對我來說，如果我自己不踏出那最關鍵的第一步，我永遠也走不出來。',
    link: 'https://www.plurk.com/p/ov2btj',
  },
  {
    msg: '許多經歷過痛苦的人會對他人的痛苦表現出不以為然的態度。但痛苦這種事是這樣的，只有自己經歷過的版本，才是最真實的版本，其他的都是水中月，我們能夠看到，也知道它可能是什麼情境，但我們體會不到水中的月光究竟有多麼冷。偶爾會覺得，人真的是經驗的動物，但每個人對於經驗的認知與面對的方式又各有不同。有些人生活優渥，所以對他人的痛苦毫無所覺；有些人歷經苦痛，所以認為他人的痛苦不值一提，這其實是不一樣的，但就結果來說，卻又是相同的。',
    link: 'https://www.plurk.com/p/ov2btj',
  },
  {
    msg: '任何事情，求神拜佛還不如自己踏出第一步。如果沒有要開始的打算，就算冥冥之中真的有個神祕力量給你多少契機，你也不會朝目標前進一步的。',
    link: 'https://www.plurk.com/p/ov2btj',
  },
  {
    msg: '這整件事情，其實和我手上沒有現金就會焦慮是一樣的，因為我覺得我失去許多我可以支配的東西，但其實不受控地攜帶累贅的事物，這個行為本身就是一種失控。我的人生一直都處在一個失控的狀況，但我總以為自己所有失控的行為，都是在追求自己的可控。也就是我掌握越多我認為我能支配的事物，我其實就離控制自己越遠。',
    link: 'https://www.plurk.com/p/opkw4o',
  },
  {
    msg: '我意識到這件事不代表我能夠解決，但我至少意識到，並且開始試著解決了。',
    link: 'https://www.plurk.com/p/opkw4o',
  },
  {
    msg: '許多事情並非理論就能解釋。例如恐懼，以及要如何將破碎的自己整理回一個完整的個體。所有事情都會在時間過去之後，我們才能試著拼拼湊湊地將那些無以名狀的事物一一指認出來，但許多事情並不是簡單地說我知道了就能夠將其寫出來的。',
    link: 'https://www.plurk.com/p/onpxry',
  },
  {
    msg: '他們雖然生命壓抑，但許多人真的生命精彩，與人連結也好，清水形而上也罷，我知道對他們自己來說過程很痛苦，但至少寫出來每一個人都有每一個人的精彩，雖然大家想看的是他們如何在這個壓抑的過程中，找到自己的路，但是他們的路很漫長，很豐富。',
    link: 'https://www.plurk.com/p/onpxry',
  },
  {
    msg: '現在的我當然能告訴你們一些因為我小時候發生了什麼事，但這沒什麼必要，因為事情已經發生了，它就在那裡。而且是我已經都發生完了的人生，實際發生在我身上的歷史。去追究為什麼發生已經沒有太大意義，因為我就是這樣了。',
    link: 'https://www.plurk.com/p/onu7v7',
  },
  {
    msg: '母親和我說了一句話，我現在仍是深以為然，「這個世界是為了正常人而設計的，所以如果覺得痛苦，就努力讓自己成為正常人。」<br>但多年後我也和我母親說了，「這個世界不為任何人而設計，它只是對我們比較殘忍而已。」沒有說的則是，「但他們也沒有對我們手下留情的必要，我只需要他們一視同仁，但顯然沒有。」',
    link: 'https://www.plurk.com/p/onu7v7',
  },
  {
    msg: '我還是習慣不喜歡自己，但最近，偶爾我也開始試著喜歡自己。',
    link: 'https://www.plurk.com/p/onz3ds',
  },

  {
    msg: '我像是在三途川堆石頭塔一樣，看著這座塔要完成了，接著就坍塌了。',
    link: 'https://www.plurk.com/p/ooeeag',
  },

  {
    msg: '看著那些地獄的時候，偶爾我會覺得整個世界都是地獄組成的，但其實也只是因為我一直凝視著深淵，才會認為整個世界充滿痛苦。但那是對我而言，對那些人而言，這個世界就是地獄。<br>在這些過程中我也發現許多人的地獄只是他自己將自己囚禁在這個地獄裡，我真的無能為力。我沒有辦法拯救每一個人，更沒有辦法將一個甘願待在地獄中的人拉出來（無能為力與甘願還是有差的）。',
    link: 'https://www.plurk.com/p/ooeeag',
  },

  {
    msg: '許多時候我覺得這整件事情都是一個巨大的隱喻，有時候慈悲心是蜘蛛絲，但是我們分不清楚自己究竟是垂絲的神佛，還是抓蛛絲的惡鬼。我們多以為自己是神佛，但多數時候，我們與惡鬼之間的分別只在於站的位置不同。我們以為自己的行為是善舉，但其實我們在推壞一堵一堵的牆。後來我才理解，有的時候站在旁邊看，也是一種善意，但這種善意要成立的要素實在太多，我個人還是認為與其之後後悔沒有伸出援手，不如伸出援手之後再後悔。',
    link: 'https://www.plurk.com/p/ooeeag',
  },

  {
    msg: '我是什麼時候開始懂得拒絕將自己的痛苦繼續揹在身上的？我的意思並不是痛苦不在了，曾經遭遇過的傷害與痛苦不會消失，因為那些事就已經是發生過的歷史了，那些事件已經是我們的年輪了，然而我學會了拒絕自己將那些過去全都揹在自己身上。',
    link: 'https://www.plurk.com/p/ooeeag',
  },
  {
    msg: '我覺得許多人該做的是這樣的練習。拒絕被糟糕的對待、拒絕做自己不想做的事、拒絕負責自己不該揹的責任、拒絕將自己放在痛苦裡，但這是很漫長的一條路。我們常常會講到培力，我覺得其實這件事情就是慢慢地將自己照顧好，到某一個時刻，你發現自己有能力、有勇氣對那些不屬於自己的事物提出拒絕的自由。',
    link: 'https://www.plurk.com/p/ooeeag',
  },
  {
    msg: '一個人變成那樣可能有很多成因，原生家庭，後來的家庭，生活遭遇的種種因素，人本身的個性，當遭遇的不幸遠超過排解的速度，或者超出當下自己能承受的程度，那個人就會不正常，而正常雖然有種理想型存在，不正常卻沒有。',
    link: 'https://www.plurk.com/p/p1w8wl',
  },
  {
    msg: '......我無法肯定地給你否定的答案。',
    link: 'https://www.plurk.com/p/p1swsu',
  },
  {
    msg: '很久以後我問我媽他覺得那樣正常嗎，他說做善事的時候不會想那麼多，人做善事其實都是為了自我滿足，但是住在裡面的小孩應該很痛苦',
    link: 'https://www.plurk.com/p/p1pcde',
  },
  {
    msg: '有些時候我們迷失方向，找不到路可以走的時候，會誤以為誠實是唯一解。是，誠實是唯一解，但不是誠實的面對那些事情，而是面對自己的困頓與苦惱，傷心與痛苦。',
    link: 'https://www.plurk.com/p/p1lhgv',
  },
  {
    msg: '很多時候我還是覺得，讓他自己找到路才走得出來，人推著他走，只是越走越慌亂而已。',
    link: 'https://www.plurk.com/p/p1lhgv',
  },
  {
    msg: '追求快樂這件事，某程度上意味著我會迴避痛苦，但面對痛苦最痛苦的是它的不可迴避性，也就是無論我們再怎麼努力，快樂與痛苦永遠也無法互相抵銷，而是各自獨立存在的，我們能做的也不過就是在每一次快樂的當下盡情享受快樂，而且盡一切努力延長快樂，或者找新的快樂。',
    link: 'https://www.plurk.com/p/ooyppm',
  },
  {
    msg: '耽溺快樂這件事。我知道這不對，短暫且頻繁的快樂會消耗我的時間且消磨我的意志力',
    link: 'https://www.plurk.com/p/ooyppm',
  },
  {
    msg: '以前我曾寫過我要求自己成為自己的主人，但有時候我會想，其實我也沒那麼在意誰是我自己的主人，我只是希望自己能夠平靜地面對一切。',
    link: 'https://www.plurk.com/p/ooyppm',
  },
  {
    msg: '長到這個歲數，無論是看自己身邊的人，或者是看自己，有時候會開始恍惚，意識到我們成年以後其實都是在重複幼時所遭遇到的心理創傷，或者是我們追求的其實是回到幼時某一個時間點，重複那個受傷的自己，並且隱隱期待自己可以重複那個過程時，能有不一樣的選擇，得到不一樣的命運。<br>然而這件事很難。難的點並非我們無法真正回到過去拯救受傷的自己，而是我們很難去意識到我們是在重複自己幼時的創傷，而每重複一次那些創傷，其實都是一次提問，我們需要的其實是不一樣的答案──一個能讓我們開始復原的回答。只是我們每一次都會因慣性而做出相同的回答。所以我們既糾結又痛苦，一次又一次堆著石頭塔，最後作答的時候卻自己親手將石塔摧毀，我們期待的是石塔堆成的那天，也希望自己不要當那個將石塔摧毀的人。',
    link: 'https://www.plurk.com/p/opbthw',
  },
  {
    msg: '有的時候看到別人說我能同理他人，其實我想的是，也許那個同理只是因為我和大家並沒有生死交關的牽扯，所以我有站在旁邊聆聽的餘裕。僅此而已。我只是知道，我在聽那些故事時是擁有餘裕的那方。我覺得許多人應該也要能夠理解，許多事情你能夠說一些無關痛癢的話，只是因為你有餘裕而他人沒有。',
    link: 'https://www.plurk.com/p/opbthw',
  },
  {
    msg: '可以決定自己甚麼不要才是自由的真諦，因為你可以決定甚麼要什麼不要才顯得自由的可貴。',
    link: 'https://www.plurk.com/p/p28ir4',
  },
  {
    msg: '經過此事可證，頻繁地發生生命經驗外的事情有助於人們理解他者的痛苦（被爸爸毆打）',
    link: 'https://www.plurk.com/p/p19cfr',
  },
  {
    msg: '微笑看著太陽前進<br>眼睛會灼傷（認真',
    link: 'https://www.plurk.com/p/p0iank',
  },
  {
    msg: '我不太會為自己辯駁，可是也沒有站著挨打的習慣。我當然可以跟人手牽著手圍著他唱沒有關係不要在意，但我為什麼要？今天動不動就扣一個帽子給我誰受得了。另外，我想，你是真的沒看過我咄咄逼人是什麼樣子。我一向都是知進退的人，但我是知道怎麼進到對方無路可退那一種。',
    link: 'https://www.plurk.com/p/p0jke8',
  },
  {
    msg: '兩邊在我眼裡都很內個，說支持哪邊都是對自己的棄捨。',
    link: 'https://www.plurk.com/p/p0keuu',
  },
  {
    msg: '我常常說沒什麼東西好寫，但是那是選擇不寫，不是真的沒東西寫。如果照某些人的標準來寫的話隨便就過十萬字，但裡面會充滿我的各種過去，那些資訊沒有經過篩選、重製、聚焦，只是單純的反芻過往的所有經驗，我不斷地重複我最痛苦的記憶，但沒有對任何人有幫助，如果可以我建議不要這樣寫，因為這樣寫只會傷害自己，在腦中一次又一次地刺傷自己，你是不斷重複你受傷的那個瞬間，逃不出來，然後你還說那是你自願重複那些傷痛。重複傷痛可以，一次兩次就夠了。',
    link: 'https://www.plurk.com/p/p0lg2e',
  },
  {
    msg: '人死掉之後就失去了對自己狀況的話語權，所以我一直努力不要讓其他人掌控自己是什麼樣子的人的話語權。<br>要認識一個人，與其從別人口中認識他，聽一千遍一萬遍他的八卦，我更傾向於自己跟那個人接觸。我討厭某些人是有原因的，同樣的，我不討厭某些人也是有原因的。',
    link: 'https://www.plurk.com/p/p0vux1',
  },
  {
    msg: '司機白目就是白目，遷到UBER去就是比較有錢的白目而已。<br>應對比較得體的白目對我來說還是白目啊。',
    link: 'https://www.plurk.com/p/p0wlm1',
  },
  {
    msg: '天才與庸才都無法理解彼此的想法，但在天才跟庸才的眼中只有一件事情非常平等，痛苦都是相似的<br>在追求才華到頂尖的過程，有許多變態的副產物，這些變態的副產物，無關於智商高低，無關於才華低劣，就是人性在面對類似抉擇（程度高低有所差別）時產生的心理扭曲。這些痛苦經緯密切地織在一起，最後全都糾在一起。',
    link: 'https://www.plurk.com/p/p10c0q',
  },
  {
    msg: '喜歡他的作品的人需要對無可奈何的悲劇這件事有一點共感與體悟。至少讀者是個需要有些微同理心的人，才能抓到他劇情裡面幽微的那個點，我們才能理解在他的故事中，許多人只是因為某些齒輪對錯了地方，所以一切都錯位了，他的故事中惡並非就是純粹的惡，並不是像傳統王道漫畫一樣，惡就是徹底的惡，而是在劇情走到最後時，我們會發現惡的成因，許多時候原自於荒謬的錯位。',
    link: 'https://www.plurk.com/p/p1beix',
  },
  {
    msg: '每次當有認識的人沮喪，我就會說你看看我，或者你看看＿＿＿，我們接受的惡意毫無道理。是有人詛咒他別再出書的惡意。我並不想拿這種比較級的痛苦來說服大家沒有得獎並不重要，而是看看我們，即使沒有得獎也仍在寫著。為甚麼？因為我知道自己是為了甚麼而寫、而持續的。得不得獎不是不重要，一時的成敗也難免令自己沮喪，只是對自己而言，重要的究竟是甚麼。',
    link: 'https://www.plurk.com/p/p1cclo',
  },
  {
    msg: '這個世界的邏輯就是當人用一些理論詞彙堆積起一堆幹話時，你不能回罵，因為不合規矩。',
    link: 'https://www.plurk.com/p/p1cclo',
  },
  {
    msg: '每天都要分清楚什麼是想吃什麼是必須吃，想吃的慾望好雜亂，而且他每天都在攻擊我的村莊',
    link: 'https://www.plurk.com/p/p11wi2',
  },
  {
    msg: '人類在面對超越自己能接受的現實太多的現實時，只剩下笑了XDDDDDDDDDDDDDDDD',
    link: 'https://www.plurk.com/p/p15ylo',
  },
  {
    msg: '我為什麼討厭宗教，就是因為我覺得每一個宗教其實是一種精神毒品，人很容易將自己的一切都交給宗教，說好聽是一切交給上蒼安排，上蒼這麼做一定有他的用意，但說難聽就是一種放棄。',
    link: 'https://www.plurk.com/p/p17j0l',
  },
  {
    msg: '不要讓某些人決定你的價值，沒有誰離開了誰就活不下去的這種事情，所有試圖貶抑你的，都只是因為他們不貶抑你們就找不到自己存在的價值。',
    link: 'https://www.plurk.com/p/p167xq',
  },
  {
    msg: '任何人全然地依靠另外一個人過活都是不健康的，許多人是這樣的，你們也許最開始被人傷害，所以後面發生了許多事情，最後你卻不斷重複這個被傷害的連鎖迴圈，你在這個迴圈裡很痛苦，但你們也甘願待在這個迴圈裡，因為在這個迴圈裡面你們會得到自己需要的東西，我完全可以理解這個狀態，但這個狀態並不是長久之計，你們無法永遠待在這個創傷裡面用自己去換自己需要的東西。',
    link: 'https://www.plurk.com/p/p167xq',
  },
  {
    msg: '大家都要懂得在自己的生命中拉起線，開始拒絕讓那些糟糕的人事物踏進自己的生命裡。那些原本美好快樂的事情，變成痛苦的時候，也要懂得將那些痛苦，從自己的生命中剝除。',
    link: 'https://www.plurk.com/p/p167xq',
  },
  {
    msg: '撒出去的藥，就讓他撒出去就好了啊',
    link: 'https://www.plurk.com/p/p161g1',
  },
]

function setMessage(msg) {
  document.getElementById('message').getElementsByTagName('p')[0].innerText =
    msg
}

function onDraw(element) {
  setMessage('求籤中......')
  element.className = 'drawing'
  element.setAttribute('disabled', true)

  const timeout = Math.round(Math.random() * 4) * 1000 + 3050
  const resultIndex = Math.floor(Math.random() * results.length)

  gtag('event', 'draw_stick', {
    timeout,
    resultIndex: resultIndex,
    ...results[resultIndex],
    prevAction: sessionStorage.getItem('prevAction'),
    prevResult: sessionStorage.getItem('prevResult'),
  })
  sessionStorage.setItem('prevAction', 'draw_stick')
  sessionStorage.setItem('prevResult', results[resultIndex].msg)

  setTimeout(function () {
    element.className = 'disabled'
    setMessage('請擲茭')
    const beiElement = document.getElementById('bei-set')
    beiElement.className = 'bei0'
    beiElement.removeAttribute('disabled')
    window.resultIndex = resultIndex
  }, timeout)
}

function bobei() {
  setMessage('擲茭中......')
  const element = document.getElementById('bei-set')
  element.className = 'gif'
  element.setAttribute('disabled', 'true')

  const timeout = Math.round(Math.random() * 1500) + 3000
  const rand = Math.random()
  const p = (1 - specialChance) / 4
  let bei,
    message,
    pass = false
  if (rand < specialChance) {
    bei = 4
  } else if (rand < specialChance + p) {
    bei = 0
  } else if (rand < specialChance + p * 2) {
    bei = 1
  } else if (rand < specialChance + p * 3) {
    bei = 2
  } else {
    bei = 3
  }

  gtag('event', 'bo_bei', {
    timeout,
    rand,
    bei,
    prevAction: sessionStorage.getItem('prevAction'),
    prevResult: sessionStorage.getItem('prevResult'),
  })
  sessionStorage.setItem('prevAction', 'bo_bei')
  sessionStorage.setItem('prevResult', bei)

  if (bei === 1) {
    message = '笑杯，請按籤筒重新求籤'
  } else if (bei === 3) {
    message = '蓋杯，請按籤筒重新求籤'
  } else if (bei === 4) {
    message = '立杯，請觀看以下籤詩'
    pass = true
  } else {
    message = '允杯，請觀看以下籤詩'
    pass = true
  }

  setTimeout(function () {
    element.className = `bei${bei}`
    setMessage(message)

    if (pass) {
      renderResult(parseInt(window.resultIndex))
    } else {
      enableButton()
    }
  }, timeout)
}

function onRestart() {
  enableButton()
  document.getElementById('result').className = 'hidden'
  document.getElementById('end').className = 'hidden'
  document.getElementById('bei-set').className = ''
  document.getElementsByClassName('container')[0].scrollTo(0, 0)
  setMessage('請取籤')
  gtag('event', 'click_restart', {
    prevAction: sessionStorage.getItem('prevAction'),
    prevResult: sessionStorage.getItem('prevResult'),
  })
  sessionStorage.setItem('prevAction', 'click_restart')
  sessionStorage.removeItem('prevResult')
}

function enableButton() {
  const button = document.getElementById('draw-button')
  button.removeAttribute('disabled')
  button.className = ''
}

function renderResult(resultIndex) {
  const element = document.getElementById('result')
  const linkElement = document
    .getElementById('feedback')
    .getElementsByClassName('tooltip')[0]
  const { msg, link } = results[resultIndex]
  element.getElementsByTagName('p')[0].innerHTML = msg
  element.className = ''

  if (link != undefined) {
    linkElement.className = 'tooltip'
    linkElement.children[0].href = link
    linkElement.children[1].innerText = link
  } else {
    linkElement.className = 'tooltip collapsed'
    linkElement.children[0].href = ''
    linkElement.children[1].innerText = ''
  }

  setTimeout(function () {
    document.getElementById('end').className = ''
  }, 500)
}

function getResultMsg() {
  return document.getElementById('result').getElementsByTagName('p')[0]
    .innerText
}
function getSourceLink() {
  return document
    .getElementById('feedback')
    .getElementsByClassName('tooltip')[0].children[0].href
}
function sendFeedBack(positive) {
  const msg = getResultMsg()
  const reaction = positive ? 'like' : 'dislike'
  gtag('event', 'click_send_feedback', {
    reaction,
    msg,
    prevAction: sessionStorage.getItem('prevAction'),
    prevResult: sessionStorage.getItem('prevResult'),
  })
  sessionStorage.setItem('prevAction', 'click_send_feedback')
  sessionStorage.setItem('prevResult', reaction)
}

function viewSource() {
  const link = getSourceLink()
  gtag('event', 'click_view_source', {
    msg: getResultMsg(),
    link,
    prevAction: sessionStorage.getItem('prevAction'),
    prevResult: sessionStorage.getItem('prevResult'),
  })
  sessionStorage.setItem('prevAction', 'click_view_source')
  sessionStorage.setItem('prevResult', link)
}
