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
        messages: []
        game_end: true
        flags_set:
          - flag: flag_chapter1_cleared
            value: true
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

  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    messages:
      - text: 一番街の入り口に来た。
        voice_character_id: null
      - text: アーケードの奥に商店が並んでいるが、今日は特に何もなさそうだ。
        voice_character_id: null
`,c=`scenes:
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchi_day.jpg
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
    messages:
      - text: 赤羽駅前に来た。
        voice_character_id: null
    bgm: audio/bgm/station.mp3
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
          - text: 「これ、持っていきな。困ったときに使うといい」
            voice_character_id: char_mentor
          - text: 手渡されたそれは、かすかに光を帯びていた。
            voice_character_id: null
        item_give:
          - item_id: item_kinchu_hikari
            condition: null
        next_scene: scene_coderdojo_base
      - id: scene_coderdojo_base
        messages:
          - text: CoderDojo赤羽の会場は、今日は静かだった。
            voice_character_id: null
        child_scenes:
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
              - id: scene_coderdojo_juice_have
                messages:
                  - text: 机の隅にジュースがある。もう持っているからいいか。
                    voice_character_id: char_hero
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
              - id: scene_coderdojo_milktea_have
                messages:
                  - text: ミルクティーがある。もう持っているからいいか。
                    voice_character_id: char_hero
        clickable_areas:
          - id: area_coderdojo_juice
            x: 102
            "y": 357
            width: 70
            height: 68
            label: 机の隅
            next_scene: scene_coderdojo_examine_juice
            condition: null
          - id: area_coderdojo_milktea
            x: 618
            "y": 367
            width: 87
            height: 69
            label: テーブル
            next_scene: scene_coderdojo_examine_milktea
            condition: null
  - id: scene_slope_default
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    messages:
      - text: 団地への坂に来た。
        voice_character_id: null
  - id: scene_ch2_start
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
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
    messages:
      - text: 一番街の入り口。あの夜以来、この通りにはまた少しだけ光が戻ってきた気がする。
        voice_character_id: null
  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
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
      config:
        map: dungeon_02
        name: 一番街の異空間
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
  - id: scene_ch2_boss_gameover
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
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
  - id: scene_maze_event_01
    location_id: loc_ichibangai
    background: backgrounds/inner_ichibangai_dark.jpg
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
  - id: scene_ch2_after_maze
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
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
    next_scene: scene_ch2_ending_credits
  - id: scene_ch2_ending_credits
    location_id: loc_ichibangai
    messages: []
    game_end: true
    flags_set:
      - flag: flag_ch2_cleared
        value: true
    cg_sequence:
      - src: cg/happy_dojo.jpg
        position: right
      - src: cg/mirai.jpg
        position: left
      - src: cg/dog.jpg
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
`,l=`scenes:
  - id: scene_ch3_start
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    flags_set:
      - flag: flag_chapter
        value: 3
      - flag: flag_chapter1_cleared
        value: true
      - flag: flag_ch2_cleared
        value: true
    messages:
      - text: 第3章　おばちゃんとアメちゃんゲーム
        voice_character_id: null
      - text: 一番街での騒動が落ち着いてから、数日が経った。
        voice_character_id: null
      - text: 団地の広場に出ると、田村のおばあさんがベンチに座ってため息をついていた。
        voice_character_id: null
    next_scene: scene_ch3_obachan_intro
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    messages: []
    branches:
      type: auto
      choices:
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
    messages: []
    branches:
      type: auto
      choices:
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
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: flag_ch3_got_ticket
            value: true
          next_scene: scene_ch3_museum_after_ticket
        - condition: null
          next_scene: scene_ch3_museum_receptionist
  - id: scene_coderdojo_default
    location_id: loc_coderdojo
    background: backgrounds/museum.jpg
    messages:
      - text: CoderDojo赤羽の会場は静かだ。今日は駅前へ戻ったほうがよさそうだ。
        voice_character_id: null
  - id: scene_ichibangai_default
    location_id: loc_ichibangai
    background: backgrounds/ichibangai_gate.jpg
    messages:
      - text: 一番街の入口に来た。今は別の場所が気にかかる。
        voice_character_id: null
  - id: scene_slope_default
    location_id: loc_slope
    background: backgrounds/slope_day.jpg
    messages:
      - text: 団地への坂に来た。駅前のざわめきが、ここまで届いている気がする。
        voice_character_id: null
  - id: scene_ch3_obachan_intro
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
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
    messages:
      - text: おばちゃんのためにチケットを探している。まずは駅前で話を聞いてみよう。
        voice_character_id: null
  - id: scene_ch3_danchi_go_museum
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    messages:
      - text: ミュージアムの受付がチケットを持っているらしい。団地のミュージアムへ行ってみよう。
        voice_character_id: null
  - id: scene_ch3_danchi_idle
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    messages:
      - text: 団地に戻ってきた。
        voice_character_id: null
  - id: scene_ch3_ready_to_give_ticket
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
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
    messages:
      - text: 赤羽駅前にいる。おばちゃんのことが気になる。
        voice_character_id: null
  - id: scene_ch3_station_college
    location_id: loc_station
    background: backgrounds/akabane.jpg
    characters:
      - character_id: char_college_student
        position: right
        expression: normal
    messages:
      - text: 駅前に出ると、大学生らしい人が立ち止まってスマホをいじっていた。
        voice_character_id: null
    talkable:
      - character_id: char_college_student
        scene_id: scene_ch3_talk_college_student
  - id: scene_ch3_talk_college_student
    location_id: loc_station
    background: backgrounds/akabane.jpg
    characters:
      - character_id: char_college_student
        position: right
        expression: normal
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
  - id: scene_ch3_museum_receptionist
    location_id: loc_museum
    background: backgrounds/museum.jpg
    characters:
      - character_id: char_museum_staff
        position: right
        expression: normal
    messages:
      - text: ミュージアムの受付に、スタッフの方が立っていた。
        voice_character_id: null
    talkable:
      - character_id: char_museum_staff
        scene_id: scene_ch3_talk_museum_staff
  - id: scene_ch3_talk_museum_staff
    location_id: loc_museum
    background: backgrounds/museum.jpg
    characters:
      - character_id: char_museum_staff
        position: right
        expression: talking
    messages:
      - text: 「あのう、アメちゃんゲットのチケットをお持ちって聞いたんですが……」
        voice_character_id: char_hero
      - text: 「まあ、おばあさまのために。でも、簡単にはお渡しできませんよ」
        voice_character_id: char_museum_staff
      - text: 「わたしと神経衰弱で勝負していただけますか？　あなたのほうが多くペアを取れたら差し上げます」
        voice_character_id: char_museum_staff
      - text: 「神経衰弱……わかりました、やります！」
        voice_character_id: char_hero
    next_engine:
      id: memory_game
      config:
        stageId: museum_challenge
        mode: duel
        pairs: 6
        title: チケット争奪 神経衰弱
        playerName: ケン
        opponentName: ミュージアムの受付
        playerFaceImage: characters/hero/hero_normal.png
        opponentFaceImage: characters/mentor/mentor_nomal.png
      return_scene: scene_ch3_museum_game_result
  - id: scene_ch3_museum_game_result
    location_id: loc_museum
    background: backgrounds/museum.jpg
    messages: []
    branches:
      type: auto
      choices:
        - condition:
            flag: memory_game_result_museum_challenge
            value: win
          next_scene: scene_ch3_museum_win
        - condition: null
          next_scene: scene_ch3_museum_lose
  - id: scene_ch3_museum_win
    location_id: loc_museum
    background: backgrounds/museum.jpg
    characters:
      - character_id: char_museum_staff
        position: right
        expression: talking
    item_give:
      - item_id: item_event_ticket
        condition: null
    flags_set:
      - flag: flag_ch3_got_ticket
        value: true
    messages:
      - text: 「見事です。わたしより多く取られてしまいましたね。お約束通り、チケットを差し上げます」
        voice_character_id: char_museum_staff
      - text: 「ありがとうございます！　おばちゃん、喜ぶと思います」
        voice_character_id: char_hero
      - text: 「イベント、楽しんでくださいね。おばあさまにもよろしく」
        voice_character_id: char_museum_staff
      - text: チケットを手に入れた。おばちゃんのいる団地へ戻ろう。
        voice_character_id: null
  - id: scene_ch3_museum_lose
    location_id: loc_museum
    background: backgrounds/museum.jpg
    characters:
      - character_id: char_museum_staff
        position: right
        expression: normal
    messages:
      - text: 「惜しかったですね。今回はわたしの勝ちです。よろしければ、もう一度いらしてください」
        voice_character_id: char_museum_staff
      - text: 「……絶対に勝ちます。もう一度お願いします！」
        voice_character_id: char_hero
    talkable:
      - character_id: char_museum_staff
        scene_id: scene_ch3_talk_museum_staff
  - id: scene_ch3_museum_after_ticket
    location_id: loc_museum
    background: backgrounds/museum.jpg
    messages:
      - text: もうチケットはもらった。おばちゃんのところへ戻ろう。
        voice_character_id: null
  - id: scene_ch3_goto_arcade
    location_id: loc_arcade
    background: backgrounds/intersection.jpg
    characters:
      - character_id: char_obachan
        position: right
        expression: talking
    messages:
      - text: アーケード街の入り口に「アメちゃんゲット大会」の垂れ幕が下がっていた。
        voice_character_id: null
      - text: 「おばちゃん、ここやな」
        voice_character_id: char_hero
      - text: 「ケンちゃんのおかげや。ほな、全力で走るで！」
        voice_character_id: char_obachan
    next_scene: scene_ch3_arcade_event_start
  - id: scene_ch3_arcade_event_start
    location_id: loc_arcade
    background: backgrounds/archade.jpg
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
      config:
        stageId: arcade_deathmatch
        name: アメちゃんゲット大会
        durationMs: 30000
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
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: アーケードの端まで走り抜けると、背中の冷たい気配がふっと消えた。
        voice_character_id: null
      - text: 「ケン！　戻ってきた……よかった」
        voice_character_id: char_obachan
      - text: 「しかもアメ、ようけ拾ってきたやないの。商店街もびっくりしとるわ」
        voice_character_id: char_obachan
      - text: ポケットの中で、集めたアメがころころ鳴った。
        voice_character_id: null
      - text: まだ何が起きているのかは分からない。でも、アーケード街の死闘は始まったばかりだ。
        voice_character_id: null
    game_end: true
    flags_set:
      - flag: flag_ch3_cleared
        value: true
  - id: scene_ch3_after_runner_some_candy
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: アーケードの端まで走り抜けると、背中の冷たい気配がふっと消えた。
        voice_character_id: null
      - text: 「ケン！　戻ってきた……よかった」
        voice_character_id: char_obachan
      - text: 「アメも拾えたんやね。走りながらなら、上出来や」
        voice_character_id: char_obachan
      - text: 息を整えると、手の中に甘い匂いが残っていた。
        voice_character_id: null
      - text: まだ何が起きているのかは分からない。でも、アーケード街の死闘は始まったばかりだ。
        voice_character_id: null
    game_end: true
    flags_set:
      - flag: flag_ch3_cleared
        value: true
  - id: scene_ch3_after_runner_few_candy
    location_id: loc_arcade
    background: backgrounds/archade.jpg
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: アーケードの端まで走り抜けると、背中の冷たい気配がふっと消えた。
        voice_character_id: null
      - text: 「ケン！　戻ってきた……よかった」
        voice_character_id: char_obachan
      - text: 「よう走ったねえ。これで今日は、商店街も少し眠れるやろ」
        voice_character_id: char_obachan
      - text: アメを拾う余裕はあまりなかった。でも、走り抜けられたことだけで十分だった。
        voice_character_id: null
      - text: まだ何が起きているのかは分からない。でも、アーケード街の死闘は始まったばかりだ。
        voice_character_id: null
    game_end: true
    flags_set:
      - flag: flag_ch3_cleared
        value: true
  - id: scene_arcade_default
    location_id: loc_arcade
    background: backgrounds/archade.jpg
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
    background: backgrounds/intersection.jpg
    characters:
      - character_id: char_obachan
        position: right
        expression: normal
    messages:
      - text: 「ケンちゃん、準備はええ？　全力で走るで！」
        voice_character_id: char_obachan
    next_engine:
      id: runner_action
      config:
        stageId: arcade_deathmatch
        name: アーケード街の死闘
        durationMs: 30000
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
`,u=`flags:
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
`,d=`items:
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
    name: "禁酒の光"
    description: "田中メンターから受け取った、不思議な光が宿るアイテム。迷宮の番人に大ダメージを与えられるらしい。"
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

  - id: item_event_ticket
    name: "アメちゃんゲットのチケット"
    description: "アーケード街で開かれるアメちゃんゲットゲームのイベントチケット。手書きで番号が入っている。"
    icon: null
    usable: false
    use_scene: null
    use_condition: null
    stackable: false
    category: key_item
`,f=`locations:
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
      - location_id: loc_museum
        label: "団地のミュージアムへ"
        condition:
          flag: flag_ch3_museum_unlocked
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
          flag: flag_chapter
          value: 3
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
    entry_scene: scene_arcade_default

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
      - location_id: loc_danchi
        label: "団地へ上る"
        condition: null
    entry_scene: scene_slope_default
`,p=`characters:
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

  - id: char_museum_staff
    name: "ミュージアムの受付"
    name_flag: null
    voicevox_speaker_id: 11
    y_offset: -250
    sprites:
      normal: characters/mentor/mentor_nomal.png
      talking: characters/mentor/talking.png

