<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import AppSidebar from "@/components/AppSidebar.vue";
import AppHeader from "@/components/AppHeader.vue";
import PolicyPromo from "@/components/policy/PolicyPromo.vue";
import AppFooter from "@/components/AppFooter.vue";

const navItems = [
  { label: "Акceptacja warunków", id: "acceptance" },
  { label: "Licencja Użytkowania", id: "use-license" },
  { label: "Zastrzeżenie", id: "disclaimer" },
  { label: "Ograniczenia", id: "limitations" },
  { label: "Dokładność Materiałów", id: "accuracy" },
  { label: "Linki", id: "links" },
  { label: "Modyfikacje", id: "modifications" },
  { label: "Prawo Właściwe", id: "governing-law" },
  { label: "Dane Kontaktowe", id: "contact" },
];

const activeId = ref(navItems[0].id);

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", " ");
}

let observer;

onMounted(() => {
  const sections = navItems
    .map(({ id }) => document.getElementById(id))
    .filter(Boolean);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeId.value = entry.target.id;
      });
    },
    {
      root: null,
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach((s) => observer.observe(s));

  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    setTimeout(() => scrollToId(id), 0);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>


<template>
  <div class="min-h-screen flex">
    <AppSidebar />
    <AppHeader />

      <div class="flex-1 flex flex-col" style="padding-left: 256px;">
        <main class="flex-grow">
          <!-- Promo section -->
          <PolicyPromo
            title="Terms of Use"
            subtitle="Zanim wyruszysz w swoją podróż Stars & Summits, prosimy o dokładne zapoznanie się z tymi warunkami."
          />

          <section class="container mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-950">
            <div class="flex flex-col lg:flex-row gap-8">
              <div class="lg:w-1/4">
                <div class="rounded-lg border bg-card text-card-foreground sticky top-24 p-5 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h3 class="font-semibold text-lg mb-4" style="color: var(--theme-primary);">Na Tej Stronie</h3>
                  <nav class="flex flex-col space-y-2">
                    <button
                      v-for="item in navItems"
                      :key="item.id"
                      type="button"
                      @click="scrollToId(item.id)"
                      class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none h-10 px-4 py-2 justify-start text-left border border-transparent"
                      :class="activeId === item.id
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'"
                    >
                      {{ item.label }}
                    </button>
                  </nav>
                </div>
              </div>
              <div class="lg:w-3/4">
                <div class="rounded-lg border bg-card text-card-foreground p-6 md:p-8 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div class="prose prose-lg max-w-none dark:prose-invert">
                    <section id="acceptance">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Akceptacja warunków</h2>
                      <p class="dark:text-gray-300">Podejmując się eksploracji Stars &amp; Summits i korzystając z tej witryny, zgadzasz się przestrzegać niniejszych warunków. Jeśli nie akceptujesz tych postanowień, prosimy o powstrzymanie się od korzystania z naszej usługi.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="use-license">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Licencja Użytkowania</h2>
                      <p class="dark:text-gray-300">At Stars &amp; Summits, you’re welcome to download one temporary copy of our site’s materials for personal, non-commercial, transient viewing only. This grants you a license—not a transfer of ownership—and under this license you may not:</p>
                      <ul class="list-disc pl-6 my-4 space-y-2">
                        <li class="dark:text-gray-300">dostosować lub powielić materiały</li>
                        <li class="dark:text-gray-300">utilize the content for any revenue-driven objective or publicly showcase it, whether in a commercial or noncommercial context.</li>
                        <li class="dark:text-gray-300">dążyć do dezasemblacji lub inżynierii odwrotnej jakichkolwiek aplikacji hostowanych na tej stronie</li>
                        <li class="dark:text-gray-300">Eliminate any copyright or other proprietary markings from the materials.</li>
                      </ul>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="disclaimer">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Zastrzeżenie</h2>
                      <p class="dark:text-gray-300">The information and resources on starsandsummits.com are presented “as is.” We make no express or implied guarantees and expressly disavow all other assurances, including, without limitation, any implied warranties of merchantability, suitability for a particular purpose, non-infringement of intellectual property, or any other rights violations.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="limitations">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Ograniczenia</h2>
                      <p class="dark:text-gray-300">Under no circumstances will we or our suppliers be liable for any damages—including, but not limited to, data loss, lost profits, or business interruptions—that result from your use of, or inability to access, the content on starsandsummits.com, even if we or a duly authorized representative have been notified orally or in writing of the potential for such harm.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="accuracy">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Dokładność Materiałów</h2>
                      <p class="dark:text-gray-300">Choć dążymy do dostarczania inspirujących treści na Stars &amp; Summits, niektóre strony mogą wciąż zawierać usterki techniczne, literówki lub niedoskonałości grafik. Nie możemy zagwarantować, że każdy szczegół jest w pełni dokładny, kompletny lub aktualny. Cała zawartość i elementy wizualne serwisu mogą zostać zmienione, poprawione lub usunięte w dowolnym momencie bez uprzedniego powiadomienia.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="links">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Linki</h2>
                      <p class="dark:text-gray-300">StarsAndSummits.com hasn’t fully vetted every external website we link to, so we can’t be held accountable for their content. Including any link doesn’t constitute our endorsement. You explore or use these third-party sites entirely at your own risk.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="modifications">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Modyfikacje</h2>
                      <p class="dark:text-gray-300">Stars &amp; Summits reserves the right to update these terms of service at any time and without prior notice. By continuing to explore our site, you agree to abide by the most current version of these terms.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="governing-law">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Prawo Właściwe</h2>
                      <p class="dark:text-gray-300">These terms and conditions will be governed by United States law and interpreted accordingly, and you irrevocably accept the exclusive jurisdiction of the courts in the designated state or locale.</p>
                    </section>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-8 dark:bg-gray-600"></div>
                    <section id="contact">
                      <h2 class="text-2xl font-semibold mb-4" style="color: var(--theme-primary);">Dane Kontaktowe</h2>
                      <p class="dark:text-gray-300">Have questions about these Terms of Use? Reach out to us at starsandsummits.com:</p>
                      <ul class="list-none pl-0 my-4 space-y-2">
                        <li class="dark:text-gray-300">By email: <a href="mailto:legal@starsandsummits.com" class="hover:underline" style="color: var(--theme-primary);">legal@starsandsummits.com</a></li>
                        <li class="dark:text-gray-300">By visiting our <a class="hover:underline" href="/pl-PL/contact" data-discover="true" style="color: var(--theme-primary);">contact page</a></li>
                      </ul>
                    </section>
                  </div>
                </div>
                <div class="flex justify-center mt-8">
                  <button @click="scrollToTop" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-4 w-4 mr-1" aria-hidden="true">
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                    Powrót do Góry
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <AppFooter />
      </div>
  </div>
</template>
