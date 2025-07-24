import React from "react";
import { Controller } from "react-hook-form";

const FromField = () => (
<Controller name={name} control
            <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                    This is your public display name.
                </FormDescription>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default FromField;
