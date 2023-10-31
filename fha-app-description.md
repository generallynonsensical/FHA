# App Description for Formal Hazard Assessment Web App (<https://github.com/generallynonsensical/next-fha.git>>)

## Libraries

- Next.js (Frontend)
- Node.js (Backend)
- SQLite3 (Database)
- Tailwind.css (Styling)

## User Input Section (Accordion Buttons)

Located on the left side of the page. Only the General Information accordion is open on page load. The others open based on user input/clicks. The three remaining accordions remain closed. Only a single accordion can be open at a time.

User input from all accordions is saved automatically in a yet to be determined database, under the user's login credentials. The user can then change states easily (redo, undo buttons), and open existing documents under their account.

### General Information Accordion

1. Created By (Text Input) - This field captures the name of the person creating the assessment. It corresponds to the HTML element with the ID inputGeneralName.
2. Date (Date Input) - This field captures the date of the assessment. It corresponds to the HTML element with the ID inputDate.
3. Company Name (Text Input) - This field captures the name of the company for which the assessment is being created. It corresponds to the HTML element with the ID inputCompanyName.
4. Position Being Evaluated (Text Input) - This field captures the position that is being evaluated in the assessment. It corresponds to the HTML element with the ID inputPositionEval.
5. Submit Information (Button) - This button submits the general information to the generalinfotable table. It corresponds to the HTML element with the ID generalSubmitButton.

### Task Information

1. Task Name (Text Input) - This field captures the name of the task being evaluated. It corresponds to the HTML element with the ID inputTask.
2. Submit Task (Button) - This button submits the task information to the evaluationtable table. It corresponds to the HTML element with the ID taskSubmitButton.

### Hazard Information

1. Hazard Name (Text Input) - This field captures the name of the hazard associated with the task. It corresponds to the HTML element with the ID inputHazardName.
2. Hazard Type (Dropdown Select Menu) - This dropdown allows the user to select the type of hazard, either "Health" or "Safety". It corresponds to the HTML element with the ID inputHazardType.
3. Likelihood of Occurrence (User Selectable Numbers 1-5) - This field allows the user to select the likelihood of the hazard occurring. It corresponds to the HTML element with the ID preInputLikelihood.
4. Exposure to Hazard (User Selectable Numbers 1-5) - This field allows the user to select the level of exposure to the hazard. It corresponds to the HTML element with the ID preInputExposure.
5. Consequence of Exposure to Hazard (User Selectable Numbers 1-5) - This field allows the user to select the consequence of exposure to the hazard. It corresponds to the HTML element with the ID preInputConsequence.
6. Submit Hazard (Button) - This button submits the hazard information to the evaluationtable table. It corresponds to the HTML element with the ID hazardSubmitButton.

### Control Information

1. Control Name (Text Input):
   - This field captures the name of the control measure for the hazard. It corresponds to the HTML element with the ID inputControlName.

2. Control Type (Dropdown Select Menu):
   - This dropdown allows the user to select the type of control, with options like "Elimination," "Substitution," "Engineering," "Administrative," and "PPE." It corresponds to the HTML element with the ID inputControlType.

3. Likelihood of Occurrence (User Selectable Numbers 1-5):
   - This field allows the user to select the likelihood of the hazard occurring after control measures are in place. It corresponds to the HTML element with the ID postInputLikelihood.

4. Exposure to Hazard (User Selectable Numbers 1-5):
   - This field allows the user to select the level of exposure to the hazard after control measures are in place. It corresponds to the HTML element with the ID postInputExposure.

5. Consequence of Exposure to Hazard (User Selectable Numbers 1-5):
   - This field allows the user to select the consequence of exposure to the hazard after control measures are in place. It corresponds to the HTML element with the ID postInputConsequence.

6. Buttons:
   - Submit Control (Button): This button submits the control information to the evaluationtable table. It corresponds to the HTML element with the ID controlSubmitButton.
   - Rate New Hazard (Button): This button allows the user to input a new hazard. It corresponds to the HTML element with the ID newHazardButton.
   - Rate New Task (Button): This button allows the user to input a new task. It corresponds to the HTML element with the ID newTaskButton.

