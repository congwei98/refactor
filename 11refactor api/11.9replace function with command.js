// “将函数封装成自己的对象，有时也是一种有用的办法。这样的对象我称之为“命令对象”（command object），或者简称“命令”（command）。”
function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
}

function score(candidate, medicalExam, scoringGuide) {
    return new Scorer().execute(candidate, medicalExam, scoringGuide);
}

class Scorer {
    execute(candidate, medicalExam, scoringGuide) {
        let result = 0;
        let healthLevel = 0;
        let highMedicalRiskFlag = false;

        if (medicalExam.isSmoker) {
            healthLevel += 10;
            highMedicalRiskFlag = true;
        }
        let certificationGrade = "regular";
        if (scoringGuide.stateWithLowCertification(candidate.originState)) {
            certificationGrade = "low";
            result -= 5;
        }
        // lots more code like this
        result -= Math.max(healthLevel - 5, 0);
        return result;
    }
}

// “大多数时候，我更愿意在命令对象的构造函数中传入参数，而不让execute函数接收参数。在这样一个简单的拆解场景中，这一点带来的影响不大；
// 但如果我要处理的命令需要更复杂的参数设置周期或者大量定制，上述做法就会带来很多便利：多个命令类可以分别从各自的构造函数中获得各自不同的参数，
// 然后又可以排成队列挨个执行，因为它们的execute函数签名都一样。”


class Scorer {
    _result;
    _healthLevel;
    _highMedicalRiskFlag;
    _certificationGrade;
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }

    execute() {
        this._result = 0;
        this._healthLevel = 0;
        this._highMedicalRiskFlag = false;

        if (this._medicalExam.isSmoker) {
            this._healthLevel += 10;
            this._highMedicalRiskFlag = true;
        }
        this._certificationGrade = "regular";
        if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            this._certificationGrade = "low";
            this._result -= 5;
        }
        // lots more code like this
        this._result -= Math.max(this._healthLevel - 5, 0);
        return this._result;
    }
}
