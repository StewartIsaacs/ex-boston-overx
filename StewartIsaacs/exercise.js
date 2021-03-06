var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){
    var data = exercise.salaries;
    var dataLength = data.length;
    var filteredSalaries = [];
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
    for (var i = 0; i < dataLength; i++) {
        var currentSal = data[i][18];
        if (exercise.largerSalary(currentSal)){
            // Push the current salary into the list if it's bigger
            filteredSalaries.push(currentSal);
        }
    }
    return filteredSalaries;
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

    if (item > exercise.salary ){
        return true; 
    } else{
        return false;
    }

};