class TotalNutrientEntity {
  enercKcal: string;
  vitaRae: string;
  protein: string;
  tocpha: string;
  chocdf: string;
  fat: string;
  fasat: string;
  fatrn: string;
  mg: string;
  ca: string;

  constructor(
    enercKcal: string,
    vitaRae: string,
    protein: string,
    tocpha: string,
    chocdf: string,
    fat: string,
    fasat: string,
    fatrn: string,
    mg: string,
    ca: string,
  ) {
    this.enercKcal = enercKcal;
    this.vitaRae = vitaRae;
    this.protein = protein;
    this.tocpha = tocpha;
    this.chocdf = chocdf;
    this.fat = fat;
    this.fasat = fasat;
    this.fatrn = fatrn;
    this.mg = mg;
    this.ca = ca;
  }

  static create(data: any) {
    const _toFormat = (key: string) => {
      return data[key].quantity.toFixed(1);
    };

    return new TotalNutrientEntity(
      data['ENERC_KCAL'] ? `${_toFormat('ENERC_KCAL')}kcal` : '',
      data['VITA_RAE'] ? `${_toFormat('VITA_RAE')}µg` : '',
      data['PROCNT'] ? `${_toFormat('PROCNT')}g` : '',
      data['TOCPHA'] ? `${_toFormat('TOCPHA')}mg` : '',
      data['CHOCDF'] ? `${_toFormat('CHOCDF')}g` : '',
      data['FAT'] ? `${_toFormat('FAT')}g` : '',
      data['FASAT'] ? `${_toFormat('FASAT')}g` : '',
      data['FATRN'] ? `${_toFormat('FATRN')}g` : '',
      data['MG'] ? `${_toFormat('MG')}mg` : '',
      data['CA'] ? `${_toFormat('CA')}mg` : '',
    );
  }
}

export default TotalNutrientEntity;
