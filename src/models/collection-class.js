//we use collection to stop repeating ourself 

class Collection{
  constructor(model) {
    this.model = model;
}
  //------------------------------------------------------------
//create record
  
  async createRecord(obj) {
    console.log('ssssssssssssssssssss', this.model)
    try {
        return await this.model.create(obj);
    } catch (e) {
        console.error('error cant creat record for model: ', this.model.name);
    }
  }
  //------------------------------------------------------------
//read record
  async readRecord(id) {
    try {
        if (id) {
            return await this.model.findOne({ where: { id: id } })
        } else {
            return await this.model.findAll();
        }
    } catch (e) {
        console.error('error reading record(s) for model: ', this.model.name);
    }
  }
  
//------------------------------------------------------------
//delete record
  async deleteRecord(id) {
    try {
        
            return await this.model.destroy({where:{id:id}})
        
    } catch (e) {
        console.error('error deleting record for model: ', this.model.name);
    }}
  //------------------------------------------------------------
//update record

async updateRecord(obj,id) {
  try {
    let clotheWanted =  await this.model.findOne({ where: { id: id } });    
          return await clotheWanted.update(obj)
      
  } catch (e) {
      console.error('error update record for model: ', this.model.name);
  }}

  }
  module.exports = Collection;