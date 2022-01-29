#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import {createSpinner} from 'nanospinner';
import chalkAnimation from 'chalk-Animation'

let playerName;

const sleep = (ms = 2000) => new Promise((r)=> setTimeout(r,ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(
      'Hello idiots, welcome to this amazing arcade \n'
    );

    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect){
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({text: `Nice work ${playerName}. That's a legit answer`})
  }else{
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);

  }
}

async function askName(){
  const answers = await inquirer.prompt({
    name:"player_name",
    type:"input",
    message:"What the heck is ur name",
    default(){
      return 'idiot'
    }  })

    console.log(answers.player_name);

}

async function winner(){
  console.clear();
  figlet(`Congrats, ${playerName} !\n $ 1, 0 0 0, 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
        chalk.green(
          `Programming isn't about what you know; it's about making the command line look cool`
        )
    );
    process.exit(0);
  })
}

async function question1(){
  const answers = await inquirer.prompt({
    name:"question_1",
    type:"list",
    message:"how many member in bts",
    choices:['one','two','none','who the fuck is bts'],
  });
    // console.log(answers.player_name);
    return handleAnswer(answers.question_1 === 'who the fuck is bts')
}
async function question2(){
  const answers = await inquirer.prompt({
    name:"question_1",
    type:"list",
    message:"how many member in bts",
    choices:['one','two','none','who the fuck is bts'],
  });
    // console.log(answers.player_name);
    return handleAnswer(answers.question_1 === 'who the fuck is bts')
}
async function question3(){
  const answers = await inquirer.prompt({
    name:"question_1",
    type:"list",
    message:"how many member in bts",
    choices:['one','two','none','who the fuck is bts'],
  });
    // console.log(answers.player_name);
    return handleAnswer(answers.question_1 === 'who the fuck is bts')
}
async function question4(){
  const answers = await inquirer.prompt({
    name:"question_1",
    type:"list",
    message:"how many member in bts",
    choices:['one','two','none','who the fuck is bts'],
  });
    // console.log(answers.player_name);
    return handleAnswer(answers.question_1 === 'who the fuck is bts')
}

await welcome();
await askName();
await question1();
// await question2();
// await question3();
// await question4();
winner();