`,m=`commands:
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
`,h=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},g=(e=>e?h(e):h),_=e=>e;function v(e,t=_){let n=a.useSyncExternalStore(e.subscribe,a.useCallback(()=>t(e.getState()),[e,t]),a.useCallback(()=>t(e.getInitialState()),[e,t]));return a.useDebugValue(n),n}var y=e=>{let t=g(e),n=e=>v(t,e);return Object.assign(n,t),n},b=(e=>e?y(e):y),x={bgmVolume:.4,seVolume:.8,voiceVolume:.8,textSpeed:40,autoMode:!1,fullscreen:!1};function S(e){return Object.fromEntries(e.map(e=>[e.id,e.default]))}function C(e,t){if(!e||e.length===0)return t;let n={...t};for(let{flag:t,value:r}of e)n[t]=r;return n}function w(e,t){if(!e)return!0;if(e.and)return e.and.every(e=>w(e,t));if(e.or)return e.or.some(e=>w(e,t));let n=!0;if(e.flag!==void 0){let r=t.flags[e.flag],i=e.value;i!==void 0&&(n&&=r===i),e.min!==void 0&&(n=n&&typeof r==`number`&&r>=e.min),e.max!==void 0&&(n=n&&typeof r==`number`&&r<=e.max)}return e.has_item!==void 0&&(n&&=t.inventory.includes(e.has_item)),e.location_id!==void 0&&(n&&=t.locationId===e.location_id),e.negate&&(n=!n),n}function T(e,t){if(!e||e.length===0)return t;let n={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},r=[...t.inventory];for(let t of e)w(t.condition,n)&&(r.includes(t.item_id)||(r=[...r,t.item_id]));return{...t,inventory:r}}function E(e,t){return{...t,inventory:t.inventory.filter(t=>t!==e)}}function D(e,t,n){let r=n.items[e];if(!r||!r.usable)return!1;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId};return w(r.use_condition,i)}function O(e,t,n){let r=n.items[e];if(!r||!r.usable)return{newState:t,sceneId:null};let i=t;return r.stackable||(i=E(e,t)),{newState:i,sceneId:r.use_scene??null}}function k(e,t,n){let r=n.scenes[e];if(!r)return console.warn(`[SceneEngine] Scene not found: ${e}`),t;let i={...t,currentSceneId:e,currentMessageIndex:0,phase:`message`};if(r.location_id&&r.location_id!==t.currentLocationId&&(i={...i,currentLocationId:r.location_id,currentCharacters:[]}),r.characters!==void 0&&(i={...i,currentCharacters:r.characters}),r.messages[0]?.characters!==void 0&&(i={...i,currentCharacters:r.messages[0].characters}),i={...i,flags:C(r.flags_set,i.flags)},i=T(r.item_give,i),r.item_remove)for(let e of r.item_remove)i=E(e,i);return r.messages.length===0?r.game_end?{...i,phase:`ending`}:r.cg_sequence?.length?{...i,phase:`cg_sequence`}:ee(i,r,n):i}function A(e,t){let n=t.scenes[e.currentSceneId];if(!n)return e;let r=e.currentMessageIndex+1;if(r<n.messages.length){let t=n.messages[r],i={...e,currentMessageIndex:r};return t.characters===void 0?i:{...i,currentCharacters:t.characters}}return ee(e,n,t)}function ee(e,t,n){if(t.game_end)return{...e,phase:`ending`};if(t.next_engine)return{...e,phase:`engine_transition`,pendingEngineTransition:t.next_engine};let r=t.branches;if(r?.type===`choice`&&r.choices&&r.choices.length>0){let t={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId},i=r.choices.filter(e=>w(e.condition,t));return i.length===1&&i[0].next_scene?k(i[0].next_scene,e,n):{...e,phase:`choice`}}if(r?.type===`auto`&&r.choices){let i={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId};for(let a of r.choices)if(w(a.condition,i))return a.next_scene?k(a.next_scene,e,n):a.next_scene===null?ne(e,n):re(e,t,n);return ne(e,n)}return t.next_scene?k(t.next_scene,e,n):t.next_scene===null?ne(e,n):re(e,t,n)}function te(e,t,n){let r=n.scenes[t.currentSceneId];if(!r?.branches?.choices)return t;let i=r.branches.choices[e];return i?i.next_scene?k(i.next_scene,t,n):ne(t,n):t}function ne(e,t){if(e.sceneHistory.length===0)return re(e,t.scenes[e.currentSceneId],t);let n=[...e.sceneHistory],r=n.pop();return t.scenes[r],{...e,currentSceneId:r,currentMessageIndex:0,sceneHistory:n,phase:`command`}}function re(e,t,n){return{...e,phase:`command`}}function ie(e,t){let n=t.scenes[e.currentSceneId];return n?ee(e,n,t):e}function ae(e,t){return{...t,sceneHistory:[...t.sceneHistory,e]}}function oe(e,t,n){return(e?.commands??t?.default_commands??Object.keys(n.commands)).map(e=>n.commands[e]).filter(e=>!!e)}function se(e,t,n){let r=n.commands[e];if(!r)return{newPhase:t.phase};switch(r.action_type){case`examine`:return{newPhase:`examine`};case`move`:return{newPhase:`map`};case`inventory`:return{newPhase:`inventory`};case`talk`:{let e=n.scenes[t.currentSceneId]?.talkable??[],r={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},i=e.filter(e=>w(e.condition??null,r)).map(e=>({characterId:e.character_id,sceneId:e.scene_id}));return i.length===0?{newPhase:`command`}:i.length===1?{newPhase:`message`,transitionSceneId:i[0].sceneId}:{newPhase:`talk_select`,talkCandidates:i}}case`system`:return{newPhase:`system_menu`};default:return{newPhase:t.phase}}}function ce(e,t,n){let r=n.locations[e];if(!r)return[];let i={flags:t.flags,inventory:t.inventory,locationId:e};return r.connections.filter(e=>w(e.condition,i))}function le(e,t,n){let r=n.locations[e];if(!r)return t;let i={...t,currentLocationId:e,currentCharacters:[],sceneHistory:[],phase:`message`};return k(r.entry_scene,i,n)}function ue(e,t,n,r){let i=S(e.flags);return{currentSceneId:t,currentLocationId:n,currentMessageIndex:0,flags:r?.initialFlags?{...i,...r.initialFlags}:i,inventory:r?.initialInventory??[],sceneHistory:[],phase:`title`,currentCharacters:[],talkCandidates:[]}}function de(e,t,n,r){let i=ue(e,t,n,r);return g((a,o)=>({state:i,masterData:e,chapterId:r?.chapterId??`chapter1`,playtimeStart:Date.now(),startNewGame:()=>{let e=o().masterData;a({state:k(t,{...ue(e,t,n,r),phase:`message`},e),playtimeStart:Date.now()})},startDebugGame:e=>{let i=o().masterData,s=ue(i,t,n,r),c={...s,currentSceneId:e.sceneId,currentLocationId:e.locationId,flags:{...s.flags,...e.flags??{}},inventory:e.inventory??[],phase:`message`};a({state:k(e.sceneId,c,i),playtimeStart:Date.now()})},loadGame:e=>{a({state:{currentSceneId:e.currentSceneId,currentLocationId:e.currentLocationId,currentMessageIndex:0,flags:e.flags,inventory:e.inventory,sceneHistory:e.sceneHistory,phase:`command`,currentCharacters:e.currentCharacters??[],talkCandidates:[]},playtimeStart:Date.now()-e.playtime*1e3})},toSaveData:()=>{let{state:e,playtimeStart:t}=o();return{version:1,chapterId:o().chapterId,timestamp:Date.now(),currentSceneId:e.currentSceneId,currentLocationId:e.currentLocationId,flags:e.flags,inventory:e.inventory,sceneHistory:e.sceneHistory,currentCharacters:e.currentCharacters,playtime:Math.floor((Date.now()-t)/1e3)}},advanceMessage:()=>{let{state:e,masterData:t}=o();e.phase===`message`&&a({state:A(e,t)})},selectChoice:e=>{let{state:t,masterData:n}=o();t.phase===`choice`&&a({state:te(e,t,n)})},executeCommand:e=>{let{state:t,masterData:n}=o();if(t.phase!==`command`)return;let r=se(e,t,n);if(r.transitionSceneId){let e=ae(t.currentSceneId,t);a({state:k(r.transitionSceneId,e,n)})}else a({state:{...t,phase:r.newPhase,talkCandidates:r.talkCandidates??[]}})},selectTalkTarget:e=>{let{state:t,masterData:n}=o();if(t.phase!==`talk_select`)return;if(e<0){a(e=>({state:{...e.state,phase:`command`,talkCandidates:[]}}));return}let r=t.talkCandidates[e];if(!r)return;let i=ae(t.currentSceneId,t);a({state:{...k(r.sceneId,i,n),talkCandidates:[]}})},completeCgSequence:()=>{let{state:e,masterData:t}=o();e.phase===`cg_sequence`&&a({state:ie(e,t)})},moveToLocation:e=>{let{state:t,masterData:n}=o();a({state:le(e,t,n)})},clickArea:e=>{let{state:t,masterData:n}=o();if(t.phase!==`examine`)return;let r=n.scenes[t.currentSceneId]?.clickable_areas?.find(t=>t.id===e);if(!r)return;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId};if(!w(r.condition,i))return;let s=ae(t.currentSceneId,t);a({state:k(r.next_scene,s,n)})},useItem:e=>{let{state:t,masterData:n}=o(),{newState:r,sceneId:i}=O(e,t,n);a(i?{state:k(i,ae(t.currentSceneId,{...r,phase:`command`}),n)}:{state:r})},closeOverlay:()=>{a(e=>({state:{...e.state,phase:`command`}}))},goToTitle:()=>{a(e=>({state:{...e.state,phase:`title`}}))},startFromScene:(e,t,n)=>{let{state:r,masterData:i}=o();a({state:k(e,{...ue(i,e,t,{}),flags:{...r.flags,...n??{}},inventory:r.inventory,phase:`message`},i),playtimeStart:Date.now()})},debugSetFlag:(e,t)=>{a(n=>({state:{...n.state,flags:{...n.state.flags,[e]:t}}}))},debugSetInventory:e=>{a(t=>({state:{...t.state,inventory:e}}))},debugJumpToScene:(e,t)=>{let{state:n,masterData:r}=o();a({state:k(e,{...n,currentLocationId:t,phase:`message`},r)})}}))}var fe=(0,a.createContext)(null);function pe(){let e=(0,a.useContext)(fe);if(!e)throw Error(`useGameStore must be used within a GameStoreContext.Provider`);return v(e)}var j=t(),me=(0,a.createContext)({resolveAsset:e=>e,resolveVoicePath:e=>`assets/voicevox/${e}.wav`});function he({assetsBaseUrl:e,children:t}){let n=e.replace(/\/$/,``),r=(0,a.useMemo)(()=>({resolveAsset:e=>`${n}/${e}`,resolveVoicePath:e=>`${n}/voicevox/${e}.wav`}),[n]);return(0,j.jsx)(me.Provider,{value:r,children:t})}function M(){return(0,a.useContext)(me)}var ge=class{prefix=`novel_`;key(e){return`${this.prefix}${e}`}setItem(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{console.warn(`[LocalStorage] Failed to save:`,e)}}getItem(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}async save(e,t){this.setItem(this.key(`save_${e}`),t)}async load(e){let t=this.getItem(this.key(`save_${e}`));return!t||t.version!==1?null:t}async deleteSave(e){localStorage.removeItem(this.key(`save_${e}`))}async listSaves(){return Array.from({length:3},(e,t)=>{let n=this.getItem(this.key(`save_${t+1}`));return!n||n.version!==1?null:{slotId:t+1,data:n}})}async saveSettings(e){this.setItem(this.key(`settings`),e)}async loadSettings(){return this.getItem(this.key(`settings`))}async autoSave(e){this.setItem(this.key(`autosave`),e)}async loadAutoSave(){let e=this.getItem(this.key(`autosave`));return!e||e.version!==1?null:e}};function _e(e=`localStorage`){switch(e){default:return new ge}}var ve=null;function N(){return ve||=_e(),ve}var P=new class{bgmAudio=null;voiceAudio=null;playBgm(e,t=!0,n=.8){this.bgmAudio&&this.bgmAudio.pause();let r=new Audio(e);r.loop=t,r.volume=n,r.play().catch(()=>{}),this.bgmAudio=r}stopBgm(){this.bgmAudio&&=(this.bgmAudio.pause(),null)}setBgmVolume(e){this.bgmAudio&&(this.bgmAudio.volume=Math.max(0,Math.min(1,e)))}async playVoice(e,t=.9,n){this.voiceAudio&&this.voiceAudio.pause();let r=new Audio(e);r.volume=t,this.voiceAudio=r,n&&r.addEventListener(`ended`,n,{once:!0}),console.log(`[AudioManager] playVoice:`,e.slice(0,60)),await r.play().catch(e=>console.warn(`[AudioManager] play failed:`,e))}stopVoice(){this.voiceAudio&&=(this.voiceAudio.pause(),null)}playSe(e,t=.8){let n=new Audio(e);n.volume=t,n.play().catch(()=>{})}},ye=b((e,t)=>({settings:x,updateSettings:n=>{let r={...t().settings,...n};e({settings:r}),n.bgmVolume!==void 0&&P.setBgmVolume(n.bgmVolume),N().saveSettings(r).catch(()=>{})},loadSettings:async()=>{let t=await N().loadSettings().catch(()=>null);t&&(e({settings:{...x,...t}}),P.setBgmVolume(t.bgmVolume??x.bgmVolume))}})),be={btn:`_btn_jkuam_1`,btnLarge:`_btnLarge_jkuam_29`,btnSmall:`_btnSmall_jkuam_34`};function F({label:e,onClick:t,disabled:n,size:r=`normal`}){let i=r===`large`?be.btnLarge:r===`small`?be.btnSmall:``;return(0,j.jsx)(`button`,{className:`${be.btn} ${i}`,onClick:t,disabled:n,children:e})}var xe={overlay:`_overlay_2rhas_1`,box:`_box_2rhas_11`,title:`_title_2rhas_23`,closeBtn:`_closeBtn_2rhas_32`};function I({title:e,onClose:t,children:n}){return(0,j.jsx)(`div`,{className:xe.overlay,onClick:t,children:(0,j.jsxs)(`div`,{className:xe.box,onClick:e=>e.stopPropagation(),children:[t&&(0,j.jsx)(`button`,{className:xe.closeBtn,onClick:t,children:`×`}),e&&(0,j.jsx)(`div`,{className:xe.title,children:e}),n]})})}var L={slots:`_slots_1la7k_1`,slot:`_slot_1la7k_1`,slotInfo:`_slotInfo_1la7k_17`,slotLabel:`_slotLabel_1la7k_21`,slotData:`_slotData_1la7k_27`,slotEmpty:`_slotEmpty_1la7k_32`,slotActions:`_slotActions_1la7k_38`,tabs:`_tabs_1la7k_43`,tab:`_tab_1la7k_43`,tabActive:`_tabActive_1la7k_60`};function Se({onSave:e,onLoad:t,onClose:n,initialTab:r=`save`}){let[i,o]=(0,a.useState)(r),[s,c]=(0,a.useState)([]);(0,a.useEffect)(()=>{N().listSaves().then(c)},[]);async function l(t){await e(t),c(await N().listSaves())}function u(e){return new Date(e).toLocaleString(`ja-JP`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}return(0,j.jsxs)(I,{title:`セーブ / ロード`,onClose:n,children:[(0,j.jsxs)(`div`,{className:L.tabs,children:[(0,j.jsx)(`button`,{className:`${L.tab} ${i===`save`?L.tabActive:``}`,onClick:()=>o(`save`),children:`セーブ`}),(0,j.jsx)(`button`,{className:`${L.tab} ${i===`load`?L.tabActive:``}`,onClick:()=>o(`load`),children:`ロード`})]}),(0,j.jsx)(`div`,{className:L.slots,children:Array.from({length:3},(e,r)=>{let a=r+1,o=s[r]??null;return(0,j.jsxs)(`div`,{className:L.slot,children:[(0,j.jsxs)(`div`,{className:L.slotInfo,children:[(0,j.jsxs)(`div`,{className:L.slotLabel,children:[`スロット `,a]}),o?(0,j.jsxs)(`div`,{className:L.slotData,children:[u(o.data.timestamp),`プレイ時間: `,Math.floor(o.data.playtime/60),`分`]}):(0,j.jsx)(`div`,{className:L.slotEmpty,children:`データなし`})]}),(0,j.jsxs)(`div`,{className:L.slotActions,children:[i===`save`&&(0,j.jsx)(F,{label:`セーブ`,size:`small`,onClick:()=>l(a)}),i===`load`&&o&&(0,j.jsx)(F,{label:`ロード`,size:`small`,onClick:()=>{t(o.data),n()}})]})]},a)})})]})}var R={root:`_root_1g679_1`,title:`_title_1g679_12`,subtitle:`_subtitle_1g679_20`,actions:`_actions_1g679_28`,continueMenu:`_continueMenu_1g679_35`,chapterList:`_chapterList_1g679_42`,sectionLabel:`_sectionLabel_1g679_49`};function Ce({onNewGame:e,onLoad:t,chapters:n,onStartChapter:r}){let[i,o]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1),[l,u]=(0,a.useState)([]),{state:d}=pe();(0,a.useEffect)(()=>{N().listSaves().then(u)},[]);async function f(e){}function p(e){let{unlockFlag:t}=e;return!t||d.flags[t]?!0:l.some(e=>!!e?.data.flags[t])}let m=n?.filter(p)??[],h=l.some(Boolean),g=h||m.length>0;return(0,j.jsxs)(`div`,{className:R.root,children:[(0,j.jsx)(`h1`,{className:R.title,children:`ノベルゲーム`}),(0,j.jsx)(`p`,{className:R.subtitle,children:`NOVEL GAME`}),(0,j.jsxs)(`div`,{className:R.actions,children:[(0,j.jsx)(F,{label:`はじめから`,size:`large`,onClick:e}),g&&(0,j.jsx)(F,{label:`続きから`,size:`large`,onClick:()=>o(!0)})]}),i&&(0,j.jsx)(I,{title:`続きから`,onClose:()=>o(!1),children:(0,j.jsxs)(`div`,{className:R.continueMenu,children:[h&&(0,j.jsx)(F,{label:`セーブデータをロード`,size:`large`,onClick:()=>{o(!1),c(!0)}}),m.length>0&&(0,j.jsxs)(`div`,{className:R.chapterList,children:[(0,j.jsx)(`div`,{className:R.sectionLabel,children:`章を選ぶ`}),m.map(e=>(0,j.jsx)(F,{label:e.title,size:`large`,onClick:()=>{o(!1),r?.(e)}},`${e.initialSceneId}:${e.initialLocationId}`))]})]})}),s&&(0,j.jsx)(Se,{onSave:f,onLoad:e=>{c(!1),t(e)},onClose:()=>c(!1),initialTab:`load`})]})}var we={root:`_root_1f6bz_1`,img:`_img_1f6bz_9`,fallback:`_fallback_1f6bz_15`,locationName:`_locationName_1f6bz_23`};function Te({backgroundPath:e,locationName:t}){let{resolveAsset:n}=M(),[r,i]=(0,a.useState)(!1),o=e?n(e):null;return(0,a.useEffect)(()=>{i(!1)},[o]),(0,j.jsx)(`div`,{className:we.root,children:o&&!r?(0,j.jsx)(`img`,{className:we.img,src:o,alt:``,onError:()=>i(!0)}):(0,j.jsx)(`div`,{className:we.fallback,children:t&&(0,j.jsx)(`span`,{className:we.locationName,children:t})})})}var z={root:`_root_xnuhq_1`,left:`_left_xnuhq_7`,center:`_center_xnuhq_11`,right:`_right_xnuhq_16`,img:`_img_xnuhq_20`,placeholder:`_placeholder_xnuhq_24`,placeholderName:`_placeholderName_xnuhq_35`};function Ee({display:e,character:t,isSpeaking:n}){let{resolveAsset:r}=M(),[i,o]=(0,a.useState)(!1),s=n&&t.sprites?.talking?`talking`:e.expression,c=t.sprites?.[s]??t.sprites?.normal,l=c?r(c):null,u=e.position===`left`?z.left:e.position===`right`?z.right:z.center,d=120+(e.y_offset??t.y_offset??0);return(0,j.jsx)(`div`,{className:`${z.root} ${u}`,style:{bottom:`${d}px`},children:l&&!i?(0,j.jsx)(`img`,{className:z.img,src:l,alt:t.name,onError:()=>o(!0)}):(0,j.jsx)(`div`,{className:z.placeholder,children:(0,j.jsx)(`span`,{className:z.placeholderName,children:t.name})})})}var De={root:`_root_2afjl_1`};function Oe({text:e,speed:t,onComplete:n,instant:r}){let[i,o]=(0,a.useState)(``),[s,c]=(0,a.useState)(!1),l=(0,a.useRef)(null),u=(0,a.useRef)(0);return(0,a.useEffect)(()=>{if(o(``),c(!1),u.current=0,r||t===0){o(e),c(!0),n?.();return}let i=Math.max(1,Math.floor(1e3/t));return l.current=setInterval(()=>{u.current+=1,o(e.slice(0,u.current)),u.current>=e.length&&(clearInterval(l.current),c(!0),n?.())},i),()=>{l.current&&clearInterval(l.current)}},[e,t,r]),(0,j.jsx)(`span`,{className:De.root,children:i})}var ke={baseUrl:`http://localhost:50021`,enabled:!0,prebuiltOnly:!0},Ae=new class{config;constructor(e=ke){this.config=e}async isAvailable(){if(this.config.prebuiltOnly)return!1;try{return(await fetch(`${this.config.baseUrl}/version`,{signal:AbortSignal.timeout(1e3)})).ok}catch{return!1}}async synthesize(e,t){if(!this.config.enabled||this.config.prebuiltOnly)return null;try{let n=await fetch(`${this.config.baseUrl}/audio_query?text=${encodeURIComponent(e)}&speaker=${t}`,{method:`POST`});if(!n.ok)return null;let r=await n.json(),i=await fetch(`${this.config.baseUrl}/synthesis?speaker=${t}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)});return i.ok?i.arrayBuffer():null}catch{return null}}};async function je(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-1`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Me(e,t){return je(`${e}_${t}`)}var Ne=new Map;function Pe(){let e=(0,a.useRef)(!1),{resolveVoicePath:t}=M();return{speak:(0,a.useCallback)(async(n,r,i)=>{if(console.log(`[Voicevox] speak called:`,{character:r?.id,speakerId:r?.voicevox_speaker_id,voiceCharId:n.voice_character_id}),!r?.voicevox_speaker_id||!n.voice_character_id)return;let a=r.voicevox_speaker_id,o=n.text;e.current=!0;try{let e=await Me(o,a);if(console.log(`[Voicevox] synthesizing:`,{text:o,speakerId:a,hashKey:e}),Ne.has(e)){console.log(`[Voicevox] cache hit`),await P.playVoice(Ne.get(e),.9,i);return}let n=t(e),r=await fetch(n,{method:`HEAD`}).catch(()=>null);if(r?.ok&&r.headers.get(`content-type`)?.startsWith(`audio/`)){console.log(`[Voicevox] prebuilt hit`),Ne.set(e,n),await P.playVoice(n,.9,i);return}console.log(`[Voicevox] calling engine...`);let s=await Ae.synthesize(o,a);if(!s){console.warn(`[Voicevox] synthesize returned null (engine not running?)`);return}console.log(`[Voicevox] playing synthesized audio`);let c=new Blob([s],{type:`audio/wav`}),l=URL.createObjectURL(c);Ne.set(e,l),await P.playVoice(l,.9,i)}finally{e.current=!1}},[t]),stop:(0,a.useCallback)(()=>{P.stopVoice()},[])}}var B={root:`_root_448af_1`,nameplate:`_nameplate_448af_10`,box:`_box_448af_22`,boxNarration:`_boxNarration_448af_32`,text:`_text_448af_42`,textNarration:`_textNarration_448af_48`,arrow:`_arrow_448af_55`,blink:`_blink_448af_1`};function Fe({message:e,speaker:t,textSpeed:n,onAdvance:r,onSpeakingChange:i}){let[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1),{speak:u,stop:d}=Pe();(0,a.useEffect)(()=>{s(!1),l(!1),u(e,t,()=>i?.(!1)),i?.(!0)},[e.text]);function f(){o?(d(),r()):(d(),l(!0),s(!0),i?.(!1))}let p=t?.name??null,m=!p;return(0,j.jsxs)(`div`,{className:B.root,children:[p&&(0,j.jsx)(`div`,{className:B.nameplate,children:p}),(0,j.jsxs)(`div`,{className:m?B.boxNarration:B.box,onClick:f,children:[(0,j.jsx)(`div`,{className:m?B.textNarration:B.text,children:(0,j.jsx)(Oe,{text:e.text,speed:n,instant:c,onComplete:()=>s(!0)})}),o&&(0,j.jsx)(`span`,{className:B.arrow,children:`▼`})]})]})}var Ie={root:`_root_13pfy_1`,box:`_box_13pfy_10`,choice:`_choice_13pfy_20`};function Le({choices:e,flags:t,inventory:n,locationId:r,onSelect:i}){let a={flags:t,inventory:n,locationId:r},o=e.map((e,t)=>({choice:e,originalIndex:t})).filter(({choice:e})=>w(e.condition,a));return(0,j.jsx)(`div`,{className:Ie.root,children:(0,j.jsx)(`div`,{className:Ie.box,children:o.map(({choice:e,originalIndex:t})=>(0,j.jsx)(`button`,{className:Ie.choice,onClick:()=>i(t),children:e.label},t))})})}var Re={root:`_root_1l2ff_1`,commands:`_commands_1l2ff_12`,cmd:`_cmd_1l2ff_19`};function ze({commands:e,onSelect:t}){return(0,j.jsx)(`div`,{className:Re.root,children:(0,j.jsx)(`div`,{className:Re.commands,children:e.map(e=>(0,j.jsx)(`button`,{className:Re.cmd,onClick:()=>t(e.id),title:e.description,children:e.label},e.id))})})}var Be={root:`_root_13hn2_1`,area:`_area_13hn2_7`,label:`_label_13hn2_23`,hint:`_hint_13hn2_32`,closeBtn:`_closeBtn_13hn2_44`};function Ve({areas:e,flags:t,inventory:n,locationId:r,onClick:i,onClose:a}){let o={flags:t,inventory:n,locationId:r};return(0,j.jsxs)(`div`,{className:Be.root,children:[(0,j.jsx)(`div`,{className:Be.hint,children:e.length>0?`調べる場所をクリックしてください`:`調べられるものはない`}),e.filter(e=>w(e.condition,o)).map(e=>(0,j.jsx)(`div`,{className:Be.area,style:{left:e.x,top:e.y,width:e.width,height:e.height},onClick:()=>i(e.id),children:(0,j.jsx)(`span`,{className:Be.label,children:e.label})},e.id)),(0,j.jsx)(`button`,{className:Be.closeBtn,onClick:a,children:`閉じる`})]})}var He={list:`_list_jaxq_1`,item:`_item_jaxq_8`,empty:`_empty_jaxq_26`};function Ue({connections:e,onMove:t,onClose:n}){return(0,j.jsx)(I,{title:`移動先を選択`,onClose:n,children:(0,j.jsx)(`div`,{className:He.list,children:e.length===0?(0,j.jsx)(`p`,{className:He.empty,children:`移動できる場所がありません`}):e.map(e=>(0,j.jsx)(`button`,{className:He.item,onClick:()=>t(e.location_id),children:e.label},e.location_id))})})}var We={card:`_card_ryqrj_1`,cardSelected:`_cardSelected_ryqrj_16`,icon:`_icon_ryqrj_21`,iconPlaceholder:`_iconPlaceholder_ryqrj_27`,name:`_name_ryqrj_38`};function Ge({item:e,selected:t,onClick:n}){let{resolveAsset:r}=M(),[i,o]=(0,a.useState)(!1),s=e.icon?r(e.icon):null;return(0,j.jsxs)(`div`,{className:`${We.card} ${t?We.cardSelected:``}`,onClick:n,children:[s&&!i?(0,j.jsx)(`img`,{className:We.icon,src:s,alt:e.name,onError:()=>o(!0)}):(0,j.jsx)(`div`,{className:We.iconPlaceholder,children:`📦`}),(0,j.jsx)(`span`,{className:We.name,children:e.name})]})}var V={grid:`_grid_1aak1_1`,empty:`_empty_1aak1_9`,detail:`_detail_1aak1_18`,detailName:`_detailName_1aak1_24`,detailDesc:`_detailDesc_1aak1_30`,actions:`_actions_1aak1_37`};function Ke({state:e,masterData:t,onUse:n,onClose:r}){let[i,o]=(0,a.useState)(null),s=e.inventory.map(e=>t.items[e]).filter(e=>!!e),c=i?t.items[i]:null;return(0,j.jsxs)(I,{title:`持ち物`,onClose:r,children:[(0,j.jsx)(`div`,{className:V.grid,children:s.length===0?(0,j.jsx)(`p`,{className:V.empty,children:`何も持っていない`}):s.map(e=>(0,j.jsx)(Ge,{item:e,selected:e.id===i,onClick:()=>o(e.id===i?null:e.id)},e.id))}),c&&(0,j.jsxs)(`div`,{className:V.detail,children:[(0,j.jsx)(`div`,{className:V.detailName,children:c.name}),(0,j.jsx)(`div`,{className:V.detailDesc,children:c.description}),(0,j.jsxs)(`div`,{className:V.actions,children:[c.usable&&(0,j.jsx)(F,{label:`使う`,disabled:!D(c.id,e,t),onClick:()=>n(c.id)}),(0,j.jsx)(F,{label:`閉じる`,onClick:r,size:`small`})]})]})]})}var H={body:`_body_bes5q_1`,row:`_row_bes5q_8`,label:`_label_bes5q_14`,slider:`_slider_bes5q_21`,val:`_val_bes5q_27`,footer:`_footer_bes5q_34`};function qe({onClose:e}){let{settings:t,updateSettings:n}=ye();return(0,j.jsx)(I,{title:`設定`,onClose:e,children:(0,j.jsxs)(`div`,{className:H.body,children:[(0,j.jsxs)(`div`,{className:H.row,children:[(0,j.jsx)(`label`,{className:H.label,children:`BGM 音量`}),(0,j.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:t.bgmVolume,className:H.slider,onChange:e=>n({bgmVolume:Number(e.target.value)})}),(0,j.jsx)(`span`,{className:H.val,children:Math.round(t.bgmVolume*100)})]}),(0,j.jsxs)(`div`,{className:H.row,children:[(0,j.jsx)(`label`,{className:H.label,children:`SE 音量`}),(0,j.jsx)(`input`,{type:`range`,min:0,max:1,step:.05,value:t.seVolume,className:H.slider,onChange:e=>n({seVolume:Number(e.target.value)})}),(0,j.jsx)(`span`,{className:H.val,children:Math.round(t.seVolume*100)})]}),(0,j.jsx)(`div`,{className:H.footer,children:(0,j.jsx)(F,{label:`閉じる`,onClick:e,size:`small`})})]})})}var Je={btn:`_btn_c2o6e_1`,menuList:`_menuList_c2o6e_22`};function Ye({onGetSaveData:e,onLoad:t,onTitle:n}){let[r,i]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1);async function u(t){await N().save(t,e())}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`button`,{className:Je.btn,onClick:()=>i(!0),children:`MENU`}),r&&!o&&!c&&(0,j.jsx)(I,{title:`システムメニュー`,onClose:()=>i(!1),children:(0,j.jsxs)(`div`,{className:Je.menuList,children:[(0,j.jsx)(F,{label:`セーブ / ロード`,onClick:()=>s(!0)}),(0,j.jsx)(F,{label:`設定`,onClick:()=>l(!0)}),(0,j.jsx)(F,{label:`タイトルへ戻る`,onClick:()=>{i(!1),n()}}),(0,j.jsx)(F,{label:`閉じる`,onClick:()=>i(!1),size:`small`})]})}),r&&c&&(0,j.jsx)(qe,{onClose:()=>l(!1)}),r&&o&&(0,j.jsx)(Se,{onSave:u,onLoad:e=>{t(e),s(!1),i(!1)},onClose:()=>s(!1)})]})}var U={overlay:`_overlay_3s7kx_1`,frame:`_frame_3s7kx_10`,cgFadeIn:`_cgFadeIn_3s7kx_1`,left:`_left_3s7kx_18`,right:`_right_3s7kx_23`,center:`_center_3s7kx_28`,progress:`_progress_3s7kx_38`,dot:`_dot_3s7kx_47`,dotActive:`_dotActive_3s7kx_54`},Xe=2800;function Ze({frames:e,onComplete:t}){let{resolveAsset:n}=M(),[r,i]=(0,a.useState)(0),o=(0,a.useCallback)(()=>{i(n=>n<e.length-1?n+1:(t(),n))},[e.length,t]);(0,a.useEffect)(()=>{let e=setTimeout(o,Xe);return()=>clearTimeout(e)},[r,o]);let s=e[r],c=n(s.src);return(0,j.jsxs)(`div`,{className:U.overlay,onClick:o,children:[(0,j.jsx)(`img`,{src:c,alt:``,className:`${U.frame} ${U[s.position]}`},r),(0,j.jsx)(`div`,{className:U.progress,children:e.map((e,t)=>(0,j.jsx)(`div`,{className:`${U.dot} ${t===r?U.dotActive:``}`},t))})]})}var W={root:`_root_1kifg_1`,leftPanel:`_leftPanel_1kifg_11`,rightPanel:`_rightPanel_1kifg_12`,divider:`_divider_1kifg_19`,scrollWrap:`_scrollWrap_1kifg_30`,scrollUp:`_scrollUp_1kifg_1`,creditMainTitle:`_creditMainTitle_1kifg_46`,creditSection:`_creditSection_1kifg_54`,creditName:`_creditName_1kifg_61`,creditSpacer:`_creditSpacer_1kifg_68`,cgPanel:`_cgPanel_1kifg_73`,cgPanelImg:`_cgPanelImg_1kifg_78`,cgFadeIn:`_cgFadeIn_1kifg_1`,finRoot:`_finRoot_1kifg_94`,finImg:`_finImg_1kifg_104`,finText:`_finText_1kifg_114`,finFadeIn:`_finFadeIn_1kifg_1`},Qe=12e3,$e=12e3,et=5e3,tt=[{kind:`mainTitle`,text:`赤羽の一日`},{kind:`spacer`},{kind:`section`,text:`STORY & SCRIPT`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`CHARACTER DESIGN`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`VOICE ACTING`},{kind:`name`,text:`VOICEVOX`}],nt=[{kind:`section`,text:`MUSIC`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`PROGRAMMING`},{kind:`name`,text:`Anonymous`},{kind:`spacer`},{kind:`section`,text:`SPECIAL THANKS`},{kind:`name`,text:`CoderDojo 赤羽`},{kind:`spacer`},{kind:`name`,text:`Thank you for playing.`}];function rt({items:e,durationSec:t}){return(0,j.jsx)(`div`,{className:W.scrollWrap,style:{animationDuration:`${t}s`},children:e.map((e,t)=>e.kind===`mainTitle`?(0,j.jsx)(`div`,{className:W.creditMainTitle,children:e.text},t):e.kind===`section`?(0,j.jsx)(`div`,{className:W.creditSection,children:e.text},t):e.kind===`name`?(0,j.jsx)(`div`,{className:W.creditName,children:e.text},t):(0,j.jsx)(`div`,{className:W.creditSpacer},t))})}function it({frames:e}){let{resolveAsset:t}=M();return(0,j.jsx)(`div`,{className:W.cgPanel,children:e.map((e,n)=>(0,j.jsx)(`img`,{className:W.cgPanelImg,src:t(e.src),alt:``,style:{animationDelay:`${n*3}s`}},e.src))})}function at({frames:e,onTitle:t}){let{resolveAsset:n}=M(),[r,i]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=setTimeout(()=>i(2),Qe),n=setTimeout(()=>i(3),Qe+$e),r=setTimeout(t,Qe+$e+et);return()=>{clearTimeout(e),clearTimeout(n),clearTimeout(r)}},[]);let o=e.slice(0,3),s=e.slice(3,5),c=e[e.length-1]??null;return r===3?(0,j.jsxs)(`div`,{className:W.finRoot,children:[c&&(0,j.jsx)(`img`,{className:W.finImg,src:n(c.src),alt:``}),(0,j.jsx)(`div`,{className:W.finText,children:`Fin`})]}):(0,j.jsxs)(`div`,{className:W.root,children:[(0,j.jsx)(`div`,{className:W.leftPanel,children:r===1?(0,j.jsx)(rt,{items:tt,durationSec:Qe/1e3}):(0,j.jsx)(it,{frames:s})}),(0,j.jsx)(`div`,{className:W.divider}),(0,j.jsx)(`div`,{className:W.rightPanel,children:r===1?(0,j.jsx)(it,{frames:o}):(0,j.jsx)(rt,{items:nt,durationSec:$e/1e3})})]})}var ot={root:`_root_1g6a7_1`,cgOverlay:`_cgOverlay_1g6a7_11`,cgFadeIn:`_cgFadeIn_1g6a7_1`};function st({onLoadGame:e,onTitle:t}){let{state:n,masterData:r,advanceMessage:i,selectChoice:o,executeCommand:s,selectTalkTarget:c,completeCgSequence:l,moveToLocation:u,clickArea:d,useItem:f,closeOverlay:p,goToTitle:m,toSaveData:h}=pe(),{settings:g}=ye(),{resolveAsset:_}=M(),v=r.scenes[n.currentSceneId],y=r.locations[n.currentLocationId],b=v?.messages[n.currentMessageIndex],x=b?.voice_character_id,S=x?r.characters[x]??null:null,C=oe(v,y,r),w=ce(n.currentLocationId,n,r),T=v?.branches?.choices??[],[E,D]=(0,a.useState)(!1),O=b?.voice_character_id??null,k=E&&n.phase===`message`,A=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=v?.bgm;!e||e===A.current||(A.current=e,P.playBgm(_(e),!0,g.bgmVolume))},[v?.bgm]),(0,a.useEffect)(()=>{n.phase===`title`&&(P.stopBgm(),A.current=null)},[n.phase]),(0,a.useEffect)(()=>{let e=e=>{e.key!==`Enter`&&e.key!==` `||n.phase===`message`&&(e.preventDefault(),i())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n.phase,i]),(0,j.jsxs)(`div`,{className:ot.root,children:[(0,j.jsx)(Te,{backgroundPath:v?.background,locationName:y?.name}),n.phase!==`examine`&&n.currentCharacters.map(e=>{let t=r.characters[e.character_id];return t?(0,j.jsx)(Ee,{display:e,character:t,isSpeaking:k&&e.character_id===O},e.character_id):null}),n.phase===`message`&&v?.overlay_image&&(0,j.jsx)(`div`,{className:ot.cgOverlay,style:{backgroundImage:`url(${_(v.overlay_image)})`}}),n.phase===`examine`&&(0,j.jsx)(Ve,{areas:v?.clickable_areas??[],flags:n.flags,inventory:n.inventory,locationId:n.currentLocationId,onClick:d,onClose:p}),n.phase===`message`&&b&&(0,j.jsx)(Fe,{message:b,speaker:S,textSpeed:g.textSpeed,onAdvance:i,onSpeakingChange:D}),n.phase===`choice`&&(0,j.jsx)(Le,{choices:T,flags:n.flags,inventory:n.inventory,locationId:n.currentLocationId,onSelect:o}),n.phase===`talk_select`&&(0,j.jsx)(Le,{choices:[...n.talkCandidates.map(e=>({label:r.characters[e.characterId]?.name??e.characterId,next_scene:e.sceneId,condition:null})),{label:`やめる`,next_scene:``,condition:null}],flags:n.flags,inventory:n.inventory,locationId:n.currentLocationId,onSelect:e=>e===n.talkCandidates.length?c(-1):c(e)}),n.phase===`command`&&(0,j.jsx)(ze,{commands:C,onSelect:s}),n.phase===`map`&&(0,j.jsx)(Ue,{connections:w,onMove:u,onClose:p}),n.phase===`inventory`&&(0,j.jsx)(Ke,{state:n,masterData:r,onUse:f,onClose:p}),n.phase===`cg_sequence`&&v?.cg_sequence&&(0,j.jsx)(Ze,{frames:v.cg_sequence,onComplete:l}),n.phase!==`ending`&&(0,j.jsx)(Ye,{onGetSaveData:h,onLoad:e,onTitle:m}),n.phase===`ending`&&(0,j.jsx)(at,{frames:v?.cg_sequence??[],onTitle:t??m})]})}var ct=[`一`,`二`,`三`,`四`,`五`,`六`,`七`,`八`,`九`,`十`],lt=4500;function ut({chapter:e,chapterIndex:t,onDismiss:n}){let r=ct[t]??String(t+1);return(0,a.useEffect)(()=>{let e=setTimeout(n,lt);return()=>clearTimeout(e)},[n]),(0,a.useEffect)(()=>{let e=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]),(0,j.jsxs)(`div`,{onClick:n,style:{position:`absolute`,inset:0,background:`#06060a`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:200,cursor:`pointer`,userSelect:`none`,animation:`chapterFadeIn 0.9s ease-out both`},children:[(0,j.jsx)(`style`,{children:`
        @keyframes chapterFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}),(0,j.jsx)(`div`,{style:{width:160,height:1,background:`linear-gradient(to right, transparent, rgba(204,170,102,0.5), transparent)`,marginBottom:28}}),(0,j.jsxs)(`div`,{style:{fontFamily:`serif`,fontSize:14,letterSpacing:`0.5em`,color:`rgba(204,170,102,0.65)`,marginBottom:20},children:[`第`,r,`章`]}),(0,j.jsx)(`div`,{style:{fontFamily:`serif`,fontSize:34,letterSpacing:`0.18em`,color:`#ede0c0`,textShadow:`0 0 40px rgba(204,170,102,0.25)`,marginBottom:e.subtitle?14:0},children:e.chapterTitle}),e.subtitle&&(0,j.jsx)(`div`,{style:{fontFamily:`serif`,fontSize:13,letterSpacing:`0.25em`,color:`rgba(204,170,102,0.55)`,marginTop:4},children:e.subtitle}),(0,j.jsx)(`div`,{style:{width:160,height:1,background:`linear-gradient(to right, transparent, rgba(204,170,102,0.5), transparent)`,marginTop:28}}),(0,j.jsx)(`div`,{style:{position:`absolute`,bottom:22,fontSize:11,letterSpacing:`0.08em`,color:`rgba(204,170,102,0.28)`},children:`クリック / [Enter] で続ける`})]})}var dt=`__novel_debug_start__`;function ft(){let e=()=>{let e=Math.min(window.innerWidth/800,window.innerHeight/600);return document.fullscreenElement?e:Math.min(1,e)},[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),document.addEventListener(`fullscreenchange`,t),()=>{window.removeEventListener(`resize`,t),document.removeEventListener(`fullscreenchange`,t)}},[]),t}function pt(){let[e,t]=(0,a.useState)(!!document.fullscreenElement);return(0,a.useEffect)(()=>{let e=()=>t(!!document.fullscreenElement);return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]),{isFullscreen:e,toggle:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}}}function mt({onEngineTransition:e,autoStart:t,chapters:n,onNewGame:r,onStartChapter:i,onLoadGame:o,chapterId:s}){let{state:c,startNewGame:l,startDebugGame:u,goToTitle:d,debugSetFlag:f,debugSetInventory:p,debugJumpToScene:m}=pe(),{loadSettings:h}=ye(),g=ft(),{isFullscreen:_,toggle:v}=pt(),y=(0,a.useRef)(e);y.current=e;let b=(0,a.useRef)(!1),[x,S]=(0,a.useState)(null);function C(e,t){if(!e.chapterTitle){t();return}let r=(n??[]).findIndex(t=>t.id===e.id);S({chapter:e,index:Math.max(0,r),action:t})}function w(){if(!x)return;let e=x.action;S(null),e()}function T(){let e=(n??[])[0];e?C(e,r):r()}let E=(0,a.useCallback)(e=>{C(e,()=>i(e))},[n,i]),D=(0,a.useCallback)(()=>{let e=n??[],t=e[e.findIndex(e=>e.id===s)+1];t?C(t,()=>i(t)):d()},[n,s,i,d]);return(0,a.useEffect)(()=>{if(h(),t){l();return}let e=localStorage.getItem(dt);if(e){b.current=!0,localStorage.removeItem(dt);try{u(JSON.parse(e))}catch{}}},[]),(0,a.useEffect)(()=>{b.current&&localStorage.setItem(`__novel_debug_state__`,JSON.stringify({flags:c.flags,inventory:c.inventory,currentSceneId:c.currentSceneId,currentLocationId:c.currentLocationId,phase:c.phase}))},[c.flags,c.inventory,c.currentSceneId,c.currentLocationId,c.phase]),(0,a.useEffect)(()=>{let e=e=>{if(!(!b.current||e.key!==`__novel_debug_cmd__`||!e.newValue))try{let t=JSON.parse(e.newValue);t.type===`setFlag`?f(t.flagId,t.value):t.type===`setInventory`?p(t.inventory):t.type===`jumpToScene`&&m(t.sceneId,t.locationId)}catch{}};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[f,p,m]),(0,a.useEffect)(()=>{c.phase===`engine_transition`&&c.pendingEngineTransition&&y.current?.(c.flags,c.inventory,c.pendingEngineTransition,s)},[c.phase,c.pendingEngineTransition,s]),(0,j.jsxs)(`div`,{className:`app-wrapper`,children:[(0,j.jsxs)(`div`,{className:`game-container`,style:{transform:`scale(${g})`},children:[x&&(0,j.jsx)(ut,{chapter:x.chapter,chapterIndex:x.index,onDismiss:w}),c.phase===`title`?(0,j.jsx)(Ce,{onNewGame:T,onLoad:o,chapters:n,onStartChapter:E}):(0,j.jsx)(st,{onLoadGame:o,onTitle:D})]}),(0,j.jsx)(`button`,{className:`fullscreen-btn`,onClick:v,title:_?`全画面解除`:`全画面表示`,children:_?`⊠`:`⛶`})]})}function ht({masterData:e,assetsBaseUrl:t,config:n,initialFlags:r,initialInventory:i,autoStart:o,onEngineTransition:s}){let c=n.chapters??[],l=c.find(e=>e.id===(n.chapterId??`chapter1`))??c[0]??{id:n.chapterId??`chapter1`,title:`本編`,masterData:e,initialSceneId:n.initialSceneId,initialLocationId:n.initialLocationId,initialFlags:r};function u(e,t,n){return de(e.masterData,e.initialSceneId,e.initialLocationId,{chapterId:e.id,initialFlags:t,initialInventory:n})}let[d,f]=(0,a.useState)(()=>({key:0,chapter:l,store:u({...l,initialSceneId:n.initialSceneId},r,i)}));function p(e){let t=u(e,{...e.unlockFlag?{[e.unlockFlag]:!0}:{},...e.initialFlags??{}},[]);t.getState().startNewGame(),f(n=>({key:n.key+1,chapter:e,store:t}))}function m(){p(l)}function h(e){let t=e.chapterId??`chapter1`,n=c.find(e=>e.id===t)??l,r=u(n,e.flags,e.inventory);r.getState().loadGame({...e,chapterId:n.id}),f(e=>({key:e.key+1,chapter:n,store:r}))}let g=(0,a.useCallback)((e,t,n,r)=>{s?.(e,t,n,r)},[s]);return(0,j.jsx)(he,{assetsBaseUrl:t,children:(0,j.jsx)(fe.Provider,{value:d.store,children:(0,j.jsx)(mt,{onEngineTransition:g,autoStart:o,chapters:c,onNewGame:m,onStartChapter:p,onLoadGame:h,chapterId:d.chapter.id},d.key)})})}function gt(e){return Object.fromEntries(e.map(e=>[e.id,e]))}function _t(e,t={}){let n=[];for(let r of e){let{child_scenes:e,...i}=r,a={...t,...i};n.push(a),e?.length&&n.push(..._t(e,{location_id:a.location_id,background:a.background,bgm:a.bgm}))}return n}function vt(e){let t=r.load(e.scenes),n=r.load(e.flags),i=r.load(e.items),a=r.load(e.locations),o=r.load(e.characters),s=r.load(e.commands);return{scenes:gt(_t(t.scenes)),flags:n.flags,items:gt(i.items),locations:gt(a.locations),characters:gt(o.characters),commands:gt(s.commands)}}var yt={chapter1:s,chapter2:c,chapter3:l},bt={};function xt(e=`chapter1`){return bt[e]??=vt({scenes:yt[e],flags:u,items:d,locations:f,characters:p,commands:m}),bt[e]}function St({engines:e,initial:t,initialContext:n}){let[r,i]=(0,a.useState)(n),[o,s]=(0,a.useState)(t);function c(e,t){i(e),t?s({engineId:t.engineId,config:t.config,returnEngineId:t.returnEngineId,returnConfig:t.returnConfig}):o.returnEngineId&&s({engineId:o.returnEngineId,config:o.returnConfig})}let l=e[o.engineId];if(!l)return(0,j.jsxs)(`div`,{style:{padding:24,color:`red`},children:[`Engine not found: `,o.engineId]});let u=l.component;return(0,j.jsx)(u,{context:r,config:o.config,onExit:c})}function Ct({context:e,config:t,onExit:n}){let r=(0,a.useCallback)((r,i,a,o)=>{let s={flags:r,inventory:i,playerStats:e.playerStats};if(a.id===`__return__`){n(s);return}let c=Object.values(t.masterData.items).map(e=>({id:e.id,name:e.name,usable:e.usable})),l={masterData:t.masterData,assetsBaseUrl:t.assetsBaseUrl,chapterId:o,initialLocationId:t.initialLocationId,chapters:t.chapters,exitSceneId:a.return_scene,gameoverSceneId:a.gameover_scene,gameoverBossSceneId:a.gameover_boss_scene,gameoverLandingSceneId:a.gameover_landing_scene};n(s,{engineId:a.id,config:{assetsBaseUrl:t.assetsBaseUrl,items:c,...a.config??{},_novelReturn:l},returnEngineId:a.return_scene?`novel`:void 0,returnConfig:a.return_scene?{...t,chapterId:o,initialSceneId:a.return_scene,autoStart:!0}:void 0})},[e.playerStats,t,n]);return(0,j.jsx)(ht,{masterData:t.masterData,assetsBaseUrl:t.assetsBaseUrl,config:{initialSceneId:t.initialSceneId,initialLocationId:t.initialLocationId,chapterId:t.chapterId,chapters:t.chapters},initialFlags:e.flags,initialInventory:e.inventory,autoStart:t.autoStart,onEngineTransition:r})}var wt={component:Ct},Tt={dungeon_01:[`###########`,`#S........#`,`#.#######.#`,`###.......#`,`###.#######`,`###.....###`,`#######.###`,`#######.###`,`#######.###`,`#######...#`,`#########X#`,`###########`],dungeon_02:[`###############`,`#S..........###`,`#.#########.###`,`###.........###`,`###.#######.###`,`###E#.........#`,`###.#.#########`,`###.#.........#`,`###.###########`,`###..........B#`,`#############X#`,`###############`]};function Et(e){return{...e,maxHp:e.hp}}var Dt={ghost:{id:`ghost`,name:`ゴースト`,hp:10,atk:4,def:1},bat:{id:`bat`,name:`コウモリ`,hp:6,atk:3,def:0},wraith:{id:`wraith`,name:`レイス`,hp:14,atk:5,def:2}},Ot={dungeon_02:[Dt.ghost,Dt.bat,Dt.wraith]},kt={dungeon_02:{id:`maze_boss`,name:`迷宮の主`,hp:22,atk:7,def:2}};function At(e){let t=kt[e];return t?Et(t):null}function jt(e){let t=Ot[e];return!t||t.length===0?null:Et(t[Math.floor(Math.random()*t.length)])}function Mt(e){let t=jt(e.mapId);if(!t)return e;let n={enemy:t,phase:`select`,log:[`${t.name} が現れた！`],cursorIndex:0,guarding:!1};return{...e,battle:n}}function Nt(e){let t=At(e.mapId);if(!t)return e;let n={enemy:t,phase:`select`,log:[`${t.name} が立ちはだかった！　逃げられない！`],cursorIndex:0,guarding:!1};return{...e,battle:n}}function Pt(e){let{battle:t}=e;if(!t)return e;let n=Math.max(1,t.enemy.atk-(t.guarding?e.playerDef*2:e.playerDef)),r=e.playerHp-n,i=[...t.log,`${t.enemy.name} の攻撃！ ケン に ${n} ダメージ！`];return r<=0?{...e,playerHp:0,battle:{...t,phase:`lose`,log:[...i,`ケン は倒れた……`],guarding:!1}}:{...e,playerHp:r,battle:{...t,phase:`log`,log:i,guarding:!1}}}function Ft(e){let{battle:t}=e;if(!t)return e;if(t.cursorIndex===2){if(e.pendingBossTilePos){let n=[...t.log,`逃げることはできない！`];return Pt({...e,battle:{...t,log:n,guarding:!1}})}if(Math.random()<.5)return{...e,battle:null};let n=[...t.log,`逃げられなかった！`];return Pt({...e,battle:{...t,log:n,guarding:!1}})}if(t.cursorIndex===1){let n=[...t.log,`ケン は身を守った！`];return Pt({...e,battle:{...t,log:n,guarding:!0}})}let n=Math.max(1,e.playerAtk-t.enemy.def),r=t.enemy.hp-n,i=[...t.log,`ケン の攻撃！ ${t.enemy.name} に ${n} ダメージ！`];if(r<=0){let n={...t.enemy,hp:0};return{...e,battle:{...t,enemy:n,phase:`win`,log:[...i,`${t.enemy.name} を倒した！`],guarding:!1}}}let a={...t.enemy,hp:r};return Pt({...e,battle:{...t,enemy:a,log:i,guarding:!1}})}function It(e,t){let{battle:n}=e;if(!n)return e;let r=t===`Enter`||t===` `,i=t===`ArrowUp`||t===`w`||t===`W`,a=t===`ArrowDown`||t===`s`||t===`S`;if(n.phase===`select`)return i?{...e,battle:{...n,cursorIndex:(n.cursorIndex+2)%3}}:a?{...e,battle:{...n,cursorIndex:(n.cursorIndex+1)%3}}:r?Ft(e):e;if(!r)return e;if(n.phase===`log`)return{...e,battle:{...n,phase:`select`,log:[]}};if(n.phase===`win`){if(e.pendingBossTilePos){let t=new Set(e.triggeredEvents);return t.add(e.pendingBossTilePos),{...e,battle:null,pendingBossTilePos:null,triggeredEvents:t}}return{...e,battle:null}}return n.phase===`lose`?{...e,pendingDeath:!0}:e}var Lt=.2,Rt={N:{fwd:{x:0,y:-1},left:{x:-1,y:0},right:{x:1,y:0},back:{x:0,y:1}},E:{fwd:{x:1,y:0},left:{x:0,y:-1},right:{x:0,y:1},back:{x:-1,y:0}},S:{fwd:{x:0,y:1},left:{x:1,y:0},right:{x:-1,y:0},back:{x:0,y:-1}},W:{fwd:{x:-1,y:0},left:{x:0,y:1},right:{x:0,y:-1},back:{x:1,y:0}}},zt={N:`W`,W:`S`,S:`E`,E:`N`},Bt={N:`E`,E:`S`,S:`W`,W:`N`};function Vt(e,t,n){return n<0||n>=e.length||t<0||t>=(e[n]?.length??0)?`#`:e[n][t]??`#`}function G(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Ht(e,t){return{x:e.x*t,y:e.y*t}}function Ut(e){for(let t=0;t<e.length;t++){let n=e[t].indexOf(`S`);if(n>=0)return{x:n,y:t}}return{x:1,y:1}}function Wt(e,t,n,r){let i=Tt[e]??Tt.dungeon_01,a=r?.initialPos??Ut(i),o=r?.initialDir??`N`,s=t?.maxHp??20,c=Math.min(s,Math.max(1,t?.hp??s)),l=r?.initialVisited?new Set(r.initialVisited):new Set([`${a.x},${a.y}`]),u=r?.initialTriggeredEvents?new Set(r.initialTriggeredEvents):new Set;return{pos:a,dir:o,map:i,mapId:e,visited:l,atExit:!1,steps:0,playerHp:c,playerMaxHp:s,playerAtk:t?.atk??5,playerDef:t?.def??2,battle:null,inventory:n??[],pendingEvent:null,triggeredEvents:u,pendingDeath:!1,pendingBossTilePos:null}}function Gt(e,t,n,r){let i=e.inventory.indexOf(t);if(i===-1||r?.attackEnemy!==void 0&&!e.battle)return e;let a=[...e.inventory.slice(0,i),...e.inventory.slice(i+1)],o=[`${n}を使った！`],s=e.playerHp;if(r?.healHp===`full`?(s=e.playerMaxHp,o.push(`HPが全回復した！`)):typeof r?.healHp==`number`&&(s=Math.min(e.playerMaxHp,e.playerHp+r.healHp),o.push(`HPが ${r.healHp} 回復した！`)),e.battle&&r?.attackEnemy!==void 0){let t=e.battle.enemy,n=Math.min(r.attackEnemy,t.hp),i=Math.max(0,t.hp-r.attackEnemy);o.push(`${t.name} に ${n} の大ダメージ！`);let c={...t,hp:i};return i<=0?(o.push(`${t.name} を倒した！`),{...e,inventory:a,playerHp:s,battle:{...e.battle,enemy:c,phase:`win`,log:[...e.battle.log,...o]}}):{...e,inventory:a,playerHp:s,battle:{...e.battle,enemy:c,log:[...e.battle.log,...o]}}}if(e.battle){let t=[...e.battle.log,...o];return{...e,inventory:a,playerHp:s,battle:{...e.battle,log:t}}}return{...e,inventory:a,playerHp:s}}var Kt=new Set([`.`,`S`,`X`,`#`]);function qt(e,t){let n=G(e.pos,t),r=Vt(e.map,n.x,n.y);if(r===`#`)return e;let i=`${n.x},${n.y}`,a=new Set(e.visited);a.add(i);let o=r===`X`,s={...e,pos:n,visited:a,atExit:o,steps:e.steps+1};return!o&&r===`B`&&!e.triggeredEvents.has(i)?Nt({...s,pendingBossTilePos:i}):!o&&!Kt.has(r)&&r!==`B`&&!e.triggeredEvents.has(i)?{...s,pendingEvent:r}:!o&&r!==`B`&&Ot[e.mapId]&&Math.random()<Lt?Mt(s):s}function Jt(e){return qt(e,Rt[e.dir].fwd)}function Yt(e){return qt(e,Rt[e.dir].back)}function Xt(e){return{...e,dir:zt[e.dir]}}function Zt(e){return{...e,dir:Bt[e.dir]}}function Qt(e,t){if(e.pendingDeath)return e;if(e.battle)return It(e,t);if(e.pendingEvent!==null||e.atExit)return e;switch(t){case`ArrowUp`:case`w`:case`W`:return Jt(e);case`ArrowDown`:case`s`:case`S`:return Yt(e);case`ArrowLeft`:case`a`:case`A`:return Xt(e);case`ArrowRight`:case`d`:case`D`:return Zt(e);default:return e}}function $t(e,t){let{fwd:n,left:r,right:i}=Rt[e.dir],a=[!1],o=[!1],s=[!1];for(let c=1;c<=t;c++){let t=G(e.pos,Ht(n,c));a.push(Vt(e.map,t.x,t.y)===`#`);let l=G(e.pos,Ht(n,c-1));o.push(Vt(e.map,G(l,r).x,G(l,r).y)===`#`),s.push(Vt(e.map,G(l,i).x,G(l,i).y)===`#`)}return{front:a,left:o,right:s}}var en=480,K=320,tn=4,nn=[[0,0,480,320],[60,40,420,280],[120,80,360,240],[172,110,308,210],[207,128,273,192]],rn=[1,1,.78,.56,.38];function an(e,t,n,r){return`rgb(${Math.round(e*r)},${Math.round(t*r)},${Math.round(n*r)})`}function on(e){let t=parseInt(e.replace(`#`,``),16);return[t>>16&255,t>>8&255,t&255]}function sn(e,t,n){let{front:r,left:i,right:a}=$t(t,tn),[o,s,c]=on(n.wallFront),[l,u,d]=on(n.wallSide),f=e.createLinearGradient(0,0,0,K/2);f.addColorStop(0,n.ceilTop),f.addColorStop(1,n.ceilBottom),e.fillStyle=f,e.fillRect(0,0,en,K/2);let p=e.createLinearGradient(0,K/2,0,K);p.addColorStop(0,n.floorTop),p.addColorStop(1,n.floorBottom),e.fillStyle=p,e.fillRect(0,K/2,en,K/2);let m=tn;for(let e=1;e<=tn;e++)if(r[e]){m=e;break}for(let t=m;t>=1;t--){let n=rn[t]??.3,[f,p,m,h]=nn[t],[g,_,v,y]=nn[t-1];if(r[t]){e.fillStyle=an(o,s,c,n),e.fillRect(f,p,m-f,h-p),e.strokeStyle=`rgba(0,0,0,0.45)`,e.lineWidth=1;let t=Math.max(8,Math.floor((h-p)/3));for(let n=p+t;n<h;n+=t)e.beginPath(),e.moveTo(f,n),e.lineTo(m,n),e.stroke();let r=Math.floor((h-p)/t);for(let n=0;n<r;n++){let r=n%2*Math.floor((m-f)/4),i=Math.max(6,Math.floor((m-f)/3));for(let a=f+r;a<m;a+=i)e.beginPath(),e.moveTo(a,p+n*t),e.lineTo(a,p+(n+1)*t),e.stroke()}}i[t]&&(e.fillStyle=an(l,u,d,n),e.beginPath(),e.moveTo(g,_),e.lineTo(f,p),e.lineTo(f,h),e.lineTo(g,y),e.closePath(),e.fill(),e.strokeStyle=an(l+20,u+15,d+5,n),e.lineWidth=1,e.beginPath(),e.moveTo(f,p),e.lineTo(f,h),e.stroke()),a[t]&&(e.fillStyle=an(l,u,d,n),e.beginPath(),e.moveTo(m,p),e.lineTo(v,_),e.lineTo(v,y),e.lineTo(m,h),e.closePath(),e.fill(),e.strokeStyle=an(l+20,u+15,d+5,n),e.lineWidth=1,e.beginPath(),e.moveTo(m,p),e.lineTo(m,h),e.stroke())}if(!r[m]&&m===tn){let[t,r,i,a]=nn[tn];e.fillStyle=n.ceilTop,e.fillRect(t,r,i-t,a-r)}}var cn={ceilTop:`#020213`,ceilBottom:`#0d0d25`,floorTop:`#130a02`,floorBottom:`#060300`,wallFront:`#9a7420`,wallSide:`#5a420a`,uiBg:`#080504`,uiAccent:`#ccaa66`,uiBorder:`#443322`};function ln({state:e,theme:t}){let n=(0,a.useRef)(null),r=t??cn;return(0,a.useEffect)(()=>{let t=n.current?.getContext(`2d`);t&&sn(t,e,r)},[e,r]),(0,j.jsx)(`canvas`,{ref:n,width:en,height:K,style:{display:`block`,imageRendering:`pixelated`}})}var q=10,J=3,un={N:[[0,-5],[-4,4],[4,4]],E:[[5,0],[-4,-4],[-4,4]],S:[[0,5],[-4,-4],[4,-4]],W:[[-5,0],[4,-4],[4,4]]};function dn({state:e}){let t=(0,a.useRef)(null),n=e.map[0]?.length??0,r=e.map.length,i=n*q+J*2,o=r*q+J*2;return(0,a.useEffect)(()=>{let a=t.current?.getContext(`2d`);if(!a)return;a.clearRect(0,0,i,o),a.fillStyle=`#0a0a0a`,a.fillRect(0,0,i,o);for(let t=0;t<r;t++)for(let r=0;r<n;r++){let n=e.map[t]?.[r]??`#`,i=`${r},${t}`,o=e.visited.has(i),s=J+r*q,c=J+t*q;n===`#`?(a.fillStyle=o?`#554433`:`#2a1a0a`,a.fillRect(s,c,q,q)):(a.fillStyle=o?`#443322`:`#110a04`,a.fillRect(s,c,q,q),n===`X`&&(a.fillStyle=`#33bb55`,a.fillRect(s+2,c+2,q-4,q-4)))}let s=J+e.pos.x*q+q/2,c=J+e.pos.y*q+q/2,l=un[e.dir]??un.N;a.fillStyle=`#ffdd00`,a.beginPath(),a.moveTo(s+l[0][0],c+l[0][1]),a.lineTo(s+l[1][0],c+l[1][1]),a.lineTo(s+l[2][0],c+l[2][1]),a.closePath(),a.fill()},[e,i,o,r,n]),(0,j.jsx)(`canvas`,{ref:t,width:i,height:o,style:{display:`block`,imageRendering:`pixelated`}})}var fn=[`攻撃`,`防御`,`逃げる`];function pn({hp:e,maxHp:t,color:n}){return(0,j.jsx)(`div`,{style:{height:8,background:`#2a2020`,borderRadius:4,overflow:`hidden`},children:(0,j.jsx)(`div`,{style:{width:`${Math.max(0,Math.min(1,t>0?e/t:0))*100}%`,height:`100%`,background:n,transition:`width 0.2s`,borderRadius:4}})})}function mn({label:e,active:t,font:n,theme:r,onHover:i,onClick:o}){let[s,c]=(0,a.useState)(!1),l=t||s;return(0,j.jsx)(`div`,{onMouseEnter:()=>{c(!0),i()},onMouseLeave:()=>c(!1),onClick:o,style:{flex:1,fontSize:13,padding:`8px 0`,background:l?r.uiBorder:`#1a1008`,color:r.uiAccent,border:`1px solid ${l?r.uiAccent:r.uiBorder}`,borderRadius:3,cursor:`pointer`,userSelect:`none`,textAlign:`center`,fontFamily:n,transition:`background 0.1s, border-color 0.1s`},children:e})}function hn({state:e,theme:t,onSelectCommand:n,onCommand:r,onAdvance:i,font:a}){let{battle:o}=e;return o?(0,j.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:8,flexShrink:0,fontFamily:a},children:[(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:11,marginBottom:4,color:t.uiAccent},children:[(0,j.jsx)(`span`,{children:o.enemy.name}),(0,j.jsxs)(`span`,{style:{opacity:.65},children:[`HP `,o.enemy.hp,`/`,o.enemy.maxHp]})]}),(0,j.jsx)(pn,{hp:o.enemy.hp,maxHp:o.enemy.maxHp,color:`#e05050`})]}),o.phase===`select`?(0,j.jsx)(`div`,{style:{display:`flex`,gap:6},children:fn.map((e,i)=>(0,j.jsx)(mn,{label:e,active:o.cursorIndex===i,font:a,theme:t,onHover:()=>n?.(i),onClick:()=>{n?.(i),r?.(i)}},e))}):(0,j.jsx)(`div`,{onClick:()=>i?.(),style:{fontSize:12,color:t.uiAccent,opacity:.8,cursor:`pointer`,userSelect:`none`},children:o.phase===`win`||o.phase===`lose`?`▶ クリック / [Enter] で続ける`:`▶ クリック / [Enter] でログを閉じる`}),(0,j.jsx)(`div`,{onClick:o.phase===`select`?void 0:()=>i?.(),style:{display:`flex`,flexDirection:`column`,gap:2,cursor:o.phase===`select`?`default`:`pointer`,borderTop:`1px solid ${t.uiBorder}`,paddingTop:4},children:o.log.slice(-3).map((e,t,n)=>(0,j.jsx)(`div`,{style:{fontSize:12,opacity:t===n.length-1?1:.5},children:e},t))})]}):null}function gn({enemy:e,assetsBaseUrl:t}){let n=.4+(e.maxHp>0?e.hp/e.maxHp:1)*.6,r=`${t}/enemies/${e.id}.png`;return(0,j.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`none`},children:[(0,j.jsx)(`div`,{style:{position:`absolute`,width:250,height:220,borderRadius:`50%`,background:`radial-gradient(circle, rgba(0,0,0,0.70) 0%, transparent 68%)`}}),(0,j.jsx)(`img`,{src:r,alt:e.name,style:{position:`relative`,maxHeight:180,maxWidth:220,objectFit:`contain`,opacity:n,transition:`opacity 0.5s`,imageRendering:`pixelated`},onError:e=>{e.target.style.display=`none`}})]})}function _n({name:e,usable:t,count:n,theme:r,font:i,onUse:o}){let[s,c]=(0,a.useState)(!1);return(0,j.jsxs)(`div`,{onClick:t?o:void 0,onMouseEnter:()=>t&&c(!0),onMouseLeave:()=>c(!1),style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,fontSize:12,padding:`5px 8px`,borderRadius:3,cursor:t?`pointer`:`default`,background:s?r.uiBorder:`transparent`,border:`1px solid ${t?s?r.uiAccent:r.uiBorder:`transparent`}`,color:t?r.uiAccent:r.uiBorder,opacity:t?1:.55,fontFamily:i,userSelect:`none`,transition:`background 0.12s`},children:[(0,j.jsx)(`span`,{children:e}),(0,j.jsxs)(`span`,{style:{fontSize:10,opacity:.6},children:[t?`使う`:`　`,n>1?` ×${n}`:``]})]})}function vn({inventory:e,itemDefs:t,theme:n,onUse:r,notification:i,font:a}){let o=new Map(t.map(e=>[e.id,e])),s=new Map;for(let t of e)s.set(t,(s.get(t)??0)+1);let c=[...s.keys()];return(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,j.jsx)(`div`,{style:{borderTop:`1px solid ${n.uiBorder}`,paddingTop:8,fontSize:10,color:n.uiBorder,letterSpacing:`0.08em`,fontFamily:a},children:`アイテム`}),i&&(0,j.jsx)(`div`,{style:{fontSize:11,color:n.uiAccent,padding:`3px 6px`,background:`${n.uiBorder}55`,borderRadius:3,fontFamily:a},children:i}),c.length===0?(0,j.jsx)(`div`,{style:{fontSize:11,color:n.uiBorder,opacity:.4,padding:`2px 4px`,fontFamily:a},children:`持ち物なし`}):(0,j.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:c.map(e=>{let t=o.get(e);return(0,j.jsx)(_n,{name:t?.name??e,usable:t?.usable??!1,count:s.get(e)??1,theme:n,font:a,onUse:()=>r(e,t?.name??e)},e)})})]})}var yn={ceilTop:`#020213`,ceilBottom:`#0d0d25`,floorTop:`#130a02`,floorBottom:`#060300`,wallFront:`#9a7420`,wallSide:`#5a420a`,uiBg:`#080504`,uiAccent:`#ccaa66`,uiBorder:`#443322`};function bn(e){return e?{...yn,...e}:yn}var Y=`'Hiragino Mincho ProN', 'Yu Mincho', 'MS Mincho', serif`,xn={N:`北`,E:`東`,S:`南`,W:`西`};function Sn(){let e=()=>Math.min(1,Math.min(window.innerWidth/800,window.innerHeight/600)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function Cn({hp:e,maxHp:t,theme:n}){let r=Math.max(0,Math.min(1,t>0?e/t:0)),i=r>.5?`#50c050`:r>.25?`#c0a020`:`#e03030`;return(0,j.jsxs)(`div`,{children:[(0,j.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:11,marginBottom:4,color:n.uiAccent},children:[(0,j.jsx)(`span`,{style:{letterSpacing:`0.06em`},children:`HP`}),(0,j.jsxs)(`span`,{style:{opacity:.8},children:[e,` / `,t]})]}),(0,j.jsx)(`div`,{style:{height:6,background:`#2a2020`,borderRadius:3,overflow:`hidden`},children:(0,j.jsx)(`div`,{style:{width:`${r*100}%`,height:`100%`,background:i,transition:`width 0.3s`,borderRadius:3}})})]})}function wn({label:e,theme:t,onClick:n}){let[r,i]=(0,a.useState)(!1);return(0,j.jsx)(`button`,{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:n,style:{flex:1,background:r?t.uiBorder:`#1a1008`,border:`1px solid ${r?t.uiAccent:t.uiBorder}`,color:t.uiAccent,fontFamily:Y,fontSize:12,padding:`8px 4px`,cursor:`pointer`,borderRadius:3,userSelect:`none`,textAlign:`center`,transition:`background 0.1s, border-color 0.1s`},children:e})}function Tn({context:e,config:t,onExit:n}){let r=Sn(),[i,o]=(0,a.useState)(()=>Wt(t.map,e.playerStats,e.inventory,{initialPos:t.initialPos,initialDir:t.initialDir,initialVisited:t.initialVisited,initialTriggeredEvents:t.initialTriggeredEvents})),s=bn(t.theme),c=t.assetsBaseUrl??`/assets`,[l,u]=(0,a.useState)(null),d=(0,a.useRef)(null),f=(0,a.useCallback)(e=>{o(t=>Qt(t,e))},[]),p=(0,a.useCallback)((e,n)=>{let r=t.itemEffects?.[e];r?.attackEnemy!==void 0&&!i.battle||(o(t=>Gt(t,e,n,r)),i.battle||(d.current&&clearTimeout(d.current),u(r?.healHp===`full`?`${n}を使った！ HP全回復！`:typeof r?.healHp==`number`?`${n}を使った！ HP+${r.healHp}！`:`${n}を使った！`),d.current=setTimeout(()=>u(null),2500)))},[t.itemEffects,i.battle]);(0,a.useEffect)(()=>{let e=e=>{[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Enter`,` `].includes(e.key)&&e.preventDefault(),o(t=>Qt(t,e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]);let m=(0,a.useCallback)(()=>({...e,flags:{...e.flags,[`explored_${t.map}`]:!0},inventory:i.inventory,playerStats:{...e.playerStats,hp:i.playerHp,maxHp:i.playerMaxHp,atk:i.playerAtk,def:i.playerDef}}),[e,t.map,i.inventory,i.playerHp,i.playerMaxHp,i.playerAtk,i.playerDef]),h=(0,a.useCallback)(()=>{let e=m(),r={...e,playerStats:{...e.playerStats,hp:i.playerMaxHp}},a=t._novelReturn;a?.exitSceneId?n(r,{engineId:`novel`,config:{...a,initialSceneId:a.exitSceneId,autoStart:!0}}):n(r)},[m,t._novelReturn,n,i.playerMaxHp]);(0,a.useEffect)(()=>{if(!i.pendingDeath)return;let r=t._novelReturn;if(r){if(i.pendingBossTilePos&&r.gameoverBossSceneId){let a={...e,flags:{...e.flags,flag_maze_defeated:!0,flag_boss_challenged:!0},inventory:i.inventory,playerStats:{...e.playerStats,hp:i.playerMaxHp,maxHp:i.playerMaxHp,atk:i.playerAtk,def:i.playerDef}},[o,s]=i.pendingBossTilePos.split(`,`).map(Number),c={map:t.map,name:t.name,theme:t.theme,assetsBaseUrl:t.assetsBaseUrl,items:t.items,events:t.events,itemEffects:t.itemEffects,_novelReturn:t._novelReturn,initialPos:{x:(o??0)-1,y:s??0},initialDir:`E`,initialVisited:[...i.visited],initialTriggeredEvents:[...i.triggeredEvents]};n(a,{engineId:`novel`,config:{...r,initialSceneId:r.gameoverLandingSceneId??r.gameoverBossSceneId,autoStart:!0},returnEngineId:`maze_rpg`,returnConfig:c})}else if(r.gameoverSceneId){let a={...e,flags:{...e.flags,flag_maze_defeated:!0},inventory:i.inventory,playerStats:{...e.playerStats,hp:i.playerMaxHp,maxHp:i.playerMaxHp,atk:i.playerAtk,def:i.playerDef}},o={map:t.map,name:t.name,theme:t.theme,assetsBaseUrl:t.assetsBaseUrl,items:t.items,events:t.events,itemEffects:t.itemEffects,_novelReturn:t._novelReturn};n(a,{engineId:`novel`,config:{...r,initialSceneId:r.gameoverLandingSceneId??r.gameoverSceneId,autoStart:!0},returnEngineId:`maze_rpg`,returnConfig:o})}}},[i.pendingDeath]),(0,a.useEffect)(()=>{if(!i.pendingEvent)return;let e=t.events?.[i.pendingEvent],r=t._novelReturn;if(!e||!r)return;let a=m(),o=`${i.pos.x},${i.pos.y}`,s={...t,initialPos:i.pos,initialDir:i.dir,initialVisited:[...i.visited],initialTriggeredEvents:[...i.triggeredEvents,o]};n(a,{engineId:`novel`,config:{...r,initialSceneId:e,autoStart:!0},returnEngineId:`maze_rpg`,returnConfig:s})},[i.pendingEvent]);let g=(0,a.useCallback)(e=>{i.atExit&&(e.key!==`Enter`&&e.key!==` `||h())},[i.atExit,h]);return(0,a.useEffect)(()=>(window.addEventListener(`keydown`,g),()=>window.removeEventListener(`keydown`,g)),[g]),(0,j.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:s.uiBg,overflow:`hidden`},children:(0,j.jsxs)(`div`,{style:{width:800,height:600,flexShrink:0,transformOrigin:`center center`,transform:`scale(${r})`,background:s.uiBg,display:`flex`,flexDirection:`column`,fontFamily:Y,color:s.uiAccent,userSelect:`none`,overflow:`hidden`,boxShadow:`0 0 60px rgba(0,0,0,0.8)`},children:[(0,j.jsxs)(`div`,{style:{background:s.uiBorder,borderBottom:`1px solid ${s.uiBorder}`,padding:`4px 12px`,fontSize:13,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexShrink:0,letterSpacing:`0.06em`},children:[(0,j.jsxs)(`span`,{children:[`⚔ `,t.name??t.map]}),(0,j.jsxs)(`span`,{style:{fontSize:11,opacity:.7},children:[`歩数: `,i.steps]})]}),(0,j.jsxs)(`div`,{style:{display:`flex`,flex:1,overflow:`hidden`},children:[(0,j.jsx)(`div`,{style:{flex:`0 0 488px`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,j.jsxs)(`div`,{style:{position:`relative`},children:[(0,j.jsxs)(`div`,{style:{border:`2px solid ${s.uiBorder}`,boxShadow:`0 0 12px rgba(100,60,10,0.4)`,position:`relative`},children:[(0,j.jsx)(ln,{state:i,theme:s}),i.battle&&(0,j.jsx)(gn,{enemy:i.battle.enemy,assetsBaseUrl:c}),!i.battle&&!i.atExit&&(0,j.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,gridTemplateColumns:`1fr 2fr 1fr`,gridTemplateRows:`1fr 1fr`},children:[(0,j.jsx)(`div`,{title:`左回転`,style:{cursor:`w-resize`},onClick:()=>f(`ArrowLeft`)}),(0,j.jsx)(`div`,{title:`前進`,style:{cursor:`n-resize`},onClick:()=>f(`ArrowUp`)}),(0,j.jsx)(`div`,{title:`右回転`,style:{cursor:`e-resize`},onClick:()=>f(`ArrowRight`)}),(0,j.jsx)(`div`,{title:`左回転`,style:{cursor:`w-resize`},onClick:()=>f(`ArrowLeft`)}),(0,j.jsx)(`div`,{title:`後退`,style:{cursor:`s-resize`},onClick:()=>f(`ArrowDown`)}),(0,j.jsx)(`div`,{title:`右回転`,style:{cursor:`e-resize`},onClick:()=>f(`ArrowRight`)})]})]}),i.atExit&&(0,j.jsx)(`div`,{onClick:h,style:{marginTop:8,background:`#1a2a0a`,border:`1px solid #44aa22`,borderRadius:4,padding:`8px 16px`,color:`#88ff44`,fontSize:14,textAlign:`center`,cursor:`pointer`,fontFamily:Y,letterSpacing:`0.04em`},children:`階段を見つけた！ [Enter] / クリックで地上へ戻る`})]})}),(0,j.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,borderLeft:`1px solid ${s.uiBorder}`,padding:`10px 10px 8px`,gap:8,overflow:`hidden`},children:[(0,j.jsx)(Cn,{hp:i.playerHp,maxHp:i.playerMaxHp,theme:s}),(0,j.jsx)(`div`,{style:{borderTop:`1px solid ${s.uiBorder}`,flexShrink:0}}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:10,alignItems:`flex-start`,justifyContent:`center`},children:[(0,j.jsx)(`div`,{style:{border:`1px solid ${s.uiBorder}`},children:(0,j.jsx)(dn,{state:i})}),(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,j.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`24px 24px 24px`,gridTemplateRows:`24px 24px 24px`,gap:2,textAlign:`center`},children:[[``,`N`,``].map((e,t)=>(0,j.jsx)(En,{label:e,dir:i.dir,theme:s},`t${t}`)),[`W`,``,`E`].map((e,t)=>(0,j.jsx)(En,{label:e,dir:i.dir,theme:s},`m${t}`)),[``,`S`,``].map((e,t)=>(0,j.jsx)(En,{label:e,dir:i.dir,theme:s},`b${t}`))]}),(0,j.jsx)(`div`,{style:{fontSize:11,color:s.uiAccent,letterSpacing:`0.05em`},children:xn[i.dir]}),(0,j.jsxs)(`div`,{style:{fontSize:9,color:s.uiBorder,letterSpacing:`0.04em`},children:[`(`,i.pos.x,`,`,i.pos.y,`)`]})]})]}),(0,j.jsx)(`div`,{style:{borderTop:`1px solid ${s.uiBorder}`,flexShrink:0}}),i.battle?(0,j.jsx)(hn,{state:i,theme:s,font:Y,onSelectCommand:e=>o(t=>!t.battle||t.battle.phase!==`select`?t:{...t,battle:{...t.battle,cursorIndex:e}}),onCommand:e=>o(t=>!t.battle||t.battle.phase!==`select`?t:Qt({...t,battle:{...t.battle,cursorIndex:e}},`Enter`)),onAdvance:()=>f(`Enter`)}):(0,j.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,j.jsx)(`div`,{style:{display:`flex`},children:(0,j.jsx)(wn,{label:`↑ 前進`,theme:s,onClick:()=>f(`ArrowUp`)})}),(0,j.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,j.jsx)(wn,{label:`← 左`,theme:s,onClick:()=>f(`ArrowLeft`)}),(0,j.jsx)(wn,{label:`↓ 後退`,theme:s,onClick:()=>f(`ArrowDown`)}),(0,j.jsx)(wn,{label:`→ 右`,theme:s,onClick:()=>f(`ArrowRight`)})]})]}),(0,j.jsx)(vn,{inventory:i.inventory,itemDefs:t.items??[],theme:s,onUse:p,notification:l??void 0,font:Y})]})]})]})})}function En({label:e,dir:t,theme:n}){let r=e===t;return(0,j.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,background:r?n.uiBorder:e?n.uiBg:`transparent`,border:e?`1px solid ${r?n.uiAccent:n.uiBorder}`:`none`,borderRadius:2,color:r?n.uiAccent:n.uiBorder,fontWeight:r?`bold`:`normal`,fontSize:10,fontFamily:Y},children:e})}var Dn={component:Tn},X=800,Z=600,On=50,kn=Z-On*2,Q=On+kn-50,$=150,An=42,jn=72,Mn=.0017,Nn=-.82,Pn=3e4,Fn=`'Hiragino Mincho ProN', 'Yu Mincho', 'MS Mincho', serif`,In=[{id:`candy_01`,type:`candy`,spawnMs:1600,laneY:356,speed:.34,size:28},{id:`pot_01`,type:`pot`,spawnMs:3300,laneY:395,speed:.38,size:46},{id:`candy_02`,type:`candy`,spawnMs:4700,laneY:318,speed:.37,size:28},{id:`candy_03`,type:`candy`,spawnMs:6600,laneY:392,speed:.42,size:30},{id:`pot_02`,type:`pot`,spawnMs:8200,laneY:342,speed:.43,size:48},{id:`candy_04`,type:`candy`,spawnMs:1e4,laneY:360,speed:.46,size:28},{id:`candy_05`,type:`candy`,spawnMs:11800,laneY:302,speed:.42,size:30},{id:`pot_03`,type:`pot`,spawnMs:13700,laneY:400,speed:.48,size:50},{id:`candy_06`,type:`candy`,spawnMs:15400,laneY:340,speed:.48,size:30},{id:`candy_07`,type:`candy`,spawnMs:17600,laneY:388,speed:.52,size:28},{id:`pot_04`,type:`pot`,spawnMs:19600,laneY:330,speed:.52,size:50},{id:`candy_08`,type:`candy`,spawnMs:21500,laneY:358,speed:.55,size:30},{id:`candy_09`,type:`candy`,spawnMs:23800,laneY:305,speed:.5,size:28},{id:`pot_05`,type:`pot`,spawnMs:26e3,laneY:390,speed:.56,size:52},{id:`candy_10`,type:`candy`,spawnMs:27800,laneY:346,speed:.58,size:30}],Ln={sky:`#151827`,ground:`#2a2d32`,accent:`#f2d16b`};function Rn(e){return{...Ln,...e}}function zn(){let e=()=>Math.min(1,Math.min(window.innerWidth/X,window.innerHeight/Z)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function Bn(e,t){if(t)return/^(https?:)?\/\//.test(t)||t.startsWith(`/`)?t:`${(e??`/assets`).replace(/\/$/,``)}/${t.replace(/^\//,``)}`}function Vn(e){let[t,n]=(0,a.useState)(null),[r,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e){n(null),i(!1);return}let t=!1,r=new Image;return r.onload=()=>{t||(n(r),i(!1))},r.onerror=()=>{t||(n(null),i(!0))},r.src=e,()=>{t=!0}},[e]),{image:t,failed:r}}function Hn(e,t){return X+80-Math.max(0,t-e.spawnMs)*e.speed}function Un(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}function Wn(e,t){let n=e.y-(Q-jn);return Q-t+n}function Gn(e,t,n,r,i){let a=Math.sin(i*.012)*4;e.save(),e.translate(t+r/2,n+r/2),e.rotate(Math.sin(i*.008)*.4),e.fillStyle=`#ff7aa8`,e.beginPath(),e.ellipse(0,0,r*.42,r*.3,0,0,Math.PI*2),e.fill(),e.fillStyle=`#fff1b8`,e.fillRect(-r*.14,-r*.28+a*.03,r*.28,r*.56),e.fillStyle=`#ffd6e5`,e.beginPath(),e.moveTo(-r*.38,0),e.lineTo(-r*.62,-r*.2),e.lineTo(-r*.62,r*.2),e.closePath(),e.fill(),e.beginPath(),e.moveTo(r*.38,0),e.lineTo(r*.62,-r*.2),e.lineTo(r*.62,r*.2),e.closePath(),e.fill(),e.restore()}function Kn(e,t,n,r,i){e.save(),e.translate(t+r/2,n+r/2),e.rotate(i*.012),e.fillStyle=`#59606b`,e.beginPath(),e.roundRect(-r*.42,-r*.25,r*.84,r*.58,r*.12),e.fill(),e.strokeStyle=`#d5dde8`,e.lineWidth=4,e.beginPath(),e.arc(0,-r*.32,r*.28,Math.PI,Math.PI*2),e.stroke(),e.strokeStyle=`#2c3139`,e.lineWidth=5,e.beginPath(),e.moveTo(-r*.5,-r*.08),e.lineTo(-r*.7,-r*.08),e.moveTo(r*.5,-r*.08),e.lineTo(r*.7,-r*.08),e.stroke(),e.restore()}function qn(e,t,n,r,i){let a=Math.min(1,t.elapsedMs/n.durationMs),o=t.elapsedMs*.18,s=t.elapsedMs<t.penaltyUntilMs;if(e.fillStyle=`#000`,e.fillRect(0,0,X,Z),i.backgroundImage){let t=i.backgroundImage.width*(kn/i.backgroundImage.height),n=Math.max(1,i.backgroundLoopWidth,t),r=n*(i.backgroundImage.height/i.backgroundImage.width),a=On+(r>kn?(kn-r)/2:0),s=-(o*.65%n);for(let t=s-n;t<X+n;t+=n)e.drawImage(i.backgroundImage,t,a,n,r)}else{let t=e.createLinearGradient(0,0,0,Q);t.addColorStop(0,r.sky),t.addColorStop(1,`#090a12`),e.fillStyle=t,e.fillRect(0,On,X,kn),e.fillStyle=`rgba(255,255,255,0.12)`;for(let t=0;t<6;t+=1){let n=(t*180-o*.18%180+X)%X;e.fillRect(n,120+t%2*34,82,10)}e.fillStyle=`#202431`;for(let t=0;t<9;t+=1){let n=(t*130-o*.48%130+X)%X,r=78+t%3*34;e.fillRect(n,Q-r,72,r),e.fillStyle=`rgba(242,209,107,0.22)`,e.fillRect(n+16,Q-r+18,10,16),e.fillRect(n+44,Q-r+46,10,16),e.fillStyle=`#202431`}}if(!i.backgroundImage){e.fillStyle=r.ground,e.fillRect(0,Q,X,Z-Q),e.fillStyle=`#11131a`;for(let t=0;t<18;t+=1){let n=(t*58-o%58+X)%X;e.fillRect(n,Q+18,34,4)}for(let t=0;t<7;t+=1){let n=(t*190-o*.95%190+X)%X,i=28+t%2*18;e.fillStyle=`#342739`,e.fillRect(n,Q-i,38,i),e.fillStyle=r.accent,e.fillRect(n+8,Q-i-8,22,8)}}let c=t.grounded?Math.sin(t.elapsedMs*.018)*3:0,l=t.y+c,u=s?-34+Math.sin(t.elapsedMs*.08)*8:0;i.playerImageEnabled||(e.fillStyle=`#f1f3f5`,e.fillRect($+u+10,l,22,22),e.fillStyle=r.accent,e.fillRect($+u,l+24,An,36),e.fillStyle=`#11131a`,e.fillRect($+u+6,l+58,12,24),e.fillRect($+u+25,l+58,12,24),e.fillStyle=`#f1f3f5`,e.fillRect($+u+An,l+30,20,10));for(let n of In){if(t.collectedIds.includes(n.id)||t.hitIds.includes(n.id))continue;let r=Hn(n,t.elapsedMs);r<-100||r>X+120||(n.type===`candy`?Gn(e,r,n.laneY,n.size,t.elapsedMs):Kn(e,r,n.laneY,n.size,t.elapsedMs))}e.fillStyle=`rgba(0,0,0,0.35)`,e.fillRect(24,24,752,56),e.fillStyle=`rgba(255,255,255,0.18)`,e.fillRect(44,58,712,8),e.fillStyle=r.accent,e.fillRect(44,58,712*a,8),e.fillStyle=`#f7f2dc`,e.font=`20px ${Fn}`,e.fillText(`アーケード街の死闘`,44,48),e.font=`14px ${Fn}`,e.fillText(`${Math.ceil((n.durationMs-t.elapsedMs)/1e3)}秒`,708,48),e.fillText(`アメ ${t.score}`,610,48),s&&(e.fillStyle=`rgba(120,0,0,0.7)`,e.fillRect(300,92,200,32),e.fillStyle=`#fff4e8`,e.font=`16px ${Fn}`,e.fillText(`鍋に当たった！`,344,114));let d=[i.backgroundImageConfigured&&i.backgroundImageFailed?`background image not found`:null,i.playerImageConfigured&&i.playerImageFailed?`player image not found`:null].filter(Boolean);d.length>0&&(e.fillStyle=`rgba(120,0,0,0.72)`,e.fillRect(24,92,360,30),e.fillStyle=`#fff4e8`,e.font=`13px ${Fn}`,e.fillText(d.join(` / `),38,112))}function Jn({context:e,config:t,onExit:n}){let r=(0,a.useRef)(null),i=(0,a.useRef)({elapsedMs:0,y:Q-jn,velocityY:0,grounded:!0,score:0,penaltyCount:0,penaltyUntilMs:0,collectedIds:[],hitIds:[]}),o=(0,a.useRef)(null),s=(0,a.useRef)(!1),[c,l]=(0,a.useState)(0),u=zn(),d=(0,a.useMemo)(()=>Rn(t.theme),[t.theme]),f=Math.max(1e3,t.durationMs||Pn),p=t.stageId||`default`,m=Bn(t.assetsBaseUrl,t.backgroundImage),h=Bn(t.assetsBaseUrl,t.playerImage),g=Vn(m),_=Vn(h),v=Math.max(1,t.backgroundLoopWidth??X),y=Math.max(1,t.playerWidth??74),b=Math.max(1,t.playerHeight??104),x=(0,a.useCallback)(()=>{let e=i.current;e.grounded&&(i.current={...e,velocityY:Nn,grounded:!1})},[]),S=(0,a.useCallback)(()=>{if(s.current)return;s.current=!0;let t=i.current;n({...e,flags:{...e.flags,cleared_runner_action:!0,[`cleared_runner_action_${p}`]:!0,runner_action_score:t.score,[`runner_action_score_${p}`]:t.score,runner_action_penalties:t.penaltyCount,[`runner_action_penalties_${p}`]:t.penaltyCount},playerStats:{...e.playerStats,runnerScore:t.score,runnerPenalties:t.penaltyCount}})},[e,n,p]);(0,a.useEffect)(()=>{let e=e=>{e.key!==` `&&e.key!==`Enter`||(e.preventDefault(),x())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[x]),(0,a.useEffect)(()=>{let e=0,t=n=>{let a=o.current??n,s=Math.min(40,n-a);o.current=n;let c=i.current,u=Math.min(f,c.elapsedMs+s),p=c.velocityY+Mn*s,x=c.y+p*s,C=!1,w=Q-jn;x>=w&&(x=w,p=0,C=!0);let T={...c,elapsedMs:u,y:x,velocityY:p,grounded:C},E=u<T.penaltyUntilMs,D=Math.max(24,Math.min(y,74)-12),O=Math.max(48,Math.min(b,104)-8),k={x:$+(E?-34:0)+8,y:Wn(T,b)+4,width:D,height:O};for(let e of In){if(T.collectedIds.includes(e.id)||T.hitIds.includes(e.id))continue;let t=Hn(e,u);t<-100||t>X+120||Un(k,{x:t,y:e.laneY,width:e.size,height:e.size})&&(T=e.type===`candy`?{...T,score:T.score+1,collectedIds:[...T.collectedIds,e.id]}:{...T,score:Math.max(0,T.score-2),penaltyCount:T.penaltyCount+1,penaltyUntilMs:u+900,hitIds:[...T.hitIds,e.id]})}i.current=T;let A=r.current?.getContext(`2d`);if(A&&qn(A,T,{durationMs:f},d,{backgroundImage:g.image,backgroundImageConfigured:!!m,backgroundImageFailed:g.failed,backgroundLoopWidth:v,playerImageEnabled:!!h&&!_.failed,playerImageConfigured:!!h,playerImageFailed:_.failed,playerWidth:y,playerHeight:b}),l(u),u>=f){S();return}e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[g.failed,g.image,m,v,f,S,_.failed,_.image,b,h,y,p,d]);let C=Math.min(1,c/f),w=i.current,T=w.elapsedMs<w.penaltyUntilMs,E=w.grounded?Math.sin(w.elapsedMs*.018)*3:0,D=$+(T?-34+Math.sin(w.elapsedMs*.08)*8:0),O=Wn(w,b)+E,k=!!h&&!_.failed;return(0,j.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#05060a`,overflow:`hidden`},children:(0,j.jsxs)(`div`,{style:{width:X,height:Z,flexShrink:0,transform:`scale(${u})`,transformOrigin:`center center`,position:`relative`,background:d.sky,overflow:`hidden`,boxShadow:`0 0 60px rgba(0,0,0,0.8)`,fontFamily:Fn},onMouseDown:x,onTouchStart:e=>{e.preventDefault(),x()},children:[(0,j.jsx)(`canvas`,{ref:r,width:X,height:Z,style:{display:`block`}}),k&&(0,j.jsx)(`img`,{src:h,alt:``,draggable:!1,style:{position:`absolute`,left:D,top:O,width:y,height:b,pointerEvents:`none`,userSelect:`none`}}),(0,j.jsxs)(`div`,{style:{position:`absolute`,left:24,right:24,bottom:22,display:`flex`,alignItems:`center`,justifyContent:`space-between`,color:`#f7f2dc`,fontSize:14,textShadow:`0 2px 6px rgba(0,0,0,0.8)`,pointerEvents:`none`},children:[(0,j.jsx)(`span`,{children:t.name??`Runner Action`}),(0,j.jsx)(`span`,{children:`Space / Enter / Click`}),(0,j.jsxs)(`span`,{children:[Math.round(C*100),`%`]})]})]})})}var Yn={component:Jn},Xn=`'Hiragino Mincho ProN', 'Yu Mincho', 'MS Mincho', serif`,Zn=800,Qn=600,$n=148,er=36,tr=130,nr=Qn-er-tr,rr=120,ir=[{symbol:`飴`,color:`#f4a260`},{symbol:`花`,color:`#f48fb1`},{symbol:`星`,color:`#fff176`},{symbol:`月`,color:`#ce93d8`},{symbol:`家`,color:`#80cbc4`},{symbol:`鐘`,color:`#80deea`},{symbol:`鳥`,color:`#a5d6a7`},{symbol:`波`,color:`#64b5f6`}],ar=[`どれかな……`,`えーと……`,`うーん……`],or=[`……`,`ふむ……`,`どれかな`];function sr(){let e=()=>Math.min(1,Math.min(window.innerWidth/Zn,window.innerHeight/Qn)),[t,n]=(0,a.useState)(e);return(0,a.useEffect)(()=>{let t=()=>n(e());return window.addEventListener(`resize`,t),()=>window.removeEventListener(`resize`,t)},[]),t}function cr(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function lr(e){let t=[];for(let n=0;n<e;n++)t.push({id:n*2,pairId:n}),t.push({id:n*2+1,pairId:n});return{cards:cr(t),flipped:[],matched:[],matchedBy:{},currentTurn:`player`,seen:{},playerPairs:0,opponentPairs:0,turns:0,phase:`playing`}}var ur=4,dr=110,fr=140,pr=14,mr=14;function hr(e,t){if(t)return/^(https?:)?\/\//.test(t)||t.startsWith(`/`)?t:`${(e??`/assets`).replace(/\/$/,``)}/${t.replace(/^\//,``)}`}function gr(e){return e.length===0?null:e[Math.floor(Math.random()*e.length)]}function _r(e){let t=e.cards.filter(t=>!e.matched.includes(t.pairId)&&!e.flipped.includes(t.id));if(t.length===0)return null;if(e.flipped.length===1){let n=e.cards.find(t=>t.id===e.flipped[0]),r=t.find(e=>n&&e.pairId===n.pairId);return r&&Math.random()<.45?r.id:gr(t)?.id??null}let n=new Map;for(let r of t)e.seen[r.id]===r.pairId&&n.set(r.pairId,[...n.get(r.pairId)??[],r.id]);let r=[...n.values()].find(e=>e.length>=2);return r&&Math.random()<.25?r[0]:gr(t)?.id??null}function vr({side:e,name:t,faceSrc:n,score:r,active:i}){let a=e===`left`?`#fff176`:`#80deea`,o=nr-96;return(0,j.jsxs)(`div`,{style:{position:`absolute`,top:er,[e]:0,width:$n,height:nr,overflow:`hidden`,background:i?`rgba(${e===`left`?`255,241,118`:`128,222,234`},0.06)`:`rgba(6,6,18,0.65)`,borderRight:e===`left`?`1px solid ${i?`${a}55`:`rgba(38,42,72,0.5)`}`:`none`,borderLeft:e===`right`?`1px solid ${i?`${a}55`:`rgba(38,42,72,0.5)`}`:`none`,transition:`background 0.4s, border-color 0.4s`,zIndex:3},children:[(0,j.jsxs)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:o,overflow:`hidden`},children:[n?(0,j.jsx)(`img`,{src:n,alt:``,draggable:!1,style:{display:`block`,width:`100%`,height:`100%`,objectFit:`contain`,objectPosition:`bottom center`,filter:i?`none`:`brightness(0.55) saturate(0.6)`,transition:`filter 0.4s`}}):(0,j.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:56,color:`#1e2040`},children:e===`left`?`🎮`:`🤖`}),(0,j.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:60,background:`linear-gradient(to top, ${i?e===`left`?`rgba(18,16,2,0.96)`:`rgba(2,16,18,0.96)`:`rgba(6,6,18,0.96)`} 0%, transparent 100%)`,pointerEvents:`none`}})]}),(0,j.jsxs)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:96,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:4,borderTop:`1px solid ${i?`${a}44`:`rgba(36,40,68,0.5)`}`,background:i?e===`left`?`rgba(22,18,2,0.92)`:`rgba(2,18,22,0.92)`:`rgba(6,6,18,0.92)`,transition:`background 0.4s, border-color 0.4s`},children:[(0,j.jsx)(`div`,{style:{fontSize:48,lineHeight:1,color:i?a:`#4a5090`,fontVariantNumeric:`tabular-nums`,textShadow:i?`0 0 24px ${a}55`:`none`,transition:`color 0.4s, text-shadow 0.4s`},children:r}),(0,j.jsx)(`div`,{style:{fontSize:10,color:`#3c4278`,letterSpacing:`0.08em`},children:`取得ペア`}),(0,j.jsx)(`div`,{style:{fontSize:11,color:i?`#c5cae9`:`#4a5090`,letterSpacing:`0.05em`,maxWidth:$n-16,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,textAlign:`center`,transition:`color 0.4s`},children:t})]}),i&&(0,j.jsx)(`div`,{style:{position:`absolute`,top:10,...e===`left`?{right:10}:{left:10},color:a,fontSize:14,opacity:.9},children:e===`left`?`▶`:`◀`})]})}function yr({speakerName:e,speakerSide:t,text:n}){return(0,j.jsxs)(`div`,{style:{position:`absolute`,left:0,right:0,bottom:0,height:tr,background:`rgba(6,6,20,0.92)`,borderTop:`1px solid rgba(46,50,88,0.7)`,zIndex:10},children:[e&&(0,j.jsx)(`div`,{style:{position:`absolute`,top:-30,...t===`right`?{right:$n+20}:{left:$n+20},background:`rgba(6,6,20,0.94)`,border:`1px solid rgba(46,50,88,0.7)`,borderBottom:`none`,padding:`5px 20px`,fontSize:13,color:`#c5cae9`,letterSpacing:`0.1em`},children:e}),(0,j.jsx)(`div`,{style:{position:`absolute`,top:18,left:$n+24,right:$n+24,bottom:14,color:`#e8eaf6`,fontSize:15,lineHeight:1.9,letterSpacing:`0.08em`,overflow:`hidden`},children:n??``})]})}function br({context:e,config:t,onExit:n}){let r=(t.mode??`solo`)===`duel`,i=t.pairs??6,o=t.maxTurns??20,s=Math.ceil(i*2/ur),c=r?rr:fr,l=ur*dr+(ur-1)*pr,u=s*c+(s-1)*mr,d=Math.round((Zn-l)/2),f=r?er+Math.round((nr-u)/2):Math.round((Qn-u)/2)+16,p=sr(),[m,h]=(0,a.useState)(()=>lr(i)),g=(0,a.useRef)(!1),[_,v]=(0,a.useState)(()=>r?gr(t.playerDialogue?.length?t.playerDialogue:ar):null),[y,b]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(m.phase!==`win`&&m.phase!==`lose`)return;let r=m.phase===`win`,i=setTimeout(()=>{n({...e,flags:{...e.flags,[`memory_game_result_${t.stageId}`]:r?`win`:`lose`,[`memory_game_player_pairs_${t.stageId}`]:m.playerPairs,[`memory_game_opponent_pairs_${t.stageId}`]:m.opponentPairs}})},2500);return()=>clearTimeout(i)},[m.phase]),(0,a.useEffect)(()=>{if(!r||m.phase!==`playing`){b(null),v(null);return}m.flipped.length===0&&(m.currentTurn===`opponent`?(b(gr(t.opponentDialogue?.length?t.opponentDialogue:or)),v(null)):(v(gr(t.playerDialogue?.length?t.playerDialogue:ar)),b(null)))},[m.currentTurn,r,m.phase,m.flipped.length]);let x=(0,a.useCallback)(e=>{g.current||h(t=>{if(t.phase!==`playing`)return t;let n=t.cards.find(t=>t.id===e);if(!n||t.matched.includes(n.pairId)||t.flipped.includes(e)||t.flipped.length>=2)return t;let a=[...t.flipped,e],o={...t.seen,[e]:n.pairId};if(a.length<2)return{...t,flipped:a,seen:o};let[s,c]=a,l=t.cards.find(e=>e.id===s),u=t.cards.find(e=>e.id===c),d=l.pairId===u.pairId,f=t.turns+1,p=r?t.currentTurn:`player`;if(d){let e=[...t.matched,l.pairId],n=t.playerPairs+ +(p===`player`),a=t.opponentPairs+ +(p===`opponent`),s=e.length===i,c=r?n>a:!0;return{...t,flipped:[],matched:e,matchedBy:{...t.matchedBy,[l.pairId]:p},seen:o,playerPairs:n,opponentPairs:a,turns:f,phase:s?c?`win`:`lose`:`playing`}}return{...t,flipped:a,seen:o,turns:f}})},[r,i,o]),S=(0,a.useCallback)(e=>{r&&m.currentTurn!==`player`||x(e)},[r,x,m.currentTurn]);(0,a.useEffect)(()=>{if(m.flipped.length!==2)return;let[e,t]=m.flipped,n=m.cards.find(t=>t.id===e),i=m.cards.find(e=>e.id===t);if(n.pairId===i.pairId)return;g.current=!0;let a=setTimeout(()=>{h(e=>({...e,flipped:[],currentTurn:r?e.currentTurn===`player`?`opponent`:`player`:e.currentTurn,phase:!r&&o>0&&e.turns>=o?`lose`:e.phase})),g.current=!1},900);return()=>{clearTimeout(a),g.current=!1}},[m.flipped]),(0,a.useEffect)(()=>{if(!r||m.phase!==`playing`||m.currentTurn!==`opponent`||g.current)return;let e=m.flipped.length===0?650:820,t=setTimeout(()=>{let e=_r(m);e!==null&&x(e)},e);return()=>clearTimeout(t)},[r,x,m]);let C=o>0?o-m.turns:null,w=C!==null&&C<=5,T=hr(t.assetsBaseUrl,t.playerFaceImage),E=hr(t.assetsBaseUrl,t.opponentFaceImage),D=t.playerName??`こちら`,O=t.opponentName??`相手`,k=hr(t.assetsBaseUrl,t.backgroundImage),A=r?m.currentTurn===`player`?_:y:null,ee=r?m.currentTurn===`player`?D:O:null,te=r?m.currentTurn===`player`?`left`:`right`:null;return(0,j.jsx)(`div`,{style:{width:`100vw`,height:`100dvh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`#0a0a14`,overflow:`hidden`},children:(0,j.jsxs)(`div`,{style:{width:Zn,height:Qn,position:`relative`,userSelect:`none`,overflow:`hidden`,flexShrink:0,transformOrigin:`center center`,transform:`scale(${p})`,fontFamily:Xn,...k?{backgroundImage:`url(${k})`,backgroundSize:`cover`,backgroundPosition:`center`}:{background:`linear-gradient(150deg, #0d0d1a 0%, #0a0a14 60%, #0e0a1c 100%)`}},children:[k&&(0,j.jsx)(`div`,{style:{position:`absolute`,inset:0,background:`rgba(4,4,12,0.56)`,pointerEvents:`none`}}),(0,j.jsxs)(`div`,{style:{position:`absolute`,top:0,left:0,right:0,height:er,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:4,borderBottom:`1px solid rgba(36,40,68,0.5)`,background:`rgba(6,6,20,0.7)`},children:[(0,j.jsx)(`span`,{style:{color:`#c5cae9`,fontSize:15,letterSpacing:`0.14em`},children:t.title??`神経衰弱`}),!r&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`span`,{style:{position:`absolute`,left:20,color:`#8bc34a`,fontSize:13},children:[m.matched.length,` / `,i,` ペア`]}),(0,j.jsx)(`span`,{style:{position:`absolute`,right:20,color:w?`#ef9a9a`:`#4a4d62`,fontSize:13},children:o>0?`残り ${C} 手`:`${m.turns} 手`})]})]}),r&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(vr,{side:`left`,name:D,faceSrc:T,score:m.playerPairs,active:m.currentTurn===`player`&&m.phase===`playing`}),(0,j.jsx)(vr,{side:`right`,name:O,faceSrc:E,score:m.opponentPairs,active:m.currentTurn===`opponent`&&m.phase===`playing`})]}),m.cards.map((e,t)=>{let n=t%ur,i=Math.floor(t/ur),a=d+n*(dr+pr),o=f+i*(c+mr),s=m.flipped.includes(e.id)||m.matched.includes(e.pairId),l=m.matched.includes(e.pairId),u=ir[e.pairId%ir.length],p=(l?m.matchedBy[e.pairId]:void 0)===`opponent`?`#80deea`:u.color;return(0,j.jsx)(`div`,{onClick:()=>S(e.id),style:{position:`absolute`,left:a,top:o,width:dr,height:c,borderRadius:10,cursor:s||r&&m.currentTurn!==`player`||g.current?`default`:`pointer`,background:s?`#141426`:`#0c0c1c`,border:l?`2px solid ${p}88`:s?`2px solid #3a3a5a`:`2px solid #1c1c30`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:l?`0 0 20px ${p}36, 0 2px 8px rgba(0,0,0,0.55)`:s?`0 4px 14px rgba(0,0,0,0.65)`:`0 2px 6px rgba(0,0,0,0.45)`,transition:`background 0.12s, border-color 0.12s, box-shadow 0.2s`,zIndex:2},children:s?(0,j.jsx)(`span`,{style:{fontSize:r?44:52,color:l?`${u.color}80`:u.color,lineHeight:1},children:u.symbol}):(0,j.jsx)(`span`,{style:{fontSize:24,color:`#1c1e38`},children:`✦`})},e.id)}),r&&m.phase===`playing`&&(0,j.jsx)(yr,{speakerName:ee,speakerSide:te,text:A}),m.phase===`win`&&(0,j.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:30,background:`rgba(6,6,16,0.90)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:20},children:[(0,j.jsx)(`div`,{style:{fontSize:46,color:`#fff176`,letterSpacing:`0.25em`,textShadow:`0 0 40px rgba(255,241,118,0.45)`},children:`勝　利`}),(0,j.jsx)(`div`,{style:{fontSize:16,color:`#c5cae9`,letterSpacing:`0.08em`},children:r?`${m.playerPairs} — ${m.opponentPairs}`:`${m.turns} 手でクリア`})]}),m.phase===`lose`&&(0,j.jsxs)(`div`,{style:{position:`absolute`,inset:0,zIndex:30,background:`rgba(6,6,16,0.90)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:20},children:[(0,j.jsx)(`div`,{style:{fontSize:46,color:`#ef9a9a`,letterSpacing:`0.25em`,textShadow:`0 0 40px rgba(239,154,154,0.35)`},children:`惜　敗`}),(0,j.jsx)(`div`,{style:{fontSize:16,color:`#667`,letterSpacing:`0.06em`},children:r?`${m.playerPairs} — ${m.opponentPairs}`:`もう一度チャレンジしてください`})]})]})})}var xr={component:br},Sr=xt(),Cr=xt(`chapter2`),wr=xt(`chapter3`),Tr=`/dojonovel/assets`,Er=[{id:`chapter1`,title:`第1章へ`,chapterTitle:`赤羽の一日`,masterData:Sr,initialSceneId:`scene_danchi_morning`,initialLocationId:`loc_danchi`,initialFlags:{flag_chapter:1}},{id:`chapter2`,title:`第2章へ`,chapterTitle:`一番街の怨霊`,masterData:Cr,initialSceneId:`scene_ch2_start`,initialLocationId:`loc_danchi`,unlockFlag:`flag_chapter1_cleared`,initialFlags:{flag_chapter:2,flag_chapter1_cleared:!0}},{id:`chapter3`,title:`第3章へ`,chapterTitle:`おばちゃんとアメちゃんゲーム`,masterData:wr,initialSceneId:`scene_ch3_start`,initialLocationId:`loc_danchi`,unlockFlag:`flag_ch2_cleared`,initialFlags:{flag_chapter:3,flag_chapter1_cleared:!0,flag_ch2_cleared:!0}}];function Dr(){return(0,j.jsx)(St,{engines:{novel:wt,maze_rpg:Dn,runner_action:Yn,memory_game:xr},initial:{engineId:`novel`,config:{masterData:Sr,assetsBaseUrl:Tr,chapterId:`chapter1`,initialSceneId:`scene_danchi_morning`,initialLocationId:`loc_danchi`,chapters:Er}},initialContext:{flags:{},inventory:[],playerStats:{}}})}(0,o.createRoot)(document.getElementById(`root`)).render((0,j.jsx)(a.StrictMode,{children:(0,j.jsx)(Dr,{})}));