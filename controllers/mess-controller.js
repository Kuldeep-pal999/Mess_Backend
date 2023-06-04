import Mess from '../model/Mess.js';

 export const getAllItem = async (req, res, next) => {
    let item;
  
    try {
      item = await Mess.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!item) {
      return res.status(404).json({ message: " item is not Present" });
    }
  
    return res.status(200).json({ item });
  };

  export const getItemById = async (req, res, next) => {
    const id = req.params.id;
    let item;
    try {
      item= await Mess.findById(id);
    } catch (err) {
      console.log(err);
    }
  
    if (!item) {
      return res.status(404).json({ message: " item not found" });
    }
    return res.status(200).json({ item });
  };

  
  export  const addItem= async (req, res, next) => {
    const {
      Day1:{
      breakfast: { item1: breakfastItem1day1, item2: breakfastItem2day1, item3: breakfastItem3day1 },
      lunch: { item1: lunchItem1day1, item2: lunchItem2day1, item3: lunchItem3day1 },
      evening: { item1: eveningItem1day1, item2: eveningItem2day1, item3: eveningItem3day1 },
      dinner: { item1: dinnerItem1day1, item2: dinnerItem2day1, item3: dinnerItem3day1 }
      },
      Day2:{
        breakfast: { item1: breakfastItem1day2, item2: breakfastItem2day2, item3: breakfastItem3day2 },
        lunch: { item1: lunchItem1day2, item2: lunchItem2day2, item3: lunchItem3day2 },
        evening: { item1: eveningItem1day2, item2: eveningItem2day2, item3: eveningItem3day2 },
        dinner: { item1: dinnerItem1day2, item2: dinnerItem2day2, item3: dinnerItem3day2 }
        },
        Day3:{
          breakfast: { item1: breakfastItem1day3, item2: breakfastItem2day3, item3: breakfastItem3day3},
          lunch: { item1: lunchItem1day3, item2: lunchItem2day3, item3: lunchItem3day3 },
          evening: { item1: eveningItem1day3, item2: eveningItem2day3, item3: eveningItem3day3 },
          dinner: { item1: dinnerItem1day3, item2: dinnerItem2day3, item3: dinnerItem3day3 }
          },

          Day4:{
            breakfast: { item1: breakfastItem1day4, item2: breakfastItem2day4, item3: breakfastItem3day4},
            lunch: { item1: lunchItem1day4, item2: lunchItem2day4, item3: lunchItem3day4 },
            evening: { item1: eveningItem1day4, item2: eveningItem2day4, item3: eveningItem3day4 },
            dinner: { item1: dinnerItem1day4, item2: dinnerItem2day4, item3: dinnerItem3day4 }
            },
            Day5:{
              breakfast: { item1: breakfastItem1day5, item2: breakfastItem2day5, item3: breakfastItem3day5},
              lunch: { item1: lunchItem1day5, item2: lunchItem2day5, item3: lunchItem3day5 },
              evening: { item1: eveningItem1day5, item2: eveningItem2day5, item3: eveningItem3day5},
              dinner: { item1: dinnerItem1day5, item2: dinnerItem2day5, item3: dinnerItem3day5 }
              },  

              Day6:{
                breakfast: { item1: breakfastItem1day6, item2: breakfastItem2day6, item3: breakfastItem3day6},
                lunch: { item1: lunchItem1day6, item2: lunchItem2day6, item3: lunchItem3day6 },
                evening: { item1: eveningItem1day6, item2: eveningItem2day6, item3: eveningItem3day6},
                dinner: { item1: dinnerItem1day6, item2: dinnerItem2day6, item3: dinnerItem3day6}
                },  

                Day7:{
                  breakfast: { item1: breakfastItem1day7, item2: breakfastItem2day7, item3: breakfastItem3day7},
                  lunch: { item1: lunchItem1day7, item2: lunchItem2day7, item3: lunchItem3day7 },
                  evening: { item1: eveningItem1day7, item2: eveningItem2day7, item3: eveningItem3day7},
                  dinner: { item1: dinnerItem1day7, item2: dinnerItem2day7, item3: dinnerItem3day7}
                  },  

    } = req.body;
    let item;
  
    try {
      item = new Mess({
        Day1:{
          breakfast: {
            item1: breakfastItem1day1,
            item2: breakfastItem2day1,
            item3: breakfastItem3day1,
          },
          lunch:{
            item1: lunchItem1day1,
             item2: lunchItem2day1, 
             item3: lunchItem3day1,
          },
          evening: {
            item1: eveningItem1day1,
            item2: eveningItem2day1,
            item3: eveningItem3day1,
          },
          dinner: {
            item1: dinnerItem1day1,
            item2: dinnerItem2day1,
            item3: dinnerItem3day1,
          },
         
        },
        Day2:{
          breakfast: {
            item1: breakfastItem1day2,
            item2: breakfastItem2day2,
            item3: breakfastItem3day2,
          },
          lunch:{
            item1: lunchItem1day2,
             item2: lunchItem2day2, 
             item3: lunchItem3day2,
          },
          evening: {
            item1: eveningItem1day2,
            item2: eveningItem2day2,
            item3: eveningItem3day2,
          },
          dinner: {
            item1: dinnerItem1day2,
            item2: dinnerItem2day2,
            item3: dinnerItem3day2,
          },
         
        },
        Day3:{
          breakfast: {
            item1: breakfastItem1day3,
            item2: breakfastItem2day3,
            item3: breakfastItem3day3,
          },
          lunch:{
            item1: lunchItem1day3,
             item2: lunchItem2day3, 
             item3: lunchItem3day3,
          },
          evening: {
            item1: eveningItem1day3,
            item2: eveningItem2day3,
            item3: eveningItem3day3,
          },
          dinner: {
            item1: dinnerItem1day3,
            item2: dinnerItem2day3,
            item3: dinnerItem3day3,
          },
         
        },

        Day4:{
          breakfast: {
            item1: breakfastItem1day4,
            item2: breakfastItem2day4,
            item3: breakfastItem3day4,
          },
          lunch:{
            item1: lunchItem1day4,
             item2: lunchItem2day4, 
             item3: lunchItem3day4,
          },
          evening: {
            item1: eveningItem1day4,
            item2: eveningItem2day4,
            item3: eveningItem3day4,
          },
          dinner: {
            item1: dinnerItem1day4,
            item2: dinnerItem2day4,
            item3: dinnerItem3day4,
          },
         
        },
        Day5:{
          breakfast: {
            item1: breakfastItem1day5,
            item2: breakfastItem2day5,
            item3: breakfastItem3day5,
          },
          lunch:{
            item1: lunchItem1day5,
             item2: lunchItem2day5, 
             item3: lunchItem3day5,
          },
          evening: {
            item1: eveningItem1day5,
            item2: eveningItem2day5,
            item3: eveningItem3day5,
          },
          dinner: {
            item1: dinnerItem1day5,
            item2: dinnerItem2day5,
            item3: dinnerItem3day5,
          },
         
        },
        Day6:{
          breakfast: {
            item1: breakfastItem1day6,
            item2: breakfastItem2day6,
            item3: breakfastItem3day6,
          },
          lunch:{
            item1: lunchItem1day6,
             item2: lunchItem2day6, 
             item3: lunchItem3day6,
          },
          evening: {
            item1: eveningItem1day6,
            item2: eveningItem2day6,
            item3: eveningItem3day6,
          },
          dinner: {
            item1: dinnerItem1day6,
            item2: dinnerItem2day6,
            item3: dinnerItem3day6,
          },
         
        },
        Day7:{
          breakfast: {
            item1: breakfastItem1day7,
            item2: breakfastItem2day7,
            item3: breakfastItem3day7,
          },
          lunch:{
            item1: lunchItem1day7,
             item2: lunchItem2day7, 
             item3: lunchItem3day7,
          },
          evening: {
            item1: eveningItem1day7,
            item2: eveningItem2day7,
            item3: eveningItem3day7,
          },
          dinner: {
            item1: dinnerItem1day7,
            item2: dinnerItem2day7,
            item3: dinnerItem3day7,
          },
         
        }
      });
  
      await item.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!item) {
      return res.status(500).json({ message: "Unable to add item" });
    }
  
    return res.status(201).json({ item });
  };

  export const updateItem = async (req, res, next) => {
    const id = req.params.id;
    const {
      Day1:{
      breakfast: { item1: breakfastItem1day1, item2: breakfastItem2day1, item3: breakfastItem3day1 },
      lunch: { item1: lunchItem1day1, item2: lunchItem2day1, item3: lunchItem3day1 },
      evening: { item1: eveningItem1day1, item2: eveningItem2day1, item3: eveningItem3day1 },
      dinner: { item1: dinnerItem1day1, item2: dinnerItem2day1, item3: dinnerItem3day1 }
      },
      Day2:{
        breakfast: { item1: breakfastItem1day2, item2: breakfastItem2day2, item3: breakfastItem3day2 },
        lunch: { item1: lunchItem1day2, item2: lunchItem2day2, item3: lunchItem3day2 },
        evening: { item1: eveningItem1day2, item2: eveningItem2day2, item3: eveningItem3day2 },
        dinner: { item1: dinnerItem1day2, item2: dinnerItem2day2, item3: dinnerItem3day2 }
        },
        Day3:{
          breakfast: { item1: breakfastItem1day3, item2: breakfastItem2day3, item3: breakfastItem3day3},
          lunch: { item1: lunchItem1day3, item2: lunchItem2day3, item3: lunchItem3day3 },
          evening: { item1: eveningItem1day3, item2: eveningItem2day3, item3: eveningItem3day3 },
          dinner: { item1: dinnerItem1day3, item2: dinnerItem2day3, item3: dinnerItem3day3 }
          },

          Day4:{
            breakfast: { item1: breakfastItem1day4, item2: breakfastItem2day4, item3: breakfastItem3day4},
            lunch: { item1: lunchItem1day4, item2: lunchItem2day4, item3: lunchItem3day4 },
            evening: { item1: eveningItem1day4, item2: eveningItem2day4, item3: eveningItem3day4 },
            dinner: { item1: dinnerItem1day4, item2: dinnerItem2day4, item3: dinnerItem3day4 }
            },
            Day5:{
              breakfast: { item1: breakfastItem1day5, item2: breakfastItem2day5, item3: breakfastItem3day5},
              lunch: { item1: lunchItem1day5, item2: lunchItem2day5, item3: lunchItem3day5 },
              evening: { item1: eveningItem1day5, item2: eveningItem2day5, item3: eveningItem3day5},
              dinner: { item1: dinnerItem1day5, item2: dinnerItem2day5, item3: dinnerItem3day5 }
              },  

              Day6:{
                breakfast: { item1: breakfastItem1day6, item2: breakfastItem2day6, item3: breakfastItem3day6},
                lunch: { item1: lunchItem1day6, item2: lunchItem2day6, item3: lunchItem3day6 },
                evening: { item1: eveningItem1day6, item2: eveningItem2day6, item3: eveningItem3day6},
                dinner: { item1: dinnerItem1day6, item2: dinnerItem2day6, item3: dinnerItem3day6}
                },  

                Day7:{
                  breakfast: { item1: breakfastItem1day7, item2: breakfastItem2day7, item3: breakfastItem3day7},
                  lunch: { item1: lunchItem1day7, item2: lunchItem2day7, item3: lunchItem3day7 },
                  evening: { item1: eveningItem1day7, item2: eveningItem2day7, item3: eveningItem3day7},
                  dinner: { item1: dinnerItem1day7, item2: dinnerItem2day7, item3: dinnerItem3day7}
                  },  

    } = req.body;
   
    let item;
  
    try {
      item=  await Mess.findByIdAndUpdate(id, {
        Day1:{
          breakfast: {
            item1: breakfastItem1day1,
            item2: breakfastItem2day1,
            item3: breakfastItem3day1,
          },
          lunch:{
            item1: lunchItem1day1,
             item2: lunchItem2day1, 
             item3: lunchItem3day1,
          },
          evening: {
            item1: eveningItem1day1,
            item2: eveningItem2day1,
            item3: eveningItem3day1,
          },
          dinner: {
            item1: dinnerItem1day1,
            item2: dinnerItem2day1,
            item3: dinnerItem3day1,
          },
         
        },
        Day2:{
          breakfast: {
            item1: breakfastItem1day2,
            item2: breakfastItem2day2,
            item3: breakfastItem3day2,
          },
          lunch:{
            item1: lunchItem1day2,
             item2: lunchItem2day2, 
             item3: lunchItem3day2,
          },
          evening: {
            item1: eveningItem1day2,
            item2: eveningItem2day2,
            item3: eveningItem3day2,
          },
          dinner: {
            item1: dinnerItem1day2,
            item2: dinnerItem2day2,
            item3: dinnerItem3day2,
          },
         
        },
        Day3:{
          breakfast: {
            item1: breakfastItem1day3,
            item2: breakfastItem2day3,
            item3: breakfastItem3day3,
          },
          lunch:{
            item1: lunchItem1day3,
             item2: lunchItem2day3, 
             item3: lunchItem3day3,
          },
          evening: {
            item1: eveningItem1day3,
            item2: eveningItem2day3,
            item3: eveningItem3day3,
          },
          dinner: {
            item1: dinnerItem1day3,
            item2: dinnerItem2day3,
            item3: dinnerItem3day3,
          },
         
        },

        Day4:{
          breakfast: {
            item1: breakfastItem1day4,
            item2: breakfastItem2day4,
            item3: breakfastItem3day4,
          },
          lunch:{
            item1: lunchItem1day4,
             item2: lunchItem2day4, 
             item3: lunchItem3day4,
          },
          evening: {
            item1: eveningItem1day4,
            item2: eveningItem2day4,
            item3: eveningItem3day4,
          },
          dinner: {
            item1: dinnerItem1day4,
            item2: dinnerItem2day4,
            item3: dinnerItem3day4,
          },
         
        },
        Day5:{
          breakfast: {
            item1: breakfastItem1day5,
            item2: breakfastItem2day5,
            item3: breakfastItem3day5,
          },
          lunch:{
            item1: lunchItem1day5,
             item2: lunchItem2day5, 
             item3: lunchItem3day5,
          },
          evening: {
            item1: eveningItem1day5,
            item2: eveningItem2day5,
            item3: eveningItem3day5,
          },
          dinner: {
            item1: dinnerItem1day5,
            item2: dinnerItem2day5,
            item3: dinnerItem3day5,
          },
         
        },
        Day6:{
          breakfast: {
            item1: breakfastItem1day6,
            item2: breakfastItem2day6,
            item3: breakfastItem3day6,
          },
          lunch:{
            item1: lunchItem1day6,
             item2: lunchItem2day6, 
             item3: lunchItem3day6,
          },
          evening: {
            item1: eveningItem1day6,
            item2: eveningItem2day6,
            item3: eveningItem3day6,
          },
          dinner: {
            item1: dinnerItem1day6,
            item2: dinnerItem2day6,
            item3: dinnerItem3day6,
          },
         
        },
        Day7:{
          breakfast: {
            item1: breakfastItem1day7,
            item2: breakfastItem2day7,
            item3: breakfastItem3day7,
          },
          lunch:{
            item1: lunchItem1day7,
             item2: lunchItem2day7, 
             item3: lunchItem3day7,
          },
          evening: {
            item1: eveningItem1day7,
            item2: eveningItem2day7,
            item3: eveningItem3day7,
          },
          dinner: {
            item1: dinnerItem1day7,
            item2: dinnerItem2day7,
            item3: dinnerItem3day7,
          },
         
        }
      });
  
      await item.save();
    } catch (err) {
      console.log(err);
    }
  if (!item) {
    return res.status(404).json({ message: "Unable to update item" });
  }

  return res.status(200).json({ message:"Item updated"});
};

export const deleteItem = async(req,res,next) => {

    const id = req.params.id;
    let item ;
    try{
        item= await Mess.findByIdAndRemove(id);
    } catch(err){
        console.log(err);
    }
    if (!item) {
        return res.status(404).json({ message: "Unable to delete student" });
      }
    
      return res.status(200).json({ message:"Student Successfully deleted" });
};