## Output Tables (Right Side of Page)

### Table 1: General Table

Static Headers:

- A) Company Name: (companyNameValue)
- B) Created By: (createdByValue)
- C) Date Created: (dateValue)
- D) Position Being Evaluated: (positionValue)

### Table 2: Evaluation Table

Static Headers:

- A) Task:
- B) Hazard ID
- C) Hazard Name
- D) Hazard Type
- E) L (1 - 5)
- F) E (1 – 5)
- G) C (1 – 5)
- H) Pre-control Risk Rating
- I) Control Name
- J) Control Type
- K) L (1 - 5)
- L) E (1 – 5)
- M) C (1 – 5)
- N) (Post-control Risk Rating

*note: A new td row under the headers is generated by the taskSubmitButton click.
**note: The information in the table can be generated as a pdf for the user to save locally.

## Global Logic

- The collapsible general-button accordion is open on page load. The collapsible task-button, collapsible hazard-button, and collapsible control-button accordions are closed.
- Only one accordion can be open at a time.
- When the General Information is confirmed and submitted via generalSubmitButton, the collapsible general-button accordion closes and the collapsible task-button accordion opens.
- When the Task information is confirmed and submitted via taskSubmitButton, the collapsible task-button accordion closes and the collapsible hazard-button accordion opens.
- When the Hazard information is confirmed and submitted via hazardSubmitButton, the collapsible hazard-button accordion closes and the collapsible control-button accordion opens.
- Each time a user submits data, a modal will appear to display the entered information and ask the user to confirm the information is correct.
  The modal provides the user has two options:
  - Confirm:
    - If selected, the data is submitted to its section of the output tables, and the logic continues.
  - Go Back:
    - If selected, the user goes back to the previous screen where they can edit the information they have entered.
- All fields are required in each accordion button, and a message in small red text with the note "* required" will appear near any missed fields.

## Logic For General Information

- General information is submitted once via the generalSubmitButton and populates the corresponding fields in the "General Information Output" section. The fields that get populated are companyNameValue, createdByValue, dateValue, and positionValue.

## Logic for Task Information

- Task information is submitted by the user via the taskSubmitButton and populates the "Task" column (col-0) in the evaluationTable.
- Multiple Hazards can be added for each Task the user inputs.
- When multiple hazards are added, a new row is created in the table. Data cells in col-0 are merged to create a single cell containing the Task Name. This continues for each hazard added.

## Logic for Hazard Information

- Hazard information is submitted by the user via the hazardSubmitButton and populates the corresponding cells in the Hazard section of evaluationTable (cells in col-1, col-2, col-3, col-4, and col-5).
- Hazard ID, in col-1, is calculated by combining the first letter of the hazard type (Health or Safety) with a counter that starts at 001.
- The risk rating cells (col-4 and col-7) display the sum of user input values in the Likelihood, Exposure, and Consequence.
- The risk rating cells will have a background that is determined by the value of the number in the cell.
- Multiple controls can be listed for each hazard the user inputs.
- When multiple controls are added, a new row is created in the table. Data cells in columns col-0, col-1, col-2, col-3, col-4, and col-5 merge down. Cells col-6, col-7, and col-8 contain the control information.

## Logic for Control Information

- Control information is submitted by the user via the controlSubmitButton and populates the corresponding cells in the control section of evaluationTable (Cells col-6, col-7, and col-8).
- The user has three options they can choose:
  1. Submit Control by clicking the controlSubmitButton.
  2. Rate a New Hazard button (newHazardButton) can be clicked if the user is finished adding controls to the current hazard.
  3. Evaluate a New Task button (newTaskButton) can be clicked if the user is finished adding hazards and controls to the current task.

## Logic for Undo and Redo Buttons

- Undo button allows the user to undo the last action, up until the start of their session.
- Redo button allows the user to redo any action undone by the undo button.
- A modal will pop up each time a user clicks either of the button, to confirm their choice.
