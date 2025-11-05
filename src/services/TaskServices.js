export const saveTask = async (URL, authToken, subject, priority) => {
  console.log('autToken in TasksServices', authToken );
  req.subject = subject;
  if (priority === "urgent") {
    req.is_urgent = true;
  }
  var reqString = JSON.stringify(req);
  const res = await fetch(URL +"v1/workflow/tasks", {
    method: "POST",
    body: reqString,
    headers: {
      Authorization: "vision_connection token=" + authToken,
      "Content-Type": "application/json",
    },
  }).catch(console.log);

  const data = await res.json();
  if (window.chrome.webview != null) {
    var msgObject = {
      FORM: "TASK",
      ACTION: "SAVED",
    };
    var json = JSON.stringify(msgObject);
    window.chrome.webview.postMessage(json);
    //window.chrome.webview.postMessage("message from web DCB");
    window.chrome.webview.addEventListener("message", (event) => {
      if (event.data === "message") {
        // process message
      }
    });
  }
  //handleAddTask( data );
  return data;
};

export const fetchTasks = async (URL, authToken) => {
  console.log('fetchTasks token', authToken);
  const res = await fetch(URL + "v1/workflow/tasks?recipient=105&state=NEW", {
    method: "GET",
    headers: {
      Authorization: "vision_connection token=" + authToken,
      "Content-Type": "application/json",
      "X-Business-TransactionId": "123123",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).catch(console.log);

  const response = await res;
  if (response == null) {
    return { tasks: "none" };
  } else {
    // console.log("Task Services Got data");
    const data = await response.json();
    return data;
  }
};

var req = {
  attachments: [],
  out_of_office_recipients: [],
  is_sensitive: false,
  is_escalated: false,
  category: "",
  CategoryColour: "#00FFFFFF",
  comments: [],
  description: "This is hard coded task from TT",
  UnassignedTaskCardCategoryPosition: false,
  is_all_recipients_must_complete: false,
  ShowCategory: false,
  HasComments: false,
  ShowAttachmentsIcon: true,
  external_recipient_nacs: "",
  due_date: "2020-01-08T23:59:00",
  task_instances: [],
  recipient_list: {
    expanded_recipients: [],
    recipients: [105],
  },
  all_users: false,
  issuer_list: {
    expanded_issuers: [105],
    issuers: [105],
  },
  write_v3: false,
  start_date: "2020-01-08T10:10:00",
  subject: "Save button to create task",
  is_urgent: false,
  is_calculated_urgent: false,
  is_sensitive_to_user: false,
};
