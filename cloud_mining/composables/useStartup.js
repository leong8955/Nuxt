export const useStartup = () => {
  const request = async () => {
    /**
     * ! Run in client only
     */
    const layout = useLayoutStore();

    /**
     *? Request from backend to determine what template to use
     */
    let data = {
      domain_name: host().value,
    };

    try {
      const result = await $fetch("/api/startup", {
        method: "POST",
        body: data,
      });

      if (result.statusCode == 1) {
        layout.maintenance = result.maintenance;
        layout.content = result.content;
        layout.site = result.site;
        layout.site.theme_code = result.site.theme_code;
        layout.site.theme_color = result.site.theme_color;
        layout.language = result.language;
        layout.provider_count = result.provider_count;

        const templates = Object.keys(preference.template);
        
        if (templates.includes(layout.site.theme_code)) {
          const colors = preference.colors[layout.site.theme_code];
          if (colors.includes(layout.site.theme_color)) {
            layout.template = preference.template[layout.site.theme_code];
            switch (layout.template) {
              case preference.template[""]:
                useHead({
                  bodyAttrs: {
                    id: "body_id",
                    class: "body_main_wrap " + layout.site.theme_color,
                  },
                });
                break;
              default:
                useHead({
                  bodyAttrs: { class: layout.site.theme_color },
                });
                break;
            }
            layout.message = null;
          } else {
            layout.reset();
            layout.message = "Invalid theme color";
          }
        } else {
          layout.reset();
          layout.message = "Invalid theme code";
        }
      } else {
        layout.reset();
        layout.message = null;
      }

      return result;
    } catch (error) {
      return {
        statusCode: -500,
        statusMessage: "internalServerError",
        statusDetails: error.message,
        maintenance: {
          is_maintenance: false,
          start_date: null,
          end_date: null,
        },
      };
    }
  };

  return {
    request,
  };
};
