constructor() {
    this._telephoneNumber = new TelephoneNumber();
}

get officeAreaCode()　　{return this._telephoneNumber.areaCode;}
set officeAreaCode(arg) {this._telephoneNumber.areaCode = arg;}
get officeNumber()　　{return this._telephoneNumber.number;}
set officeNumber(arg) {this._telephoneNumber.number = arg;}


get areaCode()    {return this._areaCode;}
set areaCode(arg) {this._areaCode = arg;}

get number()    {return this._number;}
set number(arg) {this._number = arg;}

// ------------------------------------------------------------------------------

constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
}

get officeAreaCode()    {return this._telephoneNumber.areaCode;}
set officeAreaCode(arg) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
}
get officeNumber()    {return this._telephoneNumber.number;}
set officeNumber(arg) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
}
// “现在，TelephoneNumber已经是不可变的类，可以将其变成真正的值对象了。是不是真正的值对象，要看是否基于值判断相等性。”
// “如果把一个字段视为值对象，我可以把内部对象的类也变成值对象[mf-vo]。值对象通常更容易理解，主要因为它们是不可变的。一般说来，不可变的数据结构处理起来更容易。”
