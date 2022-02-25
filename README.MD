# Database document format

## Database Model

```javascript
{
summary: String,
info: {
  submitter_name: String,
  date_reported: String,
  open: Boolean,
},
where: {
  platform: String,
  o_s: String,
  browser: String,
},
problem: {
  expected_result: String,
  actual_result: String,
  steps_to_reproduce: String,
},
action: {
  severity: String,
  assigned_to: String,
  priority: String,
  actions_taken: String,
}
}
```

## Example

```javascript
{
"summary": "This a summary string",
"info": {
  "submitter_name": "Philip Bailey",
  "date_reported": "Jan 1",
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
  "severity": "Bad",
  "assigned_to": "Jason Stone",
  "priority": "High",
  "actions_taken": "Every thing we can think of"
}
}
```
