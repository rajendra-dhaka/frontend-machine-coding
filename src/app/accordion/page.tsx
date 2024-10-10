import { Accordion, AccordionItem } from "@/components";
import React from "react";

const Page = () => {
  return (
    <main>
      <section>
        <h2>Why work with Us?</h2>
        <Accordion className="list-none border-2 border-neutral-600 rounded-lg flex flex-col gap-4">
          <AccordionItem
            className="flex flex-col gap-2 "
            title={"Why Rajaji sweets"}
          >
            <article>
              <p>This is the most trusted brand in the city</p>
              <p>
                Rajaji is not famous in sikar , but sikar is famous due to
                Rajaji
              </p>
            </article>
          </AccordionItem>
          <AccordionItem
            className="flex flex-col gap-2 "
            title={"What is Special in Rajaji sweets"}
          >
            <article>
              <p>The speciality is that its made by Bengali Karigars</p>
              <p>
                Bengali karigars hijacked from Bangladesh are brought to sikar
                to add their khun pasina to seeets and make them tatstyu
              </p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Page;
