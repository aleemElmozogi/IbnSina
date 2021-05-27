function ToDolistData() {

    let doctors = doctorObjects



    return {
            // this loops inside doctors array
        doctorsGetter : function (){
            return doctors
        
        },


        // This function returns the doctors from a specific catagory
        catagoryDoctors: function (dCatagory){
            let doctorsList= []
            for (index in doctorsGetter())
            if (doctorsGetter()[index].dCatagory === dCatagory)
            doctorsList.push(doctorsGetter()[index])
            
            return doctorsList
        },

        // this returns a doctor pations
        doctorAppointmentsGetter: function (objectIndex){
            return doctorsGetter()[objectIndex].appointments
            
        },

        // this find a specific doctor object index
        findDoctor:function (doctorName,doctroeCatagory) {
            var dIndex = null
            for (let index in  doctorsGetter())
            if (doctorsGetter()[index].dCatagory === doctroeCatagory) 
            if (doctorsGetter()[index].dName === doctorName)
            dIndex = index

            return dIndex
        },

        pushObject:function (newAppointmentObject,dName,dCategory){
            doctorAppointmentsGetter(findDoctor(dName,dCategory)).push(newAppointmentObject)
        },

        // this function returns the total number of pations from one doctor
        totalAppointments:function (dName,dCategory){
            let index =1
            for (index in doctorAppointmentsGetter(findDoctor(dName,dCategory)))
            ++index

            return index
        },

        // This function returns the total number of male pations in a specific doctor appointments
        malePations:function (dName,dCategory){
            let malePationsCounter=0
            for (index in doctorAppointmentsGetter(findDoctor(dName,dCategory)))
            if (doctorAppointmentsGetter(findDoctor(dName,dCategory))[index].pGender === 'Male')
            malePationsCounter++
            
            return malePationsCounter
        },

        // This function returns the total number of female pations in a specific doctor appointments
        femalePations:function (dName,dCategory){
            let malePationsCounter=0
            for (index in doctorAppointmentsGetter(findDoctor(dName,dCategory)))
            if (doctorAppointmentsGetter(findDoctor(dName,dCategory))[index].pGender === 'Female')
            malePationsCounter++
            
            return malePationsCounter
        },

        // this function returns the overAll total number of pations
        allTotalAppointments:function (){
            let totalAppointmentsCounter = 0
            for (index in doctorsGetter())
            for (index2 in doctorAppointmentsGetter(index))
            ++totalAppointmentsCounter
            
            return totalAppointmentsCounter
        }

    }
};