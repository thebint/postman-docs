---
title: "Building your first flow"
updated: 2023-07-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Send a Request | Postman Flows"
    url: "https://youtu.be/QYqA1VAoyIA"
  - type: link
    name: "Edit a Flow | Postman Flows"
    url: "https://youtu.be/BzMAjJ_-XGc"
  - type: link
    name: "Pagination | Postman Flows"
    url: "https://youtu.be/6VLquc7A56Y"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Flows: The Next Generation of Software Development"
    url: "https://blog.postman.com/postman-flows-the-next-generation-of-software-development/"
  - type: link
    name: "Postman Flows Is Now More Powerful and User-Friendly"
    url: "https://blog.postman.com/postman-flows-is-now-more-powerful-and-user-friendly/"
---

Postman Flows is a visual tool for building software for the API-First world. With Postman Flows, anyone can connect their web services' APIs to build workflows, integrations, and API applications in a visual and collaborative development environment.

This page shows you how to create flows with a [quick start tutorial](#quick-start) and a [more detailed tutorial](#creating-a-request-and-a-collection). The quick start tutorial shows you how to create a flow in Postman that checks if a website is down.

The more detailed tutorial starts with [Creating a request and a collection](#creating-a-request-and-a-collection). This tutorial creates a flow that gets a list of Pokémon, one page at a time, until it reaches the last page.

## Contents

<!-- vale Postman.Spelling = NO -->

* [Quick start](#quick-start)
* [Creating a request and a collection](#creating-a-request-and-a-collection)
* [Making your first send request in Postman Flows](#making-your-first-send-request-in-postman-flows)
* [Sending data to the Output block](#sending-data-to-the-output-block)
* [Checking for the next page of results](#checking-for-the-next-page-of-results)
* [Watching it run](#watching-it-run)

<!-- vale Postman.Spelling = YES -->

## Quick start

This quick start tutorial creates a flow to check if a website is down or not. It does this by sending a request to the website and looking for a 200 status code in the response. If the website is up and running, the flow's **Output** block will display **True**. If the website is down, it will display **False**.

1. Go to the [**DevOps Flows**](https://www.postman.com/postman/workspace/devops-flows) workspace and [fork](/docs/collaborating-in-postman/using-version-control/forking-entities/) the [**DownDetector**](https://www.postman.com/postman/workspace/devops-flows/collection/23919558-2ea958e4-8647-4b79-859a-47a2c7608b4d?action=share&creator=23919558) collection to your workspace. Then, in your workspace, select **New &gt; Flows** and [hide the sidebar](/docs/getting-started/navigating-postman/#sidebar).

    ![Fork the collection](https://assets.postman.com/postman-docs/v10/flow-tut-fork-collection-v10-6.gif)

1. Select **Send a request** to create a **Send Request** block.

    ![Create a **Send Request** block and connect it](https://assets.postman.com/postman-docs/v10/flow-tut-add-send-v10-7.gif)

1. In the **Send Request** block, select **Add request &gt; DownDetector &gt; sitemap**. Then connect an **Evaluate** block.

    ![Add an **Evaluate** block](https://assets.postman.com/postman-docs/v10/flow-tut-add-eval-v10-4.gif)

1. In the **Evaluate** block, select `value1` and change it to `status`. Then select **Enter path...**, scroll down, and select **http.status**.

    ![Rename value1 and select `http.status`](https://assets.postman.com/postman-docs/v10/flow-tut-select-status-v10-4.gif)

1. Select **Start writing an FQL query...** and enter `status=200`.

    ![Enter `status=200`](https://assets.postman.com/postman-docs/v10/flow-tut-status-200-v10-4.gif)

1. Connect an **Output** block to the **Evaluate** block and select **Run**. The **Output** block displays **True**, which means the website is up and running.

    ![Add an **Output** block and select **Run**](https://assets.postman.com/postman-docs/v10/flow-tut-output-run-v10-7.gif)

## Creating a request and a collection

This detailed tutorial builds a flow that gets a list of Pokémon, one page at a time, until it reaches the last page. Start by creating a new collection and adding a GET request. You'll use this collection with the flow you'll create later.

1. In your workspace, select **New &gt; Collection**. Name the collection **Pokemon API**.
1. [Add a GET request](/docs/getting-started/sending-the-first-request/) with this URL: `https://pokeapi.co/api/v2/pokemon?limit=200`.

    ![Add a request](https://assets.postman.com/postman-docs/v10/flow-first-request-v10-1.jpg)

1. Select **Send**, then select **Save as Example**.

    > Saving the response as an example enables Postman Flows to automatically detect the structure for easier access later.

1. Select the GET request and replace the URL `https://pokeapi.co/api/v2/pokemon?limit=200` with the variable `{{URL}}`.

    ![Replace the URL](https://assets.postman.com/postman-docs/v10/flow-replace-the-url-v10-2.jpg)

1. Select **Save**.

## Making your first send request in Postman Flows

1. In the sidebar, select **Flows** then select **Create Flow**. Your new flow appears with a **Start** block and two shortcut blocks: **Send a request** and **Add blocks**.

    > You can move the canvas to reposition your flow.

    ![New flow](https://assets.postman.com/postman-docs/v10/flow-start-block-v10-6.gif)

1. (Optional) [Hide the sidebar](/docs/getting-started/navigating-postman/#sidebar) to enlarge the canvas.

1. Select **Send a request**. A **Send Request** block appears.

1. In the **Send Request** block, select **Add request** and select **Pokemon API**. Then select the GET request you created earlier.
    ![Select request](https://assets.postman.com/postman-docs/v10/flow-select-request-v10-4.jpg)

1. Create a **String** block below the **Start** block and enter the URL `https://pokeapi.co/api/v2/pokemon?limit=200`.
1. Connect the **String** block to the input next to **{{URL}}** on the **Send Request** block.

    ![Add a String block](https://assets.postman.com/postman-docs/v10/flow-add-string-block-v10-4.jpg)

## Sending data to the **Output** block

1. Connect a **Select** block to the **Success** output on the **Send Request** block.

    ![Add a Select block](https://assets.postman.com/postman-docs/v10/flow-add-select-v10-4.jpg)

1. In the **Select** block, select **Enter path...** and select `body.results`.

    > Because you saved an example earlier, the returned data's structure auto-populates in the block.

    ![Select body.results](https://assets.postman.com/postman-docs/v10/flow-body-results-v10-6.jpg)

1. Connect an **Output** block to the right side of the **Select** block and select **Table** from its dropdown list.
1. Select **Run** to see the results in the **Output** block.

    ![Add a Log block](https://assets.postman.com/postman-docs/v10/flow-add-output-v10.jpg)

## Checking for the next page of results

1. Connect another **Select** block to the **Send Request** block.

    ![Add another Select block](https://assets.postman.com/postman-docs/v10/flow-add-another-select-v10-4.jpg)

1. In the **Select** block you created, select **Enter path...** and select `body.next` to get the link to the next page of results.

    ![Select `next`](https://assets.postman.com/postman-docs/v10/flow-select-next-v10-3.jpg)

1. Create an **If** block from the `body.next` **Select** block's output. The **Select** block automatically connects to the **If** block's **Data** input. Also connect the **Select** block to the **If** block's **key** input.

    ![Connect the **If** block](https://assets.postman.com/postman-docs/v10/flow-add-if-block-v10-5.gif)

1. In the **If** block, select `value1` and replace it with `has_next`. This assigns the `body.next` value from the **Select** block to the `has_next` variable in the **If** block.

    <img alt="`has_next`" src="https://assets.postman.com/postman-docs/v10/flow-enter-has-next-v10-4.jpg" width="400">

1. Select **Write an FQL condition** and enter <code class="language-text">&#96;has_next&#96; != null</code>.

    > If `has_next` is null, then the flow has reached the last page of results.

1. Connect the **If** block's **TRUE** output to the **Send Request** block's **URL** input. This passes the new `has_next` value to the existing `URL` variable in the **Send Request** block.
1. Also connect the **If** block's **TRUE** ouptut to the **Send Request** block's **Send** input. This triggers the send event so it runs again.

    ![Connect the If block](https://assets.postman.com/postman-docs/v10/flow-connect-if-v10-6.jpg)

## Watching it run

<!-- vale Postman.Vocab = NO -->

After completing the above steps, select **Run**. The flow runs and logs all the Pokémon to the **Output** block.

<!-- vale Postman.Vocab = YES -->

![Watch it run](https://assets.postman.com/postman-docs/v10/flow-watch-it-run-v10-5.gif)
Congratulations, you've created your first flow!
