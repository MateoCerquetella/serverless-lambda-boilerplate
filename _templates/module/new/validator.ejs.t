---
to: src/api/<%= h.inflection.dasherize(h.inflection.singularize(name)) %>/validator.ts
---
import { z } from 'zod';

export const idSchema = z.object({
    id: z.string().uuid(),
});

// Add more validators as needed...
