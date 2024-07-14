G.AddData({
    name:'Berryplant mod',
    author:'Nelvinishere',
    desc:'Plant berries in an instant.',
    engineVersion:1,
    manifest:'Bplantmani.js',
    requires:['Default dataset*'],
    sheets:{'Berrysheet':'https://file.garden/ZZekSAtrsXoIMO7N/Mod%20Image/ImprovedBerry.png'},
    func:function()
    {
new G.res ({
    name:'Berry farm',
    desc:'@provides fruits for all',
    icon:'0,1',
    cost:{'fruit':1, 'water':10, 'stick':5},
    use:{'land':1},
    req:{'plant lore':true}
});
new G.Unit({
    name:'Berry farmers',
    desc:'@Berry farmers are advanced gatherers',
    icon:'0,0',
    modes:{'slow growth':{name:'slow growth', icon:'0,1'}},
    effects:[{
        type:'convert', from:{'fruit':1, 'water':5} ,into:{'fruit':10}, every:10, mode:'slow growth'
    }]
});
        }
}) 
