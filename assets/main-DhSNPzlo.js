import{a as e,o as t,r as n,s as r,t as i}from"./jsx-runtime-PSrYrKMl.js";var a=r(t(),1),o=e(),s=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},c=(e=>e?s(e):s),l=e=>e;function u(e,t=l){let n=a.useSyncExternalStore(e.subscribe,a.useCallback(()=>t(e.getState()),[e,t]),a.useCallback(()=>t(e.getInitialState()),[e,t]));return a.useDebugValue(n),n}var d=e=>{let t=c(e),n=e=>u(t,e);return Object.assign(n,t),n},f=(e=>e?d(e):d),p=`scene_danchi_morning`,m=`loc_danchi`,h={bgmVolume:.8,seVolume:.8,voiceVolume:.8,textSpeed:40,autoMode:!1,fullscreen:!1},g=`scenes:
  - id: scene_danchi_morning
    location_id: loc_danchi
    background: backgrounds/danchimae.jpg
    bgm: audio/bgm/piano.mp3
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
    branches:
      type: none
    child_scenes:
      - id: scene_danchi_return
        characters:
          - character_id: char_hero
            position: left
            expression: normal
        commands:
          - cmd_examine
          - cmd_move
          - cmd_inventory
        messages:
          - text: 団地に戻ってきた。
            voice_character_id: null
        branches:
          type: none
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
  - id: scene_station_default
    location_id: loc_station
    background: backgrounds/akabane.jpg
    bgm: audio/bgm/station.mp3
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
      - id: area_station_board
        x: 100
        "y": 160
        width: 110
        height: 140
        label: 掲示板
        next_scene: scene_examine_station_board
        condition: null
      - id: area_kiosk
        x: 560
        "y": 210
        width: 130
        height: 110
        label: キオスク
        next_scene: scene_examine_kiosk
        condition: null
    branches:
      type: none
    child_scenes:
      - id: scene_examine_station_board
        messages:
          - text: 駅前の掲示板を見た。
            voice_character_id: null
          - text: いくつかのお知らせの中に、見覚えのあるチラシがある。
            voice_character_id: null
          - text: 「CoderDojo赤羽　本日開催！　参加無料　午後1時より」
            voice_character_id: null
          - text: チラシを一枚もらった！
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
      - id: scene_examine_kiosk
        messages:
          - text: キオスクが並んでいる。雑誌や飲み物が売られている。
            voice_character_id: null
          - text: 今は特に何も買わなくていいか。
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
              - text: 「今日CoderDojo行くでしょ？掲示板もう見た？」
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
        x: 50
        "y": 80
        width: 220
        height: 140
        label: ホワイトボード
        next_scene: scene_examine_whiteboard
        condition: null
      - id: area_pcs
        x: 380
        "y": 260
        width: 300
        height: 160
        label: パソコン群
        next_scene: scene_examine_coderdojo_pcs
        condition: null
    flags_set:
      - flag: flag_arrived_coderdojo
        value: true
    branches:
      type: none
    child_scenes:
      - id: scene_examine_whiteboard
        messages:
          - text: ホワイトボードに「今日のテーマ：自由制作！」と書かれている。
            voice_character_id: null
          - text: 何を作ろうか……
            voice_character_id: null
        next_scene: null
      - id: scene_examine_coderdojo_pcs
        messages:
          - text: ノートパソコンがずらりと並んでいる。
            voice_character_id: null
          - text: 隣の子のコードが見えた。ゲームっぽいものを作っているみたい。
            voice_character_id: null
        next_scene: null
      - id: scene_talk_coderdojo
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
  - id: scene_use_candy
    messages:
      - text: アメをなめた。
        voice_character_id: null
      - text: 甘くておいしい。ちょっと元気が出た気がする。
        voice_character_id: null
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
`,ee=`locations:
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
    entry_scene: scene_danchi_return

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
      - cmd_inventory
    connections:
      - location_id: loc_station
        label: "駅前へ戻る"
        condition: null
    entry_scene: scene_coderdojo_default
`,y=`characters:
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
    voicevox_speaker_id: 1
    sprites:
      normal: characters/yui/normal.png
      happy: characters/yui/happy.png
      surprise: characters/yui/surprise.png

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
`,b=`commands:
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
`;function x(e){return Object.fromEntries(e.map(e=>[e.id,e]))}function S(e,t={}){let n=[];for(let r of e){let{child_scenes:e,...i}=r,a={...t,...i};n.push(a),e?.length&&n.push(...S(e,{location_id:a.location_id,background:a.background}))}return n}function C(){let e=n.load(g),t=n.load(_),r=n.load(v),i=n.load(ee),a=n.load(y),o=n.load(b);return{scenes:x(S(e.scenes)),flags:t.flags,items:x(r.items),locations:x(i.locations),characters:x(a.characters),commands:x(o.commands)}}var w=null;function T(){return w||=C(),w}function te(e){return Object.fromEntries(e.map(e=>[e.id,e.default]))}function ne(e,t){if(!e||e.length===0)return t;let n={...t};for(let{flag:t,value:r}of e)n[t]=r;return n}function E(e,t){if(!e)return!0;if(e.and)return e.and.every(e=>E(e,t));if(e.or)return e.or.some(e=>E(e,t));let n=!0;if(e.flag!==void 0){let r=t.flags[e.flag],i=e.value;n&&=r===i}return e.has_item!==void 0&&(n&&=t.inventory.includes(e.has_item)),e.location_id!==void 0&&(n&&=t.locationId===e.location_id),e.negate&&(n=!n),n}function re(e,t){if(!e||e.length===0)return t;let n={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},r=[...t.inventory];for(let t of e)E(t.condition,n)&&(r.includes(t.item_id)||(r=[...r,t.item_id]));return{...t,inventory:r}}function ie(e,t){return{...t,inventory:t.inventory.filter(t=>t!==e)}}function ae(e,t,n){let r=n.items[e];if(!r||!r.usable)return!1;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId};return E(r.use_condition,i)}function oe(e,t,n){let r=n.items[e];if(!r||!r.usable)return{newState:t,sceneId:null};let i=t;return r.stackable||(i=ie(e,t)),{newState:i,sceneId:r.use_scene??null}}function D(e,t,n){let r=n.scenes[e];if(!r)return console.warn(`[SceneEngine] Scene not found: ${e}`),t;let i={...t,currentSceneId:e,currentMessageIndex:0,phase:`message`};return r.location_id&&r.location_id!==t.currentLocationId&&(i={...i,currentLocationId:r.location_id}),r.characters!==void 0&&(i={...i,currentCharacters:r.characters}),r.messages[0]?.characters!==void 0&&(i={...i,currentCharacters:r.messages[0].characters}),i={...i,flags:ne(r.flags_set,i.flags)},i=re(r.item_give,i),i}function se(e,t){let n=t.scenes[e.currentSceneId];if(!n)return e;let r=e.currentMessageIndex+1;if(r<n.messages.length){let t=n.messages[r],i={...e,currentMessageIndex:r};return t.characters===void 0?i:{...i,currentCharacters:t.characters}}return ce(e,n,t)}function ce(e,t,n){let r=t.branches;if(r?.type===`choice`&&r.choices&&r.choices.length>0){let t={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId},i=r.choices.filter(e=>E(e.condition,t));return i.length===1&&i[0].next_scene?D(i[0].next_scene,e,n):{...e,phase:`choice`}}if(r?.type===`auto`&&r.choices){let t={flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId};for(let i of r.choices)if(E(i.condition,t))return i.next_scene?D(i.next_scene,e,n):O(e,n);return O(e,n)}return t.next_scene?D(t.next_scene,e,n):t.next_scene===null?O(e,n):k(e,t,n)}function le(e,t,n){let r=n.scenes[t.currentSceneId];if(!r?.branches?.choices)return t;let i={flags:t.flags,inventory:t.inventory,locationId:t.currentLocationId},a=r.branches.choices.filter(e=>E(e.condition,i))[e];return a?a.next_scene?D(a.next_scene,t,n):O(t,n):t}function O(e,t){if(e.sceneHistory.length===0)return k(e,t.scenes[e.currentSceneId],t);let n=[...e.sceneHistory],r=n.pop();return t.scenes[r],{...e,currentSceneId:r,currentMessageIndex:0,sceneHistory:n,phase:`command`}}function k(e,t,n){return{...e,phase:`command`}}function A(e,t){return{...t,sceneHistory:[...t.sceneHistory,e]}}function ue(e,t,n){return(e?.commands??t?.default_commands??Object.keys(n.commands)).map(e=>n.commands[e]).filter(e=>!!e)}function de(e,t,n){let r=n.commands[e];if(!r)return{newPhase:t.phase};switch(r.action_type){case`examine`:return{newPhase:`examine`};case`move`:return{newPhase:`map`};case`inventory`:return{newPhase:`inventory`};case`talk`:{let e=n.scenes[t.currentSceneId],r=fe(t.currentLocationId,n);return r?{newPhase:`message`,transitionSceneId:r}:e?.characters&&e.characters.length>0?{newPhase:`message`,transitionSceneId:`scene_talk_${e.characters[0].character_id}`}:{newPhase:`command`}}case`system`:return{newPhase:`system_menu`};default:return{newPhase:t.phase}}}function fe(e,t){let n=`scene_talk_${e.replace(`loc_`,``)}`;return t.scenes[n]?n:Object.keys(t.scenes).filter(n=>n.startsWith(`scene_talk_`)&&t.scenes[n].location_id===e)[0]??null}function pe(e,t,n){let r=n.locations[e];if(!r)return[];let i={flags:t.flags,inventory:t.inventory,locationId:e};return r.connections.filter(e=>E(e.condition,i))}function me(e,t,n){let r=n.locations[e];if(!r)return t;let i={...t,currentLocationId:e,sceneHistory:[],phase:`message`};return D(r.entry_scene,i,n)}function j(e){return{currentSceneId:p,currentLocationId:m,currentMessageIndex:0,flags:te(e.flags),inventory:[],sceneHistory:[],phase:`title`,currentCharacters:[]}}var M=f((e,t)=>{let n=T();return{state:j(n),masterData:n,playtimeStart:Date.now(),startNewGame:()=>{let n=t().masterData;e({state:D(p,{...j(n),phase:`message`},n),playtimeStart:Date.now()})},loadGame:t=>{e({state:{currentSceneId:t.currentSceneId,currentLocationId:t.currentLocationId,currentMessageIndex:0,flags:t.flags,inventory:t.inventory,sceneHistory:t.sceneHistory,phase:`command`,currentCharacters:t.currentCharacters??[]},playtimeStart:Date.now()-t.playtime*1e3})},toSaveData:()=>{let{state:e,playtimeStart:n}=t();return{version:1,timestamp:Date.now(),currentSceneId:e.currentSceneId,currentLocationId:e.currentLocationId,flags:e.flags,inventory:e.inventory,sceneHistory:e.sceneHistory,currentCharacters:e.currentCharacters,playtime:Math.floor((Date.now()-n)/1e3)}},advanceMessage:()=>{let{state:n,masterData:r}=t();n.phase===`message`&&e({state:se(n,r)})},selectChoice:n=>{let{state:r,masterData:i}=t();r.phase===`choice`&&e({state:le(n,r,i)})},executeCommand:n=>{let{state:r,masterData:i}=t();if(r.phase!==`command`)return;let a=de(n,r,i);if(a.transitionSceneId){let t=A(r.currentSceneId,r);e({state:D(a.transitionSceneId,t,i)})}else e({state:{...r,phase:a.newPhase}})},moveToLocation:n=>{let{state:r,masterData:i}=t();e({state:me(n,r,i)})},clickArea:n=>{let{state:r,masterData:i}=t();if(r.phase!==`examine`)return;let a=i.scenes[r.currentSceneId]?.clickable_areas?.find(e=>e.id===n);if(!a)return;let o={flags:r.flags,inventory:r.inventory,locationId:r.currentLocationId};if(!E(a.condition,o))return;let s=A(r.currentSceneId,r);e({state:D(a.next_scene,s,i)})},useItem:n=>{let{state:r,masterData:i}=t(),{newState:a,sceneId:o}=oe(n,r,i);e(o?{state:D(o,A(r.currentSceneId,{...a,phase:`command`}),i)}:{state:a})},closeOverlay:()=>{e(e=>({state:{...e.state,phase:`command`}}))},goToTitle:()=>{e(e=>({state:{...e.state,phase:`title`}}))}}}),he=class{prefix=`novel_`;key(e){return`${this.prefix}${e}`}setItem(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{console.warn(`[LocalStorage] Failed to save:`,e)}}getItem(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}async save(e,t){this.setItem(this.key(`save_${e}`),t)}async load(e){let t=this.getItem(this.key(`save_${e}`));return!t||t.version!==1?null:t}async deleteSave(e){localStorage.removeItem(this.key(`save_${e}`))}async listSaves(){return Array.from({length:3},(e,t)=>{let n=this.getItem(this.key(`save_${t+1}`));return!n||n.version!==1?null:{slotId:t+1,data:n}})}async saveSettings(e){this.setItem(this.key(`settings`),e)}async loadSettings(){return this.getItem(this.key(`settings`))}async autoSave(e){this.setItem(this.key(`autosave`),e)}async loadAutoSave(){let e=this.getItem(this.key(`autosave`));return!e||e.version!==1?null:e}};function ge(e){switch(e??void 0??`localStorage`){default:return new he}}var N=null;function P(){return N||=ge(),N}var F={btn:`_btn_jkuam_1`,btnLarge:`_btnLarge_jkuam_29`,btnSmall:`_btnSmall_jkuam_34`},I=i();function L({label:e,onClick:t,disabled:n,size:r=`normal`}){let i=r===`large`?F.btnLarge:r===`small`?F.btnSmall:``;return(0,I.jsx)(`button`,{className:`${F.btn} ${i}`,onClick:t,disabled:n,children:e})}var R={overlay:`_overlay_2rhas_1`,box:`_box_2rhas_11`,title:`_title_2rhas_23`,closeBtn:`_closeBtn_2rhas_32`};function z({title:e,onClose:t,children:n}){return(0,I.jsx)(`div`,{className:R.overlay,onClick:t,children:(0,I.jsxs)(`div`,{className:R.box,onClick:e=>e.stopPropagation(),children:[t&&(0,I.jsx)(`button`,{className:R.closeBtn,onClick:t,children:`×`}),e&&(0,I.jsx)(`div`,{className:R.title,children:e}),n]})})}var B={slots:`_slots_1la7k_1`,slot:`_slot_1la7k_1`,slotInfo:`_slotInfo_1la7k_17`,slotLabel:`_slotLabel_1la7k_21`,slotData:`_slotData_1la7k_27`,slotEmpty:`_slotEmpty_1la7k_32`,slotActions:`_slotActions_1la7k_38`,tabs:`_tabs_1la7k_43`,tab:`_tab_1la7k_43`,tabActive:`_tabActive_1la7k_60`};function V({onSave:e,onLoad:t,onClose:n}){let[r,i]=(0,a.useState)(`save`),[o,s]=(0,a.useState)([]);(0,a.useEffect)(()=>{P().listSaves().then(s)},[]);async function c(t){await e(t),s(await P().listSaves())}function l(e){return new Date(e).toLocaleString(`ja-JP`,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}return(0,I.jsxs)(z,{title:`セーブ / ロード`,onClose:n,children:[(0,I.jsxs)(`div`,{className:B.tabs,children:[(0,I.jsx)(`button`,{className:`${B.tab} ${r===`save`?B.tabActive:``}`,onClick:()=>i(`save`),children:`セーブ`}),(0,I.jsx)(`button`,{className:`${B.tab} ${r===`load`?B.tabActive:``}`,onClick:()=>i(`load`),children:`ロード`})]}),(0,I.jsx)(`div`,{className:B.slots,children:Array.from({length:3},(e,i)=>{let a=i+1,s=o[i]??null;return(0,I.jsxs)(`div`,{className:B.slot,children:[(0,I.jsxs)(`div`,{className:B.slotInfo,children:[(0,I.jsxs)(`div`,{className:B.slotLabel,children:[`スロット `,a]}),s?(0,I.jsxs)(`div`,{className:B.slotData,children:[l(s.data.timestamp),`プレイ時間: `,Math.floor(s.data.playtime/60),`分`]}):(0,I.jsx)(`div`,{className:B.slotEmpty,children:`データなし`})]}),(0,I.jsxs)(`div`,{className:B.slotActions,children:[r===`save`&&(0,I.jsx)(L,{label:`セーブ`,size:`small`,onClick:()=>c(a)}),r===`load`&&s&&(0,I.jsx)(L,{label:`ロード`,size:`small`,onClick:()=>{t(s.data),n()}})]})]},a)})})]})}var H={root:`_root_1vdcg_1`,title:`_title_1vdcg_12`,subtitle:`_subtitle_1vdcg_20`,actions:`_actions_1vdcg_28`};function _e({onNewGame:e,onLoad:t}){let[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{P().listSaves().then(e=>o(e.some(Boolean)))},[]);async function s(e){}return(0,I.jsxs)(`div`,{className:H.root,children:[(0,I.jsx)(`h1`,{className:H.title,children:`ノベルゲーム`}),(0,I.jsx)(`p`,{className:H.subtitle,children:`NOVEL GAME`}),(0,I.jsxs)(`div`,{className:H.actions,children:[(0,I.jsx)(L,{label:`はじめから`,size:`large`,onClick:e}),i&&(0,I.jsx)(L,{label:`続きから`,size:`large`,onClick:()=>r(!0)})]}),n&&(0,I.jsx)(V,{onSave:s,onLoad:e=>{r(!1),t(e)},onClose:()=>r(!1)})]})}var U=new class{bgmAudio=null;voiceAudio=null;playBgm(e,t=!0,n=.8){this.bgmAudio&&this.bgmAudio.pause();let r=new Audio(e);r.loop=t,r.volume=n,r.play().catch(()=>{}),this.bgmAudio=r}stopBgm(){this.bgmAudio&&=(this.bgmAudio.pause(),null)}setBgmVolume(e){this.bgmAudio&&(this.bgmAudio.volume=Math.max(0,Math.min(1,e)))}async playVoice(e,t=.9,n){this.voiceAudio&&this.voiceAudio.pause();let r=new Audio(e);r.volume=t,this.voiceAudio=r,n&&r.addEventListener(`ended`,n,{once:!0}),console.log(`[AudioManager] playVoice:`,e.slice(0,60)),await r.play().catch(e=>console.warn(`[AudioManager] play failed:`,e))}stopVoice(){this.voiceAudio&&=(this.voiceAudio.pause(),null)}playSe(e,t=.8){let n=new Audio(e);n.volume=t,n.play().catch(()=>{})}},ve=f(e=>({settings:h,updateSettings:t=>e(e=>({settings:{...e.settings,...t}}))})),W={root:`_root_1f6bz_1`,img:`_img_1f6bz_9`,fallback:`_fallback_1f6bz_15`,locationName:`_locationName_1f6bz_23`};function ye({backgroundPath:e,locationName:t}){let[n,r]=(0,a.useState)(!1),i=e?`/dojonovel/assets/${e}`:null;return(0,a.useEffect)(()=>{r(!1)},[i]),(0,I.jsx)(`div`,{className:W.root,children:i&&!n?(0,I.jsx)(`img`,{className:W.img,src:i,alt:``,onError:()=>r(!0)}):(0,I.jsx)(`div`,{className:W.fallback,children:t&&(0,I.jsx)(`span`,{className:W.locationName,children:t})})})}var G={root:`_root_xnuhq_1`,left:`_left_xnuhq_7`,center:`_center_xnuhq_11`,right:`_right_xnuhq_16`,img:`_img_xnuhq_20`,placeholder:`_placeholder_xnuhq_24`,placeholderName:`_placeholderName_xnuhq_35`};function be({display:e,character:t,isSpeaking:n}){let[r,i]=(0,a.useState)(!1),o=n&&t.sprites?.talking?`talking`:e.expression,s=t.sprites?.[o]??t.sprites?.normal,c=s?`/dojonovel/assets/${s}`:null,l=e.position===`left`?G.left:e.position===`right`?G.right:G.center,u=120+(e.y_offset??t.y_offset??0);return(0,I.jsx)(`div`,{className:`${G.root} ${l}`,style:{bottom:`${u}px`},children:c&&!r?(0,I.jsx)(`img`,{className:G.img,src:c,alt:t.name,onError:()=>i(!0)}):(0,I.jsx)(`div`,{className:G.placeholder,children:(0,I.jsx)(`span`,{className:G.placeholderName,children:t.name})})})}var xe={root:`_root_2afjl_1`};function Se({text:e,speed:t,onComplete:n,instant:r}){let[i,o]=(0,a.useState)(``),[s,c]=(0,a.useState)(!1),l=(0,a.useRef)(null),u=(0,a.useRef)(0);return(0,a.useEffect)(()=>{if(o(``),c(!1),u.current=0,r||t===0){o(e),c(!0),n?.();return}let i=Math.max(1,Math.floor(1e3/t));return l.current=setInterval(()=>{u.current+=1,o(e.slice(0,u.current)),u.current>=e.length&&(clearInterval(l.current),c(!0),n?.())},i),()=>{l.current&&clearInterval(l.current)}},[e,t,r]),(0,I.jsx)(`span`,{className:xe.root,children:i})}var Ce={baseUrl:`http://localhost:50021`,enabled:!0,prebuiltOnly:!0},we=new class{config;constructor(e=Ce){this.config=e}async isAvailable(){if(this.config.prebuiltOnly)return!1;try{return(await fetch(`${this.config.baseUrl}/version`,{signal:AbortSignal.timeout(1e3)})).ok}catch{return!1}}async synthesize(e,t){if(!this.config.enabled||this.config.prebuiltOnly)return null;try{let n=await fetch(`${this.config.baseUrl}/audio_query?text=${encodeURIComponent(e)}&speaker=${t}`,{method:`POST`});if(!n.ok)return null;let r=await n.json(),i=await fetch(`${this.config.baseUrl}/synthesis?speaker=${t}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(r)});return i.ok?i.arrayBuffer():null}catch{return null}}};async function Te(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-1`,t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Ee(e,t){return Te(`${e}_${t}`)}var K=new Map;function De(){let e=(0,a.useRef)(!1);return{speak:(0,a.useCallback)(async(t,n,r)=>{if(console.log(`[Voicevox] speak called:`,{character:n?.id,speakerId:n?.voicevox_speaker_id,voiceCharId:t.voice_character_id}),!n?.voicevox_speaker_id||!t.voice_character_id)return;let i=n.voicevox_speaker_id,a=t.text;e.current=!0;try{let e=await Ee(a,i);if(console.log(`[Voicevox] synthesizing:`,{text:a,speakerId:i,hashKey:e}),K.has(e)){console.log(`[Voicevox] cache hit`),await U.playVoice(K.get(e),.9,r);return}let t=`/dojonovel/assets/voicevox/${e}.wav`,n=await fetch(t,{method:`HEAD`}).catch(()=>null);if(n?.ok&&n.headers.get(`content-type`)?.startsWith(`audio/`)){console.log(`[Voicevox] prebuilt hit`),K.set(e,t),await U.playVoice(t,.9,r);return}console.log(`[Voicevox] calling engine...`);let o=await we.synthesize(a,i);if(!o){console.warn(`[Voicevox] synthesize returned null (engine not running?)`);return}console.log(`[Voicevox] playing synthesized audio`);let s=new Blob([o],{type:`audio/wav`}),c=URL.createObjectURL(s);K.set(e,c),await U.playVoice(c,.9,r)}finally{e.current=!1}},[]),stop:(0,a.useCallback)(()=>{U.stopVoice()},[])}}var q={root:`_root_448af_1`,nameplate:`_nameplate_448af_10`,box:`_box_448af_22`,boxNarration:`_boxNarration_448af_32`,text:`_text_448af_42`,textNarration:`_textNarration_448af_48`,arrow:`_arrow_448af_55`,blink:`_blink_448af_1`};function Oe({message:e,speaker:t,textSpeed:n,onAdvance:r,onSpeakingChange:i}){let[o,s]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1),{speak:u,stop:d}=De();(0,a.useEffect)(()=>{s(!1),l(!1),u(e,t,()=>i?.(!1)),i?.(!0)},[e.text]);function f(){o?(d(),r()):(d(),l(!0),s(!0),i?.(!1))}let p=t?.name??null,m=!p;return(0,I.jsxs)(`div`,{className:q.root,children:[p&&(0,I.jsx)(`div`,{className:q.nameplate,children:p}),(0,I.jsxs)(`div`,{className:m?q.boxNarration:q.box,onClick:f,children:[(0,I.jsx)(`div`,{className:m?q.textNarration:q.text,children:(0,I.jsx)(Se,{text:e.text,speed:n,instant:c,onComplete:()=>s(!0)})}),o&&(0,I.jsx)(`span`,{className:q.arrow,children:`▼`})]})]})}var J={root:`_root_13pfy_1`,box:`_box_13pfy_10`,choice:`_choice_13pfy_20`};function ke({choices:e,flags:t,inventory:n,locationId:r,onSelect:i}){let a={flags:t,inventory:n,locationId:r},o=e.map((e,t)=>({choice:e,originalIndex:t})).filter(({choice:e})=>E(e.condition,a));return(0,I.jsx)(`div`,{className:J.root,children:(0,I.jsx)(`div`,{className:J.box,children:o.map(({choice:e,originalIndex:t})=>(0,I.jsx)(`button`,{className:J.choice,onClick:()=>i(t),children:e.label},t))})})}var Y={root:`_root_1l2ff_1`,commands:`_commands_1l2ff_12`,cmd:`_cmd_1l2ff_19`};function Ae({commands:e,onSelect:t}){return(0,I.jsx)(`div`,{className:Y.root,children:(0,I.jsx)(`div`,{className:Y.commands,children:e.map(e=>(0,I.jsx)(`button`,{className:Y.cmd,onClick:()=>t(e.id),title:e.description,children:e.label},e.id))})})}var X={root:`_root_13hn2_1`,area:`_area_13hn2_7`,label:`_label_13hn2_23`,hint:`_hint_13hn2_32`,closeBtn:`_closeBtn_13hn2_44`};function je({areas:e,flags:t,inventory:n,locationId:r,onClick:i,onClose:a}){let o={flags:t,inventory:n,locationId:r};return(0,I.jsxs)(`div`,{className:X.root,children:[(0,I.jsx)(`div`,{className:X.hint,children:`調べる場所をクリックしてください`}),e.filter(e=>E(e.condition,o)).map(e=>(0,I.jsx)(`div`,{className:X.area,style:{left:e.x,top:e.y,width:e.width,height:e.height},onClick:()=>i(e.id),children:(0,I.jsx)(`span`,{className:X.label,children:e.label})},e.id)),(0,I.jsx)(`button`,{className:X.closeBtn,onClick:a,children:`閉じる`})]})}var Z={list:`_list_jaxq_1`,item:`_item_jaxq_8`,empty:`_empty_jaxq_26`};function Me({connections:e,onMove:t,onClose:n}){return(0,I.jsx)(z,{title:`移動先を選択`,onClose:n,children:(0,I.jsx)(`div`,{className:Z.list,children:e.length===0?(0,I.jsx)(`p`,{className:Z.empty,children:`移動できる場所がありません`}):e.map(e=>(0,I.jsx)(`button`,{className:Z.item,onClick:()=>t(e.location_id),children:e.label},e.location_id))})})}var Q={card:`_card_ryqrj_1`,cardSelected:`_cardSelected_ryqrj_16`,icon:`_icon_ryqrj_21`,iconPlaceholder:`_iconPlaceholder_ryqrj_27`,name:`_name_ryqrj_38`};function Ne({item:e,selected:t,onClick:n}){let[r,i]=(0,a.useState)(!1),o=e.icon?`/dojonovel/assets/${e.icon}`:null;return(0,I.jsxs)(`div`,{className:`${Q.card} ${t?Q.cardSelected:``}`,onClick:n,children:[o&&!r?(0,I.jsx)(`img`,{className:Q.icon,src:o,alt:e.name,onError:()=>i(!0)}):(0,I.jsx)(`div`,{className:Q.iconPlaceholder,children:`📦`}),(0,I.jsx)(`span`,{className:Q.name,children:e.name})]})}var $={grid:`_grid_1aak1_1`,empty:`_empty_1aak1_9`,detail:`_detail_1aak1_18`,detailName:`_detailName_1aak1_24`,detailDesc:`_detailDesc_1aak1_30`,actions:`_actions_1aak1_37`};function Pe({state:e,masterData:t,onUse:n,onClose:r}){let[i,o]=(0,a.useState)(null),s=e.inventory.map(e=>t.items[e]).filter(e=>!!e),c=i?t.items[i]:null;return(0,I.jsxs)(z,{title:`持ち物`,onClose:r,children:[(0,I.jsx)(`div`,{className:$.grid,children:s.length===0?(0,I.jsx)(`p`,{className:$.empty,children:`何も持っていない`}):s.map(e=>(0,I.jsx)(Ne,{item:e,selected:e.id===i,onClick:()=>o(e.id===i?null:e.id)},e.id))}),c&&(0,I.jsxs)(`div`,{className:$.detail,children:[(0,I.jsx)(`div`,{className:$.detailName,children:c.name}),(0,I.jsx)(`div`,{className:$.detailDesc,children:c.description}),(0,I.jsxs)(`div`,{className:$.actions,children:[c.usable&&(0,I.jsx)(L,{label:`使う`,disabled:!ae(c.id,e,t),onClick:()=>{n(c.id),r()}}),(0,I.jsx)(L,{label:`閉じる`,onClick:r,size:`small`})]})]})]})}var Fe={btn:`_btn_c2o6e_1`,menuList:`_menuList_c2o6e_22`};function Ie({onGetSaveData:e,onLoad:t,onTitle:n}){let[r,i]=(0,a.useState)(!1),[o,s]=(0,a.useState)(!1);async function c(t){await P().save(t,e())}return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`button`,{className:Fe.btn,onClick:()=>i(!0),children:`MENU`}),r&&!o&&(0,I.jsx)(z,{title:`システムメニュー`,onClose:()=>i(!1),children:(0,I.jsxs)(`div`,{className:Fe.menuList,children:[(0,I.jsx)(L,{label:`セーブ / ロード`,onClick:()=>s(!0)}),(0,I.jsx)(L,{label:`タイトルへ戻る`,onClick:()=>{i(!1),n()}}),(0,I.jsx)(L,{label:`閉じる`,onClick:()=>i(!1),size:`small`})]})}),r&&o&&(0,I.jsx)(V,{onSave:c,onLoad:e=>{t(e),s(!1),i(!1)},onClose:()=>s(!1)})]})}var Le={root:`_root_1c0ks_1`};function Re(){let{state:e,masterData:t,advanceMessage:n,selectChoice:r,executeCommand:i,moveToLocation:o,clickArea:s,useItem:c,closeOverlay:l,goToTitle:u,toSaveData:d,loadGame:f}=M(),{settings:p}=ve(),m=t.scenes[e.currentSceneId],h=t.locations[e.currentLocationId],g=m?.messages[e.currentMessageIndex],_=g?.voice_character_id,v=_?t.characters[_]??null:null,ee=ue(m,h,t),y=pe(e.currentLocationId,e,t),b=m?.branches?.choices??[],[x,S]=(0,a.useState)(!1),C=g?.voice_character_id??null,w=x&&e.phase===`message`,T=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=m?.bgm;!e||e===T.current||(T.current=e,U.playBgm(`/dojonovel/assets/${e}`,!0,p.bgmVolume))},[m?.bgm]),(0,a.useEffect)(()=>{e.phase===`title`&&(U.stopBgm(),T.current=null)},[e.phase]),(0,I.jsxs)(`div`,{className:Le.root,children:[(0,I.jsx)(ye,{backgroundPath:m?.background,locationName:h?.name}),e.currentCharacters.map(e=>{let n=t.characters[e.character_id];return n?(0,I.jsx)(be,{display:e,character:n,isSpeaking:w&&e.character_id===C},e.character_id):null}),e.phase===`examine`&&m?.clickable_areas&&(0,I.jsx)(je,{areas:m.clickable_areas,flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId,onClick:s,onClose:l}),e.phase===`message`&&g&&(0,I.jsx)(Oe,{message:g,speaker:v,textSpeed:p.textSpeed,onAdvance:n,onSpeakingChange:S}),e.phase===`choice`&&(0,I.jsx)(ke,{choices:b,flags:e.flags,inventory:e.inventory,locationId:e.currentLocationId,onSelect:r}),e.phase===`command`&&(0,I.jsx)(Ae,{commands:ee,onSelect:i}),e.phase===`map`&&(0,I.jsx)(Me,{connections:y,onMove:o,onClose:l}),e.phase===`inventory`&&(0,I.jsx)(Pe,{state:e,masterData:t,onUse:c,onClose:l}),(0,I.jsx)(Ie,{onGetSaveData:d,onLoad:f,onTitle:u})]})}function ze(){let{state:e,startNewGame:t,loadGame:n}=M();return(0,I.jsx)(`div`,{className:`app-wrapper`,children:(0,I.jsx)(`div`,{className:`game-container`,children:e.phase===`title`?(0,I.jsx)(_e,{onNewGame:t,onLoad:n}):(0,I.jsx)(Re,{})})})}(0,o.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(a.StrictMode,{children:(0,I.jsx)(ze,{})}));