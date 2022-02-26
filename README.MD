# Database document format

## Database Model

```javascript
{
summary: {
  type: String,
  required: true,
},
info: {
  submitter_name: String,
  date_reported: {
    type:Date,
    validate:{
      validator:function(value){
        return /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d.test(value)
      },
      message:props => ` ${props.value} Date must be mm/dd/yyyy`
    }
    },
  open: Boolean, //Bug report open or closed
},
where: {
  platform: {
    type: String,
    enum: ["Windows", "Apple", "Linix"],
},
  o_s: String, //Operating system
  browser: {
    type: String,
    enum: ["Chrome", "Edge", "Safari", "Other"],
  },
},
problem: {
  expected_result: String,
  actual_result: String,
  steps_to_reproduce: String,
},
action: {
  severity: {
    type: String,
    enum: ["Low", "Minor", "Major", "Critical", "Blocker"],
  },
  assigned_to: String,
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  actions_taken: String,
},
}
```

## Example

```javascript
{
"summary": "This a summary string",
"info": {
  "submitter_name": "Philip Bailey",
  "date_reported": "10/30/2021",
  "open": true
},
"where": {
  "platform": "Apple",
  "o_s": "MacOS",
  "browser": "Safari"
},
"problem": {
  "expected_result": "Operates normally",
  "actual_result": "Crashes",
  "steps_to_reproduce": "Run program"
},
"action": {
  "severity": "Critical",
  "assigned_to": "Jason Stone",
  "priority": "High",
  "actions_taken": "Every thing we can think of"
}
}
```
