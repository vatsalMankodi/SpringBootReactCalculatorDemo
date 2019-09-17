package com.db.calculator.CalculatorAPI.controller;

import com.db.calculator.CalculatorAPI.model.CalculationRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calculate")
@CrossOrigin
public class AdditionController {


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Integer> calculate(@RequestBody CalculationRequest calulationRequest){
        Integer answer = null;
        switch (calulationRequest.getOperation()){
            case '+':
                answer = calulationRequest.getFirst()+calulationRequest.getSecond();
                break;
            case '-':
                answer = calulationRequest.getFirst()-calulationRequest.getSecond();
                break;
            case '*':
                answer = calulationRequest.getFirst()*calulationRequest.getSecond();
                break;
            case '/':
                answer = calulationRequest.getFirst()/calulationRequest.getSecond();
                break;
        }
        return new ResponseEntity<Integer>(answer, HttpStatus.OK);
    }
}
