import{a as e,i as t,l as n,n as r,o as i}from"./js-yaml-DTURmwR3.js";var a=n(i(),1),o=e(),s=`scenes:
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
        overlay_image: cg/dog.jpg
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
        bgm: audio/bgm/ending.mp3
        ending_title: 第1章　赤羽の一日
        messages: []
        game_end: true
        flags_set:
          - flag: flag_chapter1_cleared
            value: true
        cg_sequence:
          - src: cg/juice.jpg
            position: center
          - src: cg/game_man.jpg
            position: center
          - src: cg/happy_dojo.jpg
            position: center
          - src: cg/dog.jpg
            position: center
      - id: scene_ending_cg_sequence
        bgm: audio/bgm/ending.mp3
        ending_title: 第1章　赤羽の一日
        messages: []
        game_end: true
        cg_sequence:
          - src: cg/juice.jpg
            position: center
          - src: cg/game_man.jpg
            position: center
          - src: cg/happy_dojo.jpg
            position: center
          - src: cg/dog.jpg
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

  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    messages:
      - text: 一番街の入り口に来た。
        voice_character_id: null
      - text: アーケードの奥に商店が並んでいるが、今日は特に何もなさそうだ。
        voice_character_id: null
  - id: scene_park_default
    location_id: loc_park
    background: backgrounds/danchimae.jpg
    messages:
      - text: 公園に来た。今日はここでやることはなさそうだ。
        voice_character_id: null
`,c=`scenes:
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchi_day.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_maze_defeated
                value: true
              - has_item: item_candy
                negate: true
          next_scene: scene_danchi_obachan
        - condition: null
          next_scene: scene_danchi_default
    child_scenes:
      - id: scene_danchi_default
        messages:
          - text: 団地に戻ってきた。
            voice_character_id: null
        background: backgrounds/danchimae.jpg
      - id: scene_danchi_obachan
        characters:
          - character_id: char_obachan
            position: left
            expression: normal
        messages:
          - text: 団地の廊下に出ると、向かいの田村のおばちゃんが立っていた。
            voice_character_id: null
          - text: 「あら、ケンちゃん。なんか元気ないねえ」
            voice_character_id: char_obachan
          - text: ……ちょっと、うまくいかなかったことがあって。
            voice_character_id: char_hero
          - text: 「そういうときはね、甘いもん食べたら元気出るよ。ほら、あめちゃんどうぞ」
            voice_character_id: char_obachan
          - text: ありがとう、おばちゃん。
            voice_character_id: char_hero
        item_give:
          - item_id: item_candy
            condition: null
        background: backgrounds/danchimae.jpg
  - id: scene_station_default
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 赤羽駅前に来た。
        voice_character_id: null
    child_scenes:
      - id: scene_examine_hatena
        messages:
          - text: きになるなあ　あれ。。
            voice_character_id: char_hero
      - id: scene_station_plaza_examine
        messages:
          - text: 駅前の広場をぼんやり眺めていたら、見覚えのある張り紙が目に入った。
            voice_character_id: null
          - text: 「CoderDojo赤羽、本日開催中——」
            voice_character_id: null
          - text: そうか、CoderDojoか。あそこなら何かヒントがあるかもしれない。
            voice_character_id: char_hero
        flags_set:
          - flag: flag_station_explored
            value: true
    clickable_areas:
      - id: area_1777816952489
        x: 391
        "y": 354
        width: 43
        height: 52
        label: ？？
        next_scene: scene_examine_hatena
        condition: null
      - id: area_station_plaza
        x: 183
        "y": 316
        width: 173
        height: 121
        label: 駅前の広場
        next_scene: scene_station_plaza_examine
        condition:
          flag: flag_maze_defeated
          value: true
  - id: scene_coderdojo_default
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/coderdojo.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_boss_challenged
                value: true
              - has_item: item_kinchu_hikari
                negate: true
          next_scene: scene_coderdojo_mentor_arrive
        - condition: null
          next_scene: scene_coderdojo_base
    child_scenes:
      - id: scene_coderdojo_mentor_arrive
        characters:
          - character_id: char_mentor
            position: center
            expression: smile
        messages:
          - text: CoderDojo赤羽の会場に入ると、田中メンターが立っていた。
            voice_character_id: null
          - text: 「あれ、ケン君。なんか思い詰めた顔してるね」
            voice_character_id: char_mentor
          - text: 迷宮のボスに負けました。どうしても勝てなくて。
            voice_character_id: char_hero
          - text: 「ボス、か。……実はね、前に似たような話を聞いたことがあるんだ」
            voice_character_id: char_mentor
          - text: 「ちょっと待ってて。棚の奥に何かあったはずだから」
            voice_character_id: char_mentor
        next_scene: scene_coderdojo_mentor_standby
      - id: scene_coderdojo_mentor_standby
        characters:
          - character_id: char_mentor
            position: center
            expression: smile
        messages:
          - text: 田中メンターが棚を探りながら、こちらを向いた。
            voice_character_id: null
        talkable:
          - character_id: char_mentor
            scene_id: scene_ch2_get_ofuda
        child_scenes:
          - id: scene_ch2_get_ofuda
            overlay_image: cg/get_superitem.jpg
            characters:
              - character_id: char_mentor
                position: center
                expression: smile
            messages:
              - text: 「あった。これ、持っていきな。困ったときに使うといい」
                voice_character_id: char_mentor
              - text: 手渡されたそれは、かすかに光を帯びていた。
                voice_character_id: null
              - text: 悪霊退散のおふだ　を手に入れた。
                voice_character_id: null
            item_give:
              - item_id: item_kinchu_hikari
                condition: null
            next_scene: scene_coderdojo_base
      - id: scene_coderdojo_base
        messages:
          - text: CoderDojo赤羽の会場は、今日は静かだった。
            voice_character_id: null
        next_scene: scene_coderdojo_examine_area
        child_scenes:
          - id: scene_coderdojo_examine_area
            messages: []
            clickable_areas:
              - id: area_coderdojo_juice
                x: 89
                "y": 394
                width: 52
                height: 70
                label: ジュース
                next_scene: scene_coderdojo_examine_juice
                condition: null
              - id: area_coderdojo_milktea
                x: 704
                "y": 390
                width: 87
                height: 69
                label: ティー
                next_scene: scene_coderdojo_examine_milktea
                condition: null
            background: backgrounds/coderdojo.jpg
          - id: scene_coderdojo_examine_juice
            messages: []
            branches:
              type: auto
              choices:
                - condition:
                    has_item: item_drink
                    negate: true
                  next_scene: scene_coderdojo_juice_get
                - condition: null
                  next_scene: scene_coderdojo_juice_have
            child_scenes:
              - id: scene_coderdojo_juice_get
                messages:
                  - text: 机の隅に、ジュースが置いてある。
                    voice_character_id: null
                  - text: もらっていいかな。
                    voice_character_id: char_hero
                  - text: ポケットに入れた。
                    voice_character_id: null
                item_give:
                  - item_id: item_drink
                    condition: null
                next_scene: scene_coderdojo_examine_area
              - id: scene_coderdojo_juice_have
                messages:
                  - text: 机の隅にジュースがある。もう持っているからいいか。
                    voice_character_id: char_hero
                next_scene: scene_coderdojo_examine_area
          - id: scene_coderdojo_examine_milktea
            messages: []
            branches:
              type: auto
              choices:
                - condition:
                    has_item: item_milktea
                    negate: true
                  next_scene: scene_coderdojo_milktea_get
                - condition: null
                  next_scene: scene_coderdojo_milktea_have
            child_scenes:
              - id: scene_coderdojo_milktea_get
                messages:
                  - text: ペットボトルのミルクティーが置いてある。おいしそう。
                    voice_character_id: null
                  - text: ラッキー　もらっとこう
                    voice_character_id: char_hero
                item_give:
                  - item_id: item_milktea
                    condition: null
                next_scene: scene_coderdojo_examine_area
              - id: scene_coderdojo_milktea_have
                messages:
                  - text: ミルクティーがある。もう持っているからいいか。
                    voice_character_id: char_hero
                next_scene: scene_coderdojo_examine_area
  - id: scene_slope_default
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/slope.mp3
    messages:
      - text: 団地への坂に来た。
        voice_character_id: null
  - id: scene_ch2_start
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_chapter
        value: 2
      - flag: flag_chapter1_cleared
        value: true
    messages:
      - text: 変な夢を見た。
        voice_character_id: char_hero
      - text: 薄暗い通路が続いていて、出口が見つからない夢だった。
        voice_character_id: null
      - text: 目が覚めると朝の七時。なんとなく一番街が気になって窓の外を見ると、あちらの空だけが重くよどんでいた。
        voice_character_id: null
      - text: スマホを開いたら、ユイからメッセージが届いていた。
        voice_character_id: null
      - text: 「ケン、一番街が変だよ。昨日からお店が急に閉まってて、冷たい空気がするの」
        voice_character_id: char_yui
      - text: 「地下からおかしな音もするって、噂になってる。気になって」
        voice_character_id: char_yui
      - text: なんか、気になる。一番街に行ってみよう。
        voice_character_id: char_hero
  - id: scene_ch2_ichibangai_post
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 一番街の入り口。あの夜以来、この通りにはまた少しだけ光が戻ってきた気がする。
        voice_character_id: null
  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_boss_challenged
                value: true
              - flag: flag_boss_return_yui_seen
                value: true
                negate: true
          next_scene: scene_ichibangai_boss_return
        - condition:
            and:
              - flag: flag_maze_defeated
                value: true
              - flag: flag_boss_challenged
                value: true
                negate: true
              - flag: flag_maze_return_yui_seen
                value: true
                negate: true
          next_scene: scene_ichibangai_maze_return
        - condition:
            flag: flag_boss_challenged
            value: true
          next_scene: scene_ichibangai_boss_ready
        - condition:
            and:
              - flag: flag_maze_defeated
                value: true
              - flag: flag_boss_challenged
                value: true
                negate: true
          next_scene: scene_ichibangai_maze_ready
        - condition: null
          next_scene: scene_ichibangai_first_visit
  - id: scene_ichibangai_first_visit
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages:
      - text: 「ケン、来てくれた。あのゲートの奥だけ、空気が変なの」
        voice_character_id: char_yui
      - text: 「地下から変な音もするって……近づくなら気をつけて」
        voice_character_id: char_yui
    clickable_areas:
      - id: area_ch2_building_strange
        x: 284
        "y": 314
        width: 240
        height: 200
        label: ゲート
        next_scene: scene_ch2_building_approach
        condition: null
    talkable:
      - character_id: char_yui
        scene_id: scene_talk_ichibangai_first_yui
  - id: scene_ichibangai_maze_return
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    flags_set:
      - flag: flag_maze_return_yui_seen
        value: true
    characters:
      - character_id: char_yui
        position: left
        expression: sad
    messages:
      - text: 「ケン！　よかった……戻ってこられたんだね」
        voice_character_id: char_yui
      - text: 「さっき、急に倒れたから本当に怖かった」
        voice_character_id: char_yui
      - text: 「すぐ行かなくてもいいよ。少し息を整えよう」
        voice_character_id: char_yui
    clickable_areas:
      - id: area_ch2_gate_maze_retry
        x: 284
        "y": 314
        width: 240
        height: 200
        label: ゲート
        next_scene: scene_ch2_maze_gameover
        condition: null
    talkable:
      - character_id: char_yui
        scene_id: scene_talk_ichibangai_maze_yui
  - id: scene_ichibangai_boss_return
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    flags_set:
      - flag: flag_boss_return_yui_seen
        value: true
    characters:
      - character_id: char_yui
        position: left
        expression: sad
    messages:
      - text: 「ケン……戻ってきた。よかった、声が聞こえる」
        voice_character_id: char_yui
      - text: 「あいつ、強かったね。もう少しだったのに」
        voice_character_id: char_yui
      - text: 「今は一回、息をしよう。次に行くなら、それからでいい」
        voice_character_id: char_yui
    clickable_areas:
      - id: area_ch2_gate_boss_retry
        x: 284
        "y": 314
        width: 240
        height: 200
        label: ゲート
        next_scene: scene_ch2_boss_gameover
        condition: null
    talkable:
      - character_id: char_yui
        scene_id: scene_talk_ichibangai_boss_yui
  - id: scene_ichibangai_maze_ready
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages: []
    clickable_areas:
      - id: area_ch2_gate_maze_retry_ready
        x: 284
        "y": 314
        width: 240
        height: 200
        label: ゲート
        next_scene: scene_ch2_maze_gameover
        condition: null
    talkable:
      - character_id: char_yui
        scene_id: scene_talk_ichibangai_maze_ready_yui
  - id: scene_ichibangai_boss_ready
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages: []
    clickable_areas:
      - id: area_ch2_gate_boss_retry_ready
        x: 284
        "y": 314
        width: 240
        height: 200
        label: ゲート
        next_scene: scene_ch2_boss_gameover
        condition: null
    talkable:
      - character_id: char_yui
        scene_id: scene_talk_ichibangai_boss_ready_yui
  - id: scene_talk_ichibangai_first_yui
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages:
      - text: 「いつもの一番街なら、もっと人の声がするのに」
        voice_character_id: char_yui
      - text: 「ねえケン、奥に行く前に、ちゃんと準備してね」
        voice_character_id: char_yui
    next_scene: null
  - id: scene_talk_ichibangai_maze_yui
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: sad
    messages:
      - text: 「本当に、戻ってきてくれてよかった」
        voice_character_id: char_yui
      - text: 「怖かったら、少し休んでもいいよ。ケンが決めて」
        voice_character_id: char_yui
    next_scene: null
  - id: scene_talk_ichibangai_boss_yui
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: sad
    messages:
      - text: 「あの瞬間、心臓が止まるかと思った」
        voice_character_id: char_yui
      - text: 「でも戻ってきた。だから、次はちゃんと立て直せる」
        voice_character_id: char_yui
    next_scene: null
  - id: scene_talk_ichibangai_maze_ready_yui
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages:
      - text: 「準備できたら、ゲートを調べて」
        voice_character_id: char_yui
      - text: 「今度は焦らず行こう」
        voice_character_id: char_yui
    next_scene: null
  - id: scene_talk_ichibangai_boss_ready_yui
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages:
      - text: 「あの奥に行くなら、ちゃんと準備してからね」
        voice_character_id: char_yui
      - text: 「次は、最後まで一緒に立っていよう」
        voice_character_id: char_yui
    next_scene: null
  - id: scene_ch2_building_approach
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: left
        expression: normal
    messages:
      - text: 扉が半開きのまま。地下から冷たい空気が漏れてくる。
        voice_character_id: null
      - text: 「ケン……入るの？」
        voice_character_id: char_yui
      - text: うん。この不気味な空気の原因、確かめたい。
        voice_character_id: char_hero
      - text: 「わたしも行く。ひとりにしないで」
        voice_character_id: char_yui
      - text: 階段を降りると——通路が、異様に広がっていた。
        voice_character_id: null
      - text: 前に来たときとは全然違う。まるで迷路だ。
        voice_character_id: char_hero
    next_engine:
      id: maze_rpg
      transition: rift
      config:
        map: dungeon_02
        name: 一番街の異空間
        bgm: audio/bgm/dungeon.mp3
        battleBgm: audio/bgm/buttle.mp3
        theme:
          wallFront: "#584060"
          wallSide: "#2e1e38"
          ceilTop: "#02000c"
          ceilBottom: "#0a0618"
          floorTop: "#060410"
          floorBottom: "#030208"
          uiBg: "#04020e"
          uiAccent: "#c080ff"
          uiBorder: "#3a2060"
        events:
          E: scene_maze_event_01
        itemEffects:
          item_candy:
            healHp: full
          item_fushigi_candy:
            healHp: full
          item_drink:
            healHp: full
          item_milktea:
            healHp: full
          item_kinchu_hikari:
            attackEnemy: 999
      return_scene: scene_ch2_after_maze
      gameover_scene: scene_ch2_maze_gameover
      gameover_boss_scene: scene_ch2_boss_gameover
      gameover_landing_scene: scene_ichibangai_default
  - id: scene_ch2_maze_gameover
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    flags_set:
      - flag: flag_maze_defeated
        value: true
    characters:
      - character_id: char_yui
        position: right
        expression: sad
    messages:
      - text: ゲートに手をかけた瞬間、さっきの冷たい通路が脳裏によみがえった。
        voice_character_id: null
      - text: 「ケン……大丈夫？　顔色、まだ悪いよ」
        voice_character_id: char_yui
      - text: ……なんとか。あの迷路、思ったより手強い。
        voice_character_id: char_hero
      - text: 「怪我はない？　顔色悪いよ」
        voice_character_id: char_yui
      - text: 平気。……でも、まだあの奥が気になる。
        voice_character_id: char_hero
      - text: 「無理しないでよ。……でも、行くなら一緒に行く」
        voice_character_id: char_yui
    next_scene: scene_ch2_maze_retry
  - id: scene_ch2_maze_retry
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: normal
    messages:
      - text: うん。もう一度行こう。
        voice_character_id: char_hero
      - text: 「一緒に行く。今度は気をつけて」
        voice_character_id: char_yui
    next_engine:
      id: __return__
      transition: rift
  - id: scene_ch2_boss_gameover
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    flags_set:
      - flag: flag_boss_challenged
        value: true
    characters:
      - character_id: char_yui
        position: right
        expression: sad
    messages:
      - text: ゲートの奥を見た瞬間、あの強敵の気配が胸の奥を締めつけた。
        voice_character_id: null
      - text: 「ケン……もう少しだったよね。あと一歩で」
        voice_character_id: char_yui
      - text: ……あいつ、強かった。あんな奴が最後に待ってるなんて。
        voice_character_id: char_hero
      - text: 「でも、あそこまで行けたんだよ。入り口から全部通り抜けて——」
        voice_character_id: char_yui
      - text: ……もう一回、行ける。さっきのところまでは分かってるから。
        voice_character_id: char_hero
      - text: 「うん。今度こそ一緒に倒そう」
        voice_character_id: char_yui
    next_scene: scene_ch2_boss_maze_retry
  - id: scene_ch2_boss_maze_retry
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: normal
    messages:
      - text: ——また、あの通路の前に立った。
        voice_character_id: null
      - text: 「準備はいい？」
        voice_character_id: char_yui
      - text: うん。今度は負けない。
        voice_character_id: char_hero
    next_engine:
      id: __return__
      transition: rift
  - id: scene_maze_event_01
    location_id: loc_ichibangai
    background: backgrounds/inner_ichibangai_dark.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
    messages:
      - text: ——突然、視界が歪んだ。
        voice_character_id: null
      - text: そこには、見覚えのある顔があった。
        voice_character_id: null
      - text: 「……田村のおばちゃん？　なんでここに」
        voice_character_id: char_hero
      - text: 「あら、ケンちゃん。こんなとこまで来てがんばってるんやね」
        voice_character_id: char_obachan
      - text: 「ほら、あめちゃん。お腹すいたやろ」
        voice_character_id: char_obachan
      - text: ——気づくと、おばちゃんの姿は消えていた。手のひらの中に、アメが一粒残っていた。
        voice_character_id: null
    item_give:
      - item_id: item_fushigi_candy
        condition:
          has_item: item_fushigi_candy
          negate: true
    next_engine:
      id: __return__
      transition: rift
  - id: scene_ch2_after_maze
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: happy
    messages:
      - text: 出口を抜けると、外の空気がまるで変わっていた。
        voice_character_id: null
      - text: さっきまでの重さが消えて、秋の午後みたいな澄んだ風が一番街に流れていた。
        voice_character_id: null
      - text: 「ケン！　無事だった？　なんか急に——空気が変わったんだけど」
        voice_character_id: char_yui
      - text: うん。なんとか出てこられた。
        voice_character_id: char_hero
      - text: 「あの迷路、何だったんだろ。でも……なんか一番街が戻ってきた気がする」
        voice_character_id: char_yui
      - text: ぼくも、そう思う。
        voice_character_id: char_hero
    next_scene: scene_ch2_drunk_uncle
  - id: scene_ch2_drunk_uncle
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: normal
      - character_id: char_oyaji
        position: left
        expression: normal
    messages:
      - text: そのとき、一番街の入り口の柱にもたれたよれよれのジャンパーのおじさんが目に入った。
        voice_character_id: null
      - text: 「……いやあ、すまんかったのう。わし、飲みすぎてしもうたんじゃ」
        voice_character_id: char_oyaji
      - text: 「え……このおじさん、誰？」
        voice_character_id: char_yui
      - text: 「なんかこう、グビグビッとやったら……商店街がおかしくなってしもうて。ほんまにすまんかった」
        voice_character_id: char_oyaji
      - text: ……もしかして、この人が原因？
        voice_character_id: char_hero
      - text: 「いや、さすがにそれはないでしょ」
        voice_character_id: char_yui
      - text: 「次からはちゃんと家で飲みます。迷惑かけてすまんかったのう……」
        voice_character_id: char_oyaji
      - text: おじさんはふらふらと商店街の奥へ消えていった。
        voice_character_id: null
      - text: ケンとユイは顔を見合わせて、それから同時に笑った。
        voice_character_id: null
    next_scene: scene_ch2_ending_credits
  - id: scene_ch2_ending_credits
    location_id: loc_ichibangai
    bgm: audio/bgm/ending.mp3
    ending_title: 第2章　一番街の異空間
    messages: []
    game_end: true
    flags_set:
      - flag: flag_ch2_cleared
        value: true
    cg_sequence:
      - src: cg/happy_dojo.jpg
        position: center
      - src: cg/obachan_ghost.jpg
        position: center
      - src: cg/get_superitem.jpg
        position: center
      - src: cg/buttle_ichibangai.jpg
        position: center
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
  - id: scene_use_milktea
    overlay_image: cg/happy_juice.jpg
    messages:
      - text: ミルクティーを飲んだ。
        voice_character_id: null
      - text: やさしい甘さで、ほっとする味がした。
        voice_character_id: null
      - text: ……少し、気持ちが落ち着いた。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_use_fushigi_candy
    overlay_image: cg/candy_happy.jpg
    messages:
      - text: 不思議なアメをなめた。
        voice_character_id: null
      - text: ひんやりしているのに、甘くてやさしい味がした。
        voice_character_id: null
      - text: ……体の中から、力が戻ってくる気がした。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_use_kinchu_hikari
    messages:
      - text: 禁酒の光を手に持ってみた。
        voice_character_id: null
      - text: かすかな輝きが、掌に温かく広がる。
        voice_character_id: null
      - text: ……これは、戦いのときに使おう。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_park_default
    location_id: loc_park
    background: backgrounds/danchimae.jpg
    messages:
      - text: 公園に来た。今日はここでやることはなさそうだ。
        voice_character_id: null
`,l=`scenes:
  - id: scene_ch3_start
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_chapter
        value: 3
      - flag: flag_chapter1_cleared
        value: true
      - flag: flag_ch2_cleared
        value: true
    messages:
      - text: 第3章　アーケード街の死闘
        voice_character_id: null
      - text: 一番街での騒動が落ち着いてから、数日が経った。
        voice_character_id: null
      - text: 団地の広場に出ると、田村のおばあさんがベンチに座ってため息をついていた。
        voice_character_id: null
    next_scene: scene_ch3_obachan_intro
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_ch3_second_ticket_got
                value: true
              - flag: flag_ch3_second_ticket_given_to_obachan
                value: false
          next_scene: scene_ch3_danchi_go_arcade_with_second_ticket
        - condition:
            and:
              - flag: flag_ch3_ticket_given_to_bad_kids
                value: true
              - flag: flag_ch3_second_ticket_got
                value: false
          next_scene: scene_ch3_danchi_go_museum_again
        - condition:
            and:
              - flag: flag_ch3_got_ticket
                value: true
              - flag: flag_ch3_ticket_given
                value: false
          next_scene: scene_ch3_ready_to_give_ticket
        - condition:
            and:
              - flag: flag_ch3_helping_obachan
                value: true
              - flag: flag_ch3_museum_unlocked
                value: true
              - flag: flag_ch3_got_ticket
                value: false
          next_scene: scene_ch3_danchi_go_museum
        - condition:
            flag: flag_ch3_helping_obachan
            value: true
          next_scene: scene_ch3_danchi_searching
        - condition: null
          next_scene: scene_ch3_danchi_idle
  - id: scene_station_default
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_ch3_second_ticket_got
                value: true
              - flag: flag_ch3_second_ticket_given_to_obachan
                value: false
          next_scene: scene_ch3_station_go_arcade_with_second_ticket
        - condition:
            and:
              - flag: flag_ch3_ticket_given_to_bad_kids
                value: true
              - flag: flag_ch3_second_ticket_got
                value: false
          next_scene: scene_ch3_station_go_museum_again
        - condition:
            and:
              - flag: flag_ch3_helping_obachan
                value: true
              - flag: flag_ch3_museum_unlocked
                value: false
          next_scene: scene_ch3_station_college
        - condition: null
          next_scene: scene_ch3_station_idle
  - id: scene_museum_default
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_ch3_ticket_given_to_bad_kids
                value: true
              - flag: flag_ch3_second_ticket_got
                value: false
          next_scene: scene_ch3_museum_second_visit
        - condition:
            flag: flag_ch3_second_ticket_got
            value: true
          next_scene: scene_ch3_museum_after_ticket
        - condition:
            flag: flag_ch3_got_ticket
            value: true
          next_scene: scene_ch3_museum_after_ticket
        - condition: null
          next_scene: scene_ch3_museum_receptionist
  - id: scene_coderdojo_default
    location_id: loc_coderdojo
    background: backgrounds/museum.jpg
    bgm: audio/bgm/coderdojo.mp3
    messages:
      - text: CoderDojo赤羽の会場は静かだ。今日は駅前へ戻ったほうがよさそうだ。
        voice_character_id: null
  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 一番街の入口に来た。今は別の場所が気にかかる。
        voice_character_id: null
  - id: scene_slope_default
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/slope.mp3
    messages:
      - text: 団地への坂に来た。駅前のざわめきが、ここまで届いている気がする。
        voice_character_id: null
  - id: scene_park_default
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_ch3_second_ticket_got
                value: true
              - flag: flag_ch3_second_ticket_given_to_obachan
                value: false
          next_scene: scene_ch3_park_go_arcade_with_second_ticket
        - condition:
            and:
              - flag: flag_ch3_ticket_given_to_bad_kids
                value: true
              - flag: flag_ch3_second_ticket_got
                value: false
          next_scene: scene_ch3_park_after_ticket_given
        - condition:
            flag: flag_ch3_ticket_recovered
            value: true
          next_scene: scene_ch3_park_idle
        - condition:
            flag: flag_ch3_ticket_stolen
            value: true
          next_scene: scene_ch3_park_after_ticket_stolen
        - condition: null
          next_scene: scene_ch3_park_idle
  - id: scene_ch3_park_idle
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 公園に来た。子どもたちの声が遠くで弾んでいる。
        voice_character_id: null
  - id: scene_ch3_park_after_ticket_given
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: アメ好きっ子の姿はもうない。公園には、さっきまでの足音だけが残っている気がした。
        voice_character_id: null
      - text: おばちゃんを大会に出すために、もう一枚のチケットを探そう。ミュージアムでもう一度相談できるかもしれない。
        voice_character_id: null
  - id: scene_ch3_park_go_arcade_with_second_ticket
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 公園はすっかり落ち着いている。手の中には、もう一枚のチケットがある。
        voice_character_id: null
      - text: おばちゃんが待つアーケード街へ戻ろう。
        voice_character_id: null
  - id: scene_ch3_park_after_ticket_stolen
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_candy_kid
        position: right
        expression: talking
    messages:
      - text: 公園に駆け込むと、遊具のそばでさっきの子がチケットをひらひらさせていた。
        voice_character_id: null
      - text: 「げっ、追ってきた！　逃げろ！」
        voice_character_id: char_candy_kid
      - text: アメ好きっ子はチケットを握ったまま、公園の奥へ走り出した。
        voice_character_id: null
    branches:
      type: choice
      choices:
        - label: 追いかける
          condition: null
          next_scene: scene_ch3_park_chase_start
  - id: scene_ch3_park_chase_start
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: アメ好きっ子との距離が少しずつ縮まっていく。犬と鳥にぶつからないように追いかけよう。
        voice_character_id: null
    next_engine:
      id: runner_action
      transition: speedline
      config:
        stageId: park_chase_bad_kids
        mode: chase
        name: チケットを取り返せ！
        durationMs: 25000
        bgm: synth:runner
        bgmVolume: 0.24
        backgroundImage: runner/loop_park.jpg
        backgroundLoopWidth: 1352
        playerImage: runner/hero.png
        playerWidth: 74
        playerHeight: 104
        opponentImage: runner/ame.png
        opponentWidth: 58
        opponentHeight: 84
        theme:
          sky: "#182033"
          ground: "#29302e"
          accent: "#ff8f70"
      return_scene: scene_ch3_after_park_chase
  - id: scene_ch3_after_park_chase
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: runner_action_result_park_chase_bad_kids
            value: win
          next_scene: scene_ch3_park_chase_win
        - condition: null
          next_scene: scene_ch3_park_chase_retry
  - id: scene_ch3_park_chase_win
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_candy_kid
        position: right
        expression: normal
    flags_set:
      - flag: flag_ch3_ticket_recovered
        value: true
    messages:
      - text: ケンはアメ好きっ子に追いつき、くしゃくしゃになったチケットを取り返した。
        voice_character_id: null
      - text: 「ご、ごめんなさい！　もう取りません！」
        voice_character_id: char_candy_kid
      - text: アメ好きっ子はうつむきながら、アメちゃんが大好きで、本当はアメちゃんチャレンジに参加したかったのだと話した。
        voice_character_id: char_candy_kid
      - text: 「……そないにアメちゃんが好きやったんか」
        voice_character_id: char_obachan
    next_scene: scene_ch3_obachan_gives_ticket_to_bad_kids
  - id: scene_ch3_obachan_gives_ticket_to_bad_kids
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    overlay_image: cg/give_ticket.jpg
    characters:
      - character_id: char_obachan
        position: right
        expression: talking
    flags_set:
      - flag: flag_ch3_ticket_given_to_bad_kids
        value: true
    messages:
      - text: 「アメちゃんを愛する子は、ほんまはええ子や」
        voice_character_id: char_obachan
      - text: おばちゃんは取り返したチケットを、アメ好きっ子の手にそっと戻した。
        voice_character_id: null
      - text: 「ちゃんと並んで、みんなで楽しむんやで」
        voice_character_id: char_obachan
      - text: アメ好きっ子は何度も頭を下げて、公園の出口へ走っていった。
        voice_character_id: null
      - text: 「ケンちゃん、あの子には楽しんでもらお。うちらは、もう一枚ないかミュージアムで相談してみよか」
        voice_character_id: char_obachan
  - id: scene_ch3_park_chase_retry
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_candy_kid
        position: right
        expression: normal
    messages:
      - text: アメ好きっ子は公園の奥でこちらを見ている。まだチケットは取り返せていない。
        voice_character_id: null
      - text: 犬と鳥をよけながら、もう一度追いかけよう。
        voice_character_id: null
    branches:
      type: choice
      choices:
        - label: もう一度追いかける
          condition: null
          next_scene: scene_ch3_park_chase_retry_start
        - label: いったん立ち去る
          condition: null
          next_scene: scene_ch3_park_cannot_leave
  - id: scene_ch3_park_cannot_leave
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_candy_kid
        position: right
        expression: normal
    messages:
      - text: 公園を出ようとした瞬間、おばちゃんのチケットを握ったアメ好きっ子が目に入った。
        voice_character_id: null
      - text: このまま帰るわけにはいかない。チケットを取り返そう。
        voice_character_id: null
    branches:
      type: choice
      choices:
        - label: もう一度追いかける
          condition: null
          next_scene: scene_ch3_park_chase_retry_start
  - id: scene_ch3_park_chase_retry_start
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: アメ好きっ子の息も少し上がっている。今度はさっきより追いつきやすそうだ。
        voice_character_id: null
    next_engine:
      id: runner_action
      transition: speedline
      config:
        stageId: park_chase_bad_kids
        mode: chase
        name: チケットを取り返せ！
        durationMs: 30000
        bgm: synth:runner
        bgmVolume: 0.24
        chaseStartDistance: 90
        chaseCatchRate: 0.0054
        chaseHitDistancePenalty: 12
        backgroundImage: runner/loop_park.jpg
        backgroundLoopWidth: 1352
        playerImage: runner/hero.png
        playerWidth: 74
        playerHeight: 104
        opponentImage: runner/ame.png
        opponentWidth: 58
        opponentHeight: 84
        theme:
          sky: "#182033"
          ground: "#29302e"
          accent: "#ff8f70"
      return_scene: scene_ch3_after_park_chase
  - id: scene_ch3_obachan_intro
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: 「おばちゃん、どうしたん？　元気なさそうやで」
        voice_character_id: char_hero
      - text: 「あらケンちゃん。実はな……アーケード街でアメちゃんゲットのイベントがあるんやけど」
        voice_character_id: char_obachan
      - text: 「行きたかったんやけど、出遅れてしもうてな。チケット、もう取れへんかったんよ」
        voice_character_id: char_obachan
      - text: 「そのイベント、走りながらアメちゃんを拾うやつやんな。おばちゃんが参加したら絶対楽しいのに」
        voice_character_id: char_hero
      - text: 「ほんまやろ。でもチケットがないとなあ……」
        voice_character_id: char_obachan
      - text: おばちゃんのためにチケットを探してみよう。まずは駅前で情報を集めよう。
        voice_character_id: null
    flags_set:
      - flag: flag_ch3_helping_obachan
        value: true
  - id: scene_ch3_danchi_searching
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages:
      - text: おばちゃんのためにチケットを探している。まずは駅前で話を聞いてみよう。
        voice_character_id: null
  - id: scene_ch3_danchi_go_museum
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages:
      - text: ミュージアムの受付がチケットを持っているらしい。団地のミュージアムへ行ってみよう。
        voice_character_id: null
  - id: scene_ch3_danchi_go_museum_again
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages:
      - text: 最初のチケットはアメ好きっ子に譲った。おばちゃんを大会に出すため、もう一度ミュージアムへ相談しに行こう。
        voice_character_id: null
  - id: scene_ch3_danchi_go_arcade_with_second_ticket
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages:
      - text: もう一枚のチケットは手に入った。おばちゃんが待つアーケード街へ急ごう。
        voice_character_id: null
  - id: scene_ch3_danchi_idle
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages:
      - text: 団地に戻ってきた。
        voice_character_id: null
  - id: scene_ch3_ready_to_give_ticket
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: おばちゃんがまだベンチで待っていた。ポケットの中のチケットが気になった。
        voice_character_id: null
      - text: 「おばちゃん、これ。チケット、見つけてきたで」
        voice_character_id: char_hero
    next_scene: scene_ch3_give_ticket_to_obachan
  - id: scene_ch3_give_ticket_to_obachan
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: talking
    item_remove:
      - item_event_ticket
    flags_set:
      - flag: flag_ch3_ticket_given
        value: true
    messages:
      - text: 「え……！　ケンちゃん、ほんまに……？」
        voice_character_id: char_obachan
      - text: 「うん。ミュージアムの受付さんから直接もらってきた」
        voice_character_id: char_hero
      - text: 「もう、ケンちゃん……ありがとうな。ほな、一緒にアーケードへ行こか！」
        voice_character_id: char_obachan
      - text: おばちゃんの目に光が戻った気がした。
        voice_character_id: null
    next_scene: scene_ch3_goto_arcade
  - id: scene_ch3_station_idle
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 赤羽駅前にいる。おばちゃんのことが気になる。
        voice_character_id: null
  - id: scene_ch3_station_go_museum_again
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 駅前のざわめきの向こうに、団地のミュージアムへ続く道が見える。
        voice_character_id: null
      - text: おばちゃんのために、もう一枚のチケットを頼みに行こう。
        voice_character_id: null
  - id: scene_ch3_station_go_arcade_with_second_ticket
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 駅前の人波を抜けると、アーケード街の垂れ幕が見えた。
        voice_character_id: null
      - text: もう一枚のチケットを、おばちゃんに早く渡そう。
        voice_character_id: null
  - id: scene_ch3_station_college
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_college_student
        position: right
        expression: normal
    messages:
      - text: 駅前に出ると、見たことがある大学生が立ち止まってスマホをいじっていた。
        voice_character_id: null
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch3_talk_college_student
  - id: scene_ch3_talk_college_student
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_college_student
        position: right
        expression: normal
    messages:
      - text: 大学生が顔を上げてこちらを見た。
        voice_character_id: null
      - text: 「あ、こんにちは。なんか困ってます？　この辺ならちょっと詳しいですよ」
        voice_character_id: char_college_student
    next_scene: scene_ch3_college_menu
    child_scenes:
      - id: scene_ch3_college_menu
        messages: []
        branches:
          type: choice
          choices:
            - label: アメちゃんゲットのチケットについて聞く
              next_scene: scene_ch3_college_ticket
            - label: グミのことを聞く
              next_scene: scene_ch3_college_gumi
            - label: ありがとう、もう大丈夫
              next_scene: null
      - id: scene_ch3_college_ticket
        messages:
          - text: 「あ、もしかしてアメちゃんゲットのチケット探してます？」
            voice_character_id: char_college_student
          - text: 「そう！　知ってる？」
            voice_character_id: char_hero
          - text: 「噂ですけど、団地の中のミュージアム、あそこの受付さんが余分に持ってるらしいですよ」
            voice_character_id: char_college_student
          - text: 「ありがとう！　行ってみる！」
            voice_character_id: char_hero
          - text: ミュージアムの受付の人がチケットを持っているらしい。行ってみよう。
            voice_character_id: null
        flags_set:
          - flag: flag_ch3_museum_unlocked
            value: true
        next_scene: scene_ch3_college_menu
      - id: scene_ch3_college_gumi
        messages:
          - text: 「グミ？　ああ、最近ここの駅ビルのコンビニに限定グミが入ってるみたいですよ」
            voice_character_id: char_college_student
          - text: 「限定？　どんなやつ？」
            voice_character_id: char_hero
          - text: 「ソーダ味の激酸っぱいやつです。SNSで話題になってて、すぐ売り切れるらしいんですよね」
            voice_character_id: char_college_student
          - text: 「へえ……機会があったら探してみよ」
            voice_character_id: char_hero
        next_scene: scene_ch3_college_menu
  - id: scene_ch3_museum_receptionist
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: right
        expression: normal
    messages:
      - text: 受付にいたのは、名札を少し斜めにつけた大学生のバイトだった。
        voice_character_id: null
      - text: カウンターの上には、アメちゃんゲット大会のチケットが一枚だけ置かれている。
        voice_character_id: null
    talkable:
      - character_id: char_museum_part_timer
        scene_id: scene_ch3_talk_museum_staff
  - id: scene_ch3_talk_museum_staff
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: right
        expression: talking
    messages:
      - text: 「あのう、チケットをお持ちって聞いたんですが……」
        voice_character_id: char_hero
      - text: 「あっ、はい！ただいまバイトの私しかいなくって、、いいのかな、、　えっと、あります！　……あれ、どこに置いたっけ……あ、ここでした！」
        voice_character_id: char_museum_part_timer
      - text: 「でも受付さんから、渡す前に神経衰弱で確認するようにって言われてて……たぶん、そういう決まりです！」
        voice_character_id: char_museum_part_timer
      - text: 「神経衰弱なら、やってみます」
        voice_character_id: char_hero
    next_engine:
      id: memory_game
      transition: cardflip
      config:
        stageId: museum_part_timer_challenge
        mode: duel
        pairs: 5
        opponentSkill: weak
        title: チケット争奪 神経衰弱
        playerCharacterId: char_hero
        opponentCharacterId: char_museum_part_timer
        opponentDialogue:
          - えっと、さっき見た気がします！
          - たぶんこっち……かな？
          - メモしたいけど、神経衰弱だからだめですよね
        opponentMatchDialogue:
          - あ、そろいました！
          - やった、当たりです！
        opponentMissDialogue:
          - あれ、違いました……
          - すみません、完全に勘でした
          - えへへ、まちがえちゃいました
        playerMatchDialogue:
          - やった！
          - そろった！
        playerMissDialogue:
          - あれ……
          - ちがった
      return_scene: scene_ch3_museum_game_result
  - id: scene_ch3_museum_game_result
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: memory_game_result_museum_part_timer_challenge
            value: win
          next_scene: scene_ch3_museum_win
        - condition: null
          next_scene: scene_ch3_museum_lose
  - id: scene_ch3_museum_win
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: right
        expression: talking
    item_give:
      - item_id: item_event_ticket
        condition: null
    flags_set:
      - flag: flag_ch3_got_ticket
        value: true
    messages:
      - text: 「わあ、強いですね！　私、途中からどれがどれだか分からなくなってました」
        voice_character_id: char_museum_part_timer
      - text: 「あの……チケット、お約束なので……」
        voice_character_id: char_hero
      - text: 「はい、どうぞ！　えっと……なくさないように気をつけてくださいね。私もよくなくすので！」
        voice_character_id: char_museum_part_timer
      - text: 「ありがとうございます！」
        voice_character_id: char_hero
      - text: チケットを手に入れた。おばちゃんのいる団地へ戻ろう。
        voice_character_id: null
  - id: scene_ch3_museum_lose
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: right
        expression: normal
    messages:
      - text: 「あ、私、勝っちゃいました……？　えっと、これで合ってますよね？」
        voice_character_id: char_museum_part_timer
      - text: 「すみません、チケットは勝った人に渡す決まりみたいで……もう一回やります？」
        voice_character_id: char_museum_part_timer
      - text: 「……もう一回、絶対勝ちます！」
        voice_character_id: char_hero
    talkable:
      - character_id: char_museum_part_timer
        scene_id: scene_ch3_talk_museum_staff
  - id: scene_ch3_museum_after_ticket
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    messages:
      - text: もうチケットはもらった。おばちゃんのところへ戻ろう。
        voice_character_id: null
  - id: scene_ch3_museum_second_visit
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: left
        expression: normal
      - character_id: char_museum_staff
        position: right
        expression: talking
    messages:
      - text: ミュージアムへ戻ると、受付には女子大生バイトと美術館員の二人が並んでいた。
        voice_character_id: null
      - text: 「あっ、さっきのチケットの人！　チケット、見つかりましたか？」
        voice_character_id: char_museum_part_timer
      - text: 「見つかったんですけど……アメちゃんが大好きな子に、おばちゃんが譲ったんです」
        voice_character_id: char_hero
      - text: 「話は分かった。アメちゃんを愛する子に譲ったのなら、悪い使い道ではない」
        voice_character_id: char_museum_staff
      - text: 「でも、おばちゃんも大会に出したいんです。もう一枚、お願いできませんか」
        voice_character_id: char_hero
      - text: 「ならば再び勝負だ。今度はわたしが相手をしよう。勝てば、もう一枚を渡す」
        voice_character_id: char_museum_staff
    next_scene: scene_ch3_talk_museum_staff_second
  - id: scene_ch3_talk_museum_staff_second
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: left
        expression: normal
      - character_id: char_museum_staff
        position: right
        expression: talking
    messages:
      - text: 「神経衰弱は記憶の美術館。開かれた札は、すべて心の額縁に飾られる」
        voice_character_id: char_museum_staff
      - text: 「えっと、つまり……さっきより本気ってことです」
        voice_character_id: char_museum_part_timer
      - text: 「負けません。おばちゃんを大会に出すんです」
        voice_character_id: char_hero
    next_engine:
      id: memory_game
      transition: cardflip
      config:
        stageId: museum_staff_second_challenge
        mode: duel
        pairs: 6
        title: 再戦 チケット争奪 神経衰弱
        playerCharacterId: char_hero
        opponentCharacterId: char_museum_staff
        opponentDialogue:
          - この札の気配……覚えたぞ
          - 記憶の扉は開かれている
          - 迷いはない。次はここだ
        opponentMatchDialogue:
          - ふっ、額縁がそろった
          - 見えたぞ、対の記憶が
        opponentMissDialogue:
          - くっ、幻の展示だったか
          - 記憶の回廊が揺らいだ……
        playerMatchDialogue:
          - やった！
          - そろった！
        playerMissDialogue:
          - あれ……
          - ちがった
      return_scene: scene_ch3_museum_second_game_result
  - id: scene_ch3_museum_second_game_result
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: memory_game_result_museum_staff_second_challenge
            value: win
          next_scene: scene_ch3_museum_second_win
        - condition: null
          next_scene: scene_ch3_museum_second_lose
  - id: scene_ch3_museum_second_win
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: left
        expression: normal
      - character_id: char_museum_staff
        position: right
        expression: talking
    item_give:
      - item_id: item_event_ticket
        condition: null
    flags_set:
      - flag: flag_ch3_second_ticket_got
        value: true
    messages:
      - text: 「見事だ。チケットを譲った心も、記憶力も、どちらも本物だった」
        voice_character_id: char_museum_staff
      - text: 「約束だ。もう一枚、正式に渡そう」
        voice_character_id: char_museum_staff
      - text: 「今度はなくさないでくださいね。あ、私が言うのも変ですけど！」
        voice_character_id: char_museum_part_timer
      - text: 「ありがとうございます。今度こそ、おばちゃんを大会に出します」
        voice_character_id: char_hero
      - text: 再びチケットを手に入れた。アーケード街へ戻ろう。
        voice_character_id: null
  - id: scene_ch3_museum_second_lose
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/museum.mp3
    characters:
      - character_id: char_museum_part_timer
        position: left
        expression: normal
      - character_id: char_museum_staff
        position: right
        expression: talking
    messages:
      - text: 「まだ記憶の額縁は完成していないようだな」
        voice_character_id: char_museum_staff
      - text: 「でも、もう少しでした！　きっと次はいけます」
        voice_character_id: char_museum_part_timer
      - text: 「もう一度お願いします。絶対に取りに来ます」
        voice_character_id: char_hero
    talkable:
      - character_id: char_museum_staff
        scene_id: scene_ch3_talk_museum_staff_second
  - id: scene_ch3_goto_arcade
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: talking
    messages:
      - text: アーケード街の入り口に「アメちゃんゲット大会」の垂れ幕が下がっていた。
        voice_character_id: null
      - text: 「おばちゃん、ここやな」
        voice_character_id: char_hero
      - text: 「ケンちゃんのおかげや。ほな、受付前に行こか」
        voice_character_id: char_obachan
    talkable:
      - character_id: char_obachan
        scene_id: scene_ch3_talk_obachan_ticket_stolen
        condition:
          flag: flag_ch3_ticket_stolen
          value: false
  - id: scene_ch3_talk_obachan_ticket_stolen
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: talking
    flags_set:
      - flag: flag_ch3_ticket_stolen
        value: true
    messages:
      - text: 「ケンちゃん、準備はええ？　チケット、受付に見せよか」
        voice_character_id: char_obachan
      - text: おばちゃんが巾着からチケットを出した、その瞬間だった。
        voice_character_id: null
      - text: 「へへっ、アメちゃん大会のチケットや！　もーらい！」
        voice_character_id: char_candy_kid
        characters:
          - character_id: char_candy_kid
            position: left
            expression: talking
          - character_id: char_obachan
            position: right
            expression: talking
      - text: アメ好きっ子が横から飛び出し、チケットを奪って走り去った。
        voice_character_id: null
        characters:
          - character_id: char_candy_kid
            position: left
            expression: talking
          - character_id: char_obachan
            position: right
            expression: talking
      - text: 「ちょ、ちょっと！　それ、おばちゃんの大事なチケットやで！」
        voice_character_id: char_obachan
        characters:
          - character_id: char_obachan
            position: right
            expression: talking
      - text: 通りの人が「あの子、公園のほうへ逃げたぞ！」と叫んだ。
        voice_character_id: null
      - text: アメ好きっ子は公園に向かったようだ。チケットを取り返さないと、イベントには出られない。
        voice_character_id: null
    next_scene: scene_ch3_arcade_ticket_stolen_hint
  - id: scene_ch3_arcade_ticket_stolen_hint
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: おばちゃんはアーケード街の入口で、心配そうに公園の方角を見ている。
        voice_character_id: null
      - text: まずは公園へ向かい、アメ好きっ子からチケットを取り返そう。
        voice_character_id: null
  - id: scene_ch3_arcade_event_start
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: 「では参加者の方、スタートラインへどうぞ！」
        voice_character_id: null
      - text: 「ケンちゃん、見ててね！」
        voice_character_id: char_obachan
    next_engine:
      id: runner_action
      transition: speedline
      config:
        stageId: arcade_deathmatch
        name: アメちゃんゲット大会
        durationMs: 30000
        bgm: synth:runner
        bgmVolume: 0.24
        objectSpeedMultiplier: 1.25
        backgroundImage: runner/arcade_loop.jpg
        backgroundLoopWidth: 1352
        playerImage: runner/obachan.png
        playerWidth: 72
        playerHeight: 104
        theme:
          sky: "#151827"
          ground: "#2a2d32"
          accent: "#f2d16b"
      return_scene: scene_ch3_after_runner
  - id: scene_ch3_after_runner
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: runner_action_score_arcade_deathmatch
            min: 7
          next_scene: scene_ch3_after_runner_many_candy
        - condition:
            flag: runner_action_score_arcade_deathmatch
            min: 4
          next_scene: scene_ch3_after_runner_some_candy
        - condition: null
          next_scene: scene_ch3_after_runner_few_candy
  - id: scene_ch3_after_runner_many_candy
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/ending.mp3
    ending_title: 第3章　アーケード街の死闘
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: アーケードの端まで走り抜けると、おばちゃんが両手いっぱいのアメちゃんを抱えて戻ってきた。
        voice_character_id: null
      - text: 「ケンちゃん、見てた？　まだまだ走れるやろ」
        voice_character_id: char_obachan
      - text: おばちゃんの息は上がっていたけれど、顔は子どもみたいに輝いていた。
        voice_character_id: null
      - text: 「すごいよ、おばちゃん。会場でいちばん楽しそうに走ってた」
        voice_character_id: char_hero
      - text: 「アメちゃんのためなら、足も心も軽うなるんよ」
        voice_character_id: char_obachan
      - text: 拍手の中、おばちゃんは胸を張って笑った。
        voice_character_id: null
      - text: 第3章　アーケード街の死闘　完
        voice_character_id: null
    game_end: true
    flags_set:
      - flag: flag_ch3_cleared
        value: true
    cg_sequence:
      - src: cg/candy_happy.jpg
        position: center
      - src: cg/play_card.jpg
        position: center
      - src: cg/run_park.jpg
        position: center
      - src: cg/mirai.jpg
        position: center
  - id: scene_ch3_after_runner_some_candy
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/ending.mp3
    ending_title: 第3章　アーケード街の死闘
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: ゴールの笛が鳴ると、おばちゃんはアメちゃんを大事そうに握りしめて戻ってきた。
        voice_character_id: null
      - text: 「思ったより、ええ運動になったわあ」
        voice_character_id: char_obachan
      - text: 「途中で犬も鳥も来たのに、最後まで走りきったやん。おばちゃん、かっこよかったで」
        voice_character_id: char_hero
      - text: 「ふふ、ケンちゃんにそう言われたら、今日はもう優勝やね」
        voice_character_id: char_obachan
      - text: 取れた数は多くなくても、おばちゃんの健闘に会場からあたたかい拍手が起きた。
        voice_character_id: null
      - text: 第3章　アーケード街の死闘　完
        voice_character_id: null
    game_end: true
    flags_set:
      - flag: flag_ch3_cleared
        value: true
    cg_sequence:
      - src: cg/candy_happy.jpg
        position: center
      - src: cg/play_card.jpg
        position: center
      - src: cg/run_park.jpg
        position: center
      - src: cg/mirai.jpg
        position: center
  - id: scene_ch3_after_runner_few_candy
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: ゴールまであと少しのところで、おばちゃんは息を切らして立ち止まった。
        voice_character_id: null
      - text: 「あかん、アメちゃんを追いすぎて、足がもつれてしもうた」
        voice_character_id: char_obachan
      - text: 「でも、今の走り出しはよかったよ。もう一回やったら、きっといける」
        voice_character_id: char_hero
      - text: 「せやな。アメちゃんに背中を押してもらって、もう一回だけ走らせてもらおか」
        voice_character_id: char_obachan
      - text: おばちゃんは深呼吸して、スタートラインへ戻っていった。
        voice_character_id: null
    next_scene: scene_ch3_arcade_event_start
  - id: scene_arcade_default
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch3_second_ticket_given_to_obachan
            value: true
          next_scene: scene_ch3_arcade_event_start
        - condition:
            and:
              - flag: flag_ch3_second_ticket_got
                value: true
              - flag: flag_ch3_second_ticket_given_to_obachan
                value: false
          next_scene: scene_ch3_arcade_give_second_ticket
        - condition:
            and:
              - flag: flag_ch3_ticket_given_to_bad_kids
                value: true
              - flag: flag_ch3_second_ticket_got
                value: false
          next_scene: scene_ch3_arcade_need_second_ticket
        - condition:
            flag: flag_ch3_ticket_stolen
            value: true
          next_scene: scene_ch3_arcade_ticket_stolen_hint
        - condition:
            flag: flag_ch3_ticket_given
            value: true
          next_scene: scene_ch3_arcade_with_obachan
        - condition: null
          next_scene: scene_ch3_arcade_no_ticket
  - id: scene_ch3_arcade_no_ticket
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: アーケード街の前に来た。ここがアメちゃんイベントの会場か
        voice_character_id: null
  - id: scene_ch3_arcade_need_second_ticket
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: アーケード街の入口では、イベントの受付が始まっていた。
        voice_character_id: null
      - text: 「アメ好きっ子はきっと楽しんどるやろな。うちらも、もう一枚なんとかせな」
        voice_character_id: char_obachan
      - text: ミュージアムへ戻って、もう一度チケットのことを相談してみよう。
        voice_character_id: null
  - id: scene_ch3_arcade_give_second_ticket
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: talking
    item_remove:
      - item_event_ticket
    flags_set:
      - flag: flag_ch3_second_ticket_given_to_obachan
        value: true
    messages:
      - text: アーケード街へ戻ると、おばちゃんが受付の前で待っていた。
        voice_character_id: null
      - text: 「おばちゃん、もう一枚もらってきたで」
        voice_character_id: char_hero
      - text: 「ほんまに？　ケンちゃん、また走り回ってくれたんやね」
        voice_character_id: char_obachan
      - text: 「今度こそ受付に出そう」
        voice_character_id: char_hero
      - text: 「ありがとうな。アメちゃん、全力で取りに行くで！」
        voice_character_id: char_obachan
    next_scene: scene_ch3_arcade_event_start
  - id: scene_ch3_arcade_with_obachan
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: アーケード街に足を踏み入れた。おばちゃんがスタンバイしている。
        voice_character_id: null
    talkable:
      - character_id: char_obachan
        scene_id: scene_talk_arcade_obachan
  - id: scene_talk_arcade_obachan
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: 「ケンちゃん、準備はええ？　全力で走るで！」
        voice_character_id: char_obachan
    next_engine:
      id: runner_action
      transition: speedline
      config:
        stageId: arcade_deathmatch
        name: アーケード街の死闘
        durationMs: 30000
        bgm: synth:runner
        bgmVolume: 0.24
        objectSpeedMultiplier: 1.25
        backgroundImage: runner/arcade_loop.jpg
        backgroundLoopWidth: 1352
        playerImage: runner/obachan.png
        playerWidth: 72
        playerHeight: 104
        theme:
          sky: "#151827"
          ground: "#2a2d32"
          accent: "#f2d16b"
      return_scene: scene_ch3_after_runner
`,u=`scenes:
  - id: scene_ch4_start
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_chapter
        value: 4
      - flag: flag_chapter1_cleared
        value: true
      - flag: flag_ch2_cleared
        value: true
      - flag: flag_ch3_cleared
        value: true
      - flag: flag_station_explored
        value: true
      - flag: flag_visited_slope
        value: true
      - flag: flag_ch3_museum_unlocked
        value: true
    messages:
      - text: 第4章
        voice_character_id: null
    next_scene: scene_ch4_monologue
  - id: scene_ch4_monologue
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages:
      - text: 五月晴れ。
        voice_character_id: null
      - text: 雲ひとつない青い空に、新緑のにおいが混じっている。
        voice_character_id: null
      - text: アメちゃん大会からしばらく経った。今日は特に予定もない。
        voice_character_id: null
      - text: でも、あの日の笑い声はまだ耳に残っている。
        voice_character_id: char_hero
      - text: おばちゃんが全力で走って、みんなが応援していた。
        voice_character_id: null
      - text: こんな日は、赤羽をぶらぶらしてみようか。
        voice_character_id: char_hero
    next_scene: scene_ch4_obachan_knee
  - id: scene_ch4_obachan_knee
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_obachan_knee_heard
        value: true
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
      - character_id: char_hero
        position: right
        expression: normal
    messages:
      - text: 広場に出ると、田村のおばちゃんがベンチに座っていた。
        voice_character_id: null
      - text: 「あら、ケンちゃん。ちょうどよかった」
        voice_character_id: char_obachan
      - text: 「どうしたんですか、おばちゃん」
        voice_character_id: char_hero
      - text: 「最近、膝がねえ……ずっと痛いんだよ。来年のアメちゃん大会、出れるかどうか分からなくなっちゃって」
        voice_character_id: char_obachan
      - text: 「え……」
        voice_character_id: char_hero
      - text: 「今年みんなと走れたのは良かったけどねえ。来年も走れたらいいなあと思ってたんだけど」
        voice_character_id: char_obachan
      - text: 「ほら、あのときケンちゃん、ずっと応援してくれたでしょう。あれが嬉しくてねえ」
        voice_character_id: char_obachan
      - text: おばちゃんは遠くを見て、静かに笑った。
        voice_character_id: null
      - text: （なんとかしてあげたいけど……）
        voice_character_id: char_hero
    next_scene: null
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
    messages: []
    talkable:
      - character_id: char_obachan
        scene_id: scene_ch4_talk_obachan
    branches:
      type: auto
      choices:
        - condition:
            and:
              - has_item: item_gummy_1
              - has_item: item_gummy_2
              - has_item: item_gummy_3
              - has_item: item_gummy_4
              - has_item: item_gummy_5
              - has_item: item_gummy_6
              - has_item: item_gummy_7
          next_scene: scene_ch4_wish
        - condition:
            and:
              - has_item: item_gummy_1
              - has_item: item_gummy_2
              - has_item: item_gummy_3
              - has_item: item_gummy_4
              - has_item: item_gummy_5
              - has_item: item_gummy_6
              - flag: flag_ch4_obachan_knee_heard
                value: true
          next_scene: scene_ch4_hint_seven
        - condition:
            flag: flag_ch4_obachan_knee_heard
            value: true
          next_scene: null
        - condition: null
          next_scene: scene_ch4_monologue
  - id: scene_station_default
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue3
            value: true
          next_scene: scene_ch4_station_with_college
        - condition:
            and:
              - has_item: item_gummy_2
              - flag: flag_ch4_met_detective
                value: false
          next_scene: scene_ch4_station_detective_notice
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: null
        - condition: null
          next_scene: scene_ch4_station_hint
  - id: scene_ch4_station_hint
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 駅前に出てきた。どこかに行ってみようかな。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_station_detective_notice
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    messages:
      - text: 駅前に出ると、ホームの端の方で誰かがこちらに向かって手招きしているのに気づいた。
        voice_character_id: null
      - text: 中年の男だ。「こっちに来い」というように、大きくジェスチャーしている。
        voice_character_id: null
      - text: （なんだろう……駅の端の方に行ってみるべきか）
        voice_character_id: char_hero
  - id: scene_ch4_station_with_college
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch4_station_college_talk
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue4
            value: true
          next_scene: null
        - condition: null
          next_scene: scene_ch4_station_college_first
  - id: scene_ch4_station_college_first
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch4_station_college_talk
    messages: []
    next_scene: null
  - id: scene_ch4_station_college_talk
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue4
            value: true
          next_scene: scene_ch4_station_college_repeat
        - condition: null
          next_scene: scene_ch4_station_college_clue4
  - id: scene_ch4_station_college_clue4
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    flags_set:
      - flag: flag_ch4_detective_clue4
        value: true
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages:
      - text: 「あ！　ケンくん、ちょうどよかった！」
        voice_character_id: char_college_student
      - text: 「どうしたんですか？」
        voice_character_id: char_hero
      - text: 「さっきあの子猫、また見かけたんです。改札の前を走り抜けて、公園の方へ向かっていきました！」
        voice_character_id: char_college_student
      - text: 「公園！？アーケード街の方か」
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_station_college_repeat
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages:
      - text: 「公園が怪しいと思うよ！」
        voice_character_id: char_college_student
    next_scene: null
  - id: scene_coderdojo_default
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_kinchu_hikari
          next_scene: scene_ch4_coderdojo_area
        - condition:
            flag: flag_ch4_maze_appeared
            value: true
          next_scene: scene_ch4_coderdojo_area
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: scene_ch4_coderdojo_area
        - condition: null
          next_scene: scene_ch4_coderdojo_first
  - id: scene_ch4_coderdojo_first
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_mentor
        position: center
        expression: normal
    messages:
      - text: 今日はCoderDojoの日だ。田中メンターが来ていた。
        voice_character_id: null
    next_scene: scene_ch4_coderdojo_area
  - id: scene_ch4_coderdojo_area
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_mentor
        position: center
        expression: normal
    talkable:
      - character_id: char_mentor
        scene_id: scene_ch4_coderdojo_mentor
    clickable_areas:
      - id: area_ch4_coderdojo_juice
        x: 89
        "y": 394
        width: 52
        height: 70
        label: ジュース
        next_scene: scene_ch4_coderdojo_examine_juice
        condition: null
      - id: area_ch4_coderdojo_milktea
        x: 704
        "y": 390
        width: 87
        height: 69
        label: ティー
        next_scene: scene_ch4_coderdojo_examine_milktea
        condition: null
    messages: []
    child_scenes:
      - id: scene_ch4_coderdojo_examine_juice
        location_id: loc_coderdojo
        messages: []
        branches:
          type: auto
          choices:
            - condition:
                has_item: item_drink
              next_scene: scene_ch4_coderdojo_juice_have
            - condition: null
              next_scene: scene_ch4_coderdojo_juice_get
        child_scenes:
          - id: scene_ch4_coderdojo_juice_get
            location_id: loc_coderdojo
            item_give:
              - item_id: item_drink
                condition: null
            messages:
              - text: 机の上に置きっぱなしのジュースがある。
                voice_character_id: null
              - text: （もらっておこう）
                voice_character_id: char_hero
            next_scene: null
          - id: scene_ch4_coderdojo_juice_have
            location_id: loc_coderdojo
            messages:
              - text: ジュースはもう持っている。
                voice_character_id: null
            next_scene: null
      - id: scene_ch4_coderdojo_examine_milktea
        location_id: loc_coderdojo
        messages: []
        branches:
          type: auto
          choices:
            - condition:
                has_item: item_milktea
              next_scene: scene_ch4_coderdojo_milktea_have
            - condition: null
              next_scene: scene_ch4_coderdojo_milktea_get
        child_scenes:
          - id: scene_ch4_coderdojo_milktea_get
            location_id: loc_coderdojo
            item_give:
              - item_id: item_milktea
                condition: null
            messages:
              - text: 机の端にミルクティーが置いてある。まだ温かそうだ。
                voice_character_id: null
              - text: （もらっておこう）
                voice_character_id: char_hero
            next_scene: null
          - id: scene_ch4_coderdojo_milktea_have
            location_id: loc_coderdojo
            messages:
              - text: ミルクティーはもう持っている。
                voice_character_id: null
            next_scene: null
  - id: scene_ch4_coderdojo_mentor
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_mentor
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_kinchu_hikari
          next_scene: scene_ch4_coderdojo_done
        - condition:
            flag: flag_ch4_maze_appeared
            value: true
          next_scene: scene_ch4_coderdojo_ofuda
        - condition: null
          next_scene: scene_ch4_coderdojo_chat
  - id: scene_ch4_coderdojo_chat
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_mentor
        position: center
        expression: normal
    messages:
      - text: 「おー、ケンちゃん！　今日もがんばろう」
        voice_character_id: char_mentor
      - text: 「はい」
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_coderdojo_ofuda
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    overlay_image: cg/get_superitem.jpg
    characters:
      - character_id: char_mentor
        position: center
        expression: normal
    item_give:
      - item_id: item_kinchu_hikari
        condition: null
    messages:
      - text: 「田中メンター……一番街に変な霧が出てて、迷路みたいになってて」
        voice_character_id: char_hero
      - text: 「え、本当に？　それはまずいんじゃないかな」
        voice_character_id: char_mentor
      - text: メンターはカバンをごそごそ探って、折り畳まれた紙を取り出した。
        voice_character_id: null
      - text: 「これ、知り合いにもらったおふだだよ。よくわからないけど、一応持っておいて」
        voice_character_id: char_mentor
      - text: 「悪霊退散って書いてある……」
        voice_character_id: char_hero
      - text: 「気持ちの問題だよ。でも、いざとなったら使ってみ」
        voice_character_id: char_mentor
      - text: おふだを受け取った。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_coderdojo_done
    location_id: loc_coderdojo
    background: backgrounds/coderdojo.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_mentor
        position: center
        expression: normal
    messages:
      - text: 「おふだ、役に立った？」
        voice_character_id: char_mentor
      - text: 「はい、助かりました」
        voice_character_id: char_hero
      - text: 「そりゃよかった。デバッグも根気だよ」
        voice_character_id: char_mentor
    next_scene: null
  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_oyaji
        position: center
        expression: normal
    messages: []
    talkable:
      - character_id: char_oyaji
        scene_id: scene_ch4_ichibangai_oyaji
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_6
          next_scene: null
        - condition:
            flag: flag_ch4_yui_maze_met
            value: true
          next_scene: scene_ch4_ichibangai_yui_ready
        - condition:
            item_count:
              items:
                - item_gummy_1
                - item_gummy_2
                - item_gummy_3
                - item_gummy_4
                - item_gummy_5
                - item_gummy_6
                - item_gummy_7
              min: 3
          next_scene: scene_ch4_ichibangai_yui
        - condition: null
          next_scene: null
  - id: scene_arcade_default
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters: []
    messages:
      - text: アーケード街。あのアメちゃん大会が懐かしい。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_arcade_no_quest
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    bgm: audio/bgm/station.mp3
    characters: []
    messages:
      - text: アーケード街。あのアメちゃん大会が懐かしい。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_park_default
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue4
            value: true
          next_scene: scene_ch4_park_with_cat
        - condition:
            has_item: item_gummy_2
          next_scene: scene_ch4_park_after_trade
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: scene_ch4_park_candy_kid
        - condition: null
          next_scene: scene_ch4_park_no_quest
  - id: scene_ch4_park_candy_kid
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_candy_kid
        position: center
        expression: normal
    talkable:
      - character_id: char_candy_kid
        scene_id: scene_ch4_park_talk
    messages: []
  - id: scene_ch4_park_after_trade
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters: []
    messages:
      - text: 公園に来た。少年の姿はもうなかった。
        voice_character_id: char_hero
  - id: scene_ch4_park_with_cat
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters: []
    clickable_areas:
      - id: area_park_bench_cat
        x: 49
        "y": 372
        width: 91
        height: 47
        label: ベンチの下
        next_scene: scene_ch4_park_find_cat
        condition:
          flag: flag_ch4_detective_solved
          value: false
      - id: area_park_bench_wallet
        x: 51
        "y": 375
        width: 91
        height: 44
        label: ベンチの下
        next_scene: scene_ch4_park_find_wallet
        condition:
          and:
            - flag: flag_ch4_detective_solved
              value: true
            - has_item: item_wallet
              negate: true
    messages:
      - text: 赤羽公園。ベンチの下に何かいるような気がする。
        voice_character_id: char_hero
    next_scene: null
    child_scenes:
      - id: scene_ch4_park_find_wallet
        location_id: loc_park
        item_give:
          - item_id: item_wallet
            condition: null
        messages:
          - text: ベンチの下をもう一度よく覗いてみた。
            voice_character_id: null
          - text: ——小さな財布が、奥に挟まるように落ちていた。さっきは子猫の陰になっていて気づかなかったようだ。
            voice_character_id: null
          - text: （これ……梅の木公園のバイトのひとが探してたやつだ。届けに行かないと）
            voice_character_id: char_hero
        next_scene: null
  - id: scene_ch4_park_find_cat
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_detective_solved
        value: true
    characters:
      - character_id: char_hero
        position: right
        expression: normal
    item_give:
      - item_id: item_gummy_4
        condition: null
    messages:
      - text: ベンチの下を覗いてみると——小さな子猫がまるまって、金属のペンダントを前足で押さえていた。
        voice_character_id: null
      - text: 「あっ……！」
        voice_character_id: char_hero
      - text: 後ろから探偵おやじが走ってきた。途中で柱に頭をぶつけたが、気にしていないようだった。
        voice_character_id: null
        characters:
          - character_id: char_detective
            position: left
            expression: normal
          - character_id: char_hero
            position: right
            expression: normal
      - text: 「見つけたぞ！！」
        voice_character_id: char_detective
      - text: 「子猫よ……戻ってきてくれたか」
        voice_character_id: char_detective
      - text: 探偵はペンダントをそっと受け取り、大切そうに胸にしまった。
        voice_character_id: null
      - text: 「ありがとう、ケン。約束どおり、これを受け取ってくれ」
        voice_character_id: char_detective
      - text: 探偵はポケットからグミをひとつ取り出して、名残惜しそうに一度だけ眺めた。
        voice_character_id: null
      - text: 「……本当は夜食にするつもりだったが、約束は約束だ」
        voice_character_id: char_detective
      - text: グミを受け取った。
        voice_character_id: null
      - text: ——子猫が去り、ベンチの下が静かになった。なんとなく、まだ何か落ちていそうな気がする。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_park_no_quest
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters: []
    messages:
      - text: 赤羽公園。今日はのんびりした雰囲気だ。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_museum_default
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_staff
        position: center
        expression: normal
    messages: []
    talkable:
      - character_id: char_museum_staff
        scene_id: scene_ch4_museum_staff
        condition:
          flag: flag_ch4_gummy_quest
          value: true
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_3
          next_scene: null
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: null
        - condition: null
          next_scene: scene_ch4_museum_no_quest
  - id: scene_ch4_museum_no_quest
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    characters: []
    messages:
      - text: 団地のミュージアム。今日は特に用事はない。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_slope_default
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages: []
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch4_slope_college
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: null
        - condition: null
          next_scene: scene_ch4_slope_first
  - id: scene_ch4_slope_first
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch4_slope_college
    messages:
      - text: 団地への坂道。風が気持ちいい。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_plum_park_default
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue2
            value: true
          next_scene: scene_ch4_plum_park_with_baito
        - condition: null
          next_scene: scene_ch4_plum_park_no_quest
  - id: scene_ch4_plum_park_no_quest
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    characters: []
    messages:
      - text: 梅の木公園。もう花の季節ではなく緑が生い茂っている。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_plum_park_with_baito
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_part_timer
        position: center
        expression: normal
    talkable:
      - character_id: char_museum_part_timer
        scene_id: scene_ch4_plum_park_baito
    messages:
      - text: 梅の木公園。古い梅の木のそばに、ミュージアムのバイトの人がいる。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_plum_park_baito
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_part_timer
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_wallet
          next_scene: scene_ch4_plum_park_wallet_return
        - condition:
            has_item: item_gummy_5
          next_scene: scene_ch4_plum_park_baito_done
        - condition:
            flag: flag_ch4_detective_clue3
            value: true
          next_scene: scene_ch4_plum_park_baito_repeat
        - condition: null
          next_scene: scene_ch4_plum_park_baito_clue3
  - id: scene_ch4_plum_park_baito_clue3
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_detective_clue3
        value: true
    characters:
      - character_id: char_museum_part_timer
        position: center
        expression: normal
    messages:
      - text: 「あ、ケン君。こんにちは。実はここで財布なくしちゃって。ずっと探してるんですけど全然見つからなくて」
        voice_character_id: char_museum_part_timer
      - text: 「財布……」
        voice_character_id: char_hero
      - text: 「あ、いいんですよもうすこし探します。よく落としちゃうんですよね」
        voice_character_id: char_museum_part_timer
      - text: 「あの……実は僕も子猫を探してるんですけど、見ませんでしたか？　こっちに来たらしくて」
        voice_character_id: char_hero
      - text: 「あ！　さっきいましたよ！　梅の木の根元でしばらくじっとしてたんですけど、急に走り出して……」
        voice_character_id: char_museum_part_timer
      - text: 「どっちへ？」
        voice_character_id: char_hero
      - text: 「駅の方へ走っていきました。めちゃ速かったです」
        voice_character_id: char_museum_part_timer
      - text: 「駅！　ありがとうございます！」
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_plum_park_baito_repeat
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_part_timer
        position: center
        expression: normal
    messages:
      - text: 「駅の方へ走っていきましたよ、確かに。財布も探してるんですよね……」
        voice_character_id: char_museum_part_timer
    next_scene: null
  - id: scene_ch4_plum_park_wallet_return
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_part_timer
        position: center
        expression: normal
    item_give:
      - item_id: item_gummy_5
        condition: null
    item_remove:
      - item_wallet
    messages:
      - text: 「あの、これ……財布じゃないですか？」
        voice_character_id: char_hero
      - text: 「え！？」
        voice_character_id: char_museum_part_timer
      - text: 「公園のベンチの下で見つけました。猫が持ってたみたいで」
        voice_character_id: char_hero
      - text: 「本当に！？　よかったー！！　ずっと探してたんです！！」
        voice_character_id: char_museum_part_timer
      - text: 「よかったです」
        voice_character_id: char_hero
      - text: 「お礼に……これ、もらいものなんですけど、よかったら」
        voice_character_id: char_museum_part_timer
      - text: バイトはポケットからグミをひとつ取り出して、ケンに差し出した。
        voice_character_id: null
      - text: 「なくさないように気をつけてくださいね。私もよくなくすので！」
        voice_character_id: char_museum_part_timer
      - text: グミを受け取った。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_plum_park_baito_done
    location_id: loc_plum_park
    background: backgrounds/umenoki_park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_part_timer
        position: center
        expression: normal
    messages:
      - text: 「財布も見つかって、本当に助かりました！　グミ集め、がんばってください！」
        voice_character_id: char_museum_part_timer
    next_scene: null
  - id: scene_station_end_default
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages: []
    talkable:
      - character_id: char_detective
        scene_id: scene_ch4_detective
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_4
          next_scene: null
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: null
        - condition: null
          next_scene: scene_ch4_station_end_no_quest
  - id: scene_ch4_station_end_no_quest
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters: []
    messages:
      - text: 駅の端。ホームの隅で、電車が遠ざかっていく。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_slope_college
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue1
            value: true
          next_scene: scene_ch4_slope_college_repeat
        - condition:
            and:
              - has_item: item_gummy_1
              - flag: flag_ch4_met_detective
                value: true
          next_scene: scene_ch4_slope_college_clue
        - condition: null
          next_scene: scene_ch4_slope_college_first
  - id: scene_ch4_slope_college_first
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_gummy_quest
        value: true
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    item_give:
      - item_id: item_gummy_1
        condition: null
    messages:
      - text: 「あ、こんにちは！　散歩ですか？」
        voice_character_id: char_college_student
      - text: 「うん。特に用事もないから、ぶらぶらしてて」
        voice_character_id: char_hero
      - text: 「そういえば、ちょっと面白い話、知ってますか？」
        voice_character_id: char_college_student
      - text: 「面白い話？」
        voice_character_id: char_hero
      - text: 「この赤羽には昔から伝わる言い伝えがあって……七つのグミを集めると、願いが叶うって言うんですよ」
        voice_character_id: char_college_student
      - text: 「七つのグミ……」
        voice_character_id: char_hero
      - text: 「もちろん、ただの都市伝説かもしれません。でも、誰かのために集めると効くって話なんです」
        voice_character_id: char_college_student
      - text: 「ほら、これ。僕が持ってたグミのひとつ。よかったら最初の一個、どうぞ」
        voice_character_id: char_college_student
      - text: ケンの頭に、おばちゃんの顔が浮かんだ。
        voice_character_id: null
      - text: （おばちゃんの膝が治るように……七つ集めてみよう）
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_slope_college_repeat
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages: []
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch4_slope_college_clue
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch4_detective_clue1
            value: true
          next_scene: null
        - condition: null
          next_scene: null
  - id: scene_ch4_slope_college_clue
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_detective_clue1
        value: true
    characters:
      - character_id: char_college_student
        position: center
        expression: normal
    messages:
      - text: 「あ、そういえば今日、駅の端の方から小さな子猫が走ってくるのを見ましたよ」
        voice_character_id: char_college_student
      - text: 「子猫？　何か咥えてた？」
        voice_character_id: char_hero
      - text: 「そうなんです！　光るものを口に咥えたまま、団地の方へ向かっていきました」
        voice_character_id: char_college_student
      - text: 「団地の方へ……」
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_park_talk
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_candy_kid
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_2
          next_scene: scene_ch4_park_done
        - condition:
            has_item: item_candy
          next_scene: scene_ch4_park_trade
        - condition: null
          next_scene: scene_ch4_park_no_candy
  - id: scene_ch4_park_trade
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_candy_kid
        position: center
        expression: normal
    item_give:
      - item_id: item_gummy_2
        condition: null
    item_remove:
      - item_candy
    messages:
      - text: 「あ、ケン兄ちゃん！　グミ集めてるって聞いたよ！」
        voice_character_id: char_candy_kid
      - text: 「え、もう知ってるの？」
        voice_character_id: char_hero
      - text: 「おばちゃんから聞いた！　ぼくんちにグミあるよ！　アメちゃんと交換して！」
        voice_character_id: char_candy_kid
      - text: 「……いいよ。じゃあこれ」
        voice_character_id: char_hero
      - text: 「やった！　このアメちゃん、田村のおばちゃんのやつだ。包み紙の折り方で分かるんだ」
        voice_character_id: char_candy_kid
      - text: アメちゃんをひとつ渡すと、少年は嬉しそうにグミをくれた。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_park_no_candy
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_candy_kid
        position: center
        expression: normal
    messages:
      - text: 「ケン兄ちゃん！　グミ欲しかったらアメちゃんと交換してよ！」
        voice_character_id: char_candy_kid
      - text: 「アメちゃんか……今は持ってないな」
        voice_character_id: char_hero
      - text: 「田村のおばちゃん、いつも持ってるよ。お願いしたらくれるかも！」
        voice_character_id: char_candy_kid
      - text: 「おばちゃんに聞いてみようかな」
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_park_done
    location_id: loc_park
    background: backgrounds/park.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_candy_kid
        position: center
        expression: normal
    messages:
      - text: 「グミ、ちゃんと持ってる？ 全部集めてね！」
        voice_character_id: char_candy_kid
    next_scene: null
  - id: scene_ch4_museum_staff
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_staff
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_3
          next_scene: scene_ch4_museum_done
        - condition: null
          next_scene: scene_ch4_museum_challenge
  - id: scene_ch4_museum_challenge
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_staff
        position: center
        expression: talking
    messages:
      - text: 「ふはは……来たな、グミを求める者よ」
        voice_character_id: char_museum_staff
      - text: 「え、知ってるの？」
        voice_character_id: char_hero
      - text: 「我が秘蔵のグミ、欲しくば勝負せよ……フラッシュ暗算じゃ！」
        voice_character_id: char_museum_staff
      - text: 「フラッシュ暗算？」
        voice_character_id: char_hero
      - text: 「次々と現れる数を頭で足していくのじゃ。5問中4問正解すれば合格！」
        voice_character_id: char_museum_staff
      - text: 「わかった。やってみる」
        voice_character_id: char_hero
    next_engine:
      id: flash_calc
      transition: numberstorm
      config:
        difficulty: easy
        rounds: 5
      return_scene: scene_ch4_museum_result
  - id: scene_ch4_museum_result
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flash_calc_passed
            value: true
          next_scene: scene_ch4_museum_win
        - condition: null
          next_scene: scene_ch4_museum_lose
  - id: scene_ch4_museum_win
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_museum_duel_won
        value: true
    characters:
      - character_id: char_museum_staff
        position: center
        expression: normal
    item_give:
      - item_id: item_gummy_3
        condition: null
    messages:
      - text: 「ぐ……！　我としたことが……」
        voice_character_id: char_museum_staff
      - text: 「……約束どおり、このグミを渡そう。まあ……見どころのある者じゃ」
        voice_character_id: char_museum_staff
      - text: グミを受け取った。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_museum_lose
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_staff
        position: center
        expression: normal
    messages:
      - text: 「くっくっく……4問以上当てれば合格じゃ。まだ修行が足りぬな」
        voice_character_id: char_museum_staff
      - text: 「……もう一回！」
        voice_character_id: char_hero
    next_scene: scene_ch4_museum_challenge
  - id: scene_ch4_museum_done
    location_id: loc_museum
    background: backgrounds/museum.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_museum_staff
        position: center
        expression: normal
    messages:
      - text: 「残り少ないな、グミ集め。……健闘を祈る」
        voice_character_id: char_museum_staff
    next_scene: null
  - id: scene_ch4_detective
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_4
          next_scene: scene_ch4_detective_done
        - condition:
            flag: flag_ch4_detective_solved
            value: true
          next_scene: scene_ch4_detective_done
        - condition:
            flag: flag_ch4_detective_clue3
            value: true
          next_scene: scene_ch4_detective_wait_clue4
        - condition:
            flag: flag_ch4_detective_clue2
            value: true
          next_scene: scene_ch4_detective_wait_clue3
        - condition:
            flag: flag_ch4_detective_clue1
            value: true
          next_scene: scene_ch4_detective_wait_clue2
        - condition:
            flag: flag_ch4_met_detective
            value: true
          next_scene: scene_ch4_detective_wait_clue1
        - condition: null
          next_scene: scene_ch4_detective_intro
  - id: scene_ch4_detective_intro
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    flags_set:
      - flag: flag_ch4_met_detective
        value: true
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages:
      - text: ホームの端に、中年男性が立っていた。
        voice_character_id: null
      - text: 男は自動販売機の下をのぞきこんで、落ちていた十円玉をすばやくポケットに入れた。
        voice_character_id: null
      - text: 「……おや、見てたか。これは現場保存というやつだ」
        voice_character_id: char_detective
      - text: 「え、探偵さん？」
        voice_character_id: char_hero
      - text: 「そうだ。赤羽の探偵、と呼んでくれ。交番には顔が利く。主に、怒られる方でな」
        voice_character_id: char_detective
      - text: 「俺のロケットペンダント、さっきここのベンチで子猫に取られてしまったんだ。大事な形見でな」
        voice_character_id: char_detective
      - text: 「子猫が……ペンダントを？」
        voice_character_id: char_hero
      - text: 「そうだ。赤羽のどこかに逃げたはずだが……俺は今、駅員に見つかるとちょっとまずい」
        voice_character_id: char_detective
      - text: 「何したんですか」
        voice_character_id: char_hero
      - text: 「切符をなくしただけだ。たぶん。細かいことはいい。情報を集めて、どこへ行ったか突き止めてくれないか。礼はするぞ」
        voice_character_id: char_detective
      - text: 「子猫は団地への坂道あたりへ走ったように見えた。まずあのあたりにいる人に聞いてみてくれ」
        voice_character_id: char_detective
      - text: 「わかりました。調べてみます」
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_detective_wait_clue1
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages:
      - text: 「どうだ、坂道あたりで何か分かったか」
        voice_character_id: char_detective
      - text: 探偵おやじは売店の試食品を、やけに堂々と三つ食べていた。
        voice_character_id: null
      - text: 「まだで……」
        voice_character_id: char_hero
      - text: 「団地への坂に若い大学生がよくいるだろ。あいつに聞いてみてくれ」
        voice_character_id: char_detective
    next_scene: null
  - id: scene_ch4_detective_wait_clue2
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages:
      - text: 「大学生から話を聞いたか。次は団地のおばちゃんに聞いてみてくれ。あの人は、この辺りを一番よく見てる」
        voice_character_id: char_detective
    next_scene: null
  - id: scene_ch4_detective_wait_clue3
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages:
      - text: 「おばちゃんから梅の木公園と聞いたか。次はあの公園だ。あのあたりに詳しいやつがいるはずだ」
        voice_character_id: char_detective
    next_scene: null
  - id: scene_ch4_detective_wait_clue4
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages:
      - text: 「もうあとは赤羽公園のベンチの下を確認するだけだ。急いでくれ」
        voice_character_id: char_detective
    next_scene: null
  - id: scene_ch4_detective_done
    location_id: loc_station_end
    background: backgrounds/ekihaji.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_detective
        position: center
        expression: normal
    messages:
      - text: 「ペンダントも無事戻った。本当に助かったよ、ありがとう」
        voice_character_id: char_detective
    next_scene: null
  - id: scene_ch4_talk_obachan
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            and:
              - flag: flag_ch4_gummy_quest
                value: true
              - has_item: item_candy
                negate: true
              - has_item: item_gummy_2
                negate: true
          next_scene: scene_ch4_obachan_candy
        - condition:
            and:
              - flag: flag_ch4_detective_clue1
                value: true
              - flag: flag_ch4_detective_clue2
                value: false
          next_scene: scene_ch4_obachan_clue2
        - condition: null
          next_scene: scene_ch4_obachan_chat
  - id: scene_ch4_obachan_candy
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: talking
      - character_id: char_hero
        position: right
        expression: normal
    item_give:
      - item_id: item_candy
        condition: null
    messages:
      - text: 「七つのグミ、集めることにしたんだねえ」
        voice_character_id: char_obachan
      - text: 「うん。まだ本当に願いが叶うかは分からないけど」
        voice_character_id: char_hero
      - text: 「分からないことに本気になるのが、子どもの強さだよ」
        voice_character_id: char_obachan
      - text: おばちゃんは買い物袋をごそごそ探って、小さなアメちゃんをひとつ取り出した。
        voice_character_id: null
      - text: 「これ、持っておいき。赤羽ではね、アメちゃんは挨拶にも、仲直りにも、交渉にも使えるんだから」
        voice_character_id: char_obachan
      - text: 「交渉……？」
        voice_character_id: char_hero
      - text: 「ふふ。ケンちゃんなら、きっと使いどころが分かるよ」
        voice_character_id: char_obachan
      - text: アメちゃんをもらった。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_obachan_clue2
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    flags_set:
      - flag: flag_ch4_detective_clue2
        value: true
    characters:
      - character_id: char_obachan
        position: left
        expression: talking
    messages:
      - text: 「ケンちゃん、グミ集めてるんだって？　がんばってるねえ」
        voice_character_id: char_obachan
      - text: 「うん。あ、おばちゃん、さっき子猫見た？」
        voice_character_id: char_hero
      - text: 「子猫？　ああ、さっき梅の木公園の方へ走っていくのを見たよ。何かキラキラしたもの咥えてたねえ」
        voice_character_id: char_obachan
      - text: 「梅の木公園か……行ってみよう」
        voice_character_id: char_hero
      - text: 梅の木公園——団地のすぐ脇にある、小さな公園だ。
        voice_character_id: null
      - text: 古い梅の木が一本だけ立っていて、ケンはいつも通り過ぎるだけで、ちゃんと入ったことはなかった。
        voice_character_id: null
      - text: （こんなところに子猫がいたのか）
        voice_character_id: char_hero
    next_scene: null
  - id: scene_ch4_obachan_chat
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
    messages:
      - text: 「ケンちゃん、がんばってるね。応援してるよ」
        voice_character_id: char_obachan
    next_scene: null
  - id: scene_ch4_ichibangai_oyaji
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_oyaji
        position: center
        expression: normal
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_6
          next_scene: scene_ch4_ichibangai_done
        - condition:
            flag: flag_ch4_gummy_quest
            value: true
          next_scene: scene_ch4_ichibangai_oyaji_wait
        - condition: null
          next_scene: scene_ch4_ichibangai_oyaji_first
  - id: scene_ch4_ichibangai_oyaji_first
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_oyaji
        position: center
        expression: normal
    messages:
      - text: 「おう、ケンちゃん。今日はひとりで散歩か」
        voice_character_id: char_oyaji
      - text: 「うん。一番街、今日は普通ですね」
        voice_character_id: char_hero
      - text: 「普通が一番じゃ。普通じゃない一番街は、ろくなことにならんからな」
        voice_character_id: char_oyaji
    next_scene: null
  - id: scene_ch4_ichibangai_oyaji_wait
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_oyaji
        position: center
        expression: talking
    messages:
      - text: 「七つのグミを集めてるんだってな」
        voice_character_id: char_oyaji
      - text: 「おじさんも知ってるんですか」
        voice_character_id: char_hero
      - text: 「ああ。わしも昔、七つのグミで願いを叶えようとしたもんじゃ。……まあ、叶わなかったけどな」
        voice_character_id: char_oyaji
      - text: 「え……大丈夫でしたか？」
        voice_character_id: char_hero
      - text: 「ガハハ、大丈夫大丈夫。叶わなかった願いも、あとで笑い話になる。赤羽はそういう街じゃ」
        voice_character_id: char_oyaji
    next_scene: null
  - id: scene_maze_event_01
    location_id: loc_ichibangai
    background: backgrounds/inner_ichibangai_dark.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
    item_give:
      - item_id: item_fushigi_candy
        condition:
          has_item: item_fushigi_candy
          negate: true
    messages:
      - text: ——突然、視界が歪んだ。
        voice_character_id: null
      - text: そこには、見覚えのある顔があった。
        voice_character_id: null
      - text: 「……田村のおばちゃん？　なんでここに」
        voice_character_id: char_hero
      - text: 「あら、ケンちゃん。こんなとこまで来てがんばってるんやね」
        voice_character_id: char_obachan
      - text: 「ほら、あめちゃん。お腹すいたやろ」
        voice_character_id: char_obachan
      - text: ——気づくと、おばちゃんの姿は消えていた。手のひらの中に、アメが一粒残っていた。
        voice_character_id: null
    next_engine:
      id: __return__
      transition: rift
  - id: scene_ch4_ichibangai_yui
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/dungeon.mp3
    flags_set:
      - flag: flag_ch4_yui_maze_met
        value: true
      - flag: flag_ch4_maze_appeared
        value: true
    characters:
      - character_id: char_yui
        position: center
        expression: normal
    messages:
      - text: 一番街の入口に近づいた瞬間、空気が冷たく沈んだ。
        voice_character_id: null
      - text: 一番街のゲートの奥から、白い霧のようなものが流れてくる。
        voice_character_id: null
      - text: 「……ケン」
        voice_character_id: char_yui
      - text: 「ユイ？　どうしてここに」
        voice_character_id: char_hero
      - text: 「嫌な予感がして、見に来てみたらやっぱりこうなってた」
        voice_character_id: char_yui
      - text: 「また、あの迷路……」
        voice_character_id: char_hero
      - text: 「悪霊が出てくるかもしれない。見に行かないと」
        voice_character_id: char_yui
    next_scene: scene_ch4_ichibangai_challenge
  - id: scene_ch4_ichibangai_yui_ready
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/dungeon.mp3
    flags_set:
      - flag: flag_ch4_maze_appeared
        value: true
    characters:
      - character_id: char_yui
        position: center
        expression: normal
    messages:
      - text: ユイが霧の前に立っていた。
        voice_character_id: null
      - text: 「来た。準備できた？」
        voice_character_id: char_yui
    next_scene: scene_ch4_ichibangai_challenge
  - id: scene_ch4_ichibangai_challenge
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/dungeon.mp3
    characters:
      - character_id: char_yui
        position: center
        expression: normal
    messages:
      - text: 「行こう。ここを抜けた先に、次のグミがある」
        voice_character_id: char_yui
    branches:
      type: choice
      choices:
        - label: 「うん、行こう」
          next_scene: scene_ch4_maze_enter
        - label: 「少し準備してから来る」
          next_scene: null
  - id: scene_ch4_maze_enter
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/dungeon.mp3
    characters:
      - character_id: char_yui
        position: center
        expression: normal
    messages:
      - text: 「うん」
        voice_character_id: char_hero
    next_engine:
      id: maze_rpg
      transition: rift
      config:
        map: dungeon_03
        minimapMode: visited
        name: 一番街の霊気
        bgm: audio/bgm/dungeon.mp3
        battleBgm: audio/bgm/buttle.mp3
        theme:
          wallFront: "#584060"
          wallSide: "#2e1e38"
          ceilTop: "#02000c"
          ceilBottom: "#0a0618"
          floorTop: "#060410"
          floorBottom: "#030208"
          uiBg: "#04020e"
          uiAccent: "#c080ff"
          uiBorder: "#3a2060"
        events:
          E: scene_maze_event_01
        itemEffects:
          item_candy:
            healHp: full
          item_fushigi_candy:
            healHp: full
          item_drink:
            healHp: full
          item_milktea:
            healHp: full
          item_kinchu_hikari:
            attackEnemy: 999
      return_scene: scene_ch4_ichibangai_maze_result
      gameover_scene: scene_ch4_maze_gameover
      gameover_boss_scene: scene_ch4_boss_gameover
      gameover_landing_scene: scene_ichibangai_default
  - id: scene_ch4_maze_gameover
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: sad
    messages:
      - text: 霧の中で、ユイの声がした。
        voice_character_id: null
      - text: 「ケン……！　よかった、出てきた」
        voice_character_id: char_yui
      - text: 「ごめん……追い返されちゃった」
        voice_character_id: char_hero
      - text: 「……もう一回、行く？」
        voice_character_id: char_yui
      - text: 「うん。もう一回」
        voice_character_id: char_hero
      - text: 「……わかった。一緒に行く」
        voice_character_id: char_yui
    next_scene: scene_ch4_maze_retry
  - id: scene_ch4_maze_retry
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: normal
    messages:
      - text: 「……行こ。今度こそ大丈夫」
        voice_character_id: char_yui
    branches:
      type: choice
      choices:
        - label: 「うん、もう一回」
          next_scene: scene_ch4_maze_reenter
        - label: 「少し準備してから来る」
          next_scene: null
  - id: scene_ch4_maze_reenter
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/dungeon.mp3
    messages: []
    next_engine:
      id: __return__
      transition: rift
  - id: scene_ch4_boss_gameover
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: sad
    messages:
      - text: 霧の外に、弾き出された。
        voice_character_id: null
      - text: 「ケン……ボスが強かった。でも、あと少しだったよ」
        voice_character_id: char_yui
      - text: 「もう一回行ける。あそこまでの道はもう分かってる」
        voice_character_id: char_hero
      - text: 「……うん。今度こそ一緒に倒そう」
        voice_character_id: char_yui
    next_scene: scene_ch4_boss_maze_retry
  - id: scene_ch4_boss_maze_retry
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_yui
        position: right
        expression: normal
    messages:
      - text: 「あそこまでの道はもう分かってる。行ける」
        voice_character_id: char_yui
    branches:
      type: choice
      choices:
        - label: 「うん、今度こそ倒す」
          next_scene: scene_ch4_boss_maze_reenter
        - label: 「少し準備してから来る」
          next_scene: null
  - id: scene_ch4_boss_maze_reenter
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/dungeon.mp3
    messages: []
    next_engine:
      id: __return__
      transition: rift
  - id: scene_ch4_ichibangai_maze_result
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_oyaji
        position: center
        expression: normal
    talkable:
      - character_id: char_oyaji
        scene_id: scene_ch4_ichibangai_done
    item_give:
      - item_id: item_gummy_6
        condition: null
    messages:
      - text: 「ああああ　またやってしもうた。飲みすぎた」
        voice_character_id: char_oyaji
      - text: おじさん、しっかりしてよ。こっちは大変なんだから。
        voice_character_id: char_hero
      - text: 飲みすぎると、こうなるの、、？
        voice_character_id: char_yui
      - text: 「このグミをやるから、かんにんしておくれ」
        voice_character_id: char_oyaji
      - text: グミを受け取った。
        voice_character_id: null
    next_scene: null
  - id: scene_ch4_ichibangai_done
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    bgm: audio/bgm/station.mp3
    characters:
      - character_id: char_oyaji
        position: center
        expression: normal
    talkable:
      - character_id: char_oyaji
        scene_id: scene_ch4_ichibangai_done
    messages:
      - text: 「残りもがんばれよ。応援してるぞ」
        voice_character_id: char_oyaji
    next_scene: null
  - id: scene_ch4_hint_seven
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_hero
        position: center
        expression: normal
    messages:
      - text: あと一個……どこにあるんだろう。
        voice_character_id: char_hero
      - text: 伝説では、七つ目のグミは「一番身近な人が持っている」と言われているらしい。
        voice_character_id: null
      - text: （一番身近な人……）
        voice_character_id: char_hero
    next_scene: scene_ch4_wish
  - id: scene_ch4_obachan_last
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
      - character_id: char_hero
        position: right
        expression: normal
    item_give:
      - item_id: item_gummy_7
        condition: null
    messages:
      - text: 「おばちゃん、あのさ……」
        voice_character_id: char_hero
      - text: 「どうしたんだい、ケンちゃん。真剣な顔して」
        voice_character_id: char_obachan
      - text: 「七つのグミ、あと一個で揃うんだけど……七つ目は一番身近な人が持ってるって」
        voice_character_id: char_hero
      - text: おばちゃんはしばらくじっとケンを見ていた。それから、ゆっくりとポケットに手を入れた。
        voice_character_id: null
      - text: 「……あらまあ」
        voice_character_id: char_obachan
      - text: 「え……！」
        voice_character_id: char_hero
      - text: 「ずっとここにあったよ。なんとなく、ずっと持ってたんだよ、このグミ」
        voice_character_id: char_obachan
      - text: おばちゃんは、皺くちゃな手のひらにグミをひとつ乗せて差し出した。
        voice_character_id: null
      - text: 「どうぞ」
        voice_character_id: char_obachan
      - text: ケンの目が熱くなった。
        voice_character_id: char_hero
    next_scene: scene_ch4_wish
  - id: scene_ch4_wish
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            has_item: item_gummy_7
          next_scene: scene_ch4_wish_ceremony
        - condition: null
          next_scene: scene_ch4_obachan_last
  - id: scene_ch4_wish_ceremony
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    characters:
      - character_id: char_obachan
        position: left
        expression: normal
      - character_id: char_hero
        position: right
        expression: normal
    messages:
      - text: 七つのグミが揃った。
        voice_character_id: null
      - text: 「おばちゃん。おばちゃんの膝が治りますように、ってお願いしてもいい？」
        voice_character_id: char_hero
      - text: 「……ケンちゃん」
        voice_character_id: char_obachan
      - text: 「ずっと思ってたんだ。来年もおばちゃんとアメちゃん大会に出たくて」
        voice_character_id: char_hero
      - text: おばちゃんは目をうるませて、それからふっと笑った。
        voice_character_id: null
      - text: 「……ありがとう、ケンちゃん。お願いしていいよ」
        voice_character_id: char_obachan
      - text: ケンはそっと目を閉じて、七つのグミを手のひらで包んだ。
        voice_character_id: null
    next_scene: scene_ch4_ending
  - id: scene_ch4_ending
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/danchi.mp3
    ending_title: 第4章　七つのグミ
    flags_set:
      - flag: flag_ch4_cleared
        value: true
    messages:
      - text: 五月の風が、団地の広場を静かに吹き抜けていった。
        voice_character_id: null
      - text: 願いが叶うかどうかは、誰にもわからない。
        voice_character_id: null
      - text: でも今この瞬間、ケンはそれよりも大切なことに気づいていた。
        voice_character_id: null
      - text: 赤羽のひとたちが、みんなで一緒にいてくれたこと。
        voice_character_id: null
    game_end: true
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
  - id: scene_use_milktea
    overlay_image: cg/happy_juice.jpg
    messages:
      - text: ミルクティーを飲んだ。
        voice_character_id: null
      - text: やさしい甘さで、ほっとする味がした。
        voice_character_id: null
      - text: ……少し、気持ちが落ち着いた。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_use_fushigi_candy
    overlay_image: cg/candy_happy.jpg
    messages:
      - text: 不思議なアメをなめた。
        voice_character_id: null
      - text: ひんやりしているのに、甘くてやさしい味がした。
        voice_character_id: null
      - text: ……体の中から、力が戻ってくる気がした。
        voice_character_id: char_hero
    next_scene: null
  - id: scene_use_kinchu_hikari
    item_give:
      - item_id: item_kinchu_hikari
        condition: null
    messages:
      - text: 悪霊退散のおふだを手に持ってみた。
        voice_character_id: null
      - text: かすかな輝きが、掌に温かく広がる。
        voice_character_id: char_hero
      - text: ……これは、迷宮の番人に向かって使おう。
        voice_character_id: char_hero
    next_scene: null
`,d=`flags:
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

  - id: flag_chapter1_cleared
    type: boolean
    default: false
    description: "第1章クリア済み（グミエンディング到達）"

  - id: flag_ch2_cleared
    type: boolean
    default: false
    description: "第2章クリア済み"

  - id: flag_ch3_cleared
    type: boolean
    default: false
    description: "第3章クリア済み"

  - id: flag_maze_defeated
    type: boolean
    default: false
    description: "迷路で一度でも全滅した"

  - id: flag_boss_challenged
    type: boolean
    default: false
    description: "ボス（迷宮の主）に一度でも敗北した"

  - id: flag_maze_return_yui_seen
    type: boolean
    default: false
    description: "迷路敗北後に一番街へ戻った直後のユイ会話を見た"

  - id: flag_boss_return_yui_seen
    type: boolean
    default: false
    description: "ボス敗北後に一番街へ戻った直後のユイ会話を見た"

  - id: flag_ch3_helping_obachan
    type: boolean
    default: false
    description: "おばちゃんのためにチケットを探すことになった"

  - id: flag_ch3_museum_unlocked
    type: boolean
    default: false
    description: "団地のミュージアムの場所を知った（大学生から情報入手）"

  - id: flag_ch3_got_ticket
    type: boolean
    default: false
    description: "アメちゃんイベントのチケットを入手した"

  - id: flag_ch3_ticket_given
    type: boolean
    default: false
    description: "おばちゃんにチケットを渡した"

  - id: flag_ch3_ticket_stolen
    type: boolean
    default: false
    description: "アーケード街でアメ好きっ子にチケットを奪われた"

  - id: flag_ch3_ticket_recovered
    type: boolean
    default: false
    description: "公園でアメ好きっ子からチケットを取り返した"

  - id: flag_ch3_ticket_given_to_bad_kids
    type: boolean
    default: false
    description: "おばちゃんがアメ好きっ子にチケットを譲った"

  - id: flag_ch3_second_ticket_got
    type: boolean
    default: false
    description: "公園イベント後に美術館員から再度チケットを入手した"

  - id: flag_ch3_second_ticket_given_to_obachan
    type: boolean
    default: false
    description: "再取得したチケットをアーケード街でおばちゃんに渡した"

  - id: flag_ch4_obachan_knee_heard
    type: boolean
    default: false
    description: "おばちゃんの膝の痛みと来年の大会への不安を聞いた"

  - id: flag_ch4_gummy_quest
    type: boolean
    default: false
    description: "七つのグミ集めクエストを開始した（坂で大学生から伝説を聞いた）"

  - id: flag_ch4_met_detective
    type: boolean
    default: false
    description: "駅の端の探偵おやじに会った"

  - id: flag_ch4_detective_clue1
    type: boolean
    default: false
    description: "探偵の依頼の手がかり①：大学生から子猫の目撃情報を聞いた"

  - id: flag_ch4_detective_clue2
    type: boolean
    default: false
    description: "探偵の依頼の手がかり②：おばちゃんから猫は梅の木公園へ行ったと聞いた"

  - id: flag_ch4_detective_clue3
    type: boolean
    default: false
    description: "探偵の依頼の手がかり③：梅の木公園のバイトから猫は駅へ行ったと聞いた"

  - id: flag_ch4_detective_clue4
    type: boolean
    default: false
    description: "探偵の依頼の手がかり④：駅の大学生から猫は赤羽公園へ行ったと聞いた"

  - id: flag_ch4_detective_solved
    type: boolean
    default: false
    description: "探偵の依頼を解決した"

  - id: flag_ch4_museum_duel_won
    type: boolean
    default: false
    description: "4章ミュージアム神経衰弱（duel）で勝利した"

  - id: flag_ch4_plum_park_unlocked
    type: boolean
    default: false
    description: "第4章で梅の木公園へ行けるようになった"

  - id: flag_ch4_maze_appeared
    type: boolean
    default: false
    description: "第4章で一番街の迷路が出現した（おじさんの飲みすぎによる）"

  - id: flag_ch4_yui_maze_met
    type: boolean
    default: false
    description: "ユイが迷路の前に現れて初回の説明を済ませた"

  - id: flag_ch4_cleared
    type: boolean
    default: false
    description: "第4章クリア済み"
`,f=`items:
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

  - id: item_milktea
    name: "ミルクティー"
    description: "CoderDojoの机に置いてあったミルクティー。まだ温かい。"
    icon: null
    usable: true
    use_scene: scene_use_milktea
    use_condition: null
    stackable: false
    category: consumable

  - id: item_fushigi_candy
    name: "不思議なアメ"
    description: "暗い迷路の中で、どこからか現れたアメ。ひんやりしているのに甘い。"
    icon: null
    usable: true
    use_scene: scene_use_fushigi_candy
    use_condition: null
    stackable: false
    category: consumable

  - id: item_kinchu_hikari
    name: "悪霊退散のおふだ"
    description: "田中メンターから受け取った御札。かすかに光を帯びていて、迷宮の番人に大ダメージを与えられるらしい。"
    icon: null
    usable: true
    use_scene: scene_use_kinchu_hikari
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy
    name: "新発売のグミ"
    description: "おばちゃんのポケットから出てきたグミ。大学生が探していたやつだ。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_1
    name: "坂のグミ"
    description: "大学生にもらったグミ。七つ集めると願いが叶うらしい。（1/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_2
    name: "梅のグミ"
    description: "梅の木公園でアメちゃんと交換してもらったグミ。（2/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_3
    name: "記憶のグミ"
    description: "ミュージアムの受付との神経衰弱で勝ってもらったグミ。（3/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_4
    name: "謎解きのグミ"
    description: "探偵おやじの依頼を解決してもらったグミ。（4/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_wallet
    name: "バイトの財布"
    description: "赤羽公園のベンチの下で見つかった財布。梅の木公園のバイトが探していたものだ。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_5
    name: "お礼のグミ"
    description: "梅の木公園のバイトの子にお礼としてもらったグミ。（5/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_6
    name: "迷宮のグミ"
    description: "一番街の迷路チャレンジをクリアしてもらったグミ。（6/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_gummy_7
    name: "おばちゃんのグミ"
    description: "田村のおばちゃんがずっと持っていたグミ。これで七つ揃った。（7/7）"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item

  - id: item_event_ticket
    name: "アメちゃんゲットのチケット"
    description: "アーケード街で開かれるアメちゃんゲットゲームのイベントチケット。手書きで番号が入っている。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item
`,p=`locations:
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
          or:
            - flag: flag_visited_slope
              value: true
            - flag: flag_chapter
              value: 4
      - location_id: loc_museum
        label: "団地のミュージアムへ"
        condition:
          flag: flag_ch3_museum_unlocked
          value: true
      - location_id: loc_plum_park
        label: "梅の木公園へ"
        condition:
          flag: flag_ch4_detective_clue2
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
      - location_id: loc_ichibangai
        label: "一番街入口へ"
        condition:
          flag: flag_chapter
          value: 3
          negate: true
      - location_id: loc_arcade
        label: "アーケード街へ"
        condition:
          or:
            - flag: flag_chapter
              value: 3
            - flag: flag_chapter
              value: 4
      - location_id: loc_coderdojo
        label: "CoderDojo赤羽へ"
        condition:
          flag: flag_station_explored
          value: true
      - location_id: loc_slope
        label: "団地への坂へ"
        condition:
          flag: flag_chapter
          value: 4
      - location_id: loc_station_end
        label: "駅の端へ"
        condition:
          has_item: item_gummy_2
      - location_id: loc_park
        label: "赤羽公園へ"
        condition:
          flag: flag_ch4_detective_clue4
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
          or:
            - and:
                - flag: flag_met_mentor
                  value: true
                - flag: flag_examined_whiteboard
                  value: true
                - flag: flag_examined_kids
                  value: true
            - flag: flag_chapter
              value: 4
    entry_scene: scene_coderdojo_default

  - id: loc_ichibangai
    name: "一番街入口"
    description: "赤羽一番街商店街への入り口。昔ながらのアーケードが続く。"
    background_default: backgrounds/ichibangai.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_station
        label: "駅前へ戻る"
        condition: null
    entry_scene: scene_ichibangai_default

  - id: loc_arcade
    name: "アーケード街"
    description: "駅前から続く古いアーケード街。昼でも照明がちらつき、通りの奥が見えない。"
    background_default: backgrounds/intersection.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_station
        label: "駅前へ戻る"
        condition: null
      - location_id: loc_park
        label: "公園へ"
        condition:
          or:
            - flag: flag_ch3_ticket_stolen
              value: true
            - flag: flag_chapter
              value: 4
    entry_scene: scene_arcade_default

  - id: loc_park
    name: "赤羽公園"
    description: "駅前から少し歩いたところにある公園。ベンチと遊具のまわりに子どもたちの声が響く。"
    background_default: backgrounds/danchimae.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_arcade
        label: "アーケード街へ戻る"
        condition:
          or:
            - flag: flag_ch3_ticket_stolen
              value: true
              negate: true
            - flag: flag_ch3_ticket_recovered
              value: true
      - location_id: loc_station
        label: "駅前へ"
        condition:
          or:
            - flag: flag_ch3_ticket_stolen
              value: true
              negate: true
            - flag: flag_ch3_ticket_recovered
              value: true
    entry_scene: scene_park_default

  - id: loc_museum
    name: "団地のミュージアム"
    description: "団地の一角にある小さなミュージアム。地域の歴史が展示されている。"
    background_default: backgrounds/coderdojo.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_danchi
        label: "団地へ戻る"
        condition: null
    entry_scene: scene_museum_default

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
      - location_id: loc_station
        label: "駅前へ下る"
        condition:
          flag: flag_chapter
          value: 4
      - location_id: loc_danchi
        label: "団地へ上る"
        condition: null
    entry_scene: scene_slope_default

  - id: loc_plum_park
    name: "梅の木公園"
    description: "団地の脇にある小さな公園。古い梅の木が一本だけ立っている。"
    background_default: backgrounds/umenoki_park.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_danchi
        label: "団地へ戻る"
        condition: null
    entry_scene: scene_plum_park_default

  - id: loc_station_end
    name: "駅の端"
    description: "赤羽駅のホームの端。人が少なく、ひっそりしている。"
    background_default: backgrounds/ekihaji.jpg
    default_commands:
      - cmd_examine
      - cmd_talk
      - cmd_move
      - cmd_inventory
    connections:
      - location_id: loc_station
        label: "駅前へ戻る"
        condition: null
    entry_scene: scene_station_end_default
`,m=`characters:
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

  - id: char_candy_kid
    name: "アメ好きっ子"
    name_flag: null
    voicevox_speaker_id: 8
    y_offset: -250
    sprites:
      normal: characters/kozo/kozo.png
      talking: characters/kozo/kozo.png

  - id: char_museum_staff
    name: "ミュージアムの受付"
    name_flag: null
    voicevox_speaker_id: 49
    y_offset: -250
    sprites:
      normal: characters/muse/muse_onesan.png
      talking: characters/muse/muse_onesan_talking.png

  - id: char_museum_part_timer
    name: "バイト"
    name_flag: null
    voicevox_speaker_id: 3
    y_offset: -250
    sprites:
      normal: characters/bite/bite.png
      talking: characters/bite/bite_talking.png
  - id: char_oyaji
    name: "おじさん"
    name_flag: null
    voicevox_speaker_id: 53
    y_offset: -250
    sprites:
      normal: characters/yopparai/yoppa.png
      talking: characters/yopparai/yoppa_talking.png

  - id: char_detective
    name: "赤羽の探偵"
    name_flag: null
    voicevox_speaker_id: 13
    y_offset: -250
    sprites:
      normal: characters/tantei/tantei.png
      talking: characters/tantei/tantei_talking.png

  - id: char_priest
    name: "神父さん"
    name_flag: null
    voicevox_speaker_id: 9
    y_offset: -250
    sprites:
      normal: characters/college_student/daigakusei_normal.png
      talking: characters/college_student/daigakusei_normal.png
`,h=`commands:
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
`,g=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},_=(e=>e?g(e):g),v=e=>e;function y(e,t=v){let n=a.useSyncExternalStore(e.subscribe,a.useCallback(()=>t(e.getState()),[e,t]),a.useCallback(()=>t(e.getInitialState()),[e,t]));return a.useDebugValue(n),n}var b=e=>{let t=_(e),n=e=>y(t,e);return Object.assign(n,t),n},x=(e=>e?b(e):b),S={bgmVolume:.4,seVolume:.8,voiceVolume:.8,textSpeed:40,autoMode:!1,fullscreen:!1};function C(e){return Object.fromEntries(e.map(e=>[e.id,e.default]))}function w(e,t){if(!e||e.length===0)return t;let n={...t};for(let{flag:t,value:r}of e)n[t]=r;return n}function T(e,t){if(!e)return!0;if(e.and)return e.and.every(e=>T(e,t));if(e.or)return e.or.some(e=>T(e,t));let n=!0;if(e.flag!==void 0){let r=t.flags[e.flag],i=e.value;i!==void 0&&(n&&=r===i),e.min!==void 0&&(n=n&&typeof r==`number`&&r>=e.min),e.max!==void 0&&(n=n&&typeof r==`number`&&r<=e.max)}if(e.has_item!==void 0&&(n&&=t.inventory.includes(e.has_item)),e.item_count!==void 0){let r=new Set(e.item_count.items),i=t.inventory.filter(e=>r.has(e)).length;e.item_count.min!==void 0&&(n&&=i>=e.item_count.min),e.item_count.max!==void 0&&(n&&=i<=e.item_count.max)}return e.location_id!==void 0&&(n&&=t.locationId===e.location_id),e.negate&&(n=!n),n}function E(e,t){if(!e||e.length===0)return t;let n={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},r=[...t.inventory];for(let t of e)T(t.condition,n)&&(r.includes(t.item_id)||(r=[...r,t.item_id]));return{...t,inventory:r}}function D(e,t){return{...t,inventory:t.inventory.filter(t=>t!==e)}}function O(e,t,n){let r=n.items[e];if(!r||!r.usable)return!1;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId};return T(r.use_condition,i)}function k(e,t,n){let r=n.items[e];if(!r||!r.usable)return{newState:t,sceneId:null};let i=t;return r.stackable||(i=D(e,t)),{newState:i,sceneId:r.use_scene??null}}function A(e,t,n){let r=n.scenes[e];if(!r)return console.warn(`[SceneEngine] Scene not found: ${e}`),t;let i={...t,currentSceneId:e,currentMessageIndex:0,phase:`message`};if(r.location_id&&r.location_id!==t.currentLocationId&&(i={...i,currentLocationId:r.location_id,currentCharacters:[]}),r.characters!==void 0&&(i={...i,currentCharacters:r.characters}),r.messages[0]?.characters!==void 0&&(i={...i,currentCharacters:r.messages[0].characters}),i={...i,flags:w(r.flags_set,i.flags)},i=E(r.item_give,i),r.item_remove)for(let e of r.item_remove)i=D(e,i);return r.messages.length===0?r.game_end?{...i,phase:`ending`}:r.cg_sequence?.length?{...i,phase:`cg_sequence`}:M(i,r,n):i}function j(e,t){let n=t.scenes[e.currentSceneId];if(!n)return e;let r=e.currentMessageIndex+1;if(r<n.messages.length){let t=n.messages[r],i={...e,currentMessageIndex:r};return t.characters===void 0?i:{...i,currentCharacters:t.characters}}return M(e,n,t)}function M(e,t,n){if(t.game_end)return{...e,phase:`ending`};if(t.next_engine)return{...e,phase:`engine_transition`,pendingEngineTransition:t.next_engine};let r=t.branches;if(r?.type===`choice`&&r.choices&&r.choices.length>0){let t={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId},i=r.choices.filter(e=>T(e.condition,t));return i.length===1&&i[0].next_scene?A(i[0].next_scene,e,n):{...e,phase:`choice`}}if(r?.type===`auto`&&r.choices){let i={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId};for(let a of r.choices)if(T(a.condition,i))return a.next_scene?A(a.next_scene,e,n):a.next_scene===null?P(e,n):F(e,t,n);return P(e,n)}return t.next_scene?A(t.next_scene,e,n):t.next_scene===null?P(e,n):F(e,t,n)}function N(e,t,n){let r=n.scenes[t.currentSceneId];if(!r?.branches?.choices)return t;let i=r.branches.choices[e];return i?i.next_scene?A(i.next_scene,t,n):P(t,n):t}function P(e,t){if(e.sceneHistory.length===0)return F(e,t.scenes[e.currentSceneId],t);let n=[...e.sceneHistory],r=n.pop();return t.scenes[r],{...e,currentSceneId:r,currentMessageIndex:0,sceneHistory:n,phase:`command`}}function F(e,t,n){return{...e,phase:`command`}}function ee(e,t){let n=t.scenes[e.currentSceneId];return n?M(e,n,t):e}function te(e,t){return{...t,sceneHistory:[...t.sceneHistory,e]}}function ne(e,t,n){return(e?.commands??t?.default_commands??Object.keys(n.commands)).map(e=>n.commands[e]).filter(e=>!!e)}function re(e,t,n){let r=n.commands[e];if(!r)return{newPhase:t.phase};switch(r.action_type){case`examine`:return{newPhase:`examine`};case`move`:return{newPhase:`map`};case`inventory`:return{newPhase:`inventory`};case`talk`:{let e=n.scenes[t.currentSceneId]?.talkable??[],r={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},i=e.filter(e=>T(e.condition??null,r)).map(e=>({characterId:e.character_id,sceneId:e.scene_id}));return i.length===0?{newPhase:`command`}:i.length===1?{newPhase:`message`,transitionSceneId:i[0].sceneId}:{newPhase:`talk_select`,talkCandidates:i}}case`system`:return{newPhase:`system_menu`};default:return{newPhase:t.phase}}}function ie(e,t,n){let r=n.locations[e];if(!r)return[];let i={flags:t.flags,inventory:t.inventory,locationId:e};return r.connections.filter(e=>T(e.condition,i))}function ae(e,t,n){let r=n.locations[e];if(!r)return t;let i={...t,currentLocationId:e,currentCharacters:[],sceneHistory:[],phase:`message`};return A(r.entry_scene,i,n)}function oe(e,t){return!e.phase&&t?.next_engine?`message`:!e.phase||e.phase===`title`||e.phase===`ending`?`command`:e.phase}function se(e,t,n,r){let i=C(e.flags);return{currentSceneId:t,currentLocationId:n,currentMessageIndex:0,flags:r?.initialFlags?{...i,...r.initialFlags}:i,inventory:r?.initialInventory??[],sceneHistory:[],phase:`title`,currentCharacters:[],talkCandidates:[]}}function ce(e,t,n,r){let i=se(e,t,n,r);return _((a,o)=>({state:i,masterData:e,chapterId:r?.chapterId??`chapter1`,playtimeStart:Date.now(),startNewGame:()=>{let e=o().masterData;a({state:A(t,{...se(e,t,n,r),phase:`message`},e),playtimeStart:Date.now()})},startDebugGame:e=>{let i=o().masterData,s=se(i,t,n,r),c={...s,currentSceneId:e.sceneId,currentLocationId:e.locationId,flags:{...s.flags,...e.flags??{}},inventory:e.inventory??[],phase:`message`};a({state:A(e.sceneId,c,i),playtimeStart:Date.now()})},loadGame:e=>{let t=o().masterData.scenes[e.currentSceneId],n=oe(e,t);a({state:{currentSceneId:e.currentSceneId,currentLocationId:e.currentLocationId,currentMessageIndex:e.currentMessageIndex??0,flags:e.flags,inventory:e.inventory,sceneHistory:e.sceneHistory,phase:n,currentCharacters:e.currentCharacters??[],talkCandidates:[],pendingEngineTransition:n===`engine_transition`?t?.next_engine:void 0},playtimeStart:Date.now()-e.playtime*1e3})},toSaveData:()=>{let{state:e,playtimeStart:t}=o();return{version:1,chapterId:o().chapterId,timestamp:Date.now(),currentSceneId:e.currentSceneId,currentLocationId:e.currentLocationId,currentMessageIndex:e.currentMessageIndex,phase:e.phase,flags:e.flags,inventory:e.inventory,sceneHistory:e.sceneHistory,currentCharacters:e.currentCharacters,playtime:Math.floor((Date.now()-t)/1e3)}},advanceMessage:()=>{let{state:e,masterData:t}=o();e.phase===`message`&&a({state:j(e,t)})},selectChoice:e=>{let{state:t,masterData:n}=o();t.phase===`choice`&&a({state:N(e,t,n)})},executeCommand:e=>{let{state:t,masterData:n}=o();if(t.phase!==`command`)return;let r=re(e,t,n);if(r.transitionSceneId){let e=te(t.currentSceneId,t);a({state:A(r.transitionSceneId,e,n)})}else a({state:{...t,phase:r.newPhase,talkCandidates:r.talkCandidates??[]}})},selectTalkTarget:e=>{let{state:t,masterData:n}=o();if(t.phase!==`talk_select`)return;if(e<0){a(e=>({state:{...e.state,phase:`command`,talkCandidates:[]}}));return}let r=t.talkCandidates[e];if(!r)return;let i=te(t.currentSceneId,t);a({state:{...A(r.sceneId,i,n),talkCandidates:[]}})},completeCgSequence:()=>{let{state:e,masterData:t}=o();e.phase===`cg_sequence`&&a({state:ee(e,t)})},moveToLocation:e=>{let{state:t,masterData:n}=o();a({state:ae(e,t,n)})},clickArea:e=>{let{state:t,masterData:n}=o();if(t.phase!==`examine`)return;let r=n.scenes[t.currentSceneId]?.clickable_areas?.find(t=>t.id===e);if(!r)return;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId};if(!T(r.condition,i))return;let s=te(t.currentSceneId,t);a({state:A(r.next_scene,s,n)})},useItem:e=>{let{state:t,masterData:n}=o(),{newState:r,sceneId:i}=k(e,t,n);a(i?{state:A(i,te(t.currentSceneId,{...r,phase:`command`}),n)}:{state:r})},closeOverlay:()=>{a(e=>({state:{...e.state,phase:`command`}}))},goToTitle:()=>{a(e=>({state:{...e.state,phase:`title`}}))},startFromScene:(e,t,n)=>{let{state:r,masterData:i}=o();a({state:A(e,{...se(i,e,t,{}),flags:{...r.flags,...n??{}},inventory:r.inventory,phase:`message`},i),playtimeStart:Date.now()})},debugSetFlag:(e,t)=>{a(n=>({state:{...n.state,flags:{...n.state.flags,[e]:t}}}))},debugSetInventory:e=>{a(t=>({state:{...t.state,inventory:e}}))},debugJumpToScene:(e,t)=>{let{state:n,masterData:r}=o();a({state:A(e,{...n,currentLocationId:t,phase:`message`},r)})}}))}var le=(0,a.createContext)(null);function ue(){let e=(0,a.useContext)(le);if(!e)throw Error(`useGameStore must be used within a GameStoreContext.Provider`);return y(e)}var I=t(),de=(0,a.createContext)({resolveAsset:e=>e,resolveVoicePath:e=>`assets/voicevox/${e}.mp3`});function fe({assetsBaseUrl:e,children:t}){let n=e.replace(/\/$/,``),r=(0,a.useMemo)(()=>({resolveAsset:e=>`${n}/${e}`,resolveVoicePath:e=>`${n}/voicevox/${e}.mp3`}),[n]);return(0,I.jsx)(de.Provider,{value:r,children:t})}function L(){return(0,a.useContext)(de)}var pe=class{prefix=`novel_`;key(e){return`${this.prefix}${e}`}setItem(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{console.warn(`[LocalStorage] Failed to save:`,e)}}getItem(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}async save(e,t){this.setItem(this.key(`save_${e}`),t)}async load(e){let t=this.getItem(this.key(`save_${e}`));return!t||t.version!==1?null:t}async deleteSave(e){localStorage.removeItem(this.key(`save_${e}`))}async listSaves(){return Array.from({length:3},(e,t)=>{let n=this.getItem(this.key(`save_${t+1}`));return!n||n.version!==1?null:{slotId:t+1,data:n}})}async saveSettings(e){this.setItem(this.key(`settings`),e)}async loadSettings(){return this.getItem(this.key(`settings`))}async autoSave(e){this.setItem(this.key(`autosave`),e)}async loadAutoSave(){let e=this.getItem(this.key(`autosave`));return!e||e.version!==1?null:e}};function me(e=`localStorage`){switch(e){default:return new pe}}var he=null;function ge(){return he||=me(),he}var R=new class{bgmAudio=null;voiceAudio=null;playBgm(e,t=!0,n=.8){this.bgmAudio&&this.bgmAudio.pause();let r=new Audio(e);r.loop=t,r.volume=n,r.play().catch(()=>{}),this.bgmAudio=r}stopBgm(){this.bgmAudio&&=(this.bgmAudio.pause(),null)}setBgmVolume(e){this.bgmAudio&&(this.bgmAudio.volume=Math.max(0,Math.min(1,e)))}async playVoice(e,t=.9,n){this.voiceAudio&&this.voiceAudio.pause();let r=new Audio(e);r.volume=t,this.voiceAudio=r,n&&r.addEventListener(`ended`,n,{once:!0}),console.log(`[AudioManager] playVoice:`,e.slice(0,60)),await r.play().catch(e=>console.warn(`[AudioManager] play failed:`,e))}stopVoice(){this.voiceAudio&&=(this.voiceAudio.pause(),null)}playSe(e,t=.8){let n=new Audio(e);n.volume=t,n.play().catch(()=>{})}},_e=x((e,t)=>({settings:S,updateSettings:n=>{let r={...t().settings,...n};e({settings:r}),n.bgmVolume!==void 0&&R.setBgmVolume(n.bgmVolume),ge().saveSettings(r).catch(()=>{})},loadSettings:async()=>{let t=await ge().loadSettings().catch(()=>null);t&&(e({settings:{...S,...t}}),R.setBgmVolume(t.bgmVolume??S.bgmVolume))}})),ve={btn:`_btn_jkuam_1`,btnLarge:`_btnLarge_jkuam_29`,btnSmall:`_btnSmall_jkuam_34`};function z({label:e,onClick:t,disabled:n,size:r=`normal`}){let i=r===`large`?ve.btnLarge:r===`small`?ve.btnSmall:``;return(0,I.jsx)(`button`,{className:`${ve.btn} ${i}`,onClick:t,disabled:n,children:e})}var ye={overlay:`_overlay_2rhas_1`,box:`_box_2rhas_11`,title:`_title_2rhas_23`,closeBtn:`_closeBtn_2rhas_32`};function B({title:e,onClose:t,children:n}){return(0,I.jsx)(`div`,{className:ye.overlay,onClick:t,children:(0,I.jsxs)(`div`,{className:ye.box,onClick:e=>e.stopPropagation(),children:[t&&(0,I.jsx)(`button`,{className:ye.closeBtn,onClick:t,children:`×`}),e&&(0,I.jsx)(`div`,{className:ye.title,children:e}),n]})})}var V={slots:`_slots_1la7k_1`,slot:`_slot_1la7k_1`,slotInfo:`_slotInfo_1la7k_17`,slotLabel:`_slotLabel_1la7k_21`,slotData:`_slotData_1la7k_27`,slotEmpty:`_slotEmpty_1la7k_32`,slotActions:`_slotActions_1la7k_38`,tabs:`_tabs_1la7k_43`,tab:`_tab_1la7k_43`,tabActive:`_tabActive_1la7k_60`};function be({onSave:e,onLoad:t,onClose:n,initialTab:r=`save`}){let[i,o]=(0,a.useState)(r),[s,c]=(0,a.useState)([]);(0,a.useEffect)(()=>{ge().listSaves().then(c)},[]);async function l(t){await e(t),c(await ge().listSaves())}function u(e){return new Date(e).toLocaleString(`ja-JP`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}return(0,I.jsxs)(B,{title:`セーブ / ロード`,onClose:n,children:[(0,I.jsxs)(`div`,{className:V.tabs,children:[(0,I.jsx)(`button`,{className:`${V.tab} ${i===`save`?V.tabActive:``}`,onClick:()=>o(`save`),children:`セーブ`}),(0,I.jsx)(`button`,{className:`${V.tab} ${i===`load`?V.tabActive:``}`,onClick:()=>o(`load`),children:`ロード`})]}),(0,I.jsx)(`div`,{className:V.slots,children:Array.from({length:3},(e,r)=>{let a=r+1,o=s[r]??null;return(0,I.jsxs)(`div`,{className:V.slot,children:[(0,I.jsxs)(`div`,{className:V.slotInfo,children:[(0,I.jsxs)(`div`,{className:V.slotLabel,children:[`スロット `,a]}),o?(0,I.jsxs)(`div`,{className:V.slotData,children:[u(o.data.timestamp),`プレイ時間: `,Math.floor(o.data.playtime/60),`分`]}):(0,I.jsx)(`div`,{className:V.slotEmpty,children:`データなし`})]}),(0,I.jsxs)(`div`,{className:V.slotActions,children:[i===`save`&&(0,I.jsx)(z,{label:`セーブ`,size:`small`,onClick:()=>l(a)}),i===`load`&&o&&(0,I.jsx)(z,{label:`ロード`,size:`small`,onClick:()=>{t(o.data),n()}})]})]},a)})})]})}var H={root:`_root_1g679_1`,title:`_title_1g679_12`,subtitle:`_subtitle_1g679_20`,actions:`_actions_1g679_28`,continueMenu:`_continueMenu_1g679_35`,chapterList:`_chapterList_1g679_42`,sectionLabel:`_sectionLabel_1g679_49`};function xe({onNewGame:e,onLoad:t,chapters:n,onStartChapter:r}){let[i,o]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1),[l,u]=(0,a.useState)([]),{state:d}=ue();(0,a.useEffect)(()=>{ge().listSaves().then(u)},[]);async function f(e){}function p(e){let{unlockFlag:t}=e;return!t||d.flags[t]?!0:l.some(e=>!!e?.data.flags[t])}let m=n?.filter(p)??[],h=l.some(Boolean),g=h||m.length>0;return(0,I.jsxs)(`div`,{className:H.root,children:[(0,I.jsx)(`h1`,{className:H.title,children:`ノベルゲーム`}),(0,I.jsx)(`p`,{className:H.subtitle,children:`NOVEL GAME`}),(0,I.jsxs)(`div`,{className:H.actions,children:[(0,I.jsx)(z,{label:`はじめから`,size:`large`,onClick:e}),g&&(0,I.jsx)(z,{label:`続きから`,size:`large`,onClick:()=>o(!0)})]}),i&&(0,I.jsx)(B,{title:`続きから`,onClose:()=>o(!1),children:(0,I.jsxs)(`div`,{className:H.continueMenu,children:[h&&(0,I.jsx)(z,{label:`セーブデータをロード`,size:`large`,onClick:()=>{o(!1),c(!0)}}),m.length>0&&(0,I.jsxs)(`div`,{className:H.chapterList,children:[(0,I.jsx)(`div`,{className:H.sectionLabel,children:`章を選ぶ`}),m.map(e=>(0,I.jsx)(z,{label:e.title,size:`large`,onClick:()=>{o(!1),r?.(e)}},`${e.initialSceneId}:${e.initialLocationId}`))]})]})}),s&&(0,I.jsx)(be,{onSave:f,onLoad:e=>{c(!1),t(e)},onClose:()=>c(!1),initialTab:`load`})]})}var Se={root:`_root_1f6bz_1`,img:`_img_1f6bz_9`,fallback:`_fallback_1f6bz_15`,locationName:`_locationName_1f6bz_23`};function Ce({backgroundPath:e,locationName:t}){let{resolveAsset:n}=L(),[r,i]=(0,a.useState)(!1),o=e?n(e):null;return(0,a.useEffect)(()=>{i(!1)},[o]),(0,I.jsx)(`div`,{className:Se.root,children:o&&!r?(0,I.jsx)(`img`,{className:Se.img,src:o,alt:``,onError:()=>i(!0)}):(0,I.jsx)(`div`,{className:Se.fallback,children:t&&(0,I.jsx)(`span`,{className:Se.locationName,children:t})})})}var U={root:`_root_xnuhq_1`,left:`_left_xnuhq_7`,center:`_center_xnuhq_11`,right:`_right_xnuhq_16`,img:`_img_xnuhq_20`,placeholder:`_placeholder_xnuhq_24`,placeholderName:`_placeholderName_xnuhq_35`};function we({display:e,character:t,isSpeaking:n}){let{resolveAsset:r}=L(),[i,o]=(0,a.useState)(!1),s=n&&t.sprites?.talking?`talking`:e.expression,c=t.sprites?.[s]??t.sprites?.normal,l=c?r(c):null,u=e.position===`left`?U.left:e.position===`right`?U.right:U.center,d=120+(e.y_offset??t.y_offset??0);return(0,I.jsx)(`div`,{className:`${U.root} ${u}`,style:{bottom:`${d}px`},children:l&&!i?(0,I.jsx)(`img`,{className:U.img,src:l,alt:t.name,onError:()=>o(!0)}):(0,I.jsx)(`div`,{className:U.placeholder,children:(0,I.jsx)(`span`,{className:U.placeholderName,children:t.name})})})}var Te={root:`_root_2afjl_1`};function Ee({text:e,speed:t,onComplete:n,instant:r}){let[i,o]=(0,a.useState)(``),[s,c]=(0,a.useState)(!1),l=(0,a.useRef)(null),u=(0,a.useRef)(0);return(0,a.useEffect)(()=>{if(o(``),c(!1),u.current=0,r||t===0){o(e),c(!0),n?.();return}let i=Math.max(1,Math.floor(1e3/t));return l.current=setInterval(()=>{u.current+=1,o(e.slice(0,u.current)),u.current>=e.length&&(clearInterval(l.current),c(!0),n?.())},i),()=>{l.current&&clearInterval(l.current)}},[e,t,r]),(0,I.jsx)(`span`,{className:Te.root,children:i})}var De={baseUrl:`http://localhost:50021`,enabled:!0,prebuiltOnly:!0},Oe=new class{config;constructor(e=De){this.config=e}async isAvailable(){if(this.config.prebuiltOnly)return!1;try{return(await fetch(`${this.config.baseUrl}/version`,{signal:AbortSignal.timeout(1e3)})).ok}catch{return!1}}async synthesize(e,t){if(!this.config.enabled||this.config.prebuiltOnly)return null;try{let n=await fetch(`${this.config.baseUrl}/audio_query?text=${encodeURIComponent(e)}&speaker=${t}`,{method:`POST`});if(!n.ok)return null;let r=await n.json(),i=await fetch(`${this.config.baseUrl}/synthesis?speaker=${t}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)});return i.ok?i.arrayBuffer():null}catch{return null}}};async function ke(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-1`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Ae(e,t){return ke(`${e}_${t}`)}var je=new Map;function Me(){let e=(0,a.useRef)(!1),{resolveVoicePath:t}=L();return{speak:(0,a.useCallback)(async(n,r,i)=>{if(console.log(`[Voicevox] speak called:`,{character:r?.id,speakerId:r?.voicevox_speaker_id,voiceCharId:n.voice_character_id}),!r?.voicevox_speaker_id||!n.voice_character_id)return;let a=r.voicevox_speaker_id,o=n.text;e.current=!0;try{let e=await Ae(o,a);if(console.log(`[Voicevox] synthesizing:`,{text:o,speakerId:a,hashKey:e}),je.has(e)){console.log(`[Voicevox] cache hit`),await R.playVoice(je.get(e),.9,i);return}let n=t(e),r=await fetch(n,{method:`HEAD`}).catch(()=>null);if(r?.ok&&r.headers.get(`content-type`)?.startsWith(`audio/`)){console.log(`[Voicevox] prebuilt hit`),je.set(e,n),await R.playVoice(n,.9,i);return}console.log(`[Voicevox] calling engine...`);let s=await Oe.synthesize(o,a);if(!s){console.warn(`[Voicevox] synthesize returned null (engine not running?)`);return}console.log(`[Voicevox] playing synthesized audio`);let c=new Blob([s],{type:`audio/mp3`}),l=URL.createObjectURL(c);je.set(e,l),await R.playVoice(l,.9,i)}finally{e.current=!1}},[t]),stop:(0,a.useCallback)(()=>{R.stopVoice()},[])}}var W={root:`_root_448af_1`,nameplate:`_nameplate_448af_10`,box:`_box_448af_22`,boxNarration:`_boxNarration_448af_32`,text:`_text_448af_42`,textNarration:`_textNarration_448af_48`,arrow:`_arrow_448af_55`,blink:`_blink_448af_1`};function Ne({message:e,speaker:t,textSpeed:n,onAdvance:r,onSpeakingChange:i}){let[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1),{speak:u,stop:d}=Me();(0,a.useEffect)(()=>{s(!1),l(!1),u(e,t,()=>i?.(!1)),i?.(!0)},[e.text]);function f(){o?(d(),r()):(d(),l(!0),s(!0),i?.(!1))}let p=t?.name??null,m=!p;return(0,I.jsxs)(`div`,{className:W.root,children:[p&&(0,I.jsx)(`div`,{className:W.nameplate,children:p}),(0,I.jsxs)(`div`,{className:m?W.boxNarration:W.box,onClick:f,children:[(0,I.jsx)(`div`,{className:m?W.textNarration:W.text,children:(0,I.jsx)(Ee,{text:e.text,speed:n,instant:c,onComplete:()=>s(!0)})}),o&&(0,I.jsx)(`span`,{className:W.arrow,children:`▼`})]})]})}var Pe={root:`_root_13pfy_1`,box:`_box_13pfy_10`,choice:`_choice_13pfy_20`};function Fe({choices:e,flags:t,inventory:n,locationId:r,onSelect:i}){let a={flags:t,inventory:n,locationId:r},o=e.map((e,t)=>({choice:e,originalIndex:t})).filter(({choice:e})=>T(e.condition,a));return(0,I.jsx)(`div`,{className:Pe.root,children:(0,I.jsx)(`div`,{className:Pe.box,children:o.map(({choice:e,originalIndex:t})=>(0,I.jsx)(`button`,{className:Pe.choice,onClick:()=>i(t),children:e.label},t))})})}var Ie={root:`_root_1l2ff_1`,commands:`_commands_1l2ff_12`,cmd:`_cmd_1l2ff_19`};function Le({commands:e,onSelect:t}){return(0,I.jsx)(`div`,{className:Ie.root,children:(0,I.jsx)(`div`,{className:Ie.commands,children:e.map(e=>(0,I.jsx)(`button`,{className:Ie.cmd,onClick:()=>t(e.id),title:e.description,children:e.label},e.id))})})}var Re={root:`_root_13hn2_1`,area:`_area_13hn2_7`,label:`_label_13hn2_23`,hint:`_hint_13hn2_32`,closeBtn:`_closeBtn_13hn2_44`};function ze({areas:e,flags:t,inventory:n,locationId:r,onClick:i,onClose:a}){let o={flags:t,inventory:n,locationId:r};return(0,I.jsxs)(`div`,{className:Re.root,children:[(0,I.jsx)(`div`,{className:Re.hint,children:e.length>0?`調べる場所をクリックしてください`:`調べられるものはない`}),e.filter(e=>T(e.condition,o)).map(e=>(0,I.jsx)(`div`,{className:Re.area,style:{left:e.x,top:e.y,width:e.width,height:e.height},onClick:()=>i(e.id),children:(0,I.jsx)(`span`,{className:Re.label,children:e.label})},e.id)),(0,I.jsx)(`button`,{className:Re.closeBtn,onClick:a,children:`閉じる`})]})}var Be={list:`_list_jaxq_1`,item:`_item_jaxq_8`,empty:`_empty_jaxq_26`};function Ve({connections:e,onMove:t,onClose:n}){return(0,I.jsx)(B,{title:`移動先を選択`,onClose:n,children:(0,I.jsx)(`div`,{className:Be.list,children:e.length===0?(0,I.jsx)(`p`,{className:Be.empty,children:`移動できる場所がありません`}):e.map(e=>(0,I.jsx)(`button`,{className:Be.item,onClick:()=>t(e.location_id),children:e.label},e.location_id))})})}var He={card:`_card_ryqrj_1`,cardSelected:`_cardSelected_ryqrj_16`,icon:`_icon_ryqrj_21`,iconPlaceholder:`_iconPlaceholder_ryqrj_27`,name:`_name_ryqrj_38`};function Ue({item:e,selected:t,onClick:n}){let{resolveAsset:r}=L(),[i,o]=(0,a.useState)(!1),s=e.icon?r(e.icon):null;return(0,I.jsxs)(`div`,{className:`${He.card} ${t?He.cardSelected:``}`,onClick:n,children:[s&&!i?(0,I.jsx)(`img`,{className:He.icon,src:s,alt:e.name,onError:()=>o(!0)}):(0,I.jsx)(`div`,{className:He.iconPlaceholder,children:`📦`}),(0,I.jsx)(`span`,{className:He.name,children:e.name})]})}var We={grid:`_grid_1aak1_1`,empty:`_empty_1aak1_9`,detail:`_detail_1aak1_18`,detailName:`_detailName_1aak1_24`,detailDesc:`_detailDesc_1aak1_30`,actions:`_actions_1aak1_37`};function Ge({state:e,masterData:t,onUse:n,onClose:r}){let[i,o]=(0,a.useState)(null),s=e.inventory.map(e=>t.items[e]).filter(e=>!!e),c=i?t.items[i]:null;return(0,I.jsxs)(B,{title:`持ち物`,onClose:r,children:[(0,I.jsx)(`div`,{className:We.grid,children:s.length===0?(0,I.jsx)(`p`,{className:We.empty,children:`何も持っていない`}):s.map(e=>(0,I.jsx)(Ue,{item:e,selected:e.id===i,onClick:()=>o(e.id===i?null:e.id)},e.id))}),c&&(0,I.jsxs)(`div`,{className:We.detail,children:[(0,I.jsx)(`div`,{className:We.detailName,children:c.name}),(0,I.jsx)(`div`,{className:We.detailDesc,children:c.description}),(0,I.jsxs)(`div`,{className:We.actions,children:[c.usable&&(0,I.jsx)(z,{label:`使う`,disabled:!O(c.id,e,t),onClick:()=>n(c.id)}),(0,I.jsx)(z,{label:`閉じる`,onClick:r,size:`small`})]})]})]})}var G={body:`_body_bes5q_1`,row:`_row_bes5q_8`,label:`_label_bes5q_14`,slider:`_slider_bes5q_21`,val:`_val_bes5q_27`,footer:`_footer_bes5q_34`};function Ke({onClose:e}){let{settings:t,updateSettings:n}=_e();return(0,I.jsx)(B,{title:`設定`,onClose:e,children:(0,I.jsxs)(`div`,{className:G.body,children:[(0,I.jsxs)(`div`,{className:G.row,children:[(0,I.jsx)(`label`,{className:G.label,children:`BGM 音量`}),(0,I.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:t.bgmVolume,className:G.slider,onChange:e=>n({bgmVolume:Number(e.target.value)})}),(0,I.jsx)(`span`,{className:G.val,children:Math.round(t.bgmVolume*100)})]}),(0,I.jsxs)(`div`,{className:G.row,children:[(0,I.jsx)(`label`,{className:G.label,children:`SE 音量`}),(0,I.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:t.seVolume,className:G.slider,onChange:e=>n({seVolume:Number(e.target.value)})}),(0,I.jsx)(`span`,{className:G.val,children:Math.round(t.seVolume*100)})]}),(0,I.jsx)(`div`,{className:G.footer,children:(0,I.jsx)(z,{label:`閉じる`,onClick:e,size:`small`})})]})})}var qe={btn:`_btn_c2o6e_1`,menuList:`_menuList_c2o6e_22`};function Je({onGetSaveData:e,onLoad:t,onTitle:n}){let[r,i]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1);async function u(t){await ge().save(t,e())}return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{className:qe.btn,onClick:()=>i(!0),children:`MENU`}),r&&!o&&!c&&(0,I.jsx)(B,{title:`システムメニュー`,onClose:()=>i(!1),children:(0,I.jsxs)(`div`,{className:qe.menuList,children:[(0,I.jsx)(z,{label:`セーブ / ロード`,onClick:()=>s(!0)}),(0,I.jsx)(z,{label:`設定`,onClick:()=>l(!0)}),(0,I.jsx)(z,{label:`タイトルへ戻る`,onClick:()=>{i(!1),n()}}),(0,I.jsx)(z,{label:`閉じる`,onClick:()=>i(!1),size:`small`})]})}),r&&c&&(0,I.jsx)(Ke,{onClose:()=>l(!1)}),r&&o&&(0,I.jsx)(be,{onSave:u,onLoad:e=>{t(e),s(!1),i(!1)},onClose:()=>s(!1)})]})}var Ye={overlay:`_overlay_3s7kx_1`,frame:`_frame_3s7kx_10`,cgFadeIn:`_cgFadeIn_3s7kx_1`,left:`_left_3s7kx_18`,right:`_right_3s7kx_23`,center:`_center_3s7kx_28`,progress:`_progress_3s7kx_38`,dot:`_dot_3s7kx_47`,dotActive:`_dotActive_3s7kx_54`},Xe=2800;function Ze({frames:e,onComplete:t}){let{resolveAsset:n}=L(),[r,i]=(0,a.useState)(0),o=(0,a.useCallback)(()=>{i(n=>n<e.length-1?n+1:(t(),n))},[e.length,t]);(0,a.useEffect)(()=>{let e=setTimeout(o,Xe);return()=>clearTimeout(e)},[r,o]);let s=e[r],c=n(s.src);return(0,I.jsxs)(`div`,{className:Ye.overlay,onClick:o,children:[(0,I.jsx)(`img`,{src:c,alt:``,className:`${Ye.frame} ${Ye[s.position]}`},r),(0,I.jsx)(`div`,{className:Ye.progress,children:e.map((e,t)=>(0,I.jsx)(`div`,{className:`${Ye.dot} ${t===r?Ye.dotActive:``}`},t))})]})}var K={root:`_root_1ai4y_1`,imageStage:`_imageStage_1ai4y_9`,cgFrame:`_cgFrame_1ai4y_16`,cgMontage:`_cgMontage_1ai4y_1`,cgFrameLast:`_cgFrameLast_1ai4y_25`,cgMontageHold:`_cgMontageHold_1ai4y_1`,backdropImg:`_backdropImg_1ai4y_29`,wideImg:`_wideImg_1ai4y_39`,vignette:`_vignette_1ai4y_51`,creditsLayer:`_creditsLayer_1ai4y_73`,scrollWrap:`_scrollWrap_1ai4y_84`,scrollUp:`_scrollUp_1ai4y_1`,creditMainTitle:`_creditMainTitle_1ai4y_99`,creditSection:`_creditSection_1ai4y_107`,creditName:`_creditName_1ai4y_114`,creditSpacer:`_creditSpacer_1ai4y_121`,finText:`_finText_1ai4y_125`,finFadeIn:`_finFadeIn_1ai4y_1`},Qe=12e3,$e=6e3,et=[{kind:`spacer`},{kind:`section`,text:`STORY & SCRIPT`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`CHARACTER DESIGN`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`VOICE ACTING`},{kind:`name`,text:`VOICEVOX`},{kind:`spacer`},{kind:`section`,text:`MUSIC`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`PROGRAMMING`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`SPECIAL THANKS`},{kind:`name`,text:`CoderDojo 赤羽`},{kind:`spacer`},{kind:`name`,text:`Thank you for playing.`}];function tt({title:e,items:t,durationSec:n}){return(0,I.jsx)(`div`,{className:K.scrollWrap,style:{animationDuration:`${n}s`},children:[{kind:`mainTitle`,text:e},...t].map((e,t)=>e.kind===`mainTitle`?(0,I.jsx)(`div`,{className:K.creditMainTitle,children:e.text},t):e.kind===`section`?(0,I.jsx)(`div`,{className:K.creditSection,children:e.text},t):e.kind===`name`?(0,I.jsx)(`div`,{className:K.creditName,children:e.text},t):(0,I.jsx)(`div`,{className:K.creditSpacer},t))})}function nt({frames:e}){let{resolveAsset:t}=L(),n=e.slice(0,4),r=Qe/Math.max(n.length,1);return(0,I.jsx)(`div`,{className:K.imageStage,children:n.map((e,i)=>{let a=t(e.src);return(0,I.jsxs)(`div`,{className:`${K.cgFrame} ${i===n.length-1?K.cgFrameLast:``}`,style:{animationDelay:`${i*r}ms`,animationDuration:`${Qe}ms`},children:[(0,I.jsx)(`img`,{className:K.backdropImg,src:a,alt:``}),(0,I.jsx)(`img`,{className:K.wideImg,src:a,alt:``})]},`${e.src}-${i}`)})})}function rt({frames:e,title:t=`赤羽の一日`,onTitle:n}){let[r,i]=(0,a.useState)(1),o=e.slice(0,4);return(0,a.useEffect)(()=>{let e=setTimeout(()=>i(2),Qe),t=setTimeout(n,Qe+$e);return()=>{clearTimeout(e),clearTimeout(t)}},[]),(0,I.jsxs)(`div`,{className:K.root,children:[(0,I.jsx)(nt,{frames:o}),(0,I.jsx)(`div`,{className:K.vignette}),(0,I.jsx)(`div`,{className:K.creditsLayer,children:(0,I.jsx)(tt,{title:t,items:et,durationSec:Qe/1e3})}),r===2&&(0,I.jsx)(`div`,{className:K.finText,children:`Fin`})]})}var it={root:`_root_1g6a7_1`,cgOverlay:`_cgOverlay_1g6a7_11`,cgFadeIn:`_cgFadeIn_1g6a7_1`};function at({onLoadGame:e,onTitle:t}){let{state:n,masterData:r,advanceMessage:i,selectChoice:o,executeCommand:s,selectTalkTarget:c,completeCgSequence:l,moveToLocation:u,clickArea:d,useItem:f,closeOverlay:p,goToTitle:m,toSaveData:h}=ue(),{settings:g}=_e(),{resolveAsset:_}=L(),v=r.scenes[n.currentSceneId],y=r.locations[n.currentLocationId],b=v?.messages[n.currentMessageIndex],x=b?.voice_character_id,S=x?r.characters[x]??null:null,C=ne(v,y,r),w=ie(n.currentLocationId,n,r),T=v?.branches?.choices??[],[E,D]=(0,a.useState)(!1),O=b?.voice_character_id??null,k=E&&n.phase===`message`,A=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=v?.bgm;!e||e===A.current||(A.current=e,R.playBgm(_(e),!0,g.bgmVolume))},[v?.bgm]),(0,a.useEffect)(()=>{n.phase===`title`&&(R.stopBgm(),A.current=null)},[n.phase]),(0,a.useEffect)(()=>{n.phase===`engine_transition`&&(R.stopBgm(),R.stopVoice(),A.current=null)},[n.phase]),(0,a.useEffect)(()=>()=>{R.stopBgm(),R.stopVoice()},[]),(0,a.useEffect)(()=>{let e=e=>{e.key!==`Enter`&&e.key!==` `||n.phase===`message`&&(e.preventDefault(),i())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n.phase,i]),(0,I.jsxs)(`div`,{className:it.root,children:[(0,I.jsx)(Ce,{backgroundPath:v?.background,locationName:y?.name}),n.phase!==`examine`&&n.currentCharacters.map(e=>{let t=r.characters[e.character_id];return t?(0,I.jsx)(we,{display:e,character:t,isSpeaking:k&&e.character_id===O},e.character_id):null}),n.phase===`message`&&v?.overlay_image&&(0,I.jsx)(`div`,{className:it.cgOverlay,style:{backgroundImage:`url(${_(v.overlay_image)})`}}),n.phase===`examine`&&(0,I.jsx)(ze,{areas:v?.clickable_areas??[],flags:n.flags,inventory:n.inventory,locationId:n.currentLocationId,onClick:d,onClose:p}),n.phase===`message`&&b&&(0,I.jsx)(Ne,{message:b,speaker:S,textSpeed:g.textSpeed,onAdvance:i,onSpeakingChange:D}),n.phase===`choice`&&(0,I.jsx)(Fe,{choices:T,flags:n.flags,inventory:n.inventory,locationId:n.currentLocationId,onSelect:o}),n.phase===`talk_select`&&(0,I.jsx)(Fe,{choices:[...n.talkCandidates.map(e=>({label:r.characters[e.characterId]?.name??e.characterId,next_scene:e.sceneId,condition:null})),{label:`やめる`,next_scene:``,condition:null}],flags:n.flags,inventory:n.inventory,locationId:n.currentLocationId,onSelect:e=>e===n.talkCandidates.length?c(-1):c(e)}),n.phase===`command`&&(0,I.jsx)(Le,{commands:C,onSelect:s}),n.phase===`map`&&(0,I.jsx)(Ve,{connections:w,onMove:u,onClose:p}),n.phase===`inventory`&&(0,I.jsx)(Ge,{state:n,masterData:r,onUse:f,onClose:p}),n.phase===`cg_sequence`&&v?.cg_sequence&&(0,I.jsx)(Ze,{frames:v.cg_sequence,onComplete:l}),n.phase!==`ending`&&(0,I.jsx)(Je,{onGetSaveData:h,onLoad:e,onTitle:m}),n.phase===`ending`&&(0,I.jsx)(rt,{frames:v?.cg_sequence??[],title:v?.ending_title,onTitle:t??m})]})}var ot=[`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`,`十`],st=4500;function ct({chapter:e,chapterIndex:t,onDismiss:n}){let r=ot[t]??String(t+1);return(0,a.useEffect)(()=>{let e=setTimeout(n,st);return()=>clearTimeout(e)},[n]),(0,a.useEffect)(()=>{let e=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]),(0,I.jsxs)(`div`,{onClick:n,style:{position:`absolute`,inset:0,background:`#06060a`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:200,cursor:`pointer`,userSelect:`none`,animation:`chapterFadeIn 0.9s ease-out both`},children:[(0,I.jsx)(`style`,{children:`
        @keyframes chapterFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}),(0,I.jsx)(`div`,{style:{width:160,height:1,background:`linear-gradient(to right, transparent, rgba(204,170,102,0.5), transparent)`,marginBottom:28}}),(0,I.jsxs)(`div`,{style:{fontFamily:`serif`,fontSize:14,letterSpacing:`0.5em`,color:`rgba(204,170,102,0.65)`,marginBottom:20},children:[`第`,r,`章`]}),(0,I.jsx)(`div`,{style:{fontFamily:`serif`,fontSize:34,letterSpacing:`0.18em`,color:`#ede0c0`,textShadow:`0 0 40px rgba(204,170,102,0.25)`,marginBottom:e.subtitle?14:0},children:e.chapterTitle}),e.subtitle&&(0,I.jsx)(`div`,{style:{fontFamily:`serif`,fontSize:13,letterSpacing:`0.25em`,color:`rgba(204,170,102,0.55)`,marginTop:4},children:e.subtitle}),(0,I.jsx)(`div`,{style:{width:160,height:1,background:`linear-gradient(to right, transparent, rgba(204,170,102,0.5), transparent)`,marginTop:28}}),(0,I.jsx)(`div`,{style:{position:`absolute`,bottom:22,fontSize:11,letterSpacing:`0.08em`,color:`rgba(204,170,102,0.28)`},children:`クリック / [Enter] で続ける`})]})}var lt=`__novel_debug_start__`;function ut(){let e=()=>{let e=Math.min(window.innerWidth/800,window.innerHeight/600);return document.fullscreenElement?e:Math.min(1,e)},[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),document.addEventListener(`fullscreenchange`,t),()=>{window.removeEventListener(`resize`,t),document.removeEventListener(`fullscreenchange`,t)}},[]),t}function dt(){let[e,t]=(0,a.useState)(!!document.fullscreenElement);return(0,a.useEffect)(()=>{let e=()=>t(!!document.fullscreenElement);return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]),{isFullscreen:e,toggle:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}}}function ft({onEngineTransition:e,autoStart:t,chapters:n,onNewGame:r,onStartChapter:i,onLoadGame:o,chapterId:s}){let{state:c,startNewGame:l,startDebugGame:u,goToTitle:d,debugSetFlag:f,debugSetInventory:p,debugJumpToScene:m}=ue(),{loadSettings:h}=_e(),g=ut(),{isFullscreen:_,toggle:v}=dt(),y=(0,a.useRef)(e);y.current=e;let b=(0,a.useRef)(!1),[x,S]=(0,a.useState)(null);function C(e,t){if(!e.chapterTitle){t();return}let r=(n??[]).findIndex(t=>t.id===e.id);S({chapter:e,index:Math.max(0,r),action:t})}function w(){if(!x)return;let e=x.action;S(null),e()}function T(){let e=(n??[])[0];e?C(e,r):r()}let E=(0,a.useCallback)(e=>{C(e,()=>i(e))},[n,i]),D=(0,a.useCallback)(()=>{let e=n??[],t=e[e.findIndex(e=>e.id===s)+1];t?C(t,()=>i(t)):d()},[n,s,i,d]);return(0,a.useEffect)(()=>{if(h(),t){l();return}let e=localStorage.getItem(lt);if(e){b.current=!0,localStorage.removeItem(lt);try{u(JSON.parse(e))}catch{}}},[]),(0,a.useEffect)(()=>{b.current&&localStorage.setItem(`__novel_debug_state__`,JSON.stringify({flags:c.flags,inventory:c.inventory,currentSceneId:c.currentSceneId,currentLocationId:c.currentLocationId,phase:c.phase}))},[c.flags,c.inventory,c.currentSceneId,c.currentLocationId,c.phase]),(0,a.useEffect)(()=>{let e=e=>{if(!(!b.current||e.key!==`__novel_debug_cmd__`||!e.newValue))try{let t=JSON.parse(e.newValue);t.type===`setFlag`?f(t.flagId,t.value):t.type===`setInventory`?p(t.inventory):t.type===`jumpToScene`&&m(t.sceneId,t.locationId)}catch{}};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[f,p,m]),(0,a.useEffect)(()=>{c.phase===`engine_transition`&&c.pendingEngineTransition&&y.current?.(c.flags,c.inventory,c.pendingEngineTransition,s)},[c.phase,c.pendingEngineTransition,s]),(0,I.jsxs)(`div`,{className:`app-wrapper`,children:[(0,I.jsxs)(`div`,{className:`game-container`,style:{transform:`scale(${g})`},children:[x&&(0,I.jsx)(ct,{chapter:x.chapter,chapterIndex:x.index,onDismiss:w}),c.phase===`title`?(0,I.jsx)(xe,{onNewGame:T,onLoad:o,chapters:n,onStartChapter:E}):(0,I.jsx)(at,{onLoadGame:o,onTitle:D})]}),(0,I.jsx)(`button`,{className:`fullscreen-btn`,onClick:v,title:_?`全画面解除`:`全画面表示`,children:_?`⊠`:`⛶`})]})}function pt({masterData:e,assetsBaseUrl:t,config:n,initialFlags:r,initialInventory:i,autoStart:o,onEngineTransition:s}){let c=n.chapters??[],l=c.find(e=>e.id===(n.chapterId??`chapter1`))??c[0]??{id:n.chapterId??`chapter1`,title:`本編`,masterData:e,initialSceneId:n.initialSceneId,initialLocationId:n.initialLocationId,initialFlags:r};function u(e,t,n){return ce(e.masterData,e.initialSceneId,e.initialLocationId,{chapterId:e.id,initialFlags:t,initialInventory:n})}let[d,f]=(0,a.useState)(()=>({key:0,chapter:l,store:u({...l,initialSceneId:n.initialSceneId},r,i)}));function p(e){let t=u(e,{...e.unlockFlag?{[e.unlockFlag]:!0}:{},...e.initialFlags??{}},[]);t.getState().startNewGame(),f(n=>({key:n.key+1,chapter:e,store:t}))}function m(){p(l)}function h(e){let t=e.chapterId??`chapter1`,n=c.find(e=>e.id===t)??l,r=u(n,e.flags,e.inventory);r.getState().loadGame({...e,chapterId:n.id}),f(e=>({key:e.key+1,chapter:n,store:r}))}let g=(0,a.useCallback)((e,t,n,r)=>{s?.(e,t,n,r)},[s]);return(0,I.jsx)(fe,{assetsBaseUrl:t,children:(0,I.jsx)(le.Provider,{value:d.store,children:(0,I.jsx)(ft,{onEngineTransition:g,autoStart:o,chapters:c,onNewGame:m,onStartChapter:p,onLoadGame:h,chapterId:d.chapter.id},d.key)})})}function mt(e){return Object.fromEntries(e.map(e=>[e.id,e]))}function ht(e,t={}){let n=[];for(let r of e){let{child_scenes:e,...i}=r,a={...t,...i};n.push(a),e?.length&&n.push(...ht(e,{location_id:a.location_id,background:a.background,bgm:a.bgm}))}return n}function gt(e){let t=r.load(e.scenes),n=r.load(e.flags),i=r.load(e.items),a=r.load(e.locations),o=r.load(e.characters),s=r.load(e.commands);return{scenes:mt(ht(t.scenes)),flags:n.flags,items:mt(i.items),locations:mt(a.locations),characters:mt(o.characters),commands:mt(s.commands)}}var _t={chapter1:s,chapter2:c,chapter3:l,chapter4:u},vt={};function yt(e=`chapter1`){return vt[e]??=gt({scenes:_t[e],flags:d,items:f,locations:p,characters:m,commands:h}),vt[e]}var bt={fade:400,wipe:350,flash:150,speedline:720,rift:820,cardflip:680,numberstorm:860,none:0},xt=[{value:`7`,left:`8%`,top:`14%`,size:66,delay:0,rotate:-18,color:`#fff2a8`},{value:`3`,left:`20%`,top:`72%`,size:52,delay:90,rotate:14,color:`#8be9ff`},{value:`+`,left:`34%`,top:`24%`,size:46,delay:150,rotate:-9,color:`#ff9fd5`},{value:`12`,left:`48%`,top:`68%`,size:74,delay:40,rotate:11,color:`#ffffff`},{value:`5`,left:`62%`,top:`18%`,size:58,delay:220,rotate:17,color:`#b6ff8b`},{value:`9`,left:`78%`,top:`58%`,size:68,delay:120,rotate:-13,color:`#ffd18b`},{value:`=`,left:`86%`,top:`30%`,size:48,delay:260,rotate:8,color:`#fff2a8`},{value:`21`,left:`12%`,top:`46%`,size:82,delay:300,rotate:10,color:`#ffffff`},{value:`4`,left:`42%`,top:`8%`,size:44,delay:360,rotate:-16,color:`#8be9ff`},{value:`6`,left:`70%`,top:`78%`,size:50,delay:430,rotate:18,color:`#ff9fd5`}],St=`
@keyframes hub-fade-out  { from { opacity: 0 } to { opacity: 1 } }
@keyframes hub-fade-in   { from { opacity: 1 } to { opacity: 0 } }
@keyframes hub-wipe-out  { from { transform: translateX(-100%) } to { transform: translateX(0%) } }
@keyframes hub-wipe-in   { from { transform: translateX(0%)    } to { transform: translateX(100%) } }
@keyframes hub-flash-out { from { opacity: 0 } to { opacity: 1 } }
@keyframes hub-flash-in  { from { opacity: 1 } to { opacity: 0 } }
@keyframes hub-speedline-out {
  0%   { opacity: 0; transform: scaleX(0.25) skewX(-10deg); filter: brightness(1); }
  45%  { opacity: 1; transform: scaleX(1.15) skewX(-10deg); filter: brightness(1.9); }
  100% { opacity: 1; transform: scaleX(1) skewX(0deg); filter: brightness(1.35); }
}
@keyframes hub-speedline-in {
  0%   { opacity: 1; transform: scaleX(1) skewX(0deg); filter: brightness(1.35); }
  55%  { opacity: 0.82; transform: scaleX(1.2) skewX(10deg); filter: brightness(1.8); }
  100% { opacity: 0; transform: scaleX(0.35) skewX(10deg); filter: brightness(1); }
}
@keyframes hub-rift-out {
  0%   { opacity: 0; transform: scale(1.18) rotate(0deg); filter: blur(0px) brightness(1); }
  40%  { opacity: 1; transform: scale(1.04) rotate(-1deg); filter: blur(2px) brightness(1.4); }
  100% { opacity: 1; transform: scale(0.98) rotate(0deg); filter: blur(0px) brightness(0.78); }
}
@keyframes hub-rift-in {
  0%   { opacity: 1; transform: scale(0.98) rotate(0deg); filter: blur(0px) brightness(0.78); }
  45%  { opacity: 0.85; transform: scale(1.06) rotate(1deg); filter: blur(2px) brightness(1.35); }
  100% { opacity: 0; transform: scale(1.2) rotate(0deg); filter: blur(0px) brightness(1); }
}
@keyframes hub-cardflip-out {
  0%   { opacity: 0; transform: perspective(900px) rotateY(-90deg) scale(0.85); filter: brightness(1); }
  42%  { opacity: 1; transform: perspective(900px) rotateY(8deg) scale(1.02); filter: brightness(1.35); }
  100% { opacity: 1; transform: perspective(900px) rotateY(0deg) scale(1); filter: brightness(0.9); }
}
@keyframes hub-cardflip-in {
  0%   { opacity: 1; transform: perspective(900px) rotateY(0deg) scale(1); filter: brightness(0.9); }
  46%  { opacity: 0.9; transform: perspective(900px) rotateY(-10deg) scale(1.02); filter: brightness(1.3); }
  100% { opacity: 0; transform: perspective(900px) rotateY(90deg) scale(0.85); filter: brightness(1); }
}
@keyframes hub-numberstorm-out {
  0%   { opacity: 0; transform: scale(0.92) rotate(-2deg); filter: brightness(1); }
  35%  { opacity: 1; transform: scale(1.04) rotate(1deg); filter: brightness(1.35); }
  100% { opacity: 1; transform: scale(1.01) rotate(0deg); filter: brightness(1.12); }
}
@keyframes hub-numberstorm-in {
  0%   { opacity: 1; transform: scale(1.01) rotate(0deg); filter: brightness(1.12); }
  45%  { opacity: 0.86; transform: scale(1.05) rotate(-1deg); filter: brightness(1.25); }
  100% { opacity: 0; transform: scale(1.16) rotate(2deg); filter: brightness(1); }
}
@keyframes hub-number-fly {
  0%   { opacity: 0; transform: translate3d(-42vw, 22vh, 0) rotate(-28deg) scale(0.35); }
  18%  { opacity: 1; }
  55%  { opacity: 1; transform: translate3d(0, 0, 0) rotate(0deg) scale(1.08); }
  100% { opacity: 0; transform: translate3d(38vw, -24vh, 0) rotate(30deg) scale(0.62); }
}
@keyframes hub-number-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.84; }
  50%      { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
}
`;function Ct({engines:e,initial:t,initialContext:n,defaultTransition:r=`none`}){let[i,o]=(0,a.useState)(n),[s,c]=(0,a.useState)(t),[l,u]=(0,a.useState)(`idle`),[d,f]=(0,a.useState)(`none`),p=(0,a.useRef)(null);function m(e,t){let n=null;if(t?n={engineId:t.engineId,config:t.config,returnEngineId:t.returnEngineId,returnConfig:t.returnConfig,returnTransition:t.returnTransition}:s.returnEngineId&&(n={engineId:s.returnEngineId,config:s.returnConfig}),!n)return;let i=(t?t.transition:s.returnTransition)??r??`none`;if(i===`none`||!(i in bt)){o(e),c(n);return}p.current={updated:e,next:n},f(i),u(`out`)}(0,a.useEffect)(()=>{if(l!==`out`)return;let e=setTimeout(()=>{p.current&&=(o(p.current.updated),c(p.current.next),null),u(`in`)},bt[d]);return()=>clearTimeout(e)},[l,d]),(0,a.useEffect)(()=>{if(l!==`in`)return;let e=setTimeout(()=>u(`idle`),bt[d]);return()=>clearTimeout(e)},[l,d]);let h=e[s.engineId];if(!h)return(0,I.jsxs)(`div`,{style:{padding:24,color:`red`},children:[`Engine not found: `,s.engineId]});let g=h.component,_=l!==`idle`,v=d===`flash`?`#fff`:d===`speedline`?[`radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95) 0 5%, rgba(255,210,90,0.78) 9%, rgba(255,120,70,0.38) 18%, rgba(0,0,0,0.92) 58%)`,`repeating-linear-gradient(100deg, rgba(255,255,255,0.95) 0 8px, rgba(255,210,90,0.35) 8px 14px, rgba(0,0,0,0) 14px 34px)`,`#050505`].join(`, `):d===`rift`?[`radial-gradient(circle at 50% 50%, rgba(190,120,255,0.95) 0 4%, rgba(80,20,120,0.82) 13%, rgba(12,2,24,0.98) 54%, #000 100%)`,`repeating-conic-gradient(from 0deg, rgba(210,170,255,0.24) 0deg 7deg, rgba(0,0,0,0) 7deg 18deg)`,`#000`].join(`, `):d===`cardflip`?[`radial-gradient(circle at 50% 50%, rgba(255,245,210,0.9) 0 8%, rgba(110,45,80,0.84) 34%, rgba(12,8,22,0.98) 74%)`,`linear-gradient(90deg, rgba(255,255,255,0.20) 0 1px, transparent 1px 80px)`,`linear-gradient(0deg, rgba(255,255,255,0.16) 0 1px, transparent 1px 112px)`,`#0d0712`].join(`, `):d===`numberstorm`?[`radial-gradient(circle at 50% 46%, rgba(255,255,255,0.98) 0 6%, rgba(255,230,92,0.74) 14%, rgba(25,190,220,0.38) 33%, rgba(21,24,60,0.96) 72%)`,`repeating-linear-gradient(24deg, rgba(255,255,255,0.18) 0 2px, transparent 2px 28px)`,`repeating-linear-gradient(116deg, rgba(255,223,92,0.17) 0 2px, transparent 2px 34px)`,`#11183c`].join(`, `):`#000`,y=_?{position:`fixed`,inset:0,zIndex:9999,pointerEvents:`all`,background:v,backgroundSize:d===`speedline`?`100% 100%, 220px 100%, 100% 100%`:d===`rift`?`100% 100%, 180px 180px, 100% 100%`:d===`cardflip`?`100% 100%, 80px 100%, 100% 112px, 100% 100%`:d===`numberstorm`?`100% 100%, 120px 120px, 150px 150px, 100% 100%`:void 0,animation:`hub-${d}-${l} ${bt[d]}ms ease forwards`}:{position:`fixed`,inset:0,zIndex:9999,pointerEvents:`none`,opacity:0};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`style`,{children:St}),(0,I.jsx)(g,{context:i,config:s.config,onExit:m}),(0,I.jsxs)(`div`,{style:y,children:[_&&d===`speedline`&&(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff7c8`,fontFamily:`'Impact', 'Arial Black', sans-serif`,fontSize:96,letterSpacing:0,textShadow:`0 0 18px rgba(255,118,54,0.95), 0 8px 0 rgba(0,0,0,0.55)`,transform:l===`out`?`rotate(-5deg) scale(1.08)`:`rotate(5deg) scale(0.96)`},children:`RUN!`}),_&&d===`cardflip`&&(0,I.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`50%`,width:190,height:260,borderRadius:8,border:`2px solid rgba(255,245,210,0.95)`,background:`linear-gradient(145deg, rgba(255,245,210,0.96), rgba(170,80,130,0.92))`,boxShadow:`0 0 30px rgba(255,230,160,0.8), inset 0 0 0 10px rgba(70,22,48,0.32)`,transform:`translate(-50%, -50%) ${l===`out`?`rotate(-4deg)`:`rotate(4deg)`}`}}),_&&d===`numberstorm`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`50%`,width:210,height:210,borderRadius:`50%`,background:`radial-gradient(circle, rgba(255,255,255,0.96) 0 18%, rgba(255,222,82,0.84) 31%, rgba(34,206,230,0.22) 56%, transparent 70%)`,boxShadow:`0 0 34px rgba(255,234,94,0.85), 0 0 72px rgba(73,220,255,0.48)`,animation:`hub-number-pulse 520ms ease-in-out infinite`}}),(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#162057`,fontFamily:`'Arial Black', 'Impact', sans-serif`,fontSize:64,letterSpacing:0,textShadow:`0 2px 0 rgba(255,255,255,0.8), 0 0 16px rgba(255,241,124,0.9)`},children:`COUNT!`}),xt.map((e,t)=>(0,I.jsx)(`span`,{style:{position:`absolute`,left:e.left,top:e.top,color:e.color,fontFamily:`'Arial Black', 'Impact', sans-serif`,fontSize:e.size,lineHeight:1,letterSpacing:0,textShadow:`0 0 16px rgba(255,255,255,0.92), 0 5px 0 rgba(7,11,34,0.42)`,transform:`rotate(${e.rotate}deg)`,animation:`hub-number-fly 620ms cubic-bezier(0.2, 0.9, 0.2, 1) ${e.delay}ms both`},children:e.value},`${e.value}-${t}`))]})]})]})}function wt({context:e,config:t,onExit:n}){let r=(0,a.useCallback)((r,i,a,o)=>{let s={flags:r,inventory:i,playerStats:e.playerStats};if(a.id===`__return__`){n(s);return}let c=Object.values(t.masterData.items).map(e=>({id:e.id,name:e.name,usable:e.usable,description:e.description,category:e.category})),l=a.config??{},u={},d=(e,n)=>{if(typeof e!=`string`)return;let r=t.masterData.characters[e];if(!r)return;u[`${n}Name`]=r.name;let i=r.sprites?.normal??(r.sprites?Object.values(r.sprites)[0]:void 0);i&&(u[`${n}FaceImage`]=i),r.voicevox_speaker_id&&(u[`${n}VoicevoxSpeakerId`]=r.voicevox_speaker_id)};d(l.playerCharacterId,`player`),d(l.opponentCharacterId,`opponent`);let f={masterData:t.masterData,assetsBaseUrl:t.assetsBaseUrl,chapterId:o,initialLocationId:t.initialLocationId,chapters:t.chapters,exitSceneId:a.return_scene,gameoverSceneId:a.gameover_scene,gameoverBossSceneId:a.gameover_boss_scene,gameoverLandingSceneId:a.gameover_landing_scene};n(s,{engineId:a.id,transition:a.transition,config:{assetsBaseUrl:t.assetsBaseUrl,items:c,...u,...a.config??{},_novelReturn:f},returnEngineId:a.return_scene?`novel`:void 0,returnConfig:a.return_scene?{...t,chapterId:o,initialSceneId:a.return_scene,autoStart:!0}:void 0})},[e.playerStats,t,n]);return(0,I.jsx)(pt,{masterData:t.masterData,assetsBaseUrl:t.assetsBaseUrl,config:{initialSceneId:t.initialSceneId,initialLocationId:t.initialLocationId,chapterId:t.chapterId,chapters:t.chapters},initialFlags:e.flags,initialInventory:e.inventory,autoStart:t.autoStart,onEngineTransition:r})}var Tt={component:wt},Et={dungeon_01:[`###########`,`#S........#`,`#.#######.#`,`###.......#`,`###.#######`,`###.....###`,`#######.###`,`#######.###`,`#######.###`,`#######...#`,`#########X#`,`###########`],dungeon_02:[`###############`,`#S..........###`,`#.#########.###`,`###.........###`,`###.#######.###`,`###E#.........#`,`###.#.#########`,`###.#.........#`,`###.###########`,`###..........B#`,`#############X#`,`###############`],dungeon_03:[`###############`,`#S.....##.#####`,`#.#######.#####`,`#.#######.#####`,`#.#######.#####`,`#.###.#E......#`,`#.###.#.#####.#`,`#.###.#.#####.#`,`#.###.#.#####.#`,`#.......#####B#`,`#############X#`,`###############`]};function Dt(e){return{...e,maxHp:e.hp}}var Ot={ghost:{id:`ghost`,name:`ゴースト`,hp:10,atk:4,def:1},bat:{id:`bat`,name:`コウモリ`,hp:6,atk:3,def:0},wraith:{id:`wraith`,name:`レイス`,hp:14,atk:5,def:2}},kt={dungeon_02:[Ot.ghost,Ot.bat,Ot.wraith],dungeon_03:[Ot.ghost,Ot.bat,Ot.wraith]},At={dungeon_02:{id:`maze_boss`,name:`迷宮の主`,hp:22,atk:7,def:2},dungeon_03:{id:`maze_boss`,name:`迷宮の主`,hp:22,atk:7,def:2}};function jt(e){let t=At[e];return t?Dt(t):null}function Mt(e){let t=kt[e];return!t||t.length===0?null:Dt(t[Math.floor(Math.random()*t.length)])}function Nt(e){let t=Mt(e.mapId);if(!t)return e;let n={enemy:t,phase:`select`,log:[`${t.name} が現れた！`],cursorIndex:0,guarding:!1};return{...e,battle:n}}function Pt(e){let t=jt(e.mapId);if(!t)return e;let n={enemy:t,phase:`select`,log:[`${t.name} が立ちはだかった！　逃げられない！`],cursorIndex:0,guarding:!1};return{...e,battle:n}}function Ft(e){let{battle:t}=e;if(!t)return e;let n=Math.max(1,t.enemy.atk-(t.guarding?e.playerDef*2:e.playerDef)),r=e.playerHp-n,i=[...t.log,`${t.enemy.name} の攻撃！ ケン に ${n} ダメージ！`];return r<=0?{...e,playerHp:0,battle:{...t,phase:`lose`,log:[...i,`ケン は倒れた……`],guarding:!1}}:{...e,playerHp:r,battle:{...t,phase:`select`,log:i,guarding:!1}}}function It(e){let{battle:t}=e;if(!t)return e;if(t.cursorIndex===3){if(e.pendingBossTilePos){let n=[...t.log,`逃げることはできない！`];return Ft({...e,battle:{...t,log:n,guarding:!1}})}if(Math.random()<.5)return{...e,battle:null};let n=[...t.log,`逃げられなかった！`];return Ft({...e,battle:{...t,log:n,guarding:!1}})}if(t.cursorIndex===1){let n=[...t.log,`ケン は身を守った！`];return Ft({...e,battle:{...t,log:n,guarding:!0}})}if(t.cursorIndex===2)return e;let n=Math.max(1,e.playerAtk-t.enemy.def),r=t.enemy.hp-n,i=[...t.log,`ケン の攻撃！ ${t.enemy.name} に ${n} ダメージ！`];if(r<=0){let n={...t.enemy,hp:0};return{...e,battle:{...t,enemy:n,phase:`win`,log:[...i,`${t.enemy.name} を倒した！`],guarding:!1}}}let a={...t.enemy,hp:r};return Ft({...e,battle:{...t,enemy:a,log:i,guarding:!1}})}function Lt(e,t){let{battle:n}=e;if(!n)return e;let r=t===`Enter`||t===` `,i=t===`ArrowUp`||t===`w`||t===`W`,a=t===`ArrowDown`||t===`s`||t===`S`;if(n.phase===`select`)return i?{...e,battle:{...n,cursorIndex:(n.cursorIndex+3)%4}}:a?{...e,battle:{...n,cursorIndex:(n.cursorIndex+1)%4}}:r?It(e):e;if(!r)return e;if(n.phase===`win`){if(e.pendingBossTilePos){let t=new Set(e.triggeredEvents);return t.add(e.pendingBossTilePos),{...e,battle:null,pendingBossTilePos:null,triggeredEvents:t}}return{...e,battle:null}}return n.phase===`lose`?{...e,pendingDeath:!0}:e}var Rt=.2,zt={N:{fwd:{x:0,y:-1},left:{x:-1,y:0},right:{x:1,y:0},back:{x:0,y:1}},E:{fwd:{x:1,y:0},left:{x:0,y:-1},right:{x:0,y:1},back:{x:-1,y:0}},S:{fwd:{x:0,y:1},left:{x:1,y:0},right:{x:-1,y:0},back:{x:0,y:-1}},W:{fwd:{x:-1,y:0},left:{x:0,y:1},right:{x:0,y:-1},back:{x:1,y:0}}},Bt={N:`W`,W:`S`,S:`E`,E:`N`},Vt={N:`E`,E:`S`,S:`W`,W:`N`};function Ht(e,t,n){return n<0||n>=e.length||t<0||t>=(e[n]?.length??0)?`#`:e[n][t]??`#`}function q(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ut(e,t){return{x:e.x*t,y:e.y*t}}function Wt(e){for(let t=0;t<e.length;t++){let n=e[t].indexOf(`S`);if(n>=0)return{x:n,y:t}}return{x:1,y:1}}function Gt(e,t,n,r){let i=Et[e]??Et.dungeon_01,a=r?.initialPos??Wt(i),o=r?.initialDir??`N`,s=t?.maxHp??20,c=Math.min(s,Math.max(1,t?.hp??s)),l=r?.initialVisited?new Set(r.initialVisited):new Set([`${a.x},${a.y}`]),u=r?.initialTriggeredEvents?new Set(r.initialTriggeredEvents):new Set;return{pos:a,dir:o,map:i,mapId:e,visited:l,atExit:!1,steps:0,playerHp:c,playerMaxHp:s,playerAtk:t?.atk??5,playerDef:t?.def??2,battle:null,inventory:n??[],pendingEvent:null,triggeredEvents:u,pendingDeath:!1,pendingBossTilePos:null}}function Kt(e,t,n,r){let i=e.inventory.indexOf(t);if(i===-1||r?.attackEnemy!==void 0&&!e.battle)return e;let a=[...e.inventory.slice(0,i),...e.inventory.slice(i+1)],o=[`${n}を使った！`],s=e.playerHp;if(r?.healHp===`full`?(s=e.playerMaxHp,o.push(`HPが全回復した！`)):typeof r?.healHp==`number`&&(s=Math.min(e.playerMaxHp,e.playerHp+r.healHp),o.push(`HPが ${r.healHp} 回復した！`)),e.battle&&r?.attackEnemy!==void 0){let t=e.battle.enemy,n=Math.min(r.attackEnemy,t.hp),i=Math.max(0,t.hp-r.attackEnemy);o.push(`${t.name} に ${n} の大ダメージ！`);let c={...t,hp:i};return i<=0?(o.push(`${t.name} を倒した！`),{...e,inventory:a,playerHp:s,battle:{...e.battle,enemy:c,phase:`win`,log:[...e.battle.log,...o]}}):{...e,inventory:a,playerHp:s,battle:{...e.battle,enemy:c,log:[...e.battle.log,...o]}}}if(e.battle){let t=[...e.battle.log,...o];return{...e,inventory:a,playerHp:s,battle:{...e.battle,log:t}}}return{...e,inventory:a,playerHp:s}}var qt=new Set([`.`,`S`,`X`,`#`]);function Jt(e,t){let n=q(e.pos,t),r=Ht(e.map,n.x,n.y);if(r===`#`)return e;let i=`${n.x},${n.y}`,a=new Set(e.visited);a.add(i);let o=r===`X`,s={...e,pos:n,visited:a,atExit:o,steps:e.steps+1};return!o&&r===`B`&&!e.triggeredEvents.has(i)?Pt({...s,pendingBossTilePos:i}):!o&&!qt.has(r)&&r!==`B`&&!e.triggeredEvents.has(i)?{...s,pendingEvent:r}:!o&&r!==`B`&&kt[e.mapId]&&Math.random()<Rt?Nt(s):s}function Yt(e){return Jt(e,zt[e.dir].fwd)}function Xt(e){return Jt(e,zt[e.dir].back)}function Zt(e){return{...e,dir:Bt[e.dir]}}function Qt(e){return{...e,dir:Vt[e.dir]}}function $t(e,t){if(e.pendingDeath)return e;if(e.battle)return Lt(e,t);if(e.pendingEvent!==null||e.atExit)return e;switch(t){case`ArrowUp`:case`w`:case`W`:return Yt(e);case`ArrowDown`:case`s`:case`S`:return Xt(e);case`ArrowLeft`:case`a`:case`A`:return Zt(e);case`ArrowRight`:case`d`:case`D`:return Qt(e);default:return e}}function en(e,t){let{fwd:n,left:r,right:i}=zt[e.dir],a=[!1],o=[!1],s=[!1];for(let c=1;c<=t;c++){let t=q(e.pos,Ut(n,c));a.push(Ht(e.map,t.x,t.y)===`#`);let l=q(e.pos,Ut(n,c-1));o.push(Ht(e.map,q(l,r).x,q(l,r).y)===`#`),s.push(Ht(e.map,q(l,i).x,q(l,i).y)===`#`)}return{front:a,left:o,right:s}}var tn=480,J=320,nn=4,rn=[[0,0,480,320],[60,40,420,280],[120,80,360,240],[172,110,308,210],[207,128,273,192]],an=[1,1,.78,.56,.38];function on(e,t,n,r){return`rgb(${Math.round(e*r)},${Math.round(t*r)},${Math.round(n*r)})`}function sn(e){let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}function cn(e,t,n){let{front:r,left:i,right:a}=en(t,nn),[o,s,c]=sn(n.wallFront),[l,u,d]=sn(n.wallSide),f=e.createLinearGradient(0,0,0,J/2);f.addColorStop(0,n.ceilTop),f.addColorStop(1,n.ceilBottom),e.fillStyle=f,e.fillRect(0,0,tn,J/2);let p=e.createLinearGradient(0,J/2,0,J);p.addColorStop(0,n.floorTop),p.addColorStop(1,n.floorBottom),e.fillStyle=p,e.fillRect(0,J/2,tn,J/2);let m=nn;for(let e=1;e<=nn;e++)if(r[e]){m=e;break}for(let t=m;t>=1;t--){let n=an[t]??.3,[f,p,m,h]=rn[t],[g,_,v,y]=rn[t-1];if(r[t]){e.fillStyle=on(o,s,c,n),e.fillRect(f,p,m-f,h-p),e.strokeStyle=`rgba(0,0,0,0.45)`,e.lineWidth=1;let t=Math.max(8,Math.floor((h-p)/3));for(let n=p+t;n<h;n+=t)e.beginPath(),e.moveTo(f,n),e.lineTo(m,n),e.stroke();let r=Math.floor((h-p)/t);for(let n=0;n<r;n++){let r=n%2*Math.floor((m-f)/4),i=Math.max(6,Math.floor((m-f)/3));for(let a=f+r;a<m;a+=i)e.beginPath(),e.moveTo(a,p+n*t),e.lineTo(a,p+(n+1)*t),e.stroke()}}i[t]&&(e.fillStyle=on(l,u,d,n),e.beginPath(),e.moveTo(g,_),e.lineTo(f,p),e.lineTo(f,h),e.lineTo(g,y),e.closePath(),e.fill(),e.strokeStyle=on(l+20,u+15,d+5,n),e.lineWidth=1,e.beginPath(),e.moveTo(f,p),e.lineTo(f,h),e.stroke()),a[t]&&(e.fillStyle=on(l,u,d,n),e.beginPath(),e.moveTo(m,p),e.lineTo(v,_),e.lineTo(v,y),e.lineTo(m,h),e.closePath(),e.fill(),e.strokeStyle=on(l+20,u+15,d+5,n),e.lineWidth=1,e.beginPath(),e.moveTo(m,p),e.lineTo(m,h),e.stroke())}if(!r[m]&&m===nn){let[t,r,i,a]=rn[nn];e.fillStyle=n.ceilTop,e.fillRect(t,r,i-t,a-r)}}var ln={ceilTop:`#020213`,ceilBottom:`#0d0d25`,floorTop:`#130a02`,floorBottom:`#060300`,wallFront:`#9a7420`,wallSide:`#5a420a`,uiBg:`#080504`,uiAccent:`#ccaa66`,uiBorder:`#443322`};function un({state:e,theme:t}){let n=(0,a.useRef)(null),r=t??ln;return(0,a.useEffect)(()=>{let t=n.current?.getContext(`2d`);t&&cn(t,e,r)},[e,r]),(0,I.jsx)(`canvas`,{ref:n,width:tn,height:J,style:{display:`block`,imageRendering:`pixelated`}})}var Y=10,dn=3,fn={N:[[0,-5],[-4,4],[4,4]],E:[[5,0],[-4,-4],[-4,4]],S:[[0,5],[-4,-4],[4,-4]],W:[[-5,0],[4,-4],[4,4]]};function pn({state:e,mode:t=`full`}){let n=(0,a.useRef)(null),r=e.map[0]?.length??0,i=e.map.length,o=r*Y+dn*2,s=i*Y+dn*2;return(0,a.useEffect)(()=>{let a=n.current?.getContext(`2d`);if(!a)return;a.clearRect(0,0,o,s),a.fillStyle=`#0a0a0a`,a.fillRect(0,0,o,s);for(let n=0;n<i;n++)for(let i=0;i<r;i++){let r=e.map[n]?.[i]??`#`,o=`${i},${n}`,s=e.visited.has(o),c=dn+i*Y,l=dn+n*Y;if(t===`visited`&&!s){a.fillStyle=`#050505`,a.fillRect(c,l,Y,Y);continue}r===`#`?(a.fillStyle=s?`#554433`:`#2a1a0a`,a.fillRect(c,l,Y,Y)):(a.fillStyle=s?`#443322`:`#110a04`,a.fillRect(c,l,Y,Y),r===`X`&&(a.fillStyle=`#33bb55`,a.fillRect(c+2,l+2,Y-4,Y-4)))}let c=dn+e.pos.x*Y+Y/2,l=dn+e.pos.y*Y+Y/2,u=fn[e.dir]??fn.N;a.fillStyle=`#ffdd00`,a.beginPath(),a.moveTo(c+u[0][0],l+u[0][1]),a.lineTo(c+u[1][0],l+u[1][1]),a.lineTo(c+u[2][0],l+u[2][1]),a.closePath(),a.fill()},[e,o,s,i,r,t]),(0,I.jsx)(`canvas`,{ref:n,width:o,height:s,style:{display:`block`,imageRendering:`pixelated`}})}var mn=[`攻撃`,`防御`,`アイテム`,`逃げる`];function hn({hp:e,maxHp:t,color:n}){return(0,I.jsx)(`div`,{style:{height:8,background:`#2a2020`,borderRadius:4,overflow:`hidden`},children:(0,I.jsx)(`div`,{style:{width:`${Math.max(0,Math.min(1,t>0?e/t:0))*100}%`,height:`100%`,background:n,transition:`width 0.2s`,borderRadius:4}})})}function gn({label:e,active:t,font:n,theme:r,onHover:i,onClick:o}){let[s,c]=(0,a.useState)(!1),l=t||s;return(0,I.jsx)(`div`,{onMouseEnter:()=>{c(!0),i()},onMouseLeave:()=>c(!1),onClick:o,style:{flex:1,fontSize:13,padding:`8px 0`,background:l?r.uiBorder:`#1a1008`,color:r.uiAccent,border:`1px solid ${l?r.uiAccent:r.uiBorder}`,borderRadius:3,cursor:`pointer`,userSelect:`none`,textAlign:`center`,fontFamily:n,transition:`background 0.1s, border-color 0.1s`},children:e})}function _n({state:e,theme:t,onSelectCommand:n,onCommand:r,font:i}){let{battle:a}=e;if(!a)return null;let o=a.log.at(-1);return(0,I.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:8,flexShrink:0,fontFamily:i},children:[(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:11,marginBottom:4,color:t.uiAccent},children:[(0,I.jsx)(`span`,{children:a.enemy.name}),(0,I.jsxs)(`span`,{style:{opacity:.65},children:[`HP `,a.enemy.hp,`/`,a.enemy.maxHp]})]}),(0,I.jsx)(hn,{hp:a.enemy.hp,maxHp:a.enemy.maxHp,color:`#e05050`})]}),a.phase===`select`?(0,I.jsx)(`div`,{style:{display:`flex`,gap:6},children:mn.map((e,o)=>(0,I.jsx)(gn,{label:e,active:a.cursorIndex===o,font:i,theme:t,onHover:()=>n?.(o),onClick:()=>{n?.(o),r?.(o)}},e))}):a.phase===`win`?(0,I.jsx)(`div`,{style:{fontSize:12,color:`#d8b8ff`,opacity:.95,userSelect:`none`,textShadow:`0 0 8px rgba(180,120,255,0.65)`},children:`撃破！`}):(0,I.jsx)(`div`,{style:{fontSize:12,color:`#ff9090`,opacity:.95,userSelect:`none`},children:`倒れてしまった……`}),(0,I.jsxs)(`div`,{style:{borderTop:`1px solid ${t.uiBorder}`,paddingTop:6},children:[o&&(0,I.jsx)(`div`,{style:{fontSize:13,lineHeight:1.5,marginBottom:5,color:`#f3dfaa`,textShadow:`0 0 6px rgba(204,170,102,0.35)`},children:o}),(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,maxHeight:74,overflow:`hidden`,background:`rgba(0,0,0,0.18)`,border:`1px solid ${t.uiBorder}`,borderRadius:3,padding:`5px 6px`},children:a.log.slice(-5).map((e,t,n)=>(0,I.jsx)(`div`,{style:{fontSize:11,lineHeight:1.35,opacity:.36+(t+1)/n.length*.5},children:e},`${e}-${t}`))})]})]})}function vn({enemy:e,assetsBaseUrl:t,defeated:n=!1,onClick:r}){let i=e.maxHp>0?e.hp/e.maxHp:1,a=.4+i*.6,o=`${t}/enemies/${e.id}.png`,s=e.id===`maze_boss`;return(0,I.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`none`},children:[(0,I.jsx)(`div`,{style:{position:`absolute`,width:s?380:250,height:s?340:220,borderRadius:`50%`,background:s?`radial-gradient(circle, rgba(80,0,0,0.80) 0%, rgba(0,0,0,0.60) 40%, transparent 70%)`:`radial-gradient(circle, rgba(0,0,0,0.70) 0%, transparent 68%)`}}),(0,I.jsx)(`img`,{src:o,alt:e.name,style:{position:`relative`,maxHeight:s?280:180,maxWidth:s?300:220,objectFit:`contain`,opacity:a,transition:`opacity 0.5s, transform 0.45s, filter 0.45s`,imageRendering:`pixelated`,transform:n?`scale(1.18) rotate(-3deg)`:void 0,pointerEvents:r&&!n?`auto`:`none`,cursor:r&&!n?`crosshair`:`default`,filter:n?`brightness(2.3) saturate(0) blur(2px) drop-shadow(0 0 28px rgba(220,180,255,0.95))`:s?`drop-shadow(0 0 18px rgba(200,0,0,${.3+i*.5}))`:void 0},title:r&&!n?`${e.name}を攻撃`:void 0,onClick:r,onError:e=>{e.target.style.display=`none`}}),n&&(0,I.jsx)(`div`,{style:{position:`absolute`,width:s?360:250,height:s?300:210,borderRadius:`50%`,background:`radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(180,120,255,0.5) 26%, transparent 68%)`,mixBlendMode:`screen`,animation:`maze-enemy-burst 650ms ease-out forwards`}})]})}function yn(e){if(!e)return`迷路内で特別な効果はない`;let t=[];return e.healHp===`full`?t.push(`HP全回復`):typeof e.healHp==`number`&&t.push(`HP+${e.healHp}`),typeof e.attackEnemy==`number`&&t.push(`敵に${e.attackEnemy}ダメージ`),t.length>0?t.join(` / `):`迷路内で特別な効果はない`}function bn(e){switch(e){case`key_item`:return`大事なもの`;case`consumable`:return`消耗品`;case`tool`:return`道具`;case`misc`:return`その他`;default:return`アイテム`}}function xn(e,t,n){return e?.usable?n===`explore`&&t?.attackEnemy!==void 0?{canUse:!1,reason:`戦闘中のみ使用可`}:n===`battle`&&!t?.healHp&&t?.attackEnemy===void 0?{canUse:!1,reason:`戦闘中は効果なし`}:{canUse:!0,reason:`使用可能`}:{canUse:!1,reason:`使用できない`}}function Sn({name:e,selected:t,usable:n,count:r,theme:i,font:a,onSelect:o}){return(0,I.jsxs)(`button`,{type:`button`,onClick:o,style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,fontSize:12,minHeight:30,padding:`6px 8px`,borderRadius:3,cursor:`pointer`,background:t?i.uiBorder:`transparent`,border:`1px solid ${t?i.uiAccent:i.uiBorder}`,color:n?i.uiAccent:i.uiBorder,opacity:n?1:.55,fontFamily:a,userSelect:`none`,transition:`background 0.12s, border-color 0.12s`},children:[(0,I.jsx)(`span`,{style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e}),(0,I.jsx)(`span`,{style:{fontSize:10,opacity:.65,flexShrink:0,marginLeft:6},children:r>1?`x${r}`:``})]})}function Cn({inventory:e,itemDefs:t,theme:n,mode:r,expanded:i=!1,itemEffects:a,selectedItemId:o,onSelect:s,onUse:c,onClose:l,notification:u,font:d}){let f=new Map(t.map(e=>[e.id,e])),p=new Map;for(let t of e)p.set(t,(p.get(t)??0)+1);let m=[...p.keys()],h=o&&p.has(o)?o:null,g=h?f.get(h):void 0,_=g?.name??h??``,v=h?a?.[h]:void 0,y=xn(g,v,r);return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,minHeight:0,flex:1},children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:8,borderTop:`1px solid ${n.uiBorder}`,paddingTop:8,flexShrink:0,fontSize:10,color:n.uiBorder,letterSpacing:`0.08em`,fontFamily:d},children:[(0,I.jsxs)(`div`,{children:[`アイテム`,(0,I.jsx)(`span`,{style:{marginLeft:8,color:n.uiAccent,opacity:.7},children:r===`battle`?`戦闘中`:`探索中`})]}),l&&(0,I.jsx)(`button`,{type:`button`,onClick:l,style:{flexShrink:0,border:`1px solid ${n.uiBorder}`,background:`transparent`,color:n.uiAccent,borderRadius:3,padding:`4px 10px`,cursor:`pointer`,fontFamily:d,fontSize:11},children:`戻る`})]}),u&&(0,I.jsx)(`div`,{style:{fontSize:11,color:n.uiAccent,padding:`3px 6px`,background:`${n.uiBorder}55`,borderRadius:3,fontFamily:d,flexShrink:0},children:u}),m.length===0?(0,I.jsx)(`div`,{style:{fontSize:11,color:n.uiBorder,opacity:.4,padding:`2px 4px`,fontFamily:d},children:`持ち物なし`}):(0,I.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:i?`1 1 210px`:`1 1 128px`,minHeight:i?190:112,overflow:`auto`,paddingRight:2},children:m.map(e=>{let t=f.get(e),i=a?.[e],o=xn(t,i,r);return(0,I.jsx)(Sn,{name:t?.name??e,selected:h===e,usable:o.canUse,count:p.get(e)??1,theme:n,font:d,onSelect:()=>s(e)},e)})}),(0,I.jsx)(`div`,{style:{flex:i?`0 0 190px`:`0 0 150px`,minHeight:i?190:150,border:`1px solid ${n.uiBorder}`,borderRadius:3,background:`rgba(0,0,0,0.18)`,padding:`7px 8px`,fontFamily:d,display:`flex`,flexDirection:`column`,gap:6,overflow:`hidden`},children:h?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,gap:8,alignItems:`baseline`},children:[(0,I.jsx)(`strong`,{style:{color:n.uiAccent,fontSize:13,fontWeight:700},children:_}),(0,I.jsxs)(`span`,{style:{color:n.uiBorder,fontSize:10,whiteSpace:`nowrap`},children:[bn(g?.category),` `,p.get(h)>1?`x${p.get(h)}`:``]})]}),(0,I.jsx)(`div`,{style:{color:`#e8d5aa`,fontSize:11,lineHeight:1.45,minHeight:44,overflow:`auto`,paddingRight:2},children:g?.description??`説明はない。`}),(0,I.jsxs)(`div`,{style:{color:n.uiAccent,fontSize:11,opacity:.85},children:[`効果: `,yn(v)]}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:6,alignItems:`center`,marginTop:`auto`},children:[(0,I.jsx)(`button`,{type:`button`,disabled:!y.canUse,onClick:()=>c(h,_),style:{flex:`0 0 76px`,padding:i?`8px 0`:`6px 0`,borderRadius:3,border:`1px solid ${y.canUse?n.uiAccent:n.uiBorder}`,background:y.canUse?n.uiBorder:`transparent`,color:y.canUse?n.uiAccent:n.uiBorder,cursor:y.canUse?`pointer`:`default`,fontFamily:d,fontSize:12},children:`使う`}),(0,I.jsx)(`span`,{style:{color:y.canUse?n.uiAccent:n.uiBorder,fontSize:10,opacity:.8},children:y.reason})]})]}):(0,I.jsx)(`div`,{style:{color:n.uiBorder,opacity:.55,fontSize:11,lineHeight:1.5},children:`アイテムを選ぶと、説明と効果を確認できます。`})})]})}var wn={ceilTop:`#020213`,ceilBottom:`#0d0d25`,floorTop:`#130a02`,floorBottom:`#060300`,wallFront:`#9a7420`,wallSide:`#5a420a`,uiBg:`#080504`,uiAccent:`#ccaa66`,uiBorder:`#443322`};function Tn(e){return e?{...wn,...e}:wn}var En=`'Hiragino Mincho ProN', 'Yu Mincho', 'MS Mincho', serif`,Dn={N:`北`,E:`東`,S:`南`,W:`西`};function On(){let e=()=>Math.min(1,Math.min(window.innerWidth/800,window.innerHeight/600)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function kn(e,t,n,r){let i=r&&n?n:t;(0,a.useEffect)(()=>{if(!i)return;let t=`${e.replace(/\/$/,``)}/${i}`,n=new Audio(t);return n.loop=!0,n.volume=.6,n.play().catch(()=>{}),()=>{n.pause(),n.currentTime=0}},[i,e])}function An({hp:e,maxHp:t,theme:n}){let r=Math.max(0,Math.min(1,t>0?e/t:0)),i=r>.5?`#50c050`:r>.25?`#c0a020`:`#e03030`;return(0,I.jsxs)(`div`,{children:[(0,I.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:11,marginBottom:4,color:n.uiAccent},children:[(0,I.jsx)(`span`,{style:{letterSpacing:`0.06em`},children:`HP`}),(0,I.jsxs)(`span`,{style:{opacity:.8},children:[e,` / `,t]})]}),(0,I.jsx)(`div`,{style:{height:6,background:`#2a2020`,borderRadius:3,overflow:`hidden`},children:(0,I.jsx)(`div`,{style:{width:`${r*100}%`,height:`100%`,background:i,transition:`width 0.3s`,borderRadius:3}})})]})}function jn(){return(0,I.jsxs)(`div`,{"aria-hidden":`true`,style:{position:`absolute`,inset:0,pointerEvents:`none`,overflow:`hidden`,zIndex:6},children:[(0,I.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`56%`,width:250,height:120,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(180,255,190,0.45) 0%, rgba(120,255,170,0.16) 45%, transparent 72%)`,boxShadow:`0 0 36px rgba(150,255,190,0.6)`,transform:`translate(-50%, -50%)`,animation:`maze-heal-aura 900ms ease-out forwards`}}),[{left:`22%`,top:`62%`,delay:`0ms`,size:8},{left:`33%`,top:`36%`,delay:`90ms`,size:5},{left:`46%`,top:`68%`,delay:`170ms`,size:7},{left:`57%`,top:`32%`,delay:`40ms`,size:6},{left:`70%`,top:`56%`,delay:`130ms`,size:9},{left:`39%`,top:`48%`,delay:`230ms`,size:5},{left:`62%`,top:`72%`,delay:`280ms`,size:6}].map((e,t)=>(0,I.jsx)(`span`,{style:{position:`absolute`,left:e.left,top:e.top,width:e.size,height:e.size,transform:`translate(-50%, -50%) rotate(45deg)`,background:`#f4ffe1`,boxShadow:`0 0 10px #d8ff95, 0 0 18px rgba(120,255,170,0.9)`,animation:`maze-heal-sparkle 780ms ease-out ${e.delay} forwards`,opacity:0}},t))]})}function Mn({label:e,theme:t,onClick:n}){let[r,i]=(0,a.useState)(!1);return(0,I.jsx)(`button`,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:n,style:{flex:1,background:r?t.uiBorder:`#1a1008`,border:`1px solid ${r?t.uiAccent:t.uiBorder}`,color:t.uiAccent,fontFamily:En,fontSize:12,padding:`8px 4px`,cursor:`pointer`,borderRadius:3,userSelect:`none`,textAlign:`center`,transition:`background 0.1s, border-color 0.1s`},children:e})}function Nn({context:e,config:t,onExit:n}){let r=On(),[i,o]=(0,a.useState)(()=>Gt(t.map,e.playerStats,e.inventory,{initialPos:t.initialPos,initialDir:t.initialDir,initialVisited:t.initialVisited,initialTriggeredEvents:t.initialTriggeredEvents})),s=Tn(t.theme),c=t.assetsBaseUrl??`/assets`;kn(c,t.bgm,t.battleBgm,!!i.battle);let[l,u]=(0,a.useState)(`explore`),[d,f]=(0,a.useState)(null),[p,m]=(0,a.useState)(null),[h,g]=(0,a.useState)(!1),[_,v]=(0,a.useState)(!1),[y,b]=(0,a.useState)(0),x=(0,a.useRef)(null),S=(0,a.useRef)(i.battle),C=!!i.battle&&l===`battle`,w=(0,a.useCallback)(e=>{o(t=>$t(t,e))},[]),T=(0,a.useCallback)(()=>{u(`explore`),f(null)},[]),E=(0,a.useCallback)(()=>{!i.battle||i.battle.phase!==`select`||(g(!0),window.setTimeout(()=>g(!1),180),o(e=>!e.battle||e.battle.phase!==`select`?e:$t({...e,battle:{...e.battle,cursorIndex:0}},`Enter`)))},[i.battle]),D=(0,a.useCallback)((e,n)=>{let r=t.itemEffects?.[e];r?.attackEnemy!==void 0&&!i.battle||(r?.healHp!==void 0&&b(e=>e+1),o(t=>Kt(t,e,n,r)),f(null),i.battle?u(`explore`):(x.current&&clearTimeout(x.current),m(r?.healHp===`full`?`${n}を使った！ HP全回復！`:typeof r?.healHp==`number`?`${n}を使った！ HP+${r.healHp}！`:`${n}を使った！`),x.current=setTimeout(()=>m(null),2500)))},[t.itemEffects,i.battle]);(0,a.useEffect)(()=>{let e=e=>{if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Enter`,` `].includes(e.key)&&e.preventDefault(),l===`battle`){e.key===`Escape`&&T();return}let t=e.key===`Enter`||e.key===` `;o(n=>n.battle?.phase===`select`&&n.battle.cursorIndex===2&&t?(u(`battle`),n):$t(n,e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,l]),(0,a.useEffect)(()=>{i.battle||u(`explore`),(!i.battle||i.battle.phase!==`select`)&&f(null)},[i.battle]),(0,a.useEffect)(()=>{d&&!i.inventory.includes(d)&&f(null)},[d,i.inventory]),(0,a.useEffect)(()=>{let e=S.current,t=i.battle;if(t?.phase===`win`&&e?.phase!==`win`){v(!0);let e=window.setTimeout(()=>v(!1),900);return S.current=t,()=>window.clearTimeout(e)}(!t||t.phase===`select`)&&v(!1),S.current=t},[i.battle]),(0,a.useEffect)(()=>{if(i.battle?.phase!==`win`&&i.battle?.phase!==`lose`)return;let e=i.battle.phase===`win`?850:1050,t=window.setTimeout(()=>{o(e=>e.battle?.phase!==`win`&&e.battle?.phase!==`lose`?e:$t(e,`Enter`))},e);return()=>window.clearTimeout(t)},[i.battle?.phase]);let O=(0,a.useCallback)(()=>({...e,flags:{...e.flags,[`explored_${t.map}`]:!0},inventory:i.inventory,playerStats:{...e.playerStats,hp:i.playerHp,maxHp:i.playerMaxHp,atk:i.playerAtk,def:i.playerDef}}),[e,t.map,i.inventory,i.playerHp,i.playerMaxHp,i.playerAtk,i.playerDef]),k=(0,a.useCallback)(()=>{let e=O(),r={...e,playerStats:{...e.playerStats,hp:i.playerMaxHp}},a=t._novelReturn;a?.exitSceneId?n(r,{engineId:`novel`,config:{...a,initialSceneId:a.exitSceneId,autoStart:!0}}):n(r)},[O,t._novelReturn,n,i.playerMaxHp]);(0,a.useEffect)(()=>{if(!i.pendingDeath)return;let r=t._novelReturn;if(r){if(i.pendingBossTilePos&&r.gameoverBossSceneId){let a={...e,flags:{...e.flags,flag_maze_defeated:!0,flag_boss_challenged:!0},inventory:i.inventory,playerStats:{...e.playerStats,hp:i.playerMaxHp,maxHp:i.playerMaxHp,atk:i.playerAtk,def:i.playerDef}},[o,s]=i.pendingBossTilePos.split(`,`).map(Number),c={map:t.map,name:t.name,theme:t.theme,assetsBaseUrl:t.assetsBaseUrl,bgm:t.bgm,battleBgm:t.battleBgm,items:t.items,events:t.events,itemEffects:t.itemEffects,_novelReturn:t._novelReturn,initialPos:{x:(o??0)-1,y:s??0},initialDir:`E`,initialVisited:[...i.visited],initialTriggeredEvents:[...i.triggeredEvents]};n(a,{engineId:`novel`,transition:`rift`,config:{...r,initialSceneId:r.gameoverLandingSceneId??r.gameoverBossSceneId,autoStart:!0},returnEngineId:`maze_rpg`,returnConfig:c,returnTransition:`rift`})}else if(r.gameoverSceneId){let a={...e,flags:{...e.flags,flag_maze_defeated:!0},inventory:i.inventory,playerStats:{...e.playerStats,hp:i.playerMaxHp,maxHp:i.playerMaxHp,atk:i.playerAtk,def:i.playerDef}},o={map:t.map,name:t.name,theme:t.theme,assetsBaseUrl:t.assetsBaseUrl,bgm:t.bgm,battleBgm:t.battleBgm,items:t.items,events:t.events,itemEffects:t.itemEffects,_novelReturn:t._novelReturn};n(a,{engineId:`novel`,transition:`rift`,config:{...r,initialSceneId:r.gameoverLandingSceneId??r.gameoverSceneId,autoStart:!0},returnEngineId:`maze_rpg`,returnConfig:o,returnTransition:`rift`})}}},[i.pendingDeath]),(0,a.useEffect)(()=>{if(!i.pendingEvent)return;let e=t.events?.[i.pendingEvent],r=t._novelReturn;if(!e||!r)return;let a=O(),o=`${i.pos.x},${i.pos.y}`,s={...t,initialPos:i.pos,initialDir:i.dir,initialVisited:[...i.visited],initialTriggeredEvents:[...i.triggeredEvents,o]};n(a,{engineId:`novel`,transition:`rift`,config:{...r,initialSceneId:e,autoStart:!0},returnEngineId:`maze_rpg`,returnConfig:s,returnTransition:`rift`})},[i.pendingEvent]);let A=(0,a.useCallback)(e=>{i.atExit&&(e.key!==`Enter`&&e.key!==` `||k())},[i.atExit,k]);return(0,a.useEffect)(()=>(window.addEventListener(`keydown`,A),()=>window.removeEventListener(`keydown`,A)),[A]),(0,I.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:s.uiBg,overflow:`hidden`},children:(0,I.jsxs)(`div`,{style:{width:800,height:600,flexShrink:0,transformOrigin:`center center`,transform:`scale(${r})`,background:s.uiBg,display:`flex`,flexDirection:`column`,fontFamily:En,color:s.uiAccent,userSelect:`none`,overflow:`hidden`,boxShadow:`0 0 60px rgba(0,0,0,0.8)`},children:[(0,I.jsx)(`style`,{children:`
          @keyframes maze-enemy-burst {
            0% { opacity: 0; transform: scale(0.45); }
            32% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(1.75); }
          }
          @keyframes maze-hit-slash {
            0% { opacity: 0; transform: translate(-50%, -50%) rotate(-18deg) scaleX(0.2); }
            35% { opacity: 1; transform: translate(-50%, -50%) rotate(-18deg) scaleX(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) rotate(-18deg) scaleX(1.15); }
          }
          @keyframes maze-heal-aura {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.55); filter: blur(1px); }
            22% { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: blur(0); }
            100% { opacity: 0; transform: translate(-50%, -62%) scale(1.28); filter: blur(4px); }
          }
          @keyframes maze-heal-sparkle {
            0% { opacity: 0; transform: translate(-50%, 18px) rotate(45deg) scale(0.25); }
            28% { opacity: 1; transform: translate(-50%, -50%) rotate(45deg) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -70px) rotate(45deg) scale(0.2); }
          }
        `}),(0,I.jsxs)(`div`,{style:{background:s.uiBorder,borderBottom:`1px solid ${s.uiBorder}`,padding:`4px 12px`,fontSize:13,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexShrink:0,letterSpacing:`0.06em`},children:[(0,I.jsxs)(`span`,{children:[`⚔ `,t.name??t.map]}),(0,I.jsxs)(`span`,{style:{fontSize:11,opacity:.7},children:[`歩数: `,i.steps]})]}),(0,I.jsxs)(`div`,{style:{display:`flex`,flex:1,overflow:`hidden`},children:[(0,I.jsx)(`div`,{style:{flex:`0 0 488px`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,I.jsxs)(`div`,{style:{position:`relative`},children:[(0,I.jsxs)(`div`,{style:{border:`2px solid ${s.uiBorder}`,boxShadow:`0 0 12px rgba(100,60,10,0.4)`,position:`relative`},children:[(0,I.jsx)(un,{state:i,theme:s}),y>0&&(0,I.jsx)(jn,{},y),i.battle&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(vn,{enemy:i.battle.enemy,assetsBaseUrl:c,defeated:_||i.battle.phase===`win`,onClick:i.battle.phase===`select`?E:void 0}),h&&(0,I.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`45%`,width:240,height:18,borderRadius:10,background:`linear-gradient(90deg, transparent, rgba(255,255,255,0.98), rgba(180,90,255,0.7), transparent)`,boxShadow:`0 0 18px rgba(220,180,255,0.9)`,pointerEvents:`none`,animation:`maze-hit-slash 180ms ease-out forwards`}})]}),!i.battle&&!i.atExit&&(0,I.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,gridTemplateColumns:`1fr 2fr 1fr`,gridTemplateRows:`1fr 1fr`},children:[(0,I.jsx)(`div`,{title:`左回転`,style:{cursor:`w-resize`},onClick:()=>w(`ArrowLeft`)}),(0,I.jsx)(`div`,{title:`前進`,style:{cursor:`n-resize`},onClick:()=>w(`ArrowUp`)}),(0,I.jsx)(`div`,{title:`右回転`,style:{cursor:`e-resize`},onClick:()=>w(`ArrowRight`)}),(0,I.jsx)(`div`,{title:`左回転`,style:{cursor:`w-resize`},onClick:()=>w(`ArrowLeft`)}),(0,I.jsx)(`div`,{title:`後退`,style:{cursor:`s-resize`},onClick:()=>w(`ArrowDown`)}),(0,I.jsx)(`div`,{title:`右回転`,style:{cursor:`e-resize`},onClick:()=>w(`ArrowRight`)})]})]}),i.atExit&&(0,I.jsx)(`div`,{onClick:k,style:{marginTop:8,background:`#1a2a0a`,border:`1px solid #44aa22`,borderRadius:4,padding:`8px 16px`,color:`#88ff44`,fontSize:14,textAlign:`center`,cursor:`pointer`,fontFamily:En,letterSpacing:`0.04em`},children:`階段を見つけた！ [Enter] / クリックで地上へ戻る`})]})}),(0,I.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,borderLeft:`1px solid ${s.uiBorder}`,padding:`10px 10px 8px`,gap:8,overflow:`hidden`},children:[(0,I.jsx)(An,{hp:i.playerHp,maxHp:i.playerMaxHp,theme:s}),!C&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{style:{borderTop:`1px solid ${s.uiBorder}`,flexShrink:0}}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`flex-start`,justifyContent:`center`},children:[(0,I.jsx)(`div`,{style:{border:`1px solid ${s.uiBorder}`},children:(0,I.jsx)(pn,{state:i,mode:t.minimapMode})}),(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,I.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`24px 24px 24px`,gridTemplateRows:`24px 24px 24px`,gap:2,textAlign:`center`},children:[[``,`N`,``].map((e,t)=>(0,I.jsx)(Pn,{label:e,dir:i.dir,theme:s},`t${t}`)),[`W`,``,`E`].map((e,t)=>(0,I.jsx)(Pn,{label:e,dir:i.dir,theme:s},`m${t}`)),[``,`S`,``].map((e,t)=>(0,I.jsx)(Pn,{label:e,dir:i.dir,theme:s},`b${t}`))]}),(0,I.jsx)(`div`,{style:{fontSize:11,color:s.uiAccent,letterSpacing:`0.05em`},children:Dn[i.dir]}),(0,I.jsxs)(`div`,{style:{fontSize:9,color:s.uiBorder,letterSpacing:`0.04em`},children:[`(`,i.pos.x,`,`,i.pos.y,`)`]})]})]}),(0,I.jsx)(`div`,{style:{borderTop:`1px solid ${s.uiBorder}`,flexShrink:0}}),i.battle?(0,I.jsx)(_n,{state:i,theme:s,font:En,onSelectCommand:e=>o(t=>!t.battle||t.battle.phase!==`select`?t:{...t,battle:{...t.battle,cursorIndex:e}}),onCommand:e=>{if(e===2){u(`battle`);return}u(`explore`),o(t=>!t.battle||t.battle.phase!==`select`?t:$t({...t,battle:{...t.battle,cursorIndex:e}},`Enter`))}}):(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,I.jsx)(`div`,{style:{display:`flex`},children:(0,I.jsx)(Mn,{label:`↑ 前進`,theme:s,onClick:()=>w(`ArrowUp`)})}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,I.jsx)(Mn,{label:`← 左`,theme:s,onClick:()=>w(`ArrowLeft`)}),(0,I.jsx)(Mn,{label:`↓ 後退`,theme:s,onClick:()=>w(`ArrowDown`)}),(0,I.jsx)(Mn,{label:`→ 右`,theme:s,onClick:()=>w(`ArrowRight`)})]})]})]}),(0,I.jsx)(Cn,{inventory:i.inventory,itemDefs:t.items??[],theme:s,mode:i.battle?l:`explore`,expanded:C,itemEffects:t.itemEffects,selectedItemId:d,onSelect:f,onUse:D,onClose:C?T:void 0,notification:p??void 0,font:En})]})]})]})})}function Pn({label:e,dir:t,theme:n}){let r=e===t;return(0,I.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,background:r?n.uiBorder:e?n.uiBg:`transparent`,border:e?`1px solid ${r?n.uiAccent:n.uiBorder}`:`none`,borderRadius:2,color:r?n.uiAccent:n.uiBorder,fontWeight:r?`bold`:`normal`,fontSize:10,fontFamily:En},children:e})}var Fn={component:Nn},X=800,In=600,Ln=50,Rn=In-Ln*2,Z=Ln+Rn-50,Q=150,zn=42,Bn=72,Vn=.0017,Hn=-.82,Un=3e4,Wn=420,Gn=100,Kn=.0048,qn=18,Jn=`'Hiragino Mincho ProN', 'Yu Mincho', 'MS Mincho', serif`,Yn=[{id:`candy_01`,type:`candy`,spawnMs:1600,laneY:356,speed:.34,size:28},{id:`pot_01`,type:`pot`,spawnMs:3300,laneY:395,speed:.38,size:46},{id:`candy_02`,type:`candy`,spawnMs:4700,laneY:318,speed:.37,size:28},{id:`candy_03`,type:`candy`,spawnMs:6600,laneY:392,speed:.42,size:30},{id:`pot_02`,type:`pot`,spawnMs:8200,laneY:342,speed:.43,size:48},{id:`candy_04`,type:`candy`,spawnMs:1e4,laneY:360,speed:.46,size:28},{id:`candy_05`,type:`candy`,spawnMs:11800,laneY:302,speed:.42,size:30},{id:`pot_03`,type:`pot`,spawnMs:13700,laneY:400,speed:.48,size:50},{id:`candy_06`,type:`candy`,spawnMs:15400,laneY:340,speed:.48,size:30},{id:`candy_07`,type:`candy`,spawnMs:17600,laneY:388,speed:.52,size:28},{id:`pot_04`,type:`pot`,spawnMs:19600,laneY:330,speed:.52,size:50},{id:`candy_08`,type:`candy`,spawnMs:21500,laneY:358,speed:.55,size:30},{id:`candy_09`,type:`candy`,spawnMs:23800,laneY:305,speed:.5,size:28},{id:`pot_05`,type:`pot`,spawnMs:26e3,laneY:390,speed:.56,size:52},{id:`candy_10`,type:`candy`,spawnMs:27800,laneY:346,speed:.58,size:30}],Xn=[{id:`dog_01`,type:`dog`,spawnMs:1800,laneY:392,speed:.42,size:48},{id:`bird_01`,type:`bird`,spawnMs:3800,laneY:300,speed:.46,size:42},{id:`dog_02`,type:`dog`,spawnMs:6200,laneY:394,speed:.5,size:50},{id:`bird_02`,type:`bird`,spawnMs:8400,laneY:292,speed:.52,size:44},{id:`dog_03`,type:`dog`,spawnMs:11100,laneY:396,speed:.56,size:52},{id:`bird_03`,type:`bird`,spawnMs:13600,laneY:306,speed:.58,size:42},{id:`dog_04`,type:`dog`,spawnMs:16400,laneY:390,speed:.62,size:52},{id:`bird_04`,type:`bird`,spawnMs:19e3,laneY:298,speed:.64,size:44}],Zn={sky:`#151827`,ground:`#2a2d32`,accent:`#f2d16b`};function Qn(e){return{...Zn,...e}}function $n(){let e=()=>Math.min(1,Math.min(window.innerWidth/X,window.innerHeight/In)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function er(e,t){if(t)return/^(https?:)?\/\//.test(t)||t.startsWith(`/`)?t:`${(e??`/assets`).replace(/\/$/,``)}/${t.replace(/^\//,``)}`}function tr(e){let[t,n]=(0,a.useState)(null),[r,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e){n(null),i(!1);return}let t=!1,r=new Image;return r.onload=()=>{t||(n(r),i(!1))},r.onerror=()=>{t||(n(null),i(!0))},r.src=e,()=>{t=!0}},[e]),{image:t,failed:r}}function nr(e,t,n=.28){(0,a.useEffect)(()=>{let r,i=Math.max(0,Math.min(1,n));if(t?.startsWith(`synth:`))return r=rr(i),()=>r?.();if(t){let n=new Audio(er(e,t));return n.loop=!0,n.volume=i,n.play().catch(()=>{}),r=()=>{n.pause(),n.currentTime=0},()=>r?.()}},[e,t,n])}function rr(e){let t=window.AudioContext??window.webkitAudioContext;if(!t)return()=>{};let n=new t,r=n.createGain();r.gain.value=e,r.connect(n.destination);let i=n.createDelay();i.delayTime.value=.18;let a=n.createGain();a.gain.value=.18,i.connect(a),a.connect(i),i.connect(r);let o=[392,523.25,659.25,783.99,659.25,523.25,440,587.33],s=0,c=!1,l=()=>{if(c)return;let e=n.currentTime,t=n.createOscillator(),a=n.createGain();t.type=s%4==0?`square`:`triangle`,t.frequency.setValueAtTime(o[s%o.length],e),a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.24,e+.018),a.gain.exponentialRampToValueAtTime(1e-4,e+.16),t.connect(a),a.connect(r),a.connect(i),t.start(e),t.stop(e+.18),s+=1};n.resume().catch(()=>{}),l();let u=window.setInterval(l,135);return()=>{c=!0,window.clearInterval(u),n.close().catch(()=>{})}}function ir(e,t,n=1){return X+80-Math.max(0,t-e.spawnMs)*e.speed*n}function ar(e){return e.type===`dog`?Z-e.size:e.laneY}function or(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function sr(e,t){let n=e.y-(Z-Bn);return Z-t+n}function cr(e,t,n,r,i){let a=Math.sin(i*.012)*4;e.save(),e.translate(t+r/2,n+r/2),e.rotate(Math.sin(i*.008)*.4),e.fillStyle=`#ff7aa8`,e.beginPath(),e.ellipse(0,0,r*.42,r*.3,0,0,Math.PI*2),e.fill(),e.fillStyle=`#fff1b8`,e.fillRect(-r*.14,-r*.28+a*.03,r*.28,r*.56),e.fillStyle=`#ffd6e5`,e.beginPath(),e.moveTo(-r*.38,0),e.lineTo(-r*.62,-r*.2),e.lineTo(-r*.62,r*.2),e.closePath(),e.fill(),e.beginPath(),e.moveTo(r*.38,0),e.lineTo(r*.62,-r*.2),e.lineTo(r*.62,r*.2),e.closePath(),e.fill(),e.restore()}function lr(e,t,n,r,i){e.save(),e.translate(t+r/2,n+r/2),e.rotate(i*.012),e.fillStyle=`#59606b`,e.beginPath(),e.roundRect(-r*.42,-r*.25,r*.84,r*.58,r*.12),e.fill(),e.strokeStyle=`#d5dde8`,e.lineWidth=4,e.beginPath(),e.arc(0,-r*.32,r*.28,Math.PI,Math.PI*2),e.stroke(),e.strokeStyle=`#2c3139`,e.lineWidth=5,e.beginPath(),e.moveTo(-r*.5,-r*.08),e.lineTo(-r*.7,-r*.08),e.moveTo(r*.5,-r*.08),e.lineTo(r*.7,-r*.08),e.stroke(),e.restore()}function ur(e,t,n,r,i){let a=Math.sin(i*.02)*3;e.save(),e.translate(t,n),e.fillStyle=`#8b5a3c`,e.fillRect(r*.16,r*.34,r*.58,r*.3),e.fillStyle=`#a46a45`,e.beginPath(),e.arc(r*.74,r*.36,r*.18,0,Math.PI*2),e.fill(),e.fillStyle=`#5b3928`,e.beginPath(),e.moveTo(r*.68,r*.22),e.lineTo(r*.78,r*.02),e.lineTo(r*.84,r*.26),e.closePath(),e.fill(),e.strokeStyle=`#5b3928`,e.lineWidth=4,e.beginPath(),e.moveTo(r*.15,r*.38),e.quadraticCurveTo(-r*.05,r*.18,r*.1,r*.08),e.stroke(),e.fillStyle=`#3b2319`,e.fillRect(r*.24,r*.62,r*.1,r*.24+a),e.fillRect(r*.56,r*.62,r*.1,r*.24-a),e.fillStyle=`#11131a`,e.beginPath(),e.arc(r*.8,r*.34,2.5,0,Math.PI*2),e.fill(),e.restore()}function dr(e,t,n,r,i){let a=Math.sin(i*.024)*r*.16;e.save(),e.translate(t+r/2,n+r/2),e.fillStyle=`#3f78a8`,e.beginPath(),e.ellipse(0,0,r*.28,r*.2,0,0,Math.PI*2),e.fill(),e.fillStyle=`#72b7d2`,e.beginPath(),e.moveTo(-r*.08,-r*.06),e.quadraticCurveTo(-r*.44,-r*.36-a,-r*.5,r*.02),e.quadraticCurveTo(-r*.26,r*.06,-r*.08,r*.04),e.fill(),e.beginPath(),e.moveTo(r*.08,-r*.06),e.quadraticCurveTo(r*.44,-r*.36+a,r*.5,r*.02),e.quadraticCurveTo(r*.26,r*.06,r*.08,r*.04),e.fill(),e.fillStyle=`#f2d16b`,e.beginPath(),e.moveTo(r*.28,-r*.02),e.lineTo(r*.44,r*.04),e.lineTo(r*.28,r*.1),e.closePath(),e.fill(),e.fillStyle=`#11131a`,e.beginPath(),e.arc(r*.16,-r*.06,2.4,0,Math.PI*2),e.fill(),e.restore()}function fr(e,t,n){let r=Math.min(650,Q+95+t*3.6),i=Z-74+Math.sin(n*.02)*3;e.save(),e.translate(r,i),e.fillStyle=`#f1d2b0`,e.fillRect(13,0,24,22),e.fillStyle=`#2b2f39`,e.fillRect(8,20,34,36),e.fillStyle=`#e6533f`,e.fillRect(4,28,42,10),e.fillStyle=`#151827`,e.fillRect(12,54,10,24),e.fillRect(30,54,10,24),e.fillStyle=`#f2d16b`,e.fillRect(17,8,4,4),e.fillRect(29,8,4,4),e.restore()}function pr(e,t,n,r){t.type===`candy`?cr(e,n,ar(t),t.size,r):t.type===`pot`?lr(e,n,ar(t),t.size,r):t.type===`dog`?ur(e,n,ar(t),t.size,r):dr(e,n,ar(t),t.size,r)}function mr(e,t,n,r,i){let a=Math.min(1,t.elapsedMs/n.durationMs),o=n.mode===`chase`,s=o?Xn:Yn,c=t.worldElapsedMs*.18,l=t.elapsedMs<t.penaltyUntilMs;if(e.fillStyle=`#000`,e.fillRect(0,0,X,In),i.backgroundImage){let t=i.backgroundImage.width*(Rn/i.backgroundImage.height),n=Math.max(1,i.backgroundLoopWidth,t),r=n*(i.backgroundImage.height/i.backgroundImage.width),a=Ln+(r>Rn?(Rn-r)/2:0),o=-(c*.65%n);for(let t=o-n;t<X+n;t+=n)e.drawImage(i.backgroundImage,t,a,n,r)}else{let t=e.createLinearGradient(0,0,0,Z);t.addColorStop(0,r.sky),t.addColorStop(1,`#090a12`),e.fillStyle=t,e.fillRect(0,Ln,X,Rn),e.fillStyle=`rgba(255,255,255,0.12)`;for(let t=0;t<6;t+=1){let n=(t*180-c*.18%180+X)%X;e.fillRect(n,120+t%2*34,82,10)}e.fillStyle=`#202431`;for(let t=0;t<9;t+=1){let n=(t*130-c*.48%130+X)%X,r=78+t%3*34;e.fillRect(n,Z-r,72,r),e.fillStyle=`rgba(242,209,107,0.22)`,e.fillRect(n+16,Z-r+18,10,16),e.fillRect(n+44,Z-r+46,10,16),e.fillStyle=`#202431`}}if(!i.backgroundImage){e.fillStyle=r.ground,e.fillRect(0,Z,X,In-Z),e.fillStyle=`#11131a`;for(let t=0;t<18;t+=1){let n=(t*58-c%58+X)%X;e.fillRect(n,Z+18,34,4)}for(let t=0;t<7;t+=1){let n=(t*190-c*.95%190+X)%X,i=28+t%2*18;e.fillStyle=`#342739`,e.fillRect(n,Z-i,38,i),e.fillStyle=r.accent,e.fillRect(n+8,Z-i-8,22,8)}}let u=t.grounded?Math.sin(t.elapsedMs*.018)*3:0,d=t.y+u,f=l?-34+Math.sin(t.elapsedMs*.08)*8:0;i.playerImageEnabled||(e.fillStyle=`#f1f3f5`,e.fillRect(Q+f+10,d,22,22),e.fillStyle=r.accent,e.fillRect(Q+f,d+24,zn,36),e.fillStyle=`#11131a`,e.fillRect(Q+f+6,d+58,12,24),e.fillRect(Q+f+25,d+58,12,24),e.fillStyle=`#f1f3f5`,e.fillRect(Q+f+zn,d+30,20,10)),o&&!i.opponentImageEnabled&&fr(e,t.chaseDistance,t.elapsedMs);for(let r of s){if(t.collectedIds.includes(r.id)||t.hitIds.includes(r.id))continue;let i=ir(r,t.worldElapsedMs,n.objectSpeedMultiplier);i<-100||i>X+120||pr(e,r,i,t.elapsedMs)}if(e.fillStyle=`rgba(0,0,0,0.35)`,e.fillRect(24,24,752,56),e.fillStyle=`rgba(255,255,255,0.18)`,e.fillRect(44,58,712,8),e.fillStyle=r.accent,e.fillRect(44,58,712*a,8),o){let r=1-Math.min(1,Math.max(0,t.chaseDistance/n.chaseStartDistance));e.fillStyle=`rgba(255,255,255,0.18)`,e.fillRect(44,70,712,6),e.fillStyle=`#ff8f70`,e.fillRect(44,70,712*r,6)}e.fillStyle=`#f7f2dc`,e.font=`20px ${Jn}`,e.fillText(o?`公園の追跡劇`:`アーケード街の死闘`,44,48),e.font=`14px ${Jn}`,e.fillText(`${Math.ceil((n.durationMs-t.elapsedMs)/1e3)}秒`,708,48),e.fillText(o?`距離 ${Math.ceil(t.chaseDistance)}`:`アメ ${t.score}`,610,48),l&&(e.fillStyle=`rgba(120,0,0,0.7)`,e.fillRect(300,92,200,32),e.fillStyle=`#fff4e8`,e.font=`16px ${Jn}`,e.fillText(o?`追いつけない！`:`鍋に当たった！`,o?348:344,114));let p=[i.backgroundImageConfigured&&i.backgroundImageFailed?`background image not found`:null,i.playerImageConfigured&&i.playerImageFailed?`player image not found`:null,i.opponentImageConfigured&&i.opponentImageFailed?`opponent image not found`:null].filter(Boolean);p.length>0&&(e.fillStyle=`rgba(120,0,0,0.72)`,e.fillRect(24,92,360,30),e.fillStyle=`#fff4e8`,e.font=`13px ${Jn}`,e.fillText(p.join(` / `),38,112))}function hr({context:e,config:t,onExit:n}){let r=(0,a.useRef)(null),i=t.mode??`collect`,o=Math.max(1e3,t.durationMs||Un),s=Math.max(1,t.chaseStartDistance??Gn),c=Math.max(.001,t.chaseCatchRate??Kn),l=Math.max(0,t.chaseHitDistancePenalty??qn),u=(0,a.useRef)({elapsedMs:0,worldElapsedMs:0,y:Z-Bn,velocityY:0,grounded:!0,score:0,penaltyCount:0,penaltyUntilMs:0,scrollFreezeUntilMs:0,chaseDistance:s,collectedIds:[],hitIds:[]}),d=(0,a.useRef)(null),f=(0,a.useRef)(!1),[p,m]=(0,a.useState)(0),h=$n(),g=(0,a.useMemo)(()=>Qn(t.theme),[t.theme]),_=t.stageId||`default`,v=er(t.assetsBaseUrl,t.backgroundImage),y=er(t.assetsBaseUrl,t.playerImage),b=er(t.assetsBaseUrl,t.opponentImage);nr(t.assetsBaseUrl,t.bgm,t.bgmVolume);let x=tr(v),S=tr(y),C=tr(b),w=Math.max(1,t.backgroundLoopWidth??X),T=Math.max(1,t.playerWidth??74),E=Math.max(1,t.playerHeight??104),D=Math.max(1,t.opponentWidth??58),O=Math.max(1,t.opponentHeight??84),k=Math.max(.1,t.objectSpeedMultiplier??1),A=(0,a.useCallback)(()=>{let e=u.current;e.grounded&&(u.current={...e,velocityY:Hn,grounded:!1})},[]),j=(0,a.useCallback)(t=>{if(f.current)return;f.current=!0;let r=u.current;n({...e,flags:{...e.flags,cleared_runner_action:!0,[`cleared_runner_action_${_}`]:!0,runner_action_score:r.score,[`runner_action_score_${_}`]:r.score,runner_action_penalties:r.penaltyCount,[`runner_action_penalties_${_}`]:r.penaltyCount,runner_action_result:t,[`runner_action_result_${_}`]:t,runner_action_distance:Math.ceil(r.chaseDistance),[`runner_action_distance_${_}`]:Math.ceil(r.chaseDistance)},playerStats:{...e.playerStats,runnerScore:r.score,runnerPenalties:r.penaltyCount,runnerDistance:Math.ceil(r.chaseDistance)}})},[e,n,_]);(0,a.useEffect)(()=>{let e=e=>{e.key!==` `&&e.key!==`Enter`||(e.preventDefault(),A())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[A]),(0,a.useEffect)(()=>{let e=0,t=n=>{let a=d.current??n,f=Math.min(40,n-a);d.current=n;let p=u.current,h=Math.min(o,p.elapsedMs+f),_=p.elapsedMs<p.scrollFreezeUntilMs?0:f,D=Math.min(o,p.worldElapsedMs+_),O=i===`chase`?Math.max(0,p.chaseDistance-_*c):p.chaseDistance,A=p.velocityY+Vn*f,M=p.y+A*f,N=!1,P=Z-Bn;M>=P&&(M=P,A=0,N=!0);let F={...p,elapsedMs:h,worldElapsedMs:D,chaseDistance:O,y:M,velocityY:A,grounded:N},ee=i===`chase`?Xn:Yn,te=h<F.penaltyUntilMs,ne=Math.max(24,Math.min(T,74)-12),re=Math.max(48,Math.min(E,104)-8),ie={x:Q+(te?-34:0)+8,y:sr(F,E)+4,width:ne,height:re};for(let e of ee){if(F.collectedIds.includes(e.id)||F.hitIds.includes(e.id))continue;let t=ir(e,D,k);t<-100||t>X+120||or(ie,{x:t,y:ar(e),width:e.size,height:e.size})&&(F=e.type===`candy`?{...F,score:F.score+1,collectedIds:[...F.collectedIds,e.id]}:{...F,score:Math.max(0,F.score-2),penaltyCount:F.penaltyCount+1,penaltyUntilMs:h+900,scrollFreezeUntilMs:h+Wn,chaseDistance:i===`chase`?Math.min(s,F.chaseDistance+l):F.chaseDistance,hitIds:[...F.hitIds,e.id]})}u.current=F;let ae=r.current?.getContext(`2d`);if(ae&&mr(ae,F,{durationMs:o,mode:i,chaseStartDistance:s,objectSpeedMultiplier:k},g,{backgroundImage:x.image,backgroundImageConfigured:!!v,backgroundImageFailed:x.failed,backgroundLoopWidth:w,playerImageEnabled:!!y&&!S.failed,playerImageConfigured:!!y,playerImageFailed:S.failed,opponentImageEnabled:!!b&&!C.failed,opponentImageConfigured:!!b,opponentImageFailed:C.failed,playerWidth:T,playerHeight:E}),m(h),i===`chase`&&F.chaseDistance<=0){j(`win`);return}if(h>=o){j(i===`chase`?`lose`:`complete`);return}e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[x.failed,x.image,v,w,c,l,s,o,j,i,C.failed,C.image,b,k,S.failed,S.image,E,y,T,_,g]);let M=Math.min(1,p/o),N=u.current,P=N.elapsedMs<N.penaltyUntilMs,F=N.grounded?Math.sin(N.elapsedMs*.018)*3:0,ee=Q+(P?-34+Math.sin(N.elapsedMs*.08)*8:0),te=sr(N,E)+F,ne=!!y&&!S.failed,re=Math.min(650,Q+95+N.chaseDistance*3.6),ie=Z-O+Math.sin(N.elapsedMs*.02)*3,ae=i===`chase`&&!!b&&!C.failed;return(0,I.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#05060a`,overflow:`hidden`},children:(0,I.jsxs)(`div`,{style:{width:X,height:In,flexShrink:0,transform:`scale(${h})`,transformOrigin:`center center`,position:`relative`,background:g.sky,overflow:`hidden`,boxShadow:`0 0 60px rgba(0,0,0,0.8)`,fontFamily:Jn},onMouseDown:A,onTouchStart:e=>{e.preventDefault(),A()},children:[(0,I.jsx)(`canvas`,{ref:r,width:X,height:In,style:{display:`block`}}),ne&&(0,I.jsx)(`img`,{src:y,alt:``,draggable:!1,style:{position:`absolute`,left:ee,top:te,width:T,height:E,pointerEvents:`none`,userSelect:`none`}}),ae&&(0,I.jsx)(`img`,{src:b,alt:``,draggable:!1,style:{position:`absolute`,left:re,top:ie,width:D,height:O,pointerEvents:`none`,userSelect:`none`}}),(0,I.jsxs)(`div`,{style:{position:`absolute`,left:24,right:24,bottom:22,display:`flex`,alignItems:`center`,justifyContent:`space-between`,color:`#f7f2dc`,fontSize:14,textShadow:`0 2px 6px rgba(0,0,0,0.8)`,pointerEvents:`none`},children:[(0,I.jsx)(`span`,{children:t.name??`Runner Action`}),(0,I.jsx)(`span`,{children:`Space / Enter / Click`}),(0,I.jsxs)(`span`,{children:[Math.round(M*100),`%`]})]})]})})}var gr={component:hr},_r=`'Hiragino Mincho ProN', 'Yu Mincho', 'MS Mincho', serif`,vr=800,yr=600,br=148,xr=36,Sr=130,Cr=yr-xr-Sr,wr=120,Tr=[{symbol:`飴`,color:`#f4a260`},{symbol:`花`,color:`#f48fb1`},{symbol:`星`,color:`#fff176`},{symbol:`月`,color:`#ce93d8`},{symbol:`家`,color:`#80cbc4`},{symbol:`鐘`,color:`#80deea`},{symbol:`鳥`,color:`#a5d6a7`},{symbol:`波`,color:`#64b5f6`}],Er=[`どれかな……`,`えーと……`,`うーん……`],Dr=[`……`,`ふむ……`,`どれかな`],Or=[`やった！`,`そろった！`,`ふふ`],kr=[`いただき`,`ふふふ`,`そうそう`],Ar=[`あれ……`,`ちがった`,`うーん`],jr=[`おや`,`むむ……`,`ちがったか`];async function Mr(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-1`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}function Nr(e){let t=(0,a.useRef)(null);return{speak:(0,a.useCallback)(async(n,r)=>{let i=await Mr(`${n}_${r}`),a=`${(e??`/assets`).replace(/\/$/,``)}/voicevox/${i}.wav`,o=(await fetch(a,{method:`HEAD`}).catch(()=>null))?.ok?a:null;if(!o)try{let e=await fetch(`http://localhost:50021/audio_query?text=${encodeURIComponent(n)}&speaker=${r}`,{method:`POST`}).then(e=>e.json()),t=await fetch(`http://localhost:50021/synthesis?speaker=${r}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)}).then(e=>e.arrayBuffer()).catch(()=>null);t&&(o=URL.createObjectURL(new Blob([t],{type:`audio/wav`})))}catch{}if(!o)return;t.current&&t.current.pause();let s=new Audio(o);t.current=s,s.play().catch(()=>{})},[e]),stop:(0,a.useCallback)(()=>{t.current&&=(t.current.pause(),null)},[])}}function Pr(){let e=()=>Math.min(1,Math.min(window.innerWidth/vr,window.innerHeight/yr)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function Fr(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Ir(e){let t=[];for(let n=0;n<e;n++)t.push({id:n*2,pairId:n}),t.push({id:n*2+1,pairId:n});return{cards:Fr(t),flipped:[],matched:[],matchedBy:{},currentTurn:`player`,seen:{},playerPairs:0,opponentPairs:0,turns:0,phase:`playing`,lastEvent:`turn_start`,eventId:0}}var Lr=4,Rr=110,zr=140,Br=14,Vr=14;function Hr(e,t){if(t)return/^(https?:)?\/\//.test(t)||t.startsWith(`/`)?t:`${(e??`/assets`).replace(/\/$/,``)}/${t.replace(/^\//,``)}`}function Ur(e){return e.length===0?null:e[Math.floor(Math.random()*e.length)]}function Wr(e,t=`normal`){let n=t===`weak`?.18:.45,r=t===`weak`?.08:.25,i=e.cards.filter(t=>!e.matched.includes(t.pairId)&&!e.flipped.includes(t.id));if(i.length===0)return null;if(e.flipped.length===1){let t=e.cards.find(t=>t.id===e.flipped[0]),r=i.find(e=>t&&e.pairId===t.pairId);return r&&Math.random()<n?r.id:Ur(i)?.id??null}let a=new Map;for(let t of i)e.seen[t.id]===t.pairId&&a.set(t.pairId,[...a.get(t.pairId)??[],t.id]);let o=[...a.values()].find(e=>e.length>=2);return o&&Math.random()<r?o[0]:Ur(i)?.id??null}function Gr({side:e,name:t,faceSrc:n,score:r,active:i}){let a=e===`left`?`#fff176`:`#80deea`,o=Cr-96;return(0,I.jsxs)(`div`,{style:{position:`absolute`,top:xr,[e]:0,width:br,height:Cr,overflow:`hidden`,background:i?`rgba(${e===`left`?`255,241,118`:`128,222,234`},0.06)`:`rgba(6,6,18,0.65)`,borderRight:e===`left`?`1px solid ${i?`${a}55`:`rgba(38,42,72,0.5)`}`:`none`,borderLeft:e===`right`?`1px solid ${i?`${a}55`:`rgba(38,42,72,0.5)`}`:`none`,transition:`background 0.4s, border-color 0.4s`,zIndex:3},children:[(0,I.jsxs)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:o,overflow:`hidden`},children:[n?(0,I.jsx)(`img`,{src:n,alt:``,draggable:!1,style:{display:`block`,width:`100%`,height:`100%`,objectFit:`contain`,objectPosition:`bottom center`,filter:i?`none`:`brightness(0.55) saturate(0.6)`,transition:`filter 0.4s`}}):(0,I.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:56,color:`#1e2040`},children:e===`left`?`🎮`:`🤖`}),(0,I.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:60,background:`linear-gradient(to top, ${i?e===`left`?`rgba(18,16,2,0.96)`:`rgba(2,16,18,0.96)`:`rgba(6,6,18,0.96)`} 0%, transparent 100%)`,pointerEvents:`none`}})]}),(0,I.jsxs)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:96,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:4,borderTop:`1px solid ${i?`${a}44`:`rgba(36,40,68,0.5)`}`,background:i?e===`left`?`rgba(22,18,2,0.92)`:`rgba(2,18,22,0.92)`:`rgba(6,6,18,0.92)`,transition:`background 0.4s, border-color 0.4s`},children:[(0,I.jsx)(`div`,{style:{fontSize:48,lineHeight:1,color:i?a:`#4a5090`,fontVariantNumeric:`tabular-nums`,textShadow:i?`0 0 24px ${a}55`:`none`,transition:`color 0.4s, text-shadow 0.4s`},children:r}),(0,I.jsx)(`div`,{style:{fontSize:10,color:`#3c4278`,letterSpacing:`0.08em`},children:`取得ペア`}),(0,I.jsx)(`div`,{style:{fontSize:11,color:i?`#c5cae9`:`#4a5090`,letterSpacing:`0.05em`,maxWidth:br-16,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,textAlign:`center`,transition:`color 0.4s`},children:t})]}),i&&(0,I.jsx)(`div`,{style:{position:`absolute`,top:10,...e===`left`?{right:10}:{left:10},color:a,fontSize:14,opacity:.9},children:e===`left`?`▶`:`◀`})]})}function Kr({speakerName:e,speakerSide:t,text:n}){return(0,I.jsxs)(`div`,{style:{position:`absolute`,left:0,right:0,bottom:0,height:Sr,background:`rgba(6,6,20,0.92)`,borderTop:`1px solid rgba(46,50,88,0.7)`,zIndex:10},children:[e&&(0,I.jsx)(`div`,{style:{position:`absolute`,top:-30,...t===`right`?{right:br+20}:{left:br+20},background:`rgba(6,6,20,0.94)`,border:`1px solid rgba(46,50,88,0.7)`,borderBottom:`none`,padding:`5px 20px`,fontSize:13,color:`#c5cae9`,letterSpacing:`0.1em`},children:e}),(0,I.jsx)(`div`,{style:{position:`absolute`,top:18,left:br+24,right:br+24,bottom:14,color:`#e8eaf6`,fontSize:15,lineHeight:1.9,letterSpacing:`0.08em`,overflow:`hidden`},children:n??``})]})}function qr({context:e,config:t,onExit:n}){let r=t.mode??`solo`,i=r===`duel`,o=t.opponentSkill??`normal`,s=t.pairs??6,c=t.maxTurns??20,l=Math.ceil(s*2/Lr),u=i?wr:zr,d=Lr*Rr+(Lr-1)*Br,f=l*u+(l-1)*Vr,p=Math.round((vr-d)/2),m=i?xr+Math.round((Cr-f)/2):Math.round((yr-f)/2)+16,h=Pr(),{speak:g,stop:_}=Nr(t.assetsBaseUrl),[v,y]=(0,a.useState)(()=>Ir(s)),b=(0,a.useRef)(!1),[x,S]=(0,a.useState)(()=>{if(r!==`duel`)return null;let e=Ur(t.playerDialogue?.length?t.playerDialogue:Er);return e?{speaker:`player`,text:e}:null});(0,a.useEffect)(()=>{if(v.phase!==`win`&&v.phase!==`lose`)return;let r=v.phase===`win`,i=setTimeout(()=>{n({...e,flags:{...e.flags,[`memory_game_result_${t.stageId}`]:r?`win`:`lose`,[`memory_game_player_pairs_${t.stageId}`]:v.playerPairs,[`memory_game_opponent_pairs_${t.stageId}`]:v.opponentPairs}})},2500);return()=>clearTimeout(i)},[v.phase]),(0,a.useEffect)(()=>{if(!x||!i)return;let e=x.speaker===`player`?t.playerVoicevoxSpeakerId:t.opponentVoicevoxSpeakerId;if(e!=null)return g(x.text,e),_},[x]),(0,a.useEffect)(()=>{if(!i||v.phase!==`playing`){S(null);return}let e=v.currentTurn,n;switch(v.lastEvent){case`match`:n=e===`opponent`?t.opponentMatchDialogue?.length?t.opponentMatchDialogue:kr:t.playerMatchDialogue?.length?t.playerMatchDialogue:Or;break;case`mismatch`:n=e===`opponent`?t.opponentMissDialogue?.length?t.opponentMissDialogue:jr:t.playerMissDialogue?.length?t.playerMissDialogue:Ar;break;default:n=e===`opponent`?t.opponentDialogue?.length?t.opponentDialogue:Dr:t.playerDialogue?.length?t.playerDialogue:Er}let r=Ur(n);S(r?{speaker:e,text:r}:null)},[v.eventId,i,v.phase]);let C=(0,a.useCallback)(e=>{b.current||y(t=>{if(t.phase!==`playing`)return t;let n=t.cards.find(t=>t.id===e);if(!n||t.matched.includes(n.pairId)||t.flipped.includes(e)||t.flipped.length>=2)return t;let r=[...t.flipped,e],a={...t.seen,[e]:n.pairId};if(r.length<2)return{...t,flipped:r,seen:a};let[o,c]=r,l=t.cards.find(e=>e.id===o),u=t.cards.find(e=>e.id===c),d=l.pairId===u.pairId,f=t.turns+1,p=i?t.currentTurn:`player`;if(d){let e=[...t.matched,l.pairId],n=t.playerPairs+ +(p===`player`),r=t.opponentPairs+ +(p===`opponent`),o=e.length===s,c=i?n>r:!0;return{...t,flipped:[],matched:e,matchedBy:{...t.matchedBy,[l.pairId]:p},seen:a,playerPairs:n,opponentPairs:r,turns:f,phase:o?c?`win`:`lose`:`playing`,lastEvent:`match`,eventId:t.eventId+1}}return{...t,flipped:r,seen:a,turns:f,lastEvent:`mismatch`,eventId:t.eventId+1}})},[i,s,c]),w=(0,a.useCallback)(e=>{i&&v.currentTurn!==`player`||C(e)},[i,C,v.currentTurn]);(0,a.useEffect)(()=>{if(v.flipped.length!==2)return;let[e,t]=v.flipped,n=v.cards.find(t=>t.id===e),r=v.cards.find(e=>e.id===t);if(n.pairId===r.pairId)return;b.current=!0;let a=setTimeout(()=>{y(e=>({...e,flipped:[],currentTurn:i?e.currentTurn===`player`?`opponent`:`player`:e.currentTurn,phase:!i&&c>0&&e.turns>=c?`lose`:e.phase,lastEvent:`turn_start`,eventId:e.eventId+1})),b.current=!1},900);return()=>{clearTimeout(a),b.current=!1}},[v.flipped]),(0,a.useEffect)(()=>{if(!i||v.phase!==`playing`||v.currentTurn!==`opponent`||b.current)return;let e=v.flipped.length===0?650:820,t=setTimeout(()=>{let e=Wr(v,o);e!==null&&C(e)},e);return()=>clearTimeout(t)},[i,o,C,v]);let T=c>0?c-v.turns:null,E=T!==null&&T<=5,D=Hr(t.assetsBaseUrl,t.playerFaceImage),O=Hr(t.assetsBaseUrl,t.opponentFaceImage),k=t.playerName??`こちら`,A=t.opponentName??`相手`,j=Hr(t.assetsBaseUrl,t.backgroundImage),M=x?x.speaker===`player`?k:A:null,N=x?x.speaker===`player`?`left`:`right`:null;return(0,I.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#0a0a14`,overflow:`hidden`},children:(0,I.jsxs)(`div`,{style:{width:vr,height:yr,position:`relative`,userSelect:`none`,overflow:`hidden`,flexShrink:0,transformOrigin:`center center`,transform:`scale(${h})`,fontFamily:_r,...j?{backgroundImage:`url(${j})`,backgroundSize:`cover`,backgroundPosition:`center`}:{background:`linear-gradient(150deg, #0d0d1a 0%, #0a0a14 60%, #0e0a1c 100%)`}},children:[j&&(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(4,4,12,0.56)`,pointerEvents:`none`}}),(0,I.jsxs)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:xr,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:4,borderBottom:`1px solid rgba(36,40,68,0.5)`,background:`rgba(6,6,20,0.7)`},children:[(0,I.jsx)(`span`,{style:{color:`#c5cae9`,fontSize:15,letterSpacing:`0.14em`},children:t.title??`神経衰弱`}),!i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`span`,{style:{position:`absolute`,left:20,color:`#8bc34a`,fontSize:13},children:[v.matched.length,` / `,s,` ペア`]}),(0,I.jsx)(`span`,{style:{position:`absolute`,right:20,color:E?`#ef9a9a`:`#4a4d62`,fontSize:13},children:c>0?`残り ${T} 手`:`${v.turns} 手`})]})]}),i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Gr,{side:`left`,name:k,faceSrc:D,score:v.playerPairs,active:v.currentTurn===`player`&&v.phase===`playing`}),(0,I.jsx)(Gr,{side:`right`,name:A,faceSrc:O,score:v.opponentPairs,active:v.currentTurn===`opponent`&&v.phase===`playing`})]}),v.cards.map((e,t)=>{let n=t%Lr,r=Math.floor(t/Lr),a=p+n*(Rr+Br),o=m+r*(u+Vr),s=v.flipped.includes(e.id)||v.matched.includes(e.pairId),c=v.matched.includes(e.pairId),l=Tr[e.pairId%Tr.length],d=(c?v.matchedBy[e.pairId]:void 0)===`opponent`?`#80deea`:l.color;return(0,I.jsx)(`div`,{onClick:()=>w(e.id),style:{position:`absolute`,left:a,top:o,width:Rr,height:u,borderRadius:10,cursor:s||i&&v.currentTurn!==`player`||b.current?`default`:`pointer`,background:s?`#141426`:`#0c0c1c`,border:c?`2px solid ${d}88`:s?`2px solid #3a3a5a`:`2px solid #1c1c30`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:c?`0 0 20px ${d}36, 0 2px 8px rgba(0,0,0,0.55)`:s?`0 4px 14px rgba(0,0,0,0.65)`:`0 2px 6px rgba(0,0,0,0.45)`,transition:`background 0.12s, border-color 0.12s, box-shadow 0.2s`,zIndex:2},children:s?(0,I.jsx)(`span`,{style:{fontSize:i?44:52,color:c?`${l.color}80`:l.color,lineHeight:1},children:l.symbol}):(0,I.jsx)(`span`,{style:{fontSize:24,color:`#1c1e38`},children:`✦`})},e.id)}),i&&v.phase===`playing`&&(0,I.jsx)(Kr,{speakerName:M,speakerSide:N,text:x?.text??null}),v.phase===`win`&&(0,I.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:30,background:`rgba(6,6,16,0.90)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:20},children:[(0,I.jsx)(`div`,{style:{fontSize:46,color:`#fff176`,letterSpacing:`0.25em`,textShadow:`0 0 40px rgba(255,241,118,0.45)`},children:`勝　利`}),(0,I.jsx)(`div`,{style:{fontSize:16,color:`#c5cae9`,letterSpacing:`0.08em`},children:i?`${v.playerPairs} — ${v.opponentPairs}`:`${v.turns} 手でクリア`})]}),v.phase===`lose`&&(0,I.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:30,background:`rgba(6,6,16,0.90)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:20},children:[(0,I.jsx)(`div`,{style:{fontSize:46,color:`#ef9a9a`,letterSpacing:`0.25em`,textShadow:`0 0 40px rgba(239,154,154,0.35)`},children:`惜　敗`}),(0,I.jsx)(`div`,{style:{fontSize:16,color:`#667`,letterSpacing:`0.06em`},children:i?`${v.playerPairs} — ${v.opponentPairs}`:`もう一度チャレンジしてください`})]})]})})}var Jr={component:qr},Yr=800,Xr=600,Zr=`'Hiragino Kaku Gothic ProN', 'Meiryo', 'Yu Gothic', sans-serif`,Qr=3,$r=`
@keyframes fcMountIn  { from{opacity:0;transform:scale(0.98)} to{opacity:1;transform:scale(1)} }
@keyframes fcPhaseIn  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
@keyframes fcNumPop   { 0%{opacity:0;transform:scale(0.65)} 65%{opacity:1;transform:scale(1.08)} 100%{opacity:1;transform:scale(1)} }
@keyframes fcGoFlash  { 0%{opacity:0;transform:scale(0.45)} 55%{opacity:1;transform:scale(1.14)} 100%{opacity:1;transform:scale(1)} }
@keyframes fcLightOn  { 0%,100%{filter:brightness(0.8)} 50%{filter:brightness(1.25)} }
@keyframes fcCorrect  { 0%{transform:scale(0.8);filter:brightness(0.3)} 55%{transform:scale(1.08);filter:brightness(1.6)} 100%{transform:scale(1);filter:brightness(1)} }
@keyframes fcWrong    { 0%,100%{transform:translateX(0)} 15%{transform:translateX(-11px)} 35%{transform:translateX(11px)} 55%{transform:translateX(-7px)} 75%{transform:translateX(7px)} 90%{transform:translateX(-3px)} }
@keyframes fcResultIn { from{opacity:0;transform:scale(0.84)} to{opacity:1;transform:scale(1)} }
@keyframes fcScan     { from{background-position:0 0} to{background-position:0 60px} }
.fc-btn { transition:transform 0.12s ease,border-color 0.15s,box-shadow 0.15s; cursor:pointer; }
.fc-btn:hover:not([disabled]) { transform:scale(1.05) !important; border-color:rgba(0,240,255,0.65) !important; box-shadow:0 0 30px rgba(0,240,255,0.28),inset 0 0 20px rgba(0,0,0,0.4) !important; }
.fc-btn:active:not([disabled]) { transform:scale(0.95) !important; }
`,ei={easy:{count:3,min:1,max:9,flashMs:800,blankMs:150,negatives:0},normal:{count:4,min:3,max:20,flashMs:600,blankMs:120,negatives:1},hard:{count:5,min:5,max:50,flashMs:400,blankMs:100,negatives:2}};function ti(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ni(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function ri(e){let{count:t,min:n,max:r,negatives:i}=ei[e];for(;;){let e=[ti(n,r)];for(let a=1;a<t;a++){let t=i>0&&a<=i&&Math.random()<.45;e.push(ti(n,r)*(t?-1:1))}let a=e.reduce((e,t)=>e+t,0);if(a>0)return{nums:e,answer:a}}}function ii(e){let t=new Set([e]);for(let n of ni([3,7,12,18,25])){if(t.size>=4)break;let r=e+(Math.random()<.5?n:-n);r>0&&r!==e&&t.add(r)}let n=1;for(;t.size<4;)t.add(e+n),t.add(e-n),n++;return ni([...t].slice(0,4))}function ai(e){let t=ri(e);return{phase:`countdown`,countdown:5,round:0,problem:t,flashIdx:0,choices:ii(t.answer),selected:null,isCorrect:null,score:0,seq:0}}function oi(){let e=()=>Math.min(1,Math.min(window.innerWidth/Yr,window.innerHeight/Xr)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function si(){(0,a.useEffect)(()=>{let e=document.createElement(`style`);return e.setAttribute(`data-fc`,`1`),e.textContent=$r,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[])}function ci({context:e,config:t,onExit:n}){let r=t.difficulty??`easy`,i=t.rounds??5,o=ei[r],s=oi();si();let[c,l]=(0,a.useState)(()=>ai(r)),u=(0,a.useRef)(0),d=(0,a.useCallback)(()=>(u.current+=1,u.current),[]);(0,a.useEffect)(()=>{if(c.phase!==`countdown`)return;let e=d(),t=c.countdown===0?700:460,n=setTimeout(()=>{u.current===e&&(c.countdown>0?l(e=>({...e,countdown:e.countdown-1,seq:e.seq+1})):l(e=>({...e,phase:`flash`,flashIdx:0,seq:e.seq+1})))},t);return()=>clearTimeout(n)},[c.phase,c.countdown,c.seq]),(0,a.useEffect)(()=>{if(c.phase!==`flash`)return;let e=d(),t=setTimeout(()=>{u.current===e&&(c.flashIdx+1<c.problem.nums.length?l(e=>({...e,phase:`blank`,seq:e.seq+1})):l(e=>({...e,phase:`answer`,selected:null,isCorrect:null,seq:e.seq+1})))},o.flashMs);return()=>clearTimeout(t)},[c.phase,c.flashIdx,c.seq]),(0,a.useEffect)(()=>{if(c.phase!==`blank`)return;let e=d(),t=setTimeout(()=>{u.current===e&&l(e=>({...e,phase:`flash`,flashIdx:e.flashIdx+1,seq:e.seq+1}))},o.blankMs);return()=>clearTimeout(t)},[c.phase,c.seq]),(0,a.useEffect)(()=>{if(c.phase!==`feedback`)return;let e=d(),t=setTimeout(()=>{if(u.current!==e)return;let t=c.round+1;if(t>=i)l(e=>({...e,phase:`result`,seq:e.seq+1}));else{let e=ri(r);l(n=>({...n,phase:`countdown`,countdown:5,round:t,problem:e,flashIdx:0,choices:ii(e.answer),selected:null,isCorrect:null,seq:n.seq+1}))}},1400);return()=>clearTimeout(t)},[c.phase,c.round,c.seq]),(0,a.useEffect)(()=>{if(c.phase!==`result`)return;let t=d(),r=setTimeout(()=>{u.current===t&&n({...e,flags:{...e.flags,flash_calc_score:c.score,flash_calc_rounds:i,flash_calc_passed:c.score>Qr},playerStats:{...e.playerStats,flash_calc_score:c.score}})},3500);return()=>clearTimeout(r)},[c.phase]);let f=(0,a.useCallback)(e=>{if(c.phase!==`answer`)return;let t=e===c.problem.answer;l(n=>({...n,phase:`feedback`,selected:e,isCorrect:t,score:t?n.score+1:n.score,seq:n.seq+1}))},[c.phase,c.problem.answer]),p=c.problem.nums[c.flashIdx],m=c.phase===`flash`?`flash-${c.flashIdx}`:c.phase;return(0,I.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#02020a`,overflow:`hidden`},children:(0,I.jsxs)(`div`,{style:{width:Yr,height:Xr,position:`relative`,overflow:`hidden`,flexShrink:0,transformOrigin:`center center`,transform:`scale(${s})`,fontFamily:Zr,background:[`repeating-linear-gradient(0deg,transparent,transparent 49px,rgba(0,240,255,0.04) 49px,rgba(0,240,255,0.04) 50px)`,`repeating-linear-gradient(90deg,transparent,transparent 49px,rgba(0,240,255,0.04) 49px,rgba(0,240,255,0.04) 50px)`,`linear-gradient(155deg,#07071a 0%,#040409 55%,#07040f 100%)`].join(`,`),userSelect:`none`,animation:`fcMountIn 0.55s ease-out`},children:[(0,I.jsx)(`div`,{style:{position:`absolute`,inset:0,zIndex:40,pointerEvents:`none`,background:`repeating-linear-gradient(0deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08) 1px,transparent 1px,transparent 4px)`,backgroundSize:`100% 4px`,animation:`fcScan 4s linear infinite`}}),(0,I.jsx)(li,{top:10,left:10}),(0,I.jsx)(li,{top:10,right:10}),(0,I.jsx)(li,{bottom:10,left:10}),(0,I.jsx)(li,{bottom:10,right:10}),(0,I.jsx)(ui,{round:c.round,totalRounds:i,score:c.score}),(0,I.jsx)(di,{phase:c.phase,countdown:c.countdown,currentNum:p,isNeg:typeof p==`number`&&p<0,flashIdx:c.flashIdx,totalNums:c.problem.nums.length,isCorrect:c.isCorrect,correctAnswer:c.problem.answer,selected:c.selected},m),(c.phase===`answer`||c.phase===`feedback`)&&(0,I.jsx)(pi,{choices:c.choices,selected:c.selected,correct:c.problem.answer,onSelect:f,disabled:c.phase===`feedback`}),c.phase===`result`&&(0,I.jsx)(mi,{score:c.score,total:i})]})})}function li({top:e,bottom:t,left:n,right:r}){return(0,I.jsx)(`div`,{style:{position:`absolute`,top:e,bottom:t,left:n,right:r,width:28,height:28,zIndex:3,pointerEvents:`none`,borderTop:e===void 0?void 0:`1px solid rgba(0,240,255,0.4)`,borderBottom:t===void 0?void 0:`1px solid rgba(0,240,255,0.4)`,borderLeft:n===void 0?void 0:`1px solid rgba(0,240,255,0.4)`,borderRight:r===void 0?void 0:`1px solid rgba(0,240,255,0.4)`}})}function ui({round:e,totalRounds:t,score:n}){return(0,I.jsxs)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:44,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`rgba(3,3,14,0.92)`,borderBottom:`1px solid rgba(0,240,255,0.15)`,zIndex:5},children:[(0,I.jsx)(`span`,{style:{color:`#6878b0`,fontSize:12,letterSpacing:`0.55em`,textTransform:`uppercase`},children:`Flash\xA0Calc`}),(0,I.jsxs)(`span`,{style:{position:`absolute`,left:40,color:`#283050`,fontSize:12,letterSpacing:`0.12em`,fontVariantNumeric:`tabular-nums`},children:[(0,I.jsx)(`span`,{style:{color:`#304070`},children:`RND`}),` `,(0,I.jsx)(`span`,{style:{color:`#4060a0`},children:e+1}),` `,(0,I.jsxs)(`span`,{style:{color:`#202840`},children:[`/ `,t]})]}),(0,I.jsxs)(`span`,{style:{position:`absolute`,right:40,display:`flex`,alignItems:`center`,gap:8,fontVariantNumeric:`tabular-nums`},children:[(0,I.jsx)(`span`,{style:{color:`#283050`,fontSize:11,letterSpacing:`0.12em`},children:`SCORE`}),(0,I.jsx)(`span`,{style:{color:`#40c070`,fontSize:18,fontWeight:700,textShadow:`0 0 12px rgba(60,200,100,0.5)`},children:n})]})]})}var $={position:`absolute`,left:0,right:0,top:44,bottom:150,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`};function di({phase:e,countdown:t,currentNum:n,isNeg:r,flashIdx:i,totalNums:a,isCorrect:o,correctAnswer:s,selected:c}){if(e===`result`)return null;if(e===`countdown`){let e=t===0?0:6-t,n=t===0;return(0,I.jsxs)(`div`,{style:{...$,animation:`fcPhaseIn 0.22s ease-out`,gap:0},children:[(0,I.jsx)(`div`,{style:{fontSize:11,letterSpacing:`0.55em`,color:`#2a3060`,textTransform:`uppercase`,marginBottom:24},children:n?`Start`:`Ready`}),(0,I.jsx)(`div`,{style:{background:`radial-gradient(ellipse at 50% 30%, #0c0a1e, #060410)`,border:`1px solid rgba(60,40,110,0.55)`,borderRadius:16,padding:`26px 40px`,display:`flex`,gap:30,boxShadow:`inset 0 0 80px rgba(0,0,0,0.85), 0 4px 40px rgba(0,0,0,0.6)`},children:Array.from({length:5},(t,n)=>{let r=n<e;return(0,I.jsx)(`div`,{style:{width:56,height:56,borderRadius:`50%`,background:r?`radial-gradient(circle at 38% 32%, #ff6050 0%, #cc0000 55%, #800000 100%)`:`radial-gradient(circle at 38% 32%, #1e0c0c 0%, #0e0404 100%)`,border:`3px solid ${r?`#ff4030`:`#1a0808`}`,boxShadow:r?`0 0 22px #ff0000, 0 0 50px rgba(255,0,0,0.55), 0 0 90px rgba(255,0,0,0.25), inset 0 2px 8px rgba(255,180,160,0.25)`:`inset 0 2px 6px rgba(0,0,0,0.9)`,animation:r?`fcLightOn 1.6s ease-in-out infinite`:`none`,transition:`background 0.12s, border-color 0.12s, box-shadow 0.15s`}},n)})}),n?(0,I.jsx)(`div`,{style:{fontSize:86,color:`#00ff60`,letterSpacing:`0.1em`,marginTop:28,textShadow:`0 0 28px #00ff60, 0 0 60px rgba(0,255,96,0.6), 0 0 120px rgba(0,255,96,0.3)`,animation:`fcGoFlash 0.38s cubic-bezier(0.17,0.89,0.32,1.27)`},children:`GO！`}):(0,I.jsx)(`div`,{style:{fontSize:12,color:`#252548`,letterSpacing:`0.14em`,marginTop:22},children:`集中してください`})]})}if(e===`flash`){let e=r?`−${Math.abs(n)}`:`${n}`,t=r?`#ff7878`:`#d8eeff`,o=r?`rgba(255,80,80,0.65)`:`rgba(80,180,255,0.7)`;return(0,I.jsxs)(`div`,{style:{...$,gap:0},children:[(0,I.jsx)(fi,{total:a,done:i,active:i}),(0,I.jsx)(`div`,{style:{fontSize:118,color:t,lineHeight:1,fontWeight:700,fontVariantNumeric:`tabular-nums`,textShadow:`0 0 40px ${o}, 0 0 90px ${o.replace(`0.7`,`0.35`)}`,animation:`fcNumPop 0.2s cubic-bezier(0.17,0.89,0.32,1.27)`,letterSpacing:`0.04em`},children:e})]})}return e===`blank`?(0,I.jsx)(`div`,{style:{...$},children:(0,I.jsx)(fi,{total:a,done:i+1,active:null})}):e===`answer`?(0,I.jsxs)(`div`,{style:{...$,gap:14,animation:`fcPhaseIn 0.25s ease-out`},children:[(0,I.jsx)(`div`,{style:{fontSize:88,color:`#3a4888`,textShadow:`0 0 24px rgba(60,80,180,0.4)`,lineHeight:1},children:`?`}),(0,I.jsx)(`div`,{style:{fontSize:13,color:`#2c2c54`,letterSpacing:`0.18em`},children:`こたえを　えらんでね`})]}):e===`feedback`?o?(0,I.jsxs)(`div`,{style:{...$,gap:12,animation:`fcCorrect 0.42s ease-out`},children:[(0,I.jsx)(`div`,{style:{fontSize:60,color:`#50ff8c`,textShadow:`0 0 28px rgba(80,255,140,0.7), 0 0 60px rgba(80,255,140,0.35)`,letterSpacing:`0.08em`},children:`せいかい！`}),(0,I.jsx)(`div`,{style:{fontSize:42,color:`#a0ffcc`,fontVariantNumeric:`tabular-nums`,textShadow:`0 0 16px rgba(80,255,140,0.4)`},children:s})]}):(0,I.jsxs)(`div`,{style:{...$,gap:10,animation:`fcWrong 0.48s ease-out`},children:[(0,I.jsx)(`div`,{style:{fontSize:60,color:`#ff5555`,textShadow:`0 0 28px rgba(255,60,60,0.7)`,letterSpacing:`0.08em`},children:`ざんねん`}),(0,I.jsxs)(`div`,{style:{fontSize:18,color:`#7a3a5a`,letterSpacing:`0.1em`},children:[`こたえは\xA0`,(0,I.jsx)(`span`,{style:{color:`#c06080`,fontVariantNumeric:`tabular-nums`},children:s})]}),c!==null&&(0,I.jsxs)(`div`,{style:{fontSize:13,color:`#3a2030`},children:[`あなたは `,c,` と答えました`]})]}):null}function fi({total:e,done:t,active:n}){return(0,I.jsx)(`div`,{style:{display:`flex`,gap:14,marginBottom:28},children:Array.from({length:e},(e,r)=>{let i=r<t,a=r===n;return(0,I.jsx)(`div`,{style:{width:10,height:10,borderRadius:2,background:a?`#00f0ff`:i?`rgba(0,200,255,0.45)`:`rgba(24,24,50,0.7)`,boxShadow:a?`0 0 10px #00f0ff, 0 0 22px rgba(0,240,255,0.5)`:i?`0 0 4px rgba(0,200,255,0.3)`:`none`,transition:`background 0.15s, box-shadow 0.15s`}},r)})})}function pi({choices:e,selected:t,correct:n,onSelect:r,disabled:i}){return(0,I.jsx)(`div`,{style:{position:`absolute`,left:36,right:36,bottom:36,height:104,display:`flex`,gap:18,alignItems:`stretch`},children:e.map(e=>{let a=`rgba(10,8,28,0.92)`,o=`1px solid rgba(0,180,220,0.18)`,s=`#8898cc`,c=`none`,l=`none`;return i&&t!==null&&(e===n?(a=`rgba(20,60,35,0.95)`,o=`1px solid rgba(80,255,140,0.55)`,s=`#80ffb8`,c=`0 0 28px rgba(60,220,110,0.35)`,l=`fcCorrect 0.4s ease-out`):e===t&&(a=`rgba(60,18,22,0.95)`,o=`1px solid rgba(255,80,80,0.5)`,s=`#ff7070`,c=`0 0 18px rgba(255,60,60,0.3)`)),(0,I.jsx)(`button`,{className:`fc-btn`,onClick:()=>!i&&r(e),disabled:i,style:{flex:1,height:`100%`,background:a,border:o,borderRadius:10,color:s,fontSize:38,fontFamily:Zr,fontVariantNumeric:`tabular-nums`,fontWeight:700,boxShadow:c,animation:l,letterSpacing:`0.04em`},children:e},e)})})}function mi({score:e,total:t}){let n=e>Qr,r=e===t,i=r?`#fff080`:n?`#60ff90`:`#ff6060`,a=r?`パーフェクト！`:n?`よくできました！`:`ざんねん…`;return(0,I.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:30,background:`rgba(2,2,12,0.94)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:0,animation:`fcResultIn 0.5s cubic-bezier(0.17,0.89,0.32,1.27)`},children:[(0,I.jsx)(`div`,{style:{fontSize:11,letterSpacing:`0.55em`,color:`#242448`,textTransform:`uppercase`,marginBottom:32},children:`Result`}),(0,I.jsx)(`div`,{style:{fontSize:46,color:i,letterSpacing:`0.14em`,textShadow:`0 0 36px ${i}88, 0 0 70px ${i}44`,marginBottom:24},children:a}),(0,I.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:14},children:[(0,I.jsx)(`span`,{style:{fontSize:92,color:i,fontVariantNumeric:`tabular-nums`,fontWeight:700,textShadow:`0 0 50px ${i}66, 0 0 100px ${i}33`},children:e}),(0,I.jsxs)(`span`,{style:{fontSize:28,color:`#242448`},children:[`/ `,t]})]}),!n&&(0,I.jsx)(`div`,{style:{fontSize:15,color:`#4a2840`,letterSpacing:`0.12em`,marginTop:20},children:`4もん以上せいかいしてね`})]})}var hi={component:ci},gi=yt(),_i=yt(`chapter2`),vi=yt(`chapter3`),yi=yt(`chapter4`),bi=`/dojonovel/assets`,xi=[{id:`chapter1`,title:`第1章へ`,chapterTitle:`赤羽の一日`,masterData:gi,initialSceneId:`scene_danchi_morning`,initialLocationId:`loc_danchi`,initialFlags:{flag_chapter:1}},{id:`chapter2`,title:`第2章へ`,chapterTitle:`一番街の怨霊`,masterData:_i,initialSceneId:`scene_ch2_start`,initialLocationId:`loc_danchi`,unlockFlag:`flag_chapter1_cleared`,initialFlags:{flag_chapter:2,flag_chapter1_cleared:!0}},{id:`chapter3`,title:`第3章へ`,chapterTitle:`アーケード街の死闘`,masterData:vi,initialSceneId:`scene_ch3_start`,initialLocationId:`loc_danchi`,unlockFlag:`flag_ch2_cleared`,initialFlags:{flag_chapter:3,flag_chapter1_cleared:!0,flag_ch2_cleared:!0}},{id:`chapter4`,title:`第4章へ`,chapterTitle:`（タイトル未定）`,masterData:yi,initialSceneId:`scene_ch4_start`,initialLocationId:`loc_danchi`,unlockFlag:`flag_ch3_cleared`,initialFlags:{flag_chapter:4,flag_chapter1_cleared:!0,flag_ch2_cleared:!0,flag_ch3_cleared:!0,flag_station_explored:!0,flag_visited_slope:!0,flag_ch3_museum_unlocked:!0}}];function Si(){return(0,I.jsx)(Ct,{engines:{novel:Tt,maze_rpg:Fn,runner_action:gr,memory_game:Jr,flash_calc:hi},initial:{engineId:`novel`,config:{masterData:gi,assetsBaseUrl:bi,chapterId:`chapter1`,initialSceneId:`scene_danchi_morning`,initialLocationId:`loc_danchi`,chapters:xi}},initialContext:{flags:{},inventory:[],playerStats:{}}})}(0,o.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(a.StrictMode,{children:(0,I.jsx)(Si,{})}));