// “除了“子类用得上超类的所有函数”之外，合理的继承关系还有一个重要特征：子类的所有实例都应该是超类的实例，
// 通过超类的接口来使用子类的实例应该完全不出问题。假如我有一个车模（car model）类，其中有名称、引擎大小等属性，
// 我可能想复用这些特性来表示真正的汽车（car），并在子类上添加VIN编号、制造日期等属性。然而汽车终归不是模型。
// 这是一种常见而又经常不易察觉的建模错误，我称之为“类型与实例名不符实”（type-instance homonym）[mf-tih]。”
class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    hasTag(arg) {
        return this._tags.includes(arg);
    }
}

class Scroll extends CatalogItem {
    constructor(id, title, tags, dateLastCleaned) {
        super(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }

    needsCleaning(targetDate) {
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold;
    }

    daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }

}

//------------------------------------
// “不过在使用将值对象改为引用对象（256）之前，还有一个问题需要先修好。在原来的继承结构中，Scroll类使用了CatalogItem类的id字段来保存自己的ID。
// 但如果我把CatalogItem当作引用来处理，那么透过这个引用获得的ID就应该是目录项的ID，而不是卷轴的ID。
// 也就是说，我需要在Scroll类上添加id字段，在创建Scroll对象时使用这个字段，而不是使用来自CatalogItem类的id字段。
// 这一步既可以说是搬移，也可以说是拆分。”

class Scroll {
    constructor(id, title, tags, dateLastCleaned) {
        this._id = id
        this._catalogItem = new CatalogItem(null, title, tags)
        this._lastCleaned = dateLastCleaned;
    }

    get id() {
        return this.id;
    }

    get title() {
        return this._catalogItem.title;
    }

    hasTag(aString) {
        return this._catalogItem.hasTag(aString);
    }
}

const scrolls = aDocument
    .map(record => new Scroll(record.id,
        record.catalogData.title,
        record.catalogData.tags,
        LocalDate.parse(record.lastCleaned)));

// “将值对象改为引用对象（256）的第一步是要找到或者创建一个仓库对象（repository）。我发现有一个仓库对象可以很容易地导入加载程序中，
// 这个仓库对象负责提供CatalogItem对象，并用ID作为索引。我的下一项任务就是要想办法把这个ID值放进Scroll对象的构造函数。
// 还好，输入数据中有这个值，不过之前一直被无视了，因为在使用继承的时候用不着。把这些信息都理清楚，我就可以运用改变函数声明（124），
// 把整个目录对象以及目录项的ID都作为参数传给Scroll的构造函数。”


const scrolls = aDocument
    .map(record => new Scroll(record.id,
        LocalDate.parse(record.lastCleaned),
        record.catalogData.id,
        catalog));

class Scroll {
    constructor(id, dateLastCleaned, catalogID, catalog) {
        this._id = id;
        this._catalogItem = catalog.get(catalogID);
        this._lastCleaned = dateLastCleaned;
    }
}