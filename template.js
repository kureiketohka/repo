function header() {
    document.write('<header><img src="/repo/home_img/city_rogo.png" alt="市のマーク" width=6.5%><b>&nbsp;東揚羽市</b></header>');
}


function footer() {
    $footer = '<footer>';
    $footer += '▶このホームページの内容はすべてフィクションで、実際の自治体、行事、慣習と一切関係ありません。';
    $footer += '</footer>';
    document.write($footer);
    /*
    document.write('<footer>▶このホームページの内容はすべてフィクションで、実際の自治体、行事、慣習と一切関係ありません。</footer>')
    */
}

function index(){
    $index = '<nav class="sample01">';
    $index += '<ul>';
    $index += '<li><a href="/repo/home.html">ホーム</a>';
    $index += '</li>';
    $index += '<li><a href="#">生活<span>▼</span></a>';
    $index += '<ul style="margin-left:120px">';
    $index += ' <li><a href="#">各種手続き</a></li>';
    $index += ' <li><a href="#">転入/転出</a></li>';
    $index += ' <li><a href="#">問い合わせ窓口</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '<li><a href="#">イベント<span>▼</span></a>';
    $index += '<ul style="margin-left:230px">';
    $index += ' <li><a href="#">イベントスケジュール</a></li>';
    $index += ' <li><a href="#">観光</a></li>';
    $index += ' <li><a href="#">風土/特産物</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '<li><a href="#">市について<span>▼</span></a>';
    $index += '<ul style="margin-left:376px">';
    $index += ' <li><a href="#">名産品</a></li>';
    $index += ' <li><a href="#">住民統計</a></li>';
    $index += ' <li><a href="/repo/400_about/430_geodata/geodata.html">地理データ</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '<li><a href="#">みんなのページ<span>▼</span></a>';
    $index += '<ul style="margin-left:540px">';
    $index += ' <li><a href="#">市民報</a></li>';
    $index += ' <li><a href="#">掲示板</a></li>';
    $index += ' <li><a href="#">ギャラリー</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '</ul>';
    $index += '</nav>';
    document.write($index);
}