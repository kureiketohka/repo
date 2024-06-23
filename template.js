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
    $index += ' <li><a href="/repo/200_life/210_procedure/procedure.html">各種手続き</a></li>';
    $index += ' <li><a href="/repo/200_life/220_query/query.html">問い合わせ窓口</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '<li><a href="#">イベント<span>▼</span></a>';
    $index += '<ul style="margin-left:230px">';
    $index += ' <li><a href="/repo/300_event/310_schedule/schedule.html">イベントスケジュール</a></li>';
    $index += ' <li><a href="/repo/300_event/320_sightseeing/sightseeing.html">観光</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '<li><a href="#">市について<span>▼</span></a>';
    $index += '<ul style="margin-left:376px">';
    $index += ' <li><a href="/repo/400_about/410_specialty/specialty.html">名産品</a></li>';
    $index += ' <li><a href="/repo/400_about/420_civildata/civildata.html">住民統計</a></li>';
    $index += ' <li><a href="/repo/400_about/430_geodata/geodata.html">地理データ</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '<li><a href="#">みんなのページ<span>▼</span></a>';
    $index += '<ul style="margin-left:540px">';
    $index += ' <li><a href="/repo/500_community/510_civilnews/civilnews_top.html">市民報</a></li>';
    $index += ' <li><a href="/repo/500_community/520_bord/bord_top.html">掲示板</a></li>';
    $index += ' <li><a href="/repo/500_community/530_gallery/gallery_top.html">ギャラリー</a></li>';
    $index += '</ul>';
    $index += '</li>';
    $index += '</ul>';
    $index += '</nav>';
    document.write($index);
}