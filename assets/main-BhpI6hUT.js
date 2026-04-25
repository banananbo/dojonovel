import{a as e,o as t,r as n,s as r,t as i}from"./jsx-runtime-PSrYrKMl.js";var a=r(t(),1),o=e(),s=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},c=(e=>e?s(e):s),l=e=>e;function u(e,t=l){let n=a.useSyncExternalStore(e.subscribe,a.useCallback(()=>t(e.getState()),[e,t]),a.useCallback(()=>t(e.getInitialState()),[e,t]));return a.useDebugValue(n),n}var d=e=>{let t=c(e),n=e=>u(t,e);return Object.assign(n,t),n},f=(e=>e?d(e):d),p=`scene_danchi_morning`,m=`loc_danchi`,h={bgmVolume:.4,seVolume:.8,voiceVolume:.8,textSpeed:40,autoMode:!1,fullscreen:!1},g=`scenes:
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_left_danchi
            value: false
          next_scene: scene_danchi_intro
        - condition:
            negate: true
            has_item: item_candy
          next_scene: scene_danchi_return_obachan
        - condition: null
    child_scenes:
      - id: scene_danchi_intro
        characters:
          - character_id: char_hero
            position: left
            expression: normal
        messages:
          - text: 今日はCoderDojo赤羽の開催日だ。
            voice_character_id: char_hero
          - text: あ、田村のおばちゃん。おはようございます！
            voice_character_id: char_hero
          - text: 「ケンちゃん、また出かけるの？ほら、これ持って行きな。」
            voice_character_id: char_obachan
            characters:
              - character_id: char_hero
                position: left
                expression: normal
              - character_id: char_obachan
                position: right
                expression: normal
          - text: アメちゃんをもらった！
            voice_character_id: null
        item_give:
          - item_id: item_suica
            condition: null
          - item_id: item_candy
            condition: null
        flags_set:
          - flag: flag_left_danchi
            value: true
        clickable_areas:
          - id: area_mailbox
            x: 187
            "y": 306
            width: 80
            height: 100
            label: 郵便受け
            next_scene: scene_examine_mailbox
            condition: null
          - id: area_danchi_funsui
            x: 339
            "y": 366
            width: 110
            height: 103
            label: 噴水
            next_scene: scene_examine_fountain
            condition: null
          - id: area_nazo01
            x: 450
            "y": 361
            width: 50
            height: 70
            label: "??"
            next_scene: scene_examine_hatena
            condition: null
        talkable:
          - character_id: char_obachan
            scene_id: scene_talk_danchi
        branches:
          type: none
      - id: scene_danchi_return_obachan
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_obachan
            position: right
            expression: normal
        commands:
          - cmd_examine
          - cmd_talk
          - cmd_move
          - cmd_inventory
        talkable:
          - character_id: char_obachan
            scene_id: scene_talk_danchi_gummy
            condition:
              flag: flag_yui_told_gummy
              value: true
          - character_id: char_obachan
            scene_id: scene_talk_danchi_give_candy
            condition:
              flag: flag_yui_told_gummy
              value: false
        messages:
          - text: おばちゃんが立っていた。
            voice_character_id: null
      - id: scene_talk_danchi_give_candy
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_obachan
            position: right
            expression: normal
        messages:
          - text: 「ケンちゃん、アメ食べちゃった？ほら、もう一個あるよ。」
            voice_character_id: char_obachan
          - text: アメをもらった！
            voice_character_id: null
        item_give:
          - item_id: item_candy
            condition: null
        next_scene: null
      - id: scene_talk_danchi_gummy
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_obachan
            position: right
            expression: normal
        messages:
          - text: 「おばちゃん、新発売のグミって知ってる？」
            voice_character_id: char_hero
          - text: 「グミ？なんだいそれ。」
            voice_character_id: char_obachan
          - text: 「なんか最近話題で……おばちゃんが持ってるの見たって聞いて。」
            voice_character_id: char_hero
          - text: 「んー……あたしゃよくわからないねえ。」
            voice_character_id: char_obachan
          - text: 「それよりケンちゃん、なんかのど渇いたねえ。」
            voice_character_id: char_obachan
        branches:
          type: auto
          choices:
            - condition:
                has_item: item_drink
              next_scene: scene_give_drink_to_obachan
            - condition: null
      - id: scene_give_drink_to_obachan
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_obachan
            position: right
            expression: normal
        messages:
          - text: ジュースを持っていた。おばちゃんに渡してみる。
            voice_character_id: null
          - text: 「あら、ありがとうねえ。」
            voice_character_id: char_obachan
          - text: おばちゃんはジュースをごくごく飲んだ。
            voice_character_id: null
          - text: 「……あっ、そういえば。」
            voice_character_id: char_obachan
          - text: 「ポケットに何か入ってたわ。これじゃないかい？」
            voice_character_id: char_obachan
          - text: おばちゃんのポケットから、グミが出てきた！
            voice_character_id: null
        item_remove:
          - item_drink
        item_give:
          - item_id: item_gummy
            condition: null
        next_scene: null
      - id: scene_examine_mailbox
        messages:
          - text: ケンの家の郵便受けだ。今日は特に何も入っていない。
            voice_character_id: null
        next_scene: null
      - id: scene_examine_fountain
        messages:
          - text: こんなところに噴水あったかな。
            voice_character_id: null
          - text: ほかに変わった情報はなさそうだ。
            voice_character_id: null
        next_scene: null
      - id: scene_talk_danchi
        messages:
          - text: 「ケンちゃん、気をつけてね。帰りが遅くなるんなら連絡しなさいよ。」
            voice_character_id: char_obachan
        next_scene: null
      - id: scene_examine_hatena
        messages:
          - text: |-
              なんだこれ　犬・・？
              まあいいか
            voice_character_id: char_hero
        location_id: loc_danchi
        next_scene: null
      - id: scene_examine_dog
        messages:
          - text: しかしなんだあいつ、、こっち見てるぞ
            voice_character_id: char_hero
    clickable_areas:
      - id: area_danchi_dog
        x: 439
        "y": 348
        width: 71
        height: 79
        label: ""
        next_scene: scene_examine_dog
        condition: null
  - id: scene_station_default
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy
          next_scene: scene_station_with_student
        - condition: null
          next_scene: scene_station_main
    child_scenes:
      - id: scene_station_main
        characters:
          - character_id: char_hero
            position: left
            expression: normal
        messages:
          - text: 赤羽駅の改札を出たところだ。
            voice_character_id: null
          - text: 休日の昼間、人が多く賑わっている。
            voice_character_id: null
        clickable_areas:
          - id: area_station_hiroba
            x: 254
            "y": 340
            width: 100
            height: 88
            label: 広場
            next_scene: scene_examine_station_hiroba
            condition: null
          - id: area_nazo02
            x: 397
            "y": 356
            width: 38
            height: 42
            label: ？？
            next_scene: scene_examine_station_nazo
            condition: null
        talkable:
          - character_id: char_yui
            scene_id: scene_talk_station
            condition:
              flag: flag_met_college_student
              value: false
        branches:
          type: none
        child_scenes:
          - id: scene_examine_station_hiroba
            messages:
              - text: 駅前の広場を見た。
                voice_character_id: null
              - text: ゴミが落ちているなかに、見覚えのあるチラシがある。
                voice_character_id: null
              - text: 「CoderDojo赤羽　本日開催！　参加無料　午前9時30分より」
                voice_character_id: null
              - text: チラシを一枚拾った！
                voice_character_id: null
            item_give:
              - item_id: item_flyer
                condition: null
            flags_set:
              - flag: flag_station_explored
                value: true
              - flag: flag_got_flyer
                value: true
            next_scene: null
          - id: scene_examine_station_nazo
            messages:
              - text: あれはなんだろう。。
                voice_character_id: null
              - text: なんでもいいか、、
                voice_character_id: null
            next_scene: null
          - id: scene_talk_station
            messages:
              - text: 辺りを見回すと……
                voice_character_id: null
            branches:
              type: auto
              choices:
                - label: ""
                  condition:
                    flag: flag_met_yui
                    value: true
                  next_scene: scene_yui_already_met
                - label: ""
                  condition: null
                  next_scene: scene_meet_yui
            child_scenes:
              - id: scene_meet_yui
                characters:
                  - character_id: char_yui
                    position: center
                    expression: surprise
                messages:
                  - text: 後ろから声がした。
                    voice_character_id: null
                  - text: 「あっ、ケンじゃん！やっぱりいた。」
                    voice_character_id: char_yui
                    voice_style: normal
                  - text: 「今日CoderDojo行くでしょ？チラシもう見た？」
                    voice_character_id: char_yui
                    voice_style: normal
                branches:
                  type: choice
                  choices:
                    - label: 「うん、見たよ。一緒に行こう！」
                      condition:
                        flag: flag_station_explored
                        value: true
                      next_scene: scene_yui_lets_go
                    - label: 「あ、まだ見てない。ちょっと待ってて」
                      condition: null
                      next_scene: null
                child_scenes:
                  - id: scene_yui_lets_go
                    characters:
                      - character_id: char_yui
                        position: center
                        expression: happy
                    messages:
                      - text: 「やった！じゃ行こう！CoderDojo楽しみだね！」
                        voice_character_id: char_yui
                        voice_style: normal
                      - text: ユイと合流した。
                        voice_character_id: null
                    flags_set:
                      - flag: flag_met_yui
                        value: true
                    branches:
                      type: none
              - id: scene_yui_already_met
                characters:
                  - character_id: char_yui
                    position: right
                    expression: happy
                messages:
                  - text: 「はーやーくー！行こうよ！」
                    voice_character_id: char_yui
                    voice_style: normal
                next_scene: null
      - id: scene_station_with_student
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_college_student
            position: right
            expression: normal
        messages:
          - text: 駅の広場に出ると、あの大学生がいた。
            voice_character_id: null
          - text: まだグミを探してウロウロしているみたいだ。
            voice_character_id: null
        talkable:
          - character_id: char_college_student
            scene_id: scene_talk_station_give_gummy
        branches:
          type: none
      - id: scene_talk_station_give_gummy
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_college_student
            position: right
            expression: normal
        messages:
          - text: 「あ、さっきの子！」
            voice_character_id: char_college_student
          - text: 「実は……これじゃないですか？」
            voice_character_id: char_hero
          - text: グミを取り出して、大学生に渡した。
            voice_character_id: null
          - text: 「え……っ！！これ、これだよ！！」
            voice_character_id: char_college_student
          - text: 「どこで！？どこにあったの！？」
            voice_character_id: char_college_student
          - text: 「団地のおばあさんが持ってて……」
            voice_character_id: char_hero
          - text: 「ありがとう！！ほんとにありがとう！！」
            voice_character_id: char_college_student
        item_remove:
          - item_gummy
        next_scene: scene_gummy_joy_cg
      - id: scene_gummy_joy_cg
        overlay_image: cg/gummy_joy.jpg
        messages:
          - text: 大学生の顔がぱっと明るくなった。
            voice_character_id: null
          - text: グミを口に入れて、しばらく目を閉じている。
            voice_character_id: null
          - text: 「……うまい。これだよ、これ。」
            voice_character_id: char_college_student
          - text: 「ありがとな。今日、最高の一日になったよ。」
            voice_character_id: char_college_student
          - text: ぼくも、なんかいい気持ちだった。
            voice_character_id: char_hero
          - text: グミひとつで、こんなことになるなんて。
            voice_character_id: char_hero
        next_scene: scene_ending_credits
      - id: scene_ending_credits
        messages: []
        game_end: true
        cg_sequence:
          - src: cg/juice.jpg
            position: right
          - src: cg/game_man.jpg
            position: right
          - src: cg/happy_dojo.jpg
            position: right
          - src: cg/mirai.jpg
            position: left
          - src: cg/dog.jpg
            position: left
          - src: cg/dog.jpg
            position: center
      - id: scene_ending_cg_sequence
        messages: []
        game_end: true
        cg_sequence:
          - src: cg/ending_01.jpg
            position: right
          - src: cg/ending_02.jpg
            position: right
          - src: cg/ending_03.jpg
            position: right
          - src: cg/ending_04.jpg
            position: left
          - src: cg/ending_05.jpg
            position: left
          - src: cg/ending_fin.jpg
            position: center
  - id: scene_coderdojo_default
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/coderdojo.mp3
    characters:
      - character_id: char_hero
        position: left
        expression: normal
      - character_id: char_mentor
        position: right
        expression: normal
    messages:
      - text: CoderDojo赤羽の会場に着いた。
        voice_character_id: null
      - text: 広い部屋に子どもたちが集まって、みんなノートパソコンを開いている。
        voice_character_id: null
      - text: 「ケンくん、いらっしゃい！今日もよろしくね。」
        voice_character_id: char_mentor
        voice_style: normal
    clickable_areas:
      - id: area_whiteboard
        x: 339
        "y": 186
        width: 135
        height: 78
        label: ホワイトボード
        next_scene: scene_examine_whiteboard
        condition: null
      - id: area_kids
        x: 457
        "y": 267
        width: 290
        height: 133
        label: 子供たち
        next_scene: scene_examine_coderdojo_pcs
        condition: null
      - id: area_dojo_drink
        x: 90
        "y": 395
        width: 35
        height: 62
        label: ドリンク
        next_scene: scene_examine_dojo_drink
        condition: null
    flags_set:
      - flag: flag_arrived_coderdojo
        value: true
    talkable:
      - character_id: char_mentor
        scene_id: scene_talk_coderdojo
    branches:
      type: none
    child_scenes:
      - id: scene_examine_whiteboard
        messages:
          - text: ホワイトボードに「今日のテーマ：自由制作！」と書かれている。
            voice_character_id: null
          - text: 何を作ろうか……
            voice_character_id: null
        flags_set:
          - flag: flag_examined_whiteboard
            value: true
        next_scene: null
      - id: scene_examine_coderdojo_pcs
        messages:
          - text: ノートパソコンがずらりと並んでいる。
            voice_character_id: null
          - text: 隣の子のコードが見えた。ゲームっぽいものを作っているみたい。
            voice_character_id: null
        flags_set:
          - flag: flag_examined_kids
            value: true
        next_scene: null
      - id: scene_talk_coderdojo
        messages: []
        branches:
          type: auto
          choices:
            - label: ""
              condition:
                and:
                  - flag: flag_met_mentor
                    value: true
                  - flag: flag_examined_whiteboard
                    value: true
                  - flag: flag_examined_kids
                    value: true
              next_scene: scene_talk_coderdojo_mentor_bored
            - label: ""
              condition: null
              next_scene: scene_talk_coderdojo_mentor
      - id: scene_talk_coderdojo_mentor_bored
        messages:
          - text: 「……今日は気分がのらないな」
            voice_character_id: char_hero
            voice_style: normal
        next_scene: null
      - id: scene_talk_coderdojo_mentor
        messages:
          - text: 「今日のテーマは自由制作だよ。何か作りたいものある？」
            voice_character_id: char_mentor
            voice_style: normal
        branches:
          type: choice
          choices:
            - label: 「ゲームを作りたいです！」
              condition: null
              next_scene: scene_mentor_game_talk
            - label: 「まだ考え中です……」
              condition: null
              next_scene: scene_mentor_encouragement
        child_scenes:
          - id: scene_mentor_game_talk
            messages:
              - text: 「ゲームか！いいね！じゃあまず、どんなゲームにしたいか紙に描いてみよう。」
                voice_character_id: char_mentor
                voice_style: normal
              - text: 「作りたいものが決まったら、一緒に考えよう。」
                voice_character_id: char_mentor
                voice_style: normal
              - text: こうしてぼくのCoderDojoが始まった。
                voice_character_id: null
            flags_set:
              - flag: flag_met_mentor
                value: true
            next_scene: null
          - id: scene_mentor_encouragement
            messages:
              - text: 「大丈夫、焦らなくていいよ。まわりを見てインスピレーションを探してみて。」
                voice_character_id: char_mentor
                voice_style: normal
            flags_set:
              - flag: flag_met_mentor
                value: true
            next_scene: null
      - id: scene_examine_dojo_drink
        messages:
          - text: ラッキー　ドリンク見つけた
            voice_character_id: char_hero
        flags_set:
          - flag: ""
            value: true
        item_give:
          - item_id: item_drink
            condition: null
        next_scene: null
  - id: scene_use_candy
    overlay_image: cg/candy_happy.jpg
    messages:
      - text: アメをなめた。
        voice_character_id: null
      - text: 甘くておいしい。
        voice_character_id: null
      - text: ……なんだか、すごく幸せな気持ちになった。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_use_juice
    overlay_image: cg/happy_juice.jpg
    messages:
      - text: ジュースを飲んだ。
        voice_character_id: null
      - text: あっさりとしていて、とてもおいしい。
        voice_character_id: null
      - text: ……なんだか、すごく幸せな気持ちになった。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_slope_default
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/piano.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_visited_slope
            value: false
          next_scene: scene_slope_first_visit
        - condition:
            flag: flag_met_college_student
            value: true
          next_scene: scene_slope_with_yui
        - condition: null
          next_scene: scene_slope_with_student
    child_scenes:
      - id: scene_slope_first_visit
        characters:
          - character_id: char_hero
            position: left
            expression: normal
        messages:
          - text: ぼくはなんとなく坂道を歩いていた。
            voice_character_id: null
          - text: CoderDojoで教わったこと、ゲームを作るってどんな感じなんだろう。
            voice_character_id: char_hero
          - text: 坂の途中から、団地の建物が並ぶ景色が見えた。
            voice_character_id: null
          - text: この坂きついな、、
            voice_character_id: char_hero
        flags_set:
          - flag: flag_visited_slope
            value: true
        clickable_areas:
          - id: area_slope_view
            x: 300
            "y": 200
            width: 200
            height: 150
            label: 坂の眺め
            next_scene: scene_examine_slope_view
            condition: null
        branches:
          type: none
      - id: scene_examine_slope_view
        messages:
          - text: 赤羽の街が見渡せる。団地、線路、遠くにビル。
            voice_character_id: null
          - text: ここから見ると、自分がいつも歩いてる場所がちっぽけに見える。
            voice_character_id: char_hero
        next_scene: null
      - id: scene_slope_with_student
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_college_student
            position: right
            expression: normal
        messages:
          - text: 坂の途中に、見慣れない大学生がいた。
            voice_character_id: null
          - text: スマホを見ながらうろうろしている。
            voice_character_id: null
        talkable:
          - character_id: char_college_student
            scene_id: scene_talk_slope_student
        branches:
          type: none
      - id: scene_talk_slope_student
        messages:
          - text: 「ちょっといい？」
            voice_character_id: char_college_student
          - text: 「新発売のグミ探してるんだけど、この辺に売ってるとこ知らない？」
            voice_character_id: char_college_student
          - text: 「SNSで話題になってて……どうしても食べてみたくて。」
            voice_character_id: char_college_student
        flags_set:
          - flag: flag_met_college_student
            value: true
        branches:
          type: choice
          choices:
            - label: 「この辺、コンビニがあったような……」
              condition: null
              next_scene: scene_slope_student_hint
            - label: 「知らないです……」
              condition: null
              next_scene: scene_slope_student_unknown
        child_scenes:
          - id: scene_slope_student_hint
            messages:
              - text: 「ほんと！？どこ！？」
                voice_character_id: char_college_student
              - text: 「ありがとう、行ってみる！」
                voice_character_id: char_college_student
            next_scene: null
          - id: scene_slope_student_unknown
            messages:
              - text: 「そっかあ……じゃあもうちょっと探してみる。」
                voice_character_id: char_college_student
            next_scene: null
      - id: scene_slope_with_yui
        characters:
          - character_id: char_hero
            position: left
            expression: normal
          - character_id: char_yui
            position: right
            expression: normal
        messages:
          - text: 坂の途中に、ユイがいた。
            voice_character_id: null
          - text: 「あ、ケン！ここにいたんだ。」
            voice_character_id: char_yui
        talkable:
          - character_id: char_yui
            scene_id: scene_talk_slope_yui
        branches:
          type: none
      - id: scene_talk_slope_yui
        messages:
          - text: 「そういえばさ、新発売のグミって知ってる？」
            voice_character_id: char_hero
          - text: 「あのグミ、私も気になってた！どこで売ってるんだろうね。」
            voice_character_id: char_yui
          - text: 「たしか団地のおばちゃんもはまってるって聞いたよ。」
            voice_character_id: char_yui
          - text: 「団地に戻って、おばちゃんに聞いてみたら？」
            voice_character_id: char_yui
        flags_set:
          - flag: flag_yui_told_gummy
            value: true
        next_scene: null
`,_=`flags:
  - id: flag_hero_name
    type: string
    default: "ケン"
    description: "主人公の名前"

  - id: flag_left_danchi
    type: boolean
    default: false
    description: "団地を出た（初回出発済み）"

  - id: flag_station_explored
    type: boolean
    default: false
    description: "駅前の掲示板を見た（CoderDojo行き解禁条件）"

  - id: flag_got_flyer
    type: boolean
    default: false
    description: "CoderDojoのチラシを手に入れた"

  - id: flag_met_yui
    type: boolean
    default: false
    description: "友達のユイと合流した"

  - id: flag_arrived_coderdojo
    type: boolean
    default: false
    description: "CoderDojo赤羽に到着した"

  - id: flag_met_mentor
    type: boolean
    default: false
    description: "田中メンターに話しかけた"

  - id: flag_examined_whiteboard
    type: boolean
    default: false
    description: "CoderDojoのホワイトボードを調べた"

  - id: flag_examined_kids
    type: boolean
    default: false
    description: "CoderDojoの子供たちを調べた"

  - id: flag_visited_slope
    type: boolean
    default: false
    description: "団地への坂を初回訪問済み"

  - id: flag_met_college_student
    type: boolean
    default: false
    description: "坂で大学生と話した"

  - id: flag_yui_told_gummy
    type: boolean
    default: false
    description: "ユイからグミはおばちゃんが持っていると聞いた"

  - id: flag_chapter
    type: integer
    default: 1
    description: "現在のチャプター番号"
`,v=`items:
  - id: item_suica
    name: "Suicaカード"
    description: "電車に乗るためのICカード。残高はある。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_flyer
    name: "CoderDojoのチラシ"
    description: "CoderDojo赤羽のチラシ。「本日開催！午後1時より」と書いてある。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_candy
    name: "アメちゃん"
    description: "田村のおばあさんにもらったアメ。甘くておいしい。"
    icon: null
    usable: true
    use_scene: scene_use_candy
    use_condition: null
    stackable: false
    category: consumable
  - id: item_drink
    name: "ジュース"
    description: "置いてあったジュース。冷たくておいしい。"
    icon: null
    usable: true
    use_scene: scene_use_juice
    use_condition: null
    stackable: false
    category: consumable

  - id: item_gummy
    name: "新発売のグミ"
    description: "おばちゃんのポケットから出てきたグミ。大学生が探していたやつだ。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item
`,y=`locations:
  - id: loc_danchi
    name: "赤羽団地"
    description: "ケンが住んでいる団地。昔からの住棟が並んでいる。"
    background_default: backgrounds/danchi_day.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_station
        label: "赤羽駅前へ"
        condition: null
      - location_id: loc_slope
        label: "団地への坂へ"
        condition:
          flag: flag_visited_slope
          value: true
    entry_scene: scene_danchi_morning

  - id: loc_station
    name: "赤羽駅前"
    description: "JR赤羽駅の改札前。商店街への入り口でもある。"
    background_default: backgrounds/station_day.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_danchi
        label: "団地へ戻る"
        condition: null
      - location_id: loc_coderdojo
        label: "CoderDojo赤羽へ"
        condition:
          flag: flag_station_explored
          value: true
    entry_scene: scene_station_default

  - id: loc_coderdojo
    name: "CoderDojo赤羽"
    description: "子どもたちが毎月集まってプログラミングを楽しむ場所。"
    background_default: backgrounds/coderdojo.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_station
        label: "駅前へ戻る"
        condition: null
      - location_id: loc_slope
        label: "団地への坂へ"
        condition:
          and:
            - flag: flag_met_mentor
              value: true
            - flag: flag_examined_whiteboard
              value: true
            - flag: flag_examined_kids
              value: true
    entry_scene: scene_coderdojo_default

  - id: loc_slope
    name: "団地への坂"
    description: "CoderDojoから団地へ続く緩やかな坂道。赤羽の街が見渡せる。"
    background_default: backgrounds/slope_day.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_coderdojo
        label: "CoderDojoへ戻る"
        condition: null
      - location_id: loc_danchi
        label: "団地へ上る"
        condition: null
    entry_scene: scene_slope_default
`,ee=`characters:
  - id: char_hero
    name: "ケン"
    name_flag: flag_hero_name
    voicevox_speaker_id: 2
    y_offset: -250
    sprites:
      normal: characters/hero/hero_normal.png
      happy: characters/hero/happy.png
      sad: characters/hero/sad.png
      talking: characters/hero/hero_talking.png

  - id: char_yui
    name: "ユイ"
    name_flag: null
    voicevox_speaker_id: 54
    y_offset: -250
    sprites:
      normal: characters/yui/girl_normal.png
      happy: characters/yui/girl_normal.png
      surprise: characters/yui/girl_normal.png
      talking: characters/yui/girl_talking.png

  - id: char_mentor
    name: "田中メンター"
    name_flag: null
    voicevox_speaker_id: 11
    y_offset: -250
    sprites:
      normal: characters/mentor/mentor_nomal.png
      smile: characters/mentor/mentor_nomal.png
      talking: characters/mentor/talking.png

  - id: char_obachan
    name: "田村のおばあさん"
    y_offset: -150
    name_flag: null
    voicevox_speaker_id: 5
    sprites:
      normal: characters/obachan/obachan_nomal.png
      talking: characters/obachan/obachan_talking.png

  - id: char_college_student
    name: "大学生"
    name_flag: null
    voicevox_speaker_id: 99
    y_offset: -180
    sprites:
      normal: characters/college_student/daigakusei_normal.png
      talking: characters/college_student/daigakusei_normal.png
`,te=`commands:
  - id: cmd_examine
    label: "調べる"
    icon: null
    description: "周囲をよく調べる"
    action_type: examine

  - id: cmd_talk
    label: "話す"
    icon: null
    description: "その場にいる人に話しかける"
    action_type: talk

  - id: cmd_move
    label: "移動"
    icon: null
    description: "別の場所へ移動する"
    action_type: move

  - id: cmd_inventory
    label: "持ち物"
    icon: null
    description: "所持品を確認する"
    action_type: inventory
`;function b(e){return Object.fromEntries(e.map(e=>[e.id,e]))}function x(e,t={}){let n=[];for(let r of e){let{child_scenes:e,...i}=r,a={...t,...i};n.push(a),e?.length&&n.push(...x(e,{location_id:a.location_id,background:a.background,bgm:a.bgm}))}return n}function ne(){let e=n.load(g),t=n.load(_),r=n.load(v),i=n.load(y),a=n.load(ee),o=n.load(te);return{scenes:b(x(e.scenes)),flags:t.flags,items:b(r.items),locations:b(i.locations),characters:b(a.characters),commands:b(o.commands)}}var S=null;function re(){return S||=ne(),S}function ie(e){return Object.fromEntries(e.map(e=>[e.id,e.default]))}function C(e,t){if(!e||e.length===0)return t;let n={...t};for(let{flag:t,value:r}of e)n[t]=r;return n}function w(e,t){if(!e)return!0;if(e.and)return e.and.every(e=>w(e,t));if(e.or)return e.or.some(e=>w(e,t));let n=!0;if(e.flag!==void 0){let r=t.flags[e.flag],i=e.value;n&&=r===i}return e.has_item!==void 0&&(n&&=t.inventory.includes(e.has_item)),e.location_id!==void 0&&(n&&=t.locationId===e.location_id),e.negate&&(n=!n),n}function ae(e,t){if(!e||e.length===0)return t;let n={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},r=[...t.inventory];for(let t of e)w(t.condition,n)&&(r.includes(t.item_id)||(r=[...r,t.item_id]));return{...t,inventory:r}}function oe(e,t){return{...t,inventory:t.inventory.filter(t=>t!==e)}}function se(e,t,n){let r=n.items[e];if(!r||!r.usable)return!1;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId};return w(r.use_condition,i)}function ce(e,t,n){let r=n.items[e];if(!r||!r.usable)return{newState:t,sceneId:null};let i=t;return r.stackable||(i=oe(e,t)),{newState:i,sceneId:r.use_scene??null}}function T(e,t,n){let r=n.scenes[e];if(!r)return console.warn(`[SceneEngine] Scene not found: ${e}`),t;let i={...t,currentSceneId:e,currentMessageIndex:0,phase:`message`};if(r.location_id&&r.location_id!==t.currentLocationId&&(i={...i,currentLocationId:r.location_id,currentCharacters:[]}),r.characters!==void 0&&(i={...i,currentCharacters:r.characters}),r.messages[0]?.characters!==void 0&&(i={...i,currentCharacters:r.messages[0].characters}),i={...i,flags:C(r.flags_set,i.flags)},i=ae(r.item_give,i),r.item_remove)for(let e of r.item_remove)i=oe(e,i);return r.messages.length===0?r.game_end?{...i,phase:`ending`}:r.cg_sequence?.length?{...i,phase:`cg_sequence`}:E(i,r,n):i}function le(e,t){let n=t.scenes[e.currentSceneId];if(!n)return e;let r=e.currentMessageIndex+1;if(r<n.messages.length){let t=n.messages[r],i={...e,currentMessageIndex:r};return t.characters===void 0?i:{...i,currentCharacters:t.characters}}return E(e,n,t)}function E(e,t,n){if(t.game_end)return{...e,phase:`ending`};let r=t.branches;if(r?.type===`choice`&&r.choices&&r.choices.length>0){let t={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId},i=r.choices.filter(e=>w(e.condition,t));return i.length===1&&i[0].next_scene?T(i[0].next_scene,e,n):{...e,phase:`choice`}}if(r?.type===`auto`&&r.choices){let i={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId};for(let a of r.choices)if(w(a.condition,i))return a.next_scene?T(a.next_scene,e,n):a.next_scene===null?D(e,n):O(e,t,n);return D(e,n)}return t.next_scene?T(t.next_scene,e,n):t.next_scene===null?D(e,n):O(e,t,n)}function ue(e,t,n){let r=n.scenes[t.currentSceneId];if(!r?.branches?.choices)return t;let i=r.branches.choices[e];return i?i.next_scene?T(i.next_scene,t,n):D(t,n):t}function D(e,t){if(e.sceneHistory.length===0)return O(e,t.scenes[e.currentSceneId],t);let n=[...e.sceneHistory],r=n.pop();return t.scenes[r],{...e,currentSceneId:r,currentMessageIndex:0,sceneHistory:n,phase:`command`}}function O(e,t,n){return{...e,phase:`command`}}function de(e,t){let n=t.scenes[e.currentSceneId];return n?E(e,n,t):e}function k(e,t){return{...t,sceneHistory:[...t.sceneHistory,e]}}function fe(e,t,n){return(e?.commands??t?.default_commands??Object.keys(n.commands)).map(e=>n.commands[e]).filter(e=>!!e)}function pe(e,t,n){let r=n.commands[e];if(!r)return{newPhase:t.phase};switch(r.action_type){case`examine`:return{newPhase:`examine`};case`move`:return{newPhase:`map`};case`inventory`:return{newPhase:`inventory`};case`talk`:{let e=n.scenes[t.currentSceneId]?.talkable??[],r={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},i=e.filter(e=>w(e.condition??null,r)).map(e=>({characterId:e.character_id,sceneId:e.scene_id}));return i.length===0?{newPhase:`command`}:i.length===1?{newPhase:`message`,transitionSceneId:i[0].sceneId}:{newPhase:`talk_select`,talkCandidates:i}}case`system`:return{newPhase:`system_menu`};default:return{newPhase:t.phase}}}function me(e,t,n){let r=n.locations[e];if(!r)return[];let i={flags:t.flags,inventory:t.inventory,locationId:e};return r.connections.filter(e=>w(e.condition,i))}function he(e,t,n){let r=n.locations[e];if(!r)return t;let i={...t,currentLocationId:e,currentCharacters:[],sceneHistory:[],phase:`message`};return T(r.entry_scene,i,n)}function A(e){return{currentSceneId:p,currentLocationId:m,currentMessageIndex:0,flags:ie(e.flags),inventory:[],sceneHistory:[],phase:`title`,currentCharacters:[],talkCandidates:[]}}var ge=f((e,t)=>{let n=re();return{state:A(n),masterData:n,playtimeStart:Date.now(),startNewGame:()=>{let n=t().masterData;e({state:T(p,{...A(n),phase:`message`},n),playtimeStart:Date.now()})},startDebugGame:n=>{let r=t().masterData,i=A(r),a={...i,currentSceneId:n.sceneId,currentLocationId:n.locationId,flags:{...i.flags,...n.flags??{}},inventory:n.inventory??[],phase:`message`};e({state:T(n.sceneId,a,r),playtimeStart:Date.now()})},loadGame:t=>{e({state:{currentSceneId:t.currentSceneId,currentLocationId:t.currentLocationId,currentMessageIndex:0,flags:t.flags,inventory:t.inventory,sceneHistory:t.sceneHistory,phase:`command`,currentCharacters:t.currentCharacters??[],talkCandidates:[]},playtimeStart:Date.now()-t.playtime*1e3})},toSaveData:()=>{let{state:e,playtimeStart:n}=t();return{version:1,timestamp:Date.now(),currentSceneId:e.currentSceneId,currentLocationId:e.currentLocationId,flags:e.flags,inventory:e.inventory,sceneHistory:e.sceneHistory,currentCharacters:e.currentCharacters,playtime:Math.floor((Date.now()-n)/1e3)}},advanceMessage:()=>{let{state:n,masterData:r}=t();n.phase===`message`&&e({state:le(n,r)})},selectChoice:n=>{let{state:r,masterData:i}=t();r.phase===`choice`&&e({state:ue(n,r,i)})},executeCommand:n=>{let{state:r,masterData:i}=t();if(r.phase!==`command`)return;let a=pe(n,r,i);if(a.transitionSceneId){let t=k(r.currentSceneId,r);e({state:T(a.transitionSceneId,t,i)})}else e({state:{...r,phase:a.newPhase,talkCandidates:a.talkCandidates??[]}})},selectTalkTarget:n=>{let{state:r,masterData:i}=t();if(r.phase!==`talk_select`)return;if(n<0){e(e=>({state:{...e.state,phase:`command`,talkCandidates:[]}}));return}let a=r.talkCandidates[n];if(!a)return;let o=k(r.currentSceneId,r);e({state:{...T(a.sceneId,o,i),talkCandidates:[]}})},completeCgSequence:()=>{let{state:n,masterData:r}=t();n.phase===`cg_sequence`&&e({state:de(n,r)})},moveToLocation:n=>{let{state:r,masterData:i}=t();e({state:he(n,r,i)})},clickArea:n=>{let{state:r,masterData:i}=t();if(r.phase!==`examine`)return;let a=i.scenes[r.currentSceneId]?.clickable_areas?.find(e=>e.id===n);if(!a)return;let o={flags:r.flags,inventory:r.inventory,locationId:r.currentLocationId};if(!w(a.condition,o))return;let s=k(r.currentSceneId,r);e({state:T(a.next_scene,s,i)})},useItem:n=>{let{state:r,masterData:i}=t(),{newState:a,sceneId:o}=ce(n,r,i);e(o?{state:T(o,k(r.currentSceneId,{...a,phase:`command`}),i)}:{state:a})},closeOverlay:()=>{e(e=>({state:{...e.state,phase:`command`}}))},goToTitle:()=>{e(e=>({state:{...e.state,phase:`title`}}))}}}),_e=class{prefix=`novel_`;key(e){return`${this.prefix}${e}`}setItem(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{console.warn(`[LocalStorage] Failed to save:`,e)}}getItem(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}async save(e,t){this.setItem(this.key(`save_${e}`),t)}async load(e){let t=this.getItem(this.key(`save_${e}`));return!t||t.version!==1?null:t}async deleteSave(e){localStorage.removeItem(this.key(`save_${e}`))}async listSaves(){return Array.from({length:3},(e,t)=>{let n=this.getItem(this.key(`save_${t+1}`));return!n||n.version!==1?null:{slotId:t+1,data:n}})}async saveSettings(e){this.setItem(this.key(`settings`),e)}async loadSettings(){return this.getItem(this.key(`settings`))}async autoSave(e){this.setItem(this.key(`autosave`),e)}async loadAutoSave(){let e=this.getItem(this.key(`autosave`));return!e||e.version!==1?null:e}};function ve(e){switch(e??void 0??`localStorage`){default:return new _e}}var ye=null;function j(){return ye||=ve(),ye}var M=new class{bgmAudio=null;voiceAudio=null;playBgm(e,t=!0,n=.8){this.bgmAudio&&this.bgmAudio.pause();let r=new Audio(e);r.loop=t,r.volume=n,r.play().catch(()=>{}),this.bgmAudio=r}stopBgm(){this.bgmAudio&&=(this.bgmAudio.pause(),null)}setBgmVolume(e){this.bgmAudio&&(this.bgmAudio.volume=Math.max(0,Math.min(1,e)))}async playVoice(e,t=.9,n){this.voiceAudio&&this.voiceAudio.pause();let r=new Audio(e);r.volume=t,this.voiceAudio=r,n&&r.addEventListener(`ended`,n,{once:!0}),console.log(`[AudioManager] playVoice:`,e.slice(0,60)),await r.play().catch(e=>console.warn(`[AudioManager] play failed:`,e))}stopVoice(){this.voiceAudio&&=(this.voiceAudio.pause(),null)}playSe(e,t=.8){let n=new Audio(e);n.volume=t,n.play().catch(()=>{})}},N=f((e,t)=>({settings:h,updateSettings:n=>{let r={...t().settings,...n};e({settings:r}),n.bgmVolume!==void 0&&M.setBgmVolume(n.bgmVolume),j().saveSettings(r).catch(()=>{})},loadSettings:async()=>{let t=await j().loadSettings().catch(()=>null);t&&(e({settings:{...h,...t}}),M.setBgmVolume(t.bgmVolume??h.bgmVolume))}})),P=i(),F={btn:`_btn_jkuam_1`,btnLarge:`_btnLarge_jkuam_29`,btnSmall:`_btnSmall_jkuam_34`};function I({label:e,onClick:t,disabled:n,size:r=`normal`}){let i=r===`large`?F.btnLarge:r===`small`?F.btnSmall:``;return(0,P.jsx)(`button`,{className:`${F.btn} ${i}`,onClick:t,disabled:n,children:e})}var L={overlay:`_overlay_2rhas_1`,box:`_box_2rhas_11`,title:`_title_2rhas_23`,closeBtn:`_closeBtn_2rhas_32`};function R({title:e,onClose:t,children:n}){return(0,P.jsx)(`div`,{className:L.overlay,onClick:t,children:(0,P.jsxs)(`div`,{className:L.box,onClick:e=>e.stopPropagation(),children:[t&&(0,P.jsx)(`button`,{className:L.closeBtn,onClick:t,children:`×`}),e&&(0,P.jsx)(`div`,{className:L.title,children:e}),n]})})}var z={slots:`_slots_1la7k_1`,slot:`_slot_1la7k_1`,slotInfo:`_slotInfo_1la7k_17`,slotLabel:`_slotLabel_1la7k_21`,slotData:`_slotData_1la7k_27`,slotEmpty:`_slotEmpty_1la7k_32`,slotActions:`_slotActions_1la7k_38`,tabs:`_tabs_1la7k_43`,tab:`_tab_1la7k_43`,tabActive:`_tabActive_1la7k_60`};function be({onSave:e,onLoad:t,onClose:n}){let[r,i]=(0,a.useState)(`save`),[o,s]=(0,a.useState)([]);(0,a.useEffect)(()=>{j().listSaves().then(s)},[]);async function c(t){await e(t),s(await j().listSaves())}function l(e){return new Date(e).toLocaleString(`ja-JP`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}return(0,P.jsxs)(R,{title:`セーブ / ロード`,onClose:n,children:[(0,P.jsxs)(`div`,{className:z.tabs,children:[(0,P.jsx)(`button`,{className:`${z.tab} ${r===`save`?z.tabActive:``}`,onClick:()=>i(`save`),children:`セーブ`}),(0,P.jsx)(`button`,{className:`${z.tab} ${r===`load`?z.tabActive:``}`,onClick:()=>i(`load`),children:`ロード`})]}),(0,P.jsx)(`div`,{className:z.slots,children:Array.from({length:3},(e,i)=>{let a=i+1,s=o[i]??null;return(0,P.jsxs)(`div`,{className:z.slot,children:[(0,P.jsxs)(`div`,{className:z.slotInfo,children:[(0,P.jsxs)(`div`,{className:z.slotLabel,children:[`スロット `,a]}),s?(0,P.jsxs)(`div`,{className:z.slotData,children:[l(s.data.timestamp),`プレイ時間: `,Math.floor(s.data.playtime/60),`分`]}):(0,P.jsx)(`div`,{className:z.slotEmpty,children:`データなし`})]}),(0,P.jsxs)(`div`,{className:z.slotActions,children:[r===`save`&&(0,P.jsx)(I,{label:`セーブ`,size:`small`,onClick:()=>c(a)}),r===`load`&&s&&(0,P.jsx)(I,{label:`ロード`,size:`small`,onClick:()=>{t(s.data),n()}})]})]},a)})})]})}var B={root:`_root_1vdcg_1`,title:`_title_1vdcg_12`,subtitle:`_subtitle_1vdcg_20`,actions:`_actions_1vdcg_28`};function xe({onNewGame:e,onLoad:t}){let[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{j().listSaves().then(e=>o(e.some(Boolean)))},[]);async function s(e){}return(0,P.jsxs)(`div`,{className:B.root,children:[(0,P.jsx)(`h1`,{className:B.title,children:`ノベルゲーム`}),(0,P.jsx)(`p`,{className:B.subtitle,children:`NOVEL GAME`}),(0,P.jsxs)(`div`,{className:B.actions,children:[(0,P.jsx)(I,{label:`はじめから`,size:`large`,onClick:e}),i&&(0,P.jsx)(I,{label:`続きから`,size:`large`,onClick:()=>r(!0)})]}),n&&(0,P.jsx)(be,{onSave:s,onLoad:e=>{r(!1),t(e)},onClose:()=>r(!1)})]})}var V={root:`_root_1f6bz_1`,img:`_img_1f6bz_9`,fallback:`_fallback_1f6bz_15`,locationName:`_locationName_1f6bz_23`};function Se({backgroundPath:e,locationName:t}){let[n,r]=(0,a.useState)(!1),i=e?`/dojonovel/assets/${e}`:null;return(0,a.useEffect)(()=>{r(!1)},[i]),(0,P.jsx)(`div`,{className:V.root,children:i&&!n?(0,P.jsx)(`img`,{className:V.img,src:i,alt:``,onError:()=>r(!0)}):(0,P.jsx)(`div`,{className:V.fallback,children:t&&(0,P.jsx)(`span`,{className:V.locationName,children:t})})})}var H={root:`_root_xnuhq_1`,left:`_left_xnuhq_7`,center:`_center_xnuhq_11`,right:`_right_xnuhq_16`,img:`_img_xnuhq_20`,placeholder:`_placeholder_xnuhq_24`,placeholderName:`_placeholderName_xnuhq_35`};function Ce({display:e,character:t,isSpeaking:n}){let[r,i]=(0,a.useState)(!1),o=n&&t.sprites?.talking?`talking`:e.expression,s=t.sprites?.[o]??t.sprites?.normal,c=s?`/dojonovel/assets/${s}`:null,l=e.position===`left`?H.left:e.position===`right`?H.right:H.center,u=120+(e.y_offset??t.y_offset??0);return(0,P.jsx)(`div`,{className:`${H.root} ${l}`,style:{bottom:`${u}px`},children:c&&!r?(0,P.jsx)(`img`,{className:H.img,src:c,alt:t.name,onError:()=>i(!0)}):(0,P.jsx)(`div`,{className:H.placeholder,children:(0,P.jsx)(`span`,{className:H.placeholderName,children:t.name})})})}var we={root:`_root_2afjl_1`};function Te({text:e,speed:t,onComplete:n,instant:r}){let[i,o]=(0,a.useState)(``),[s,c]=(0,a.useState)(!1),l=(0,a.useRef)(null),u=(0,a.useRef)(0);return(0,a.useEffect)(()=>{if(o(``),c(!1),u.current=0,r||t===0){o(e),c(!0),n?.();return}let i=Math.max(1,Math.floor(1e3/t));return l.current=setInterval(()=>{u.current+=1,o(e.slice(0,u.current)),u.current>=e.length&&(clearInterval(l.current),c(!0),n?.())},i),()=>{l.current&&clearInterval(l.current)}},[e,t,r]),(0,P.jsx)(`span`,{className:we.root,children:i})}var Ee={baseUrl:`http://localhost:50021`,enabled:!0,prebuiltOnly:!0},De=new class{config;constructor(e=Ee){this.config=e}async isAvailable(){if(this.config.prebuiltOnly)return!1;try{return(await fetch(`${this.config.baseUrl}/version`,{signal:AbortSignal.timeout(1e3)})).ok}catch{return!1}}async synthesize(e,t){if(!this.config.enabled||this.config.prebuiltOnly)return null;try{let n=await fetch(`${this.config.baseUrl}/audio_query?text=${encodeURIComponent(e)}&speaker=${t}`,{method:`POST`});if(!n.ok)return null;let r=await n.json(),i=await fetch(`${this.config.baseUrl}/synthesis?speaker=${t}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)});return i.ok?i.arrayBuffer():null}catch{return null}}};async function Oe(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-1`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function ke(e,t){return Oe(`${e}_${t}`)}var U=new Map;function Ae(){let e=(0,a.useRef)(!1);return{speak:(0,a.useCallback)(async(t,n,r)=>{if(console.log(`[Voicevox] speak called:`,{character:n?.id,speakerId:n?.voicevox_speaker_id,voiceCharId:t.voice_character_id}),!n?.voicevox_speaker_id||!t.voice_character_id)return;let i=n.voicevox_speaker_id,a=t.text;e.current=!0;try{let e=await ke(a,i);if(console.log(`[Voicevox] synthesizing:`,{text:a,speakerId:i,hashKey:e}),U.has(e)){console.log(`[Voicevox] cache hit`),await M.playVoice(U.get(e),.9,r);return}let t=`/dojonovel/assets/voicevox/${e}.wav`,n=await fetch(t,{method:`HEAD`}).catch(()=>null);if(n?.ok&&n.headers.get(`content-type`)?.startsWith(`audio/`)){console.log(`[Voicevox] prebuilt hit`),U.set(e,t),await M.playVoice(t,.9,r);return}console.log(`[Voicevox] calling engine...`);let o=await De.synthesize(a,i);if(!o){console.warn(`[Voicevox] synthesize returned null (engine not running?)`);return}console.log(`[Voicevox] playing synthesized audio`);let s=new Blob([o],{type:`audio/wav`}),c=URL.createObjectURL(s);U.set(e,c),await M.playVoice(c,.9,r)}finally{e.current=!1}},[]),stop:(0,a.useCallback)(()=>{M.stopVoice()},[])}}var W={root:`_root_448af_1`,nameplate:`_nameplate_448af_10`,box:`_box_448af_22`,boxNarration:`_boxNarration_448af_32`,text:`_text_448af_42`,textNarration:`_textNarration_448af_48`,arrow:`_arrow_448af_55`,blink:`_blink_448af_1`};function je({message:e,speaker:t,textSpeed:n,onAdvance:r,onSpeakingChange:i}){let[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1),{speak:u,stop:d}=Ae();(0,a.useEffect)(()=>{s(!1),l(!1),u(e,t,()=>i?.(!1)),i?.(!0)},[e.text]);function f(){o?(d(),r()):(d(),l(!0),s(!0),i?.(!1))}let p=t?.name??null,m=!p;return(0,P.jsxs)(`div`,{className:W.root,children:[p&&(0,P.jsx)(`div`,{className:W.nameplate,children:p}),(0,P.jsxs)(`div`,{className:m?W.boxNarration:W.box,onClick:f,children:[(0,P.jsx)(`div`,{className:m?W.textNarration:W.text,children:(0,P.jsx)(Te,{text:e.text,speed:n,instant:c,onComplete:()=>s(!0)})}),o&&(0,P.jsx)(`span`,{className:W.arrow,children:`▼`})]})]})}var Me={root:`_root_13pfy_1`,box:`_box_13pfy_10`,choice:`_choice_13pfy_20`};function Ne({choices:e,flags:t,inventory:n,locationId:r,onSelect:i}){let a={flags:t,inventory:n,locationId:r},o=e.map((e,t)=>({choice:e,originalIndex:t})).filter(({choice:e})=>w(e.condition,a));return(0,P.jsx)(`div`,{className:Me.root,children:(0,P.jsx)(`div`,{className:Me.box,children:o.map(({choice:e,originalIndex:t})=>(0,P.jsx)(`button`,{className:Me.choice,onClick:()=>i(t),children:e.label},t))})})}var G={root:`_root_1l2ff_1`,commands:`_commands_1l2ff_12`,cmd:`_cmd_1l2ff_19`};function Pe({commands:e,onSelect:t}){return(0,P.jsx)(`div`,{className:G.root,children:(0,P.jsx)(`div`,{className:G.commands,children:e.map(e=>(0,P.jsx)(`button`,{className:G.cmd,onClick:()=>t(e.id),title:e.description,children:e.label},e.id))})})}var K={root:`_root_13hn2_1`,area:`_area_13hn2_7`,label:`_label_13hn2_23`,hint:`_hint_13hn2_32`,closeBtn:`_closeBtn_13hn2_44`};function Fe({areas:e,flags:t,inventory:n,locationId:r,onClick:i,onClose:a}){let o={flags:t,inventory:n,locationId:r};return(0,P.jsxs)(`div`,{className:K.root,children:[(0,P.jsx)(`div`,{className:K.hint,children:e.length>0?`調べる場所をクリックしてください`:`調べられるものはない`}),e.filter(e=>w(e.condition,o)).map(e=>(0,P.jsx)(`div`,{className:K.area,style:{left:e.x,top:e.y,width:e.width,height:e.height},onClick:()=>i(e.id),children:(0,P.jsx)(`span`,{className:K.label,children:e.label})},e.id)),(0,P.jsx)(`button`,{className:K.closeBtn,onClick:a,children:`閉じる`})]})}var q={list:`_list_jaxq_1`,item:`_item_jaxq_8`,empty:`_empty_jaxq_26`};function Ie({connections:e,onMove:t,onClose:n}){return(0,P.jsx)(R,{title:`移動先を選択`,onClose:n,children:(0,P.jsx)(`div`,{className:q.list,children:e.length===0?(0,P.jsx)(`p`,{className:q.empty,children:`移動できる場所がありません`}):e.map(e=>(0,P.jsx)(`button`,{className:q.item,onClick:()=>t(e.location_id),children:e.label},e.location_id))})})}var J={card:`_card_ryqrj_1`,cardSelected:`_cardSelected_ryqrj_16`,icon:`_icon_ryqrj_21`,iconPlaceholder:`_iconPlaceholder_ryqrj_27`,name:`_name_ryqrj_38`};function Le({item:e,selected:t,onClick:n}){let[r,i]=(0,a.useState)(!1),o=e.icon?`/dojonovel/assets/${e.icon}`:null;return(0,P.jsxs)(`div`,{className:`${J.card} ${t?J.cardSelected:``}`,onClick:n,children:[o&&!r?(0,P.jsx)(`img`,{className:J.icon,src:o,alt:e.name,onError:()=>i(!0)}):(0,P.jsx)(`div`,{className:J.iconPlaceholder,children:`📦`}),(0,P.jsx)(`span`,{className:J.name,children:e.name})]})}var Y={grid:`_grid_1aak1_1`,empty:`_empty_1aak1_9`,detail:`_detail_1aak1_18`,detailName:`_detailName_1aak1_24`,detailDesc:`_detailDesc_1aak1_30`,actions:`_actions_1aak1_37`};function Re({state:e,masterData:t,onUse:n,onClose:r}){let[i,o]=(0,a.useState)(null),s=e.inventory.map(e=>t.items[e]).filter(e=>!!e),c=i?t.items[i]:null;return(0,P.jsxs)(R,{title:`持ち物`,onClose:r,children:[(0,P.jsx)(`div`,{className:Y.grid,children:s.length===0?(0,P.jsx)(`p`,{className:Y.empty,children:`何も持っていない`}):s.map(e=>(0,P.jsx)(Le,{item:e,selected:e.id===i,onClick:()=>o(e.id===i?null:e.id)},e.id))}),c&&(0,P.jsxs)(`div`,{className:Y.detail,children:[(0,P.jsx)(`div`,{className:Y.detailName,children:c.name}),(0,P.jsx)(`div`,{className:Y.detailDesc,children:c.description}),(0,P.jsxs)(`div`,{className:Y.actions,children:[c.usable&&(0,P.jsx)(I,{label:`使う`,disabled:!se(c.id,e,t),onClick:()=>n(c.id)}),(0,P.jsx)(I,{label:`閉じる`,onClick:r,size:`small`})]})]})]})}var X={body:`_body_bes5q_1`,row:`_row_bes5q_8`,label:`_label_bes5q_14`,slider:`_slider_bes5q_21`,val:`_val_bes5q_27`,footer:`_footer_bes5q_34`};function ze({onClose:e}){let{settings:t,updateSettings:n}=N();return(0,P.jsx)(R,{title:`設定`,onClose:e,children:(0,P.jsxs)(`div`,{className:X.body,children:[(0,P.jsxs)(`div`,{className:X.row,children:[(0,P.jsx)(`label`,{className:X.label,children:`BGM 音量`}),(0,P.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:t.bgmVolume,className:X.slider,onChange:e=>n({bgmVolume:Number(e.target.value)})}),(0,P.jsx)(`span`,{className:X.val,children:Math.round(t.bgmVolume*100)})]}),(0,P.jsxs)(`div`,{className:X.row,children:[(0,P.jsx)(`label`,{className:X.label,children:`SE 音量`}),(0,P.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:t.seVolume,className:X.slider,onChange:e=>n({seVolume:Number(e.target.value)})}),(0,P.jsx)(`span`,{className:X.val,children:Math.round(t.seVolume*100)})]}),(0,P.jsx)(`div`,{className:X.footer,children:(0,P.jsx)(I,{label:`閉じる`,onClick:e,size:`small`})})]})})}var Be={btn:`_btn_c2o6e_1`,menuList:`_menuList_c2o6e_22`};function Ve({onGetSaveData:e,onLoad:t,onTitle:n}){let[r,i]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1);async function u(t){await j().save(t,e())}return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`button`,{className:Be.btn,onClick:()=>i(!0),children:`MENU`}),r&&!o&&!c&&(0,P.jsx)(R,{title:`システムメニュー`,onClose:()=>i(!1),children:(0,P.jsxs)(`div`,{className:Be.menuList,children:[(0,P.jsx)(I,{label:`セーブ / ロード`,onClick:()=>s(!0)}),(0,P.jsx)(I,{label:`設定`,onClick:()=>l(!0)}),(0,P.jsx)(I,{label:`タイトルへ戻る`,onClick:()=>{i(!1),n()}}),(0,P.jsx)(I,{label:`閉じる`,onClick:()=>i(!1),size:`small`})]})}),r&&c&&(0,P.jsx)(ze,{onClose:()=>l(!1)}),r&&o&&(0,P.jsx)(be,{onSave:u,onLoad:e=>{t(e),s(!1),i(!1)},onClose:()=>s(!1)})]})}var Z={overlay:`_overlay_3s7kx_1`,frame:`_frame_3s7kx_10`,cgFadeIn:`_cgFadeIn_3s7kx_1`,left:`_left_3s7kx_18`,right:`_right_3s7kx_23`,center:`_center_3s7kx_28`,progress:`_progress_3s7kx_38`,dot:`_dot_3s7kx_47`,dotActive:`_dotActive_3s7kx_54`},He=2800;function Ue({frames:e,onComplete:t}){let[n,r]=(0,a.useState)(0),i=(0,a.useCallback)(()=>{r(n=>n<e.length-1?n+1:(t(),n))},[e.length,t]);(0,a.useEffect)(()=>{let e=setTimeout(i,He);return()=>clearTimeout(e)},[n,i]);let o=e[n],s=`/dojonovel/assets/${o.src}`;return(0,P.jsxs)(`div`,{className:Z.overlay,onClick:i,children:[(0,P.jsx)(`img`,{src:s,alt:``,className:`${Z.frame} ${Z[o.position]}`},n),(0,P.jsx)(`div`,{className:Z.progress,children:e.map((e,t)=>(0,P.jsx)(`div`,{className:`${Z.dot} ${t===n?Z.dotActive:``}`},t))})]})}var Q={root:`_root_1kifg_1`,leftPanel:`_leftPanel_1kifg_11`,rightPanel:`_rightPanel_1kifg_12`,divider:`_divider_1kifg_19`,scrollWrap:`_scrollWrap_1kifg_30`,scrollUp:`_scrollUp_1kifg_1`,creditMainTitle:`_creditMainTitle_1kifg_46`,creditSection:`_creditSection_1kifg_54`,creditName:`_creditName_1kifg_61`,creditSpacer:`_creditSpacer_1kifg_68`,cgPanel:`_cgPanel_1kifg_73`,cgPanelImg:`_cgPanelImg_1kifg_78`,cgFadeIn:`_cgFadeIn_1kifg_1`,finRoot:`_finRoot_1kifg_94`,finImg:`_finImg_1kifg_104`,finText:`_finText_1kifg_114`,finFadeIn:`_finFadeIn_1kifg_1`},We=`/dojonovel/`,$=12e3,Ge=12e3,Ke=5e3,qe=[{kind:`mainTitle`,text:`赤羽の一日`},{kind:`spacer`},{kind:`section`,text:`STORY & SCRIPT`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`CHARACTER DESIGN`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`VOICE ACTING`},{kind:`name`,text:`VOICEVOX`}],Je=[{kind:`section`,text:`MUSIC`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`PROGRAMMING`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`SPECIAL THANKS`},{kind:`name`,text:`CoderDojo 赤羽`},{kind:`spacer`},{kind:`name`,text:`Thank you for playing.`}];function Ye({items:e,durationSec:t}){return(0,P.jsx)(`div`,{className:Q.scrollWrap,style:{animationDuration:`${t}s`},children:e.map((e,t)=>e.kind===`mainTitle`?(0,P.jsx)(`div`,{className:Q.creditMainTitle,children:e.text},t):e.kind===`section`?(0,P.jsx)(`div`,{className:Q.creditSection,children:e.text},t):e.kind===`name`?(0,P.jsx)(`div`,{className:Q.creditName,children:e.text},t):(0,P.jsx)(`div`,{className:Q.creditSpacer},t))})}function Xe({frames:e}){return(0,P.jsx)(`div`,{className:Q.cgPanel,children:e.map((e,t)=>(0,P.jsx)(`img`,{className:Q.cgPanelImg,src:`${We}assets/${e.src}`,alt:``,style:{animationDelay:`${t*3}s`}},e.src))})}function Ze({frames:e,onTitle:t}){let[n,r]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=setTimeout(()=>r(2),$),n=setTimeout(()=>r(3),$+Ge),i=setTimeout(t,$+Ge+Ke);return()=>{clearTimeout(e),clearTimeout(n),clearTimeout(i)}},[]);let i=e.slice(0,3),o=e.slice(3,5),s=e[e.length-1]??null;return n===3?(0,P.jsxs)(`div`,{className:Q.finRoot,children:[s&&(0,P.jsx)(`img`,{className:Q.finImg,src:`${We}assets/${s.src}`,alt:``}),(0,P.jsx)(`div`,{className:Q.finText,children:`Fin`})]}):(0,P.jsxs)(`div`,{className:Q.root,children:[(0,P.jsx)(`div`,{className:Q.leftPanel,children:n===1?(0,P.jsx)(Ye,{items:qe,durationSec:$/1e3}):(0,P.jsx)(Xe,{frames:o})}),(0,P.jsx)(`div`,{className:Q.divider}),(0,P.jsx)(`div`,{className:Q.rightPanel,children:n===1?(0,P.jsx)(Xe,{frames:i}):(0,P.jsx)(Ye,{items:Je,durationSec:Ge/1e3})})]})}var Qe={root:`_root_1g6a7_1`,cgOverlay:`_cgOverlay_1g6a7_11`,cgFadeIn:`_cgFadeIn_1g6a7_1`};function $e(){let{state:e,masterData:t,advanceMessage:n,selectChoice:r,executeCommand:i,selectTalkTarget:o,completeCgSequence:s,moveToLocation:c,clickArea:l,useItem:u,closeOverlay:d,goToTitle:f,toSaveData:p,loadGame:m}=ge(),{settings:h}=N(),g=t.scenes[e.currentSceneId],_=t.locations[e.currentLocationId],v=g?.messages[e.currentMessageIndex],y=v?.voice_character_id,ee=y?t.characters[y]??null:null,te=fe(g,_,t),b=me(e.currentLocationId,e,t),x=g?.branches?.choices??[],[ne,S]=(0,a.useState)(!1),re=v?.voice_character_id??null,ie=ne&&e.phase===`message`,C=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=g?.bgm;!e||e===C.current||(C.current=e,M.playBgm(`/dojonovel/assets/${e}`,!0,h.bgmVolume))},[g?.bgm]),(0,a.useEffect)(()=>{e.phase===`title`&&(M.stopBgm(),C.current=null)},[e.phase]),(0,P.jsxs)(`div`,{className:Qe.root,children:[(0,P.jsx)(Se,{backgroundPath:g?.background,locationName:_?.name}),e.phase!==`examine`&&e.currentCharacters.map(e=>{let n=t.characters[e.character_id];return n?(0,P.jsx)(Ce,{display:e,character:n,isSpeaking:ie&&e.character_id===re},e.character_id):null}),e.phase===`message`&&g?.overlay_image&&(0,P.jsx)(`div`,{className:Qe.cgOverlay,style:{backgroundImage:`url(/dojonovel/assets/${g.overlay_image})`}}),e.phase===`examine`&&(0,P.jsx)(Fe,{areas:g?.clickable_areas??[],flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId,onClick:l,onClose:d}),e.phase===`message`&&v&&(0,P.jsx)(je,{message:v,speaker:ee,textSpeed:h.textSpeed,onAdvance:n,onSpeakingChange:S}),e.phase===`choice`&&(0,P.jsx)(Ne,{choices:x,flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId,onSelect:r}),e.phase===`talk_select`&&(0,P.jsx)(Ne,{choices:[...e.talkCandidates.map(e=>({label:t.characters[e.characterId]?.name??e.characterId,next_scene:e.sceneId,condition:null})),{label:`やめる`,next_scene:``,condition:null}],flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId,onSelect:t=>t===e.talkCandidates.length?o(-1):o(t)}),e.phase===`command`&&(0,P.jsx)(Pe,{commands:te,onSelect:i}),e.phase===`map`&&(0,P.jsx)(Ie,{connections:b,onMove:c,onClose:d}),e.phase===`inventory`&&(0,P.jsx)(Re,{state:e,masterData:t,onUse:u,onClose:d}),e.phase===`cg_sequence`&&g?.cg_sequence&&(0,P.jsx)(Ue,{frames:g.cg_sequence,onComplete:s}),e.phase!==`ending`&&(0,P.jsx)(Ve,{onGetSaveData:p,onLoad:m,onTitle:f}),e.phase===`ending`&&(0,P.jsx)(Ze,{frames:g?.cg_sequence??[],onTitle:f})]})}var et=`__novel_debug_start__`;function tt(){let[e,t]=(0,a.useState)(()=>Math.min(1,window.innerWidth/800,window.innerHeight/600));return(0,a.useEffect)(()=>{function e(){t(Math.min(1,window.innerWidth/800,window.innerHeight/600))}return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),e}function nt(){let{state:e,startNewGame:t,startDebugGame:n,loadGame:r}=ge(),{loadSettings:i}=N(),o=tt();return(0,a.useEffect)(()=>{i();let e=localStorage.getItem(et);if(e){localStorage.removeItem(et);try{n(JSON.parse(e))}catch{}}},[]),(0,P.jsx)(`div`,{className:`app-wrapper`,children:(0,P.jsx)(`div`,{className:`game-container`,style:{transform:`scale(${o})`},children:e.phase===`title`?(0,P.jsx)(xe,{onNewGame:t,onLoad:r}):(0,P.jsx)($e,{})})})}(0,o.createRoot)(document.getElementById(`root`)).render((0,P.jsx)(a.StrictMode,{children:(0,P.jsx)(nt,{})}));